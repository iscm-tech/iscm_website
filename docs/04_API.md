# API Integration Documentation

## Overview

This document describes how the frontend integrates with APIs. It does not document backend controllers, backend business logic, database tables, or database collections.

The backend API is external to this repository. Endpoint paths, request bodies, and response types below are based on the current frontend service modules and TypeScript/Zod types.

## API Ownership

| Area                                | Status in this repository                             |
| ----------------------------------- | ----------------------------------------------------- |
| External API consumption            | Included in `src/services/`                           |
| Shared fetch wrapper                | Included in `src/lib/http.ts`                         |
| Frontend response typing/validation | Included in `src/schemaValidations/`                  |
| Local NextAuth route handler        | Included in `src/app/api/auth/[...nextauth]/route.ts` |
| Backend API implementation          | External responsibility                               |
| Database implementation             | External responsibility                               |

## API Configuration

Runtime API configuration is validated in:

- `src/config.ts`

The API base endpoint is read from:

- `NEXT_PUBLIC_API_ENDPOINT`

The shared HTTP client combines this base endpoint with relative paths passed by service modules.

## HTTP Client

HTTP behavior is implemented in:

- `src/lib/http.ts`

The exported `http` client supports:

- `http.get<ResponseType>(url, options)`
- `http.post<ResponseType>(url, body, options)`
- `http.put<ResponseType>(url, body, options)`
- `http.delete<ResponseType>(url, options)`

### Options Parameter

The options parameter extends `RequestInit` and adds:

| Option    | Description                                                |
| --------- | ---------------------------------------------------------- |
| `baseUrl` | Optional override for the default `envConfig.API_ENDPOINT` |
| `headers` | Optional custom request headers                            |
| `signal`  | Optional `AbortSignal`                                     |
| `cache`   | Optional request cache behavior                            |

`credentials` should not be documented as configurable here because the wrapper forces:

```ts
credentials: "omit";
```

### Base URL Resolution

If `options.baseUrl` is not provided, the HTTP client uses:

```ts
envConfig.API_ENDPOINT;
```

URL behavior:

- URLs starting with `http` are used as absolute URLs.
- URLs starting with `/` are appended directly to the base URL.
- Other relative URLs are joined with the base URL using `/`.

### Request Body Handling

- `FormData` bodies are sent as-is.
- Non-`FormData` bodies are serialized with `JSON.stringify`.
- JSON requests receive `Content-Type: application/json`.
- `http.delete` sends a `"{}"` body through the wrapper implementation.

### Authentication Header

On the client side, `src/lib/http.ts` reads the `sessionToken` cookie and sends it as:

```txt
authorization: <sessionToken>
```

This is frontend behavior only. Backend authorization rules are external to this repository.

### Response Wrapper

Successful responses are returned by the frontend wrapper as:

```ts
{
  status: number;
  payload: ResponseType;
}
```

The `payload` shape depends on the response type used by each service call.

### Error Handling

`src/lib/http.ts` defines:

- `HttpError` for non-OK responses.
- `EntityError` for HTTP `422` responses.

`EntityError` expects:

```ts
{
  message: string;
  errors: {
    field: string;
    message: string;
  }
  [];
}
```

## Local Next.js API Route

This repository includes one confirmed local Next.js API route:

| Method         | Route                     | File                                      | Purpose                   |
| -------------- | ------------------------- | ----------------------------------------- | ------------------------- |
| `GET` / `POST` | `/api/auth/[...nextauth]` | `src/app/api/auth/[...nextauth]/route.ts` | Handles NextAuth requests |

The route delegates to:

- `src/lib/nextAuthOpts.ts`

During Google sign-in, the frontend auth flow calls the external backend login endpoint through `authServices.login`.

## Current Service Modules

Frontend API calls are grouped in `src/services/`.

| Service file             | Responsibility                                                              |
| ------------------------ | --------------------------------------------------------------------------- |
| `auth.service.ts`        | Login and session-token validation calls                                    |
| `competition.service.ts` | Fetch competition lists and details                                         |
| `course.service.ts`      | Fetch graduate and non-degree course data                                   |
| `member.service.ts`      | Fetch and update people data                                                |
| `post.service.ts`        | Fetch, search, create, update, delete, accept, and reject post-like content |
| `recruitment.service.ts` | Fetch recruitment posts and details                                         |
| `research.service.ts`    | Fetch research publications and books                                       |
| `studiolab.service.ts`   | Fetch studiolab project lists and details                                   |
| `uploadImage.service.ts` | Upload image files                                                          |

## Service Keys and UI Labels

Service keys are the values sent to the external backend API. UI labels are route/page labels shown to users and may differ from service keys.

Current post service keys:

- `news`
- `student_life`
- `open-admission`
- `events`
- `evolving-research`

Known UI labels or page concepts may include names such as `iscm_life` or `expert insight`. These should be documented as UI aliases only, not as service/database keys unless source code confirms they are sent to the backend.

## Endpoint Groups Used by Frontend

### Auth

Source:

- `src/services/auth.service.ts`

| Method | Path                              | Body            | Frontend response type                                |
| ------ | --------------------------------- | --------------- | ----------------------------------------------------- |
| `POST` | `api/users/login`                 | `LoginBodyType` | `LoginResType`                                        |
| `POST` | `api/users/checked-valid-session` | `{}`            | `{ message: string; token: string; expires: string }` |

### Posts and Portal Content

Source:

- `src/services/post.service.ts`

| Method   | Path pattern                                    | Body                                          | Frontend response type                     |
| -------- | ----------------------------------------------- | --------------------------------------------- | ------------------------------------------ |
| `GET`    | `/api/{category}?lang={lang}&page={page}`       | None                                          | `PostListResType<T>`                       |
| `GET`    | `/api/{category}/{id}?lang={lang}`              | None                                          | `PostResType` or generic `T`               |
| `GET`    | `/api/utils/search?q={query}&lang={lang}`       | None                                          | `SearchPostResType`                        |
| `GET`    | `api/open-admission/latest-posts?lang={lang}`   | None                                          | `PostListResType<LatestAdmissionCardType>` |
| `GET`    | `api/events/latest-posts?lang={lang}`           | None                                          | `PostListResType<EventCardType>`           |
| `GET`    | `api/utils/latest-posts?lang={lang}`            | None                                          | `LatestPostListResType`                    |
| `GET`    | `api/utils/latest-portal?lang={lang}`           | None                                          | `PostListResType<LatestAdmissionCardType>` |
| `GET`    | `api/{category}/latest-posts?lang={lang}`       | None                                          | `LatestPostListResType`                    |
| `POST`   | `/api/{category}/{id}?lang={lang}`              | `CreatePostBodyType` or `CreateEventBodyType` | `CreateUpdateResType`                      |
| `POST`   | `api/portal/create-portal`                      | `CreatePortalPostBodyType`                    | `CreateUpdatePortalResType`                |
| `PUT`    | `/api/{category}/{id}?lang={lang}`              | `UpdatePostBodyType`                          | `CreateUpdateResType`                      |
| `DELETE` | `/api/{category}/{id}?lang={lang}`              | Wrapper sends `"{}"`                          | `{ message: string; data: PostCardType }`  |
| `GET`    | `api/portal?lang={lang}`                        | None                                          | `AllPendingPostResType`                    |
| `GET`    | `api/portal/{id}`                               | None                                          | `PendingPostResType`                       |
| `PUT`    | `api/portal/accept/{category}/{id}?lang={lang}` | `{}`                                          | Untyped/generic response in service        |
| `DELETE` | `api/portal/reject/{id}?lang={lang}`            | Wrapper sends `"{}"`                          | Untyped/generic response in service        |

### People and Members

Source:

- `src/services/member.service.ts`

Service category keys:

- `members`
- `advisory`
- `intern`
- `network`

| Method | Path pattern                                    | Body                   | Frontend response type |
| ------ | ----------------------------------------------- | ---------------------- | ---------------------- |
| `GET`  | `api/people/{category}?lang={lang}&type={type}` | None                   | `MemberListResType`    |
| `GET`  | `api/people/{category}/{id}?lang={lang}`        | None                   | `MemberResType`        |
| `PUT`  | `/api/people/members/{id}?lang={lang}`          | `UpdateMemberBodyType` | `CreateUpdateResType`  |

### Education and Courses

Source:

- `src/services/course.service.ts`

Service directory keys:

- `course_graduate`
- `non-degree`

| Method | Path pattern                                             | Body          | Frontend response type       |
| ------ | -------------------------------------------------------- | ------------- | ---------------------------- |
| `GET`  | `/api/education/{dirName}?lang={lang}`                   | None          | `CourseListResType`          |
| `GET`  | `/api/education/{dirName}/{id}?lang={lang}`              | None          | `CourseResType`              |
| `GET`  | `/api/education/non-degree?lang={lang}`                  | None          | `NondegreeCourseListResType` |
| `GET`  | `/api/education/non-degree/search?lang={lang}&{filters}` | Query filters | `NondegreeCourseListResType` |
| `GET`  | `/api/education/non-degree/{slug}?lang={lang}`           | None          | `NondegreeCourseResType`     |

### Competitions

Source:

- `src/services/competition.service.ts`

| Method | Path pattern                              | Body | Frontend response type   |
| ------ | ----------------------------------------- | ---- | ------------------------ |
| `GET`  | `api/competition?lang={lang}&page={page}` | None | `CompetitionListResType` |
| `GET`  | `api/competition/{slug}?lang={lang}`      | None | `CompetitionResType`     |

### Recruitment

Source:

- `src/services/recruitment.service.ts`

| Method | Path pattern                          | Body | Frontend response type   |
| ------ | ------------------------------------- | ---- | ------------------------ |
| `GET`  | `/api/recruitment?lang={lang}`        | None | `RecruitmentListResType` |
| `GET`  | `/api/recruitment/{slug}?lang={lang}` | None | `RecruitmentResType`     |

### Research

Source:

- `src/services/research.service.ts`

| Method | Path pattern                            | Body | Frontend response type |
| ------ | --------------------------------------- | ---- | ---------------------- |
| `GET`  | `api/research/publications?lang={lang}` | None | `PublicationResType`   |
| `GET`  | `api/research/books?lang={lang}`        | None | `BookResType`          |

### Studiolab

Source:

- `src/services/studiolab.service.ts`

Service category keys:

- `collaboration_studio`
- `iscm_studio`

| Method | Path pattern                                                 | Body | Frontend response type              |
| ------ | ------------------------------------------------------------ | ---- | ----------------------------------- |
| `GET`  | `api/studiolab/collaboration_studio?lang={lang}&page={page}` | None | `CollaborationStudioListResType`    |
| `GET`  | `api/studiolab/collaboration_studio/{id}?lang={lang}`        | None | `CollaborationStudioProjectResType` |
| `GET`  | `api/studiolab/iscm_studio?lang={lang}&page={page}`          | None | `CollaborationStudioListResType`    |
| `GET`  | `api/studiolab/iscm_studio/{id}?lang={lang}`                 | None | `CollaborationStudioProjectResType` |

### Uploads

Source:

- `src/services/uploadImage.service.ts`

| Method | Path pattern                      | Body                                       | Frontend response type              |
| ------ | --------------------------------- | ------------------------------------------ | ----------------------------------- |
| `POST` | `/api/upload/{category}/{idPost}` | `FormData` with one or more `files` fields | `{ message: string; path: string }` |

## Response Types and Schemas

Frontend response and body types are imported from `src/schemaValidations/`.

Schema files that exist:

- `account.schema.ts`
- `auth.schema.ts`
- `competition.schema.ts`
- `course.schema.ts`
- `member.schema.ts`
- `pageHeader.schema.ts`
- `post.schema.ts`
- `research.schema.ts`
- `studiolab.schema.ts`

These files help type frontend API usage, but they are not database schemas and do not prove the complete backend API contract.

## Maintenance Notes

- Update this document when files in `src/services/` change.
- Do not document backend-only behavior unless confirmed from backend source or official backend API docs.
- Do not invent local Next.js API routes. The only confirmed local route in this repo is the NextAuth route.
- Keep backend and database implementation details in backend documentation.
