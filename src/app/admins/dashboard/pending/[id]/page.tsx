import { RequestProps } from "@/types/page.type";
import { getPendingPost } from "@/services/post.service";
import Editor from "./editor";
import { cookies } from "next/headers";
import ErrorComp from "../../components/error";

export default async function page({ params }: RequestProps) {
  const postID = (await params).id;

  try {
    const cookieStorage = await cookies();

    const {
      payload: { data, lang },
    } = await getPendingPost.getPost(postID, {
      headers: {
        authorization: cookieStorage.get("sessionToken")?.value,
      },
    });

    console.log(lang);

    return (
      <section className="overflow-auto h-screen">
        <Editor
          data={data}
          category={data.metadata.categories ? data.metadata.categories : []}
          locale={lang}
        />
      </section>
    );
  } catch (error) {
    console.log(error);
    return <ErrorComp />;
  }
}
