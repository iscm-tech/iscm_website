import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BookOpenText, CalendarDaysIcon, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CourseCard({
  id,
  thumb,
  title,
  duration,
  category,
  basePath,
  class_type,
}: {
  id: string;
  thumb: string;
  title: string;
  basePath: string;
  duration: string;
  category: string;
  class_type?: string;
}) {
  const i18n = useTranslations();

  return (
    <Link
      href={{ pathname: id ? `${basePath}/${id}` : basePath }}
      className="block card border-0 rounded-0 hover-shadow !mb-0 w-full !h-full cursor-pointer bg-white"
      title={title}
    >
      <Image
        className="card-img-top rounded-0 w-full h-[250px]"
        src={thumb}
        alt={title}
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        loading="lazy"
        width={500}
        height={500}
      />

      <div className="card-body h-fit">
        <div className="card-content flex-fill row px-[15px]">
          <ul className="list-inline mb-2 col-12 px-0 text-base">
            <li className="w-full flex items-center">
              <CalendarDaysIcon className="mr-2" size={20} /> {duration}
            </li>
            <li className="w-full flex items-center capitalize">
              <BookOpenText className="mr-2" size={20} /> {category}
            </li>
            {class_type && (
              <li className="w-full flex items-center capitalize">
                <MapPin className="mr-2" size={20} /> {class_type}
              </li>
            )}
          </ul>

          <h4 className="card-title leading-6 line-clamp-2 h-[50px] font-bold capitalize text-[#141414] text-xl">
            {title}
          </h4>
        </div>
        <div className="btn btn-primary btn-sm w-fit">{i18n("explore")}</div>
      </div>
    </Link>
  );
}
