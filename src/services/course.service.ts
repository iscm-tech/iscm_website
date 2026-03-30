import http from "@/lib/http";
import {
  CourseListResType,
  CourseResType,
  NondegreeCourseListResType,
  NondegreeCourseResType,
} from "@/schemaValidations/course.schema";
import { get } from "jquery";

const getCourseServices = {
  getList: (
    dirName: "course_graduate" | "non-degree",
    lang: string,
    options?: { [key: string]: any },
  ) => {
    return http.get<CourseListResType>(
      `/api/education/${dirName}${lang ? `?lang=${lang}` : ""}`,
      { ...options },
    );
  },
  getCourse: (
    dirName: "course_graduate" | "non-degree",
    idCourse: string,
    lang: string,
    options?: { [key: string]: any },
  ) => {
    return http.get<CourseResType>(
      `/api/education/${dirName}/${idCourse}${lang ? `?lang=${lang}` : ""}`,
      options,
    );
  },
  getNonDegreeCourseList: (lang: string, options?: { [key: string]: any }) => {
    return http.get<NondegreeCourseListResType>(
      `/api/education/non-degree?lang=${lang}`,
      { ...options },
    );
  },
  searchNonDegreeCourses: (
    lang: string,
    conds: {
      title?: string;
      level?: string;
      language?: string;
      type?: string;
      status?: string;
    },
    options?: { [key: string]: any },
  ) => {
    const paramStr = Object.keys(conds)
      .map((k) => `${k}=${conds[k as keyof typeof conds]}`)
      .join("&");

    console.log(`/api/education/non-degree/search?lang=${lang}&${paramStr}`);

    return http.get<NondegreeCourseListResType>(
      `/api/education/non-degree/search?lang=${lang}&${paramStr}`,
      { ...options },
    );
  },
  getNonDegreeCourse: (
    slug: string,
    lang: string,
    options?: { [key: string]: any },
  ) => {
    return http.get<NondegreeCourseResType>(
      `/api/education/non-degree/${slug}${lang ? `?lang=${lang}` : ""}`,
      options,
    );
  },
};

export { getCourseServices };
