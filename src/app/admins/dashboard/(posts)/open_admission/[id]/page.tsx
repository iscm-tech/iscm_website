import { RequestProps } from "@/types/page.type";
import { getPostServices } from "@/services/post.service";
import Editor from "./editor";
import ErrorComp from "../../../components/error";
import { cookies } from "next/headers";

export default async function page({ params, searchParams }: RequestProps) {
  const lang = (await searchParams).lang || "en";
  const postID = (await params).id;

  try {
    const cookieStorage = await cookies();
    const {
      payload: { data, posted_portal },
    } = await getPostServices.getPost("open-admission", postID, lang, {
      headers: {
        authorization: cookieStorage.get("sessionToken")?.value,
      },
    });

    return (
      <section className="overflow-hidden h-screen">
        <Editor data={data} locale={lang} posted_portal={posted_portal} />
      </section>
    );
  } catch (error) {
    console.log(error);
    return <ErrorComp />;
  }
}
