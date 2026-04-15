"use client";

import { EventCardType } from "@/schemaValidations/post.schema";
import { Divider } from "antd";
import { format, isBefore, isEqual } from "date-fns";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { formatDate } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

const FeatureEventStyled = styled.div`
  .event-items__wrapper {
    overflow-y: auto;

    &::-webkit-scrollbar {
      display: none;
      width: 8px;
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: #ce2027;
    }
  }

  .event-items {
    transition: background-color 0.3s linear;

    &:hover {
      background-color: #eee;
      h4 {
        text-decoration: underline;
      }
    }

    &.active {
      background-color: #eee;
    }
  }
`;

export default function FeatureEvent({ events }: { events: EventCardType[] }) {
  const indexRef = useRef(0);
  const timer = useRef<any>(null);

  const locale = useLocale();

  const [selectedEvent, setSelectedEvent] = useState<EventCardType>(events[0]);
  const [isHoldEvent, setIsHoldEvent] = useState<boolean>(false);

  useEffect(() => {
    if (!isHoldEvent) {
      timer.current = setInterval(() => {
        let index = indexRef.current;
        if (index < events.length - 1) index++;
        else index = 0;
        setSelectedEvent(events[index]);
        indexRef.current = index;
      }, 8000);
    } else {
      clearInterval(timer.current);
    }

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [isHoldEvent, events]);

  return (
    <FeatureEventStyled className="row">
      <div className="col-12 col-lg-5 ">
        {/* Mobile */}
        <div className="row bg-[#ccc] rounded-2xl mb-3 py-3 !flex lg:!hidden">
          <div className="col-12 text-black font-bold">
            {locale === "en"
              ? "Time of the events"
              : "Thời gian diễn ra các sự kiện"}
          </div>
          <div className="col-12 flex gap-x-3 mt-2">
            {events.map((event) => (
              <div
                key={event.id}
                className={`px-2 py-1 rounded-md ${selectedEvent.id === event.id ? "bg-[#000] !text-white" : "!text-black"} transition-all duration-200 hover:bg-[#000] cursor-pointer hover:text-white!`}
                onClick={() => setSelectedEvent(event)}
              >
                <p
                  className={`text-current! !text-base text-center mb-0 ${selectedEvent.id === event.id ? "font-bold" : ""}`}
                >
                  {
                    formatDate(
                      event.eventTime ?? new Date().toDateString(),
                      locale as "en" | "vi",
                    ).day
                  }
                </p>
                <p
                  className={`text-current! !text-base text-center mb-0 ${selectedEvent.id === event.id ? "font-bold" : ""}`}
                  style={{ fontSize: "100%" }}
                >
                  {
                    formatDate(
                      event.eventTime ?? new Date().toDateString(),
                      locale as "en" | "vi",
                    ).month
                  }
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* ------ */}
        <div
          className="row bg-[#91171b] rounded-2xl"
          onMouseEnter={() => setIsHoldEvent(true)}
          onMouseLeave={() => setIsHoldEvent(false)}
        >
          <div className="col-12 py-3">
            <h4 className="text-white h-24 text-xl!">{selectedEvent.title}</h4>
            <div className="flex items-baseline justify-between">
              {/* Event Time */}
              {selectedEvent.eventTime && (
                <div className="flex items-center text-sm">
                  {isEqual(Date.now(), selectedEvent.eventTime) ? (
                    <span className="mb-0 mr-1 text-white font-bold uppercase">
                      {locale === "en" ? "[Ongoing]" : "[Đang diễn ra]"}
                    </span>
                  ) : isBefore(Date.now(), selectedEvent.eventTime) ? (
                    <span className="mb-0 mr-1 text-white font-bold uppercase">
                      {locale === "en" ? "[Upcoming]" : "[Sắp diễn ra]"}
                    </span>
                  ) : (
                    <span className="mb-0 mr-1 font-medium text-[#818181] uppercase">
                      {locale === "en" ? "[Occurred]" : "[Đã diễn ra]"}
                    </span>
                  )}
                  {/* <span className="mb-0">
                    {locale === "en"
                      ? format(selectedEvent.eventTime, "MMM. dd, yyyy")
                      : format(selectedEvent.eventTime, "dd/MM/yyyy")}
                  </span> */}
                </div>
              )}
              {/* SDGs */}
              <div className="flex gap-2">
                {selectedEvent.sdgs.map((sdg) => (
                  <Image
                    width={32}
                    height={32}
                    src={`/images/sdgs_icon/goal_${sdg}.svg`}
                    alt={`sdg goal ${sdg}`}
                    key={sdg}
                  />
                ))}
              </div>
            </div>
            <Link
              href={`/events/${selectedEvent.slug}`}
              className="!rounded-2xl mt-4 !py-3 px-4 !bg-black text-white !flex gap-2 justify-center items-center text-base whitespace-normal break-keep break-words text-wrap"
            >
              {locale === "en" ? "Register Here" : "Đăng ký ngay"}
              <ExternalLink />
            </Link>
          </div>
        </div>

        {/* Desktop */}
        <div className="row bg-[#ccc] rounded-2xl mt-3 py-3 !hidden lg:!flex">
          <div className="col-12 text-black font-bold">
            {locale === "en"
              ? "Time of the events"
              : "Thời gian diễn ra các sự kiện"}
          </div>
          <div className="col-12 flex gap-x-3 mt-2">
            {events.map((event) => (
              <div
                key={event.id}
                className={`px-2 py-1 rounded-md ${selectedEvent.id === event.id ? "bg-[#000] text-white!" : "text-black!"} transition-all duration-200 hover:bg-[#000] cursor-pointer hover:text-white!`}
                onClick={() => setSelectedEvent(event)}
              >
                <p
                  className={`text-current! !text-base text-center mb-0 ${selectedEvent.id === event.id ? "font-bold" : ""}`}
                >
                  {
                    formatDate(
                      event.eventTime ?? new Date().toDateString(),
                      locale as "en" | "vi",
                    ).day
                  }
                </p>
                <p
                  className={`text-current! !text-base text-center mb-0 ${selectedEvent.id === event.id ? "font-bold" : ""}`}
                  style={{ fontSize: "100%" }}
                >
                  {
                    formatDate(
                      event.eventTime ?? new Date().toDateString(),
                      locale as "en" | "vi",
                    ).month
                  }
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* ------ */}
      </div>

      <div
        className="col-12 col-lg-7 mt-2 flex flex-col lg:!mt-0 !px-0 lg:!px-[15px]"
        onMouseEnter={() => setIsHoldEvent(true)}
        onMouseLeave={() => setIsHoldEvent(false)}
      >
        <Link
          href={`/events/${selectedEvent.slug}`}
          className="hover:opacity-70 flex-1"
        >
          <figure className="rounded-2xl overflow-hidden">
            <Image
              src={selectedEvent.thumbnail}
              alt={selectedEvent.title}
              width={900}
              height={600}
              className="object-contain w-full h-auto"
              style={{ aspectRatio: 1200 / 630 }}
            />
          </figure>
        </Link>

        <div className="h-[1px] w-full bg-[#ce2027]"></div>
      </div>
    </FeatureEventStyled>
  );
}
