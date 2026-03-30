"use client";

import { barlow } from "@/app/fontDeclare";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "antd";
import { CircleStar, MessageCircleWarning, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import React, { useState } from "react";

export default function SummarizeBar({
  items,
  level,
}: {
  items?: { value: string | number; title?: string; subTitle?: string }[];
  level?: { level: string; exp?: string };
}) {
  const locale = useLocale();
  const i18n = useTranslations();

  const [openLevelExpModal, setOpenLevelExpModal] = useState<boolean>(false);

  const [modal, contextHolder] = Modal.useModal();

  return (
    <div className="min-h-[60px] w-full flex-shrink-0 relative lg:-translate-y-2/3 lg:flex justify-between bg-white rounded-xl py-6 shadow-xl shadow-black/30">
      {items?.map((item, index) => (
        <div
          key={index}
          className="flex justify-center items-center flex-1 border-b !pb-3 !mb-3 lg:!pb-0 lg:!mb-0 lg:border-b-0 lg:border-r border-[#A1A1A1]"
        >
          <div>
            <h3 className="text-3xl text-center font-bold mb-0">
              {item.value}
            </h3>
            <p className="text-xl text-center mb-0 font-semibold">
              {item.title}
            </p>
          </div>
        </div>
      ))}
      <div className="flex justify-center items-center flex-1 border-b !pb-3 !mb-3 lg:!pb-0 lg:!mb-0 lg:border-b-0 lg:border-r border-[#A1A1A1]">
        <div>
          <h3 className="text-2xl text-center mb-0 font-semibold">
            {i18n(level?.level)}
          </h3>
          <p className="mb-0 text-sm text-[#5b6780] flex items-center gap-1">
            {locale === "en"
              ? "Recommended experience"
              : "Kinh nghiệm nên có trước khi học"}
            <button
              className="hover:bg-[#d3d3d3] transition-colors p-1 rounded-lg"
              onClick={async () => {
                modal.info({
                  maskClosable: true,
                  title: (
                    <div>
                      <h3 className="text-2xl lg:whitespace-nowrap mb-0">
                        {locale === "en"
                          ? "Recommended experience"
                          : "Kinh nghiệm nên có trước khi học"}
                      </h3>
                      <p className="mb-0">{i18n(level?.level)}</p>
                    </div>
                  ),
                  content: (
                    <div className="mb-3">
                      {locale === "en" ? (
                        <>
                          No prior experience is required to enroll in this
                          course. Whether you are new to the subject or looking
                          to enhance your skills, this course is designed to
                          accommodate learners of all levels.
                        </>
                      ) : (
                        <>
                          Không yêu cầu kinh nghiệm trước để đăng ký khóa học
                          này. Cho dù bạn là người mới với chủ đề này hay muốn
                          nâng cao kỹ năng của mình, khóa học này được thiết kế
                          để phù hợp với người học ở mọi trình độ.
                        </>
                      )}
                    </div>
                  ),
                  styles: {
                    content: {
                      width: "fit-content",
                    },
                  },
                  okButtonProps: {
                    style: {
                      ...barlow.style,
                      background: "black",
                    },
                  },
                  okText: <span className="text-white font-bold">OK</span>,
                });
              }}
            >
              <MessageCircleWarning size={16} />
            </button>
            {contextHolder}
          </p>
        </div>
      </div>
      <div className="flex-1 gap-2">
        <h3 className="flex gap-2 items-center justify-center font-bold text-black mb-0">
          0.0
          <FontAwesomeIcon
            icon={faStar}
            color="#FDD017"
            fontSize={20}
            className="max-h-[20px]"
          />
        </h3>
        <p className="text-center mb-0 text-[#5b6780]">(0 reviews)</p>
      </div>
    </div>
  );
}
