import http from "@/lib/http";
import {
  RecruitmentListResType,
  RecruitmentResType,
} from "@/schemaValidations/post.schema";

const getRecruitmentPost = {
  getList: (lang: string, options?: { [key: string]: any }) =>
    http.get<RecruitmentListResType>(
      `/api/recruitment${lang ? "?lang=" + lang : ""}`,
      options
    ),

  getPost: (slug: string, lang: string, options?: { [key: string]: any }) =>
    http.get<RecruitmentResType>(
      `/api/recruitment/${slug}${lang ? "?lang=" + lang : ""}`,
      options
    ),
};

export { getRecruitmentPost };
