import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MoveRightIcon } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import $ from "jquery";

export default function StudiolabCard({
  vi,
  en,
  thumb,
  path,
}: {
  thumb: string;
  vi: {
    title: string;
    location: { campus: string; addr: string }[];
    introduction?: string;
  };
  en: {
    title: string;
    location: { campus: string; addr: string }[];
    introduction?: string;
  };
  path: string;
}) {
  const locale = useLocale();

  return (
    <div
      className="studiolab__card"
      onClick={(e) => {
        const ele = $(e.currentTarget);
        ele.toggleClass("active");
        ele.siblings().removeClass("active");
      }}
    >
      <Image
        src={thumb}
        width={680}
        height={450}
        alt={locale === "en" ? en.title : vi.title}
        className="w-full h-full object-cover relative z-1"
        quality={60}
      />

      <div className="title">{locale === "vi" ? vi.title : en.title}</div>
      <div className="info__container">
        <div className="info">
          <Link href={path} onClick={(e) => e.stopPropagation()}>
            <h2 className="items-baseline justify-center gap-2 text-white text-center select-none">
              {locale === "vi" ? vi.title : en.title}
              <span className="icon">
                <MoveRightIcon color="white" />
              </span>
            </h2>
          </Link>
          <div className="info__content">
            <div className="location flex gap-2">
              {locale === "en"
                ? en.location.map((location) => (
                    <div key={location.campus}>
                      <div className="flex gap-3 mb-2">
                        <FontAwesomeIcon
                          icon={faMapLocationDot}
                          color="#971919"
                        />
                        <span className="!leading-4 text-sm text-inherit mb-0 text-white">
                          {location.campus}
                        </span>
                      </div>
                      <p className="!leading-4 text-sm text-white mb-0">
                        {location.addr}
                      </p>
                    </div>
                  ))
                : vi.location.map((location) => (
                    <div key={location.campus}>
                      <div className="flex gap-3 mb-2">
                        <FontAwesomeIcon
                          icon={faMapLocationDot}
                          color="#971919"
                        />
                        <span className="!leading-4 text-sm text-inherit mb-0 text-white">
                          {location.campus}
                        </span>
                      </div>
                      <p className="!leading-4 text-sm text-white mb-0">
                        {location.addr}
                      </p>
                    </div>
                  ))}
            </div>
            <p className="text-base text-justify font-normal text-white mt-3">
              {locale === "en" ? en.introduction : vi.introduction}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
