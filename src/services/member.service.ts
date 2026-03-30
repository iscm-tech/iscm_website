import http from "@/lib/http";
import {
  CreateUpdateResType,
  MemberListResType,
  MemberResType,
  UpdateMemberBodyType,
} from "@/schemaValidations/member.schema";

const endpointRoot = "api/people";

const getMemberServices = {
  getList: (
    dirName: "members" | "advisory" | "adjunctprofessors" | "network",
    type: string | undefined = undefined,
    lang: string
  ) => {
    return http.get<MemberListResType>(
      `${endpointRoot}/${dirName}${lang ? `?lang=${lang}` : ""}${
        type ? `&type=${type}` : ""
      }`
    );
  },
  getDetail: (
    dirName: "members" | "advisory" | "adjunctprofessors" | "network",
    idMember: string,
    lang: string
  ) => {
    return http.get<MemberResType>(
      `${endpointRoot}/${dirName}/${idMember}${lang ? `?lang=${lang}` : ""}`
    );
  },
};

const createUpdateMemberServices = {
  updateMember: (memberID: string, lang: string, body: UpdateMemberBodyType) =>
    http.put<CreateUpdateResType>(
      `/api/people/members/${memberID}${lang ? `?lang=${lang}` : ""}`,
      body
    ),
};

export { getMemberServices, createUpdateMemberServices };
