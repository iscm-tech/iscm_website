import http from "@/lib/http";
import {
  AllPendingPostResType,
  CreateEventBodyType,
  CreatePortalPostBodyType,
  CreatePostBodyType,
  CreateUpdatePortalResType,
  CreateUpdateResType,
  EventCardType,
  LatestAdmissionCardType,
  LatestPostListResType,
  PendingPostResType,
  PostCardType,
  PostListResType,
  PostResType,
  SearchPostResType,
  UpdatePostBodyType,
} from "@/schemaValidations/post.schema";

const getPostServices = {
  getList: <T = PostCardType>(
    dirName:
      | "news"
      | "student_life"
      | "open-admission"
      | "events"
      | "evolving-research",
    page: number | undefined = undefined,
    lang: string,
    options?: { [key: string]: any },
  ) => {
    return http.get<PostListResType<T>>(
      `/api/${dirName}?${lang ? `lang=${lang}` : ""}${
        page ? `&page=${page}` : ""
      }`,
      options,
    );
  },

  getLatestAdmission: (lang: string) =>
    http.get<PostListResType<LatestAdmissionCardType>>(
      `api/open-admission/latest-posts${lang ? "?lang=" + lang : ""}`,
    ),

  getFeatureEvent: (lang: string) =>
    http.get<PostListResType<EventCardType>>(
      `api/events/latest-posts${lang ? "?lang=" + lang : ""}`,
    ),

  getLatestPost: (lang: string, page?: number, limit?: number) =>
    http.get<LatestPostListResType>(
      `api/utils/latest-posts?lang=${lang}${page ? `&page=${page}` : ""}${limit ? `&postPerPage=${limit}` : ""}`,
    ),

  getLatestPortal: (lang: string, page?: number, limit?: number) =>
    http.get<PostListResType<LatestAdmissionCardType>>(
      `api/utils/latest-portal?lang=${lang}${page ? `&page=${page}` : ""}${limit ? `&postPerPage=${limit}` : ""}`,
    ),

  getLatestPostByCategory: (
    lang: string,
    category:
      | "news"
      | "student_life"
      | "open-admission"
      | "events"
      | "evolving-research",
  ) =>
    http.get<LatestPostListResType>(
      `api/${category}/latest-posts${lang ? "?lang=" + lang : ""}`,
    ),

  getPost: <T = PostResType>(
    dirName:
      | "news"
      | "student_life"
      | "open-admission"
      | "events"
      | "evolving-research",
    idPost: string | null,
    lang: string,
    options?: { [key: string]: any },
  ) =>
    http.get<T>(
      `/api/${dirName}${idPost !== null ? `/${idPost}` : ""}${
        lang ? `?lang=${lang}` : ""
      }`,
      options,
    ),
};

const searchPostServices = (
  lang: string,
  searchString: string,
  options?: { [key: string]: any },
) =>
  http.get<SearchPostResType>(
    `/api/utils/search?q=${searchString}${lang ? `&lang=${lang}` : ""}`,
    options,
  );

const createUpdatePostServices = {
  createPost: (
    dirName:
      | "news"
      | "student_life"
      | "open-admission"
      | "events"
      | "evolving-research",
    idPost: string,
    lang: string,
    body: CreatePostBodyType | CreateEventBodyType,
  ) =>
    http.post<CreateUpdateResType>(
      `/api/${dirName}${idPost ? `/${idPost}` : ""}${
        lang ? `?lang=${lang}` : ""
      }`,
      body,
    ),

  createPostPortal: (body: CreatePortalPostBodyType) =>
    http.post<CreateUpdatePortalResType>("api/portal/create-portal", body),

  updatePost: (
    dirName:
      | "news"
      | "student_life"
      | "open-admission"
      | "events"
      | "evolving-research",
    idPost: string,
    lang: string,
    body: UpdatePostBodyType,
  ) => {
    return http.put<CreateUpdateResType>(
      `/api/${dirName}${idPost !== null ? `/${idPost}` : ""}${
        lang ? `?lang=${lang}` : ""
      }`,
      body,
    );
  },
};

const deletePostServices = {
  delete: (
    dirName:
      | "news"
      | "student_life"
      | "open-admission"
      | "events"
      | "evolving-research",
    idPost: string,
    lang: string,
  ) => {
    return http.delete<{ message: string; data: PostCardType }>(
      `/api/${dirName}/${idPost}${lang ? `?lang=${lang}` : ""}`,
    );
  },
};

const getPendingPost = {
  getList: (page: number, lang: string, options?: { [key: string]: any }) => {
    return http.get<AllPendingPostResType>(
      `api/portal?${lang ? `lang=${lang}` : ""}${
        page ? `&page=${page}` : ""
      }`,
      { ...options },
    );
  },

  getPost: (id: string | number, options?: { [key: string]: any }) => {
    return http.get<PendingPostResType>(`api/portal/${id}`, { ...options });
  },
};

const acceptPendingPost = (
  lang: string,
  idPost: string,
  category: string,
  options?: { [key: string]: any },
) => {
  return http.put(
    `api/portal/accept/${category}/${idPost}${lang ? `?lang=${lang}` : ""}`,
    {},
    { ...options },
  );
};

const rejectPendingPost = (
  lang: string,
  idPost: string,
  options?: { [key: string]: any },
) => {
  return http.delete(
    `api/portal/reject/${idPost}${lang ? `?lang=${lang}` : ""}`,
    { ...options },
  );
};

export {
  getPendingPost,
  getPostServices,
  searchPostServices,
  createUpdatePostServices,
  deletePostServices,
  acceptPendingPost,
  rejectPendingPost,
};
