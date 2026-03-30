import DomParser from "@/components/domParser";
import { getMemberServices } from "@/services/member.service";
import { RequestProps } from "@/types/page.type";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

export default async function page({ params }: RequestProps) {
  const i18n = await getTranslations();
  const locale = (await params).locale;
  const {
    payload: { data },
  } = await getMemberServices.getDetail("members", (await params).id, locale);
  return (
    <section className="section content-body">
      <div className="container">
        <div className="row md:justify-start justify-center">
          <div className="col-8 col-md-4 mb-md-5">
            <Image
              className="img-fluid w-full max-h-[350px] object-cover object-top mb-4"
              src={data.metadata.image}
              alt={data.metadata.name}
              width={445}
              height={445}
              quality={90}
              loading="lazy"
            />
          </div>
          <div className="col-md-7 mb-5">
            <h3 className="flex gap-4 items-baseline !mb-1">
              {data.metadata.name}
              {data.metadata.email && (
                <Link
                  href={`https://cv.ueh.edu.vn/~${
                    data.metadata.email.split("@")[0]
                  }`}
                  target="_blank"
                  className="flex items-center gap-2 mb-2 hover:underline text-sm text-gray-400"
                >
                  <FontAwesomeIcon icon={faIdCard} className="!text-sm" />
                  <span className="text-inherit font-normal">E-Profile</span>
                </Link>
              )}
            </h3>
            <h6 className="text-color">
              <DomParser content={data.metadata.title} />
            </h6>
            <div className="mt-5">
              {data.metadata.interest && data.metadata.interest?.length > 0 && (
                <div>
                  <h4 className="mb-2 text-base">{i18n("interest")}</h4>
                  <ul className="w-ful max-h-[200px] row flex-col flex-wrap gap-x-2 justify-between">
                    {data.metadata.interest.map((int) => (
                      <li key={int} className="text-base mb-3 col-5">
                        {int}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="mb-0 text-justify">
              <DomParser content={data.metadata.bio} />
            </p>
            <div className="w-full people-content mt-5">
              <DomParser content={data.detail} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
