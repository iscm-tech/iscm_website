import { getMemberServices } from "@/services/member.service";
import ErrorComp from "../../../components/error";
import Editor from "./editor";
import { RequestProps } from "@/types/page.type";

export default async function page({ params, searchParams }: RequestProps) {
  const lang = (await searchParams).lang || "en";
  const memberID = (await params).id;

  try {
    const {
      payload: { data },
    } = await getMemberServices.getDetail("members", memberID, lang);

    return (
      <section className="overflow-hidden h-screen">
        <Editor data={data} locale={lang} />
      </section>
    );
  } catch (error) {
    console.log(error);
    return <ErrorComp />;
  }
}
