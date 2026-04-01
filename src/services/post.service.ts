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
  UpdatePostBodyType,
} from "@/schemaValidations/post.schema";

const getPostServices = {
  getList: <T = PostCardType>(
    dirName:
      | "news"
      | "student_life"
      | "open-admission"
      | "events"
      | "evolving-research"
      | "iscm_in_the_media",
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

  getLatestPost: (lang: string) =>
    http.get<LatestPostListResType>(
      `api/utils/latest-posts${lang ? "?lang=" + lang : ""}`,
    ),

  getLatestPortal: (lang: string) =>
    http.get<PostListResType<LatestAdmissionCardType>>(
      `api/utils/latest-portal${lang ? "?lang=" + lang : ""}`,
    ),

  getLatestPostByCategory: (
    lang: string,
    category:
      | "news"
      | "student_life"
      | "open-admission"
      | "events"
      | "evolving-research"
      | "iscm_in_the_media",
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
      | "evolving-research"
      | "iscm_in_the_media",
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

const createUpdatePostServices = {
  createPost: (
    dirName:
      | "news"
      | "student_life"
      | "open-admission"
      | "events"
      | "evolving-research"
      | "iscm_in_the_media",
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
      | "evolving-research"
      | "iscm_in_the_media",
    idPost: string,
    lang: string,
  ) => {
    return http.delete<{ message: string; data: PostCardType }>(
      `/api/${dirName}/${idPost}${lang ? `?lang=${lang}` : ""}`,
    );
  },
};

const getPendingPost = {
  getList: (lang: string, options?: { [key: string]: any }) => {
    return http.get<AllPendingPostResType>(
      `api/portal${lang ? `?lang=${lang}` : ""}`,
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
  createUpdatePostServices,
  deletePostServices,
  acceptPendingPost,
  rejectPendingPost,
};
