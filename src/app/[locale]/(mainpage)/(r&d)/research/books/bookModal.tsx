"use client";

import { ibm_plex_sans } from "@/app/fontDeclare";
import { useDOMParser } from "@/hooks/domHook";
import { BookType } from "@/schemaValidations/research.schema";
import { Modal } from "antd";
import { BookLock } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function BookModal({ book }: { book: BookType }) {
  const locale = useLocale();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="card !flex !w-full" onClick={showModal}>
        <div className="flex-1">
          <Image
            className={`h-[260px] card-img-top rounded-0 object-contain`}
            loading="lazy"
            width={350}
            height={200}
            alt=""
            src={book.thumbnail}
          />
          <div
            className="card-date text-white text-2xl font-semibold"
            style={ibm_plex_sans.style}
          >
            {book.year}
          </div>
        </div>
        <div className="pb-3 px-2">
          <div className="overflow-hidden">
            <h4
              className="card-title !mb-0"
              style={{
                fontSize: "18px",
                color: "rgba(41, 0, 2, 0.534)",
                fontFamily: "Barlow, sans-serif",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                wordBreak: "keep-all",
                textDecoration: "none",
                textOverflow: "ellipsis",
              }}
            >
              {book.title}
            </h4>
          </div>
        </div>
      </div>

      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={<></>}
        className="!w-fit max-w-[85vw]"
      >
        <div className="row justify-between p-4">
          <div className="col-md-4 col-12">
            <figure className="w-full flex justify-center md:w-fit h-fit rounded-sm">
              <Image
                className="object-contain w-fit h-fit max-h-[50vh] p-3 bg-[#eee]"
                loading="lazy"
                width={350}
                height={200}
                alt=""
                src={book.thumbnail}
              />
            </figure>
            <div>
              <h1 className="text-2xl">{book.title}</h1>
              <div>
                <h4 className="text-base mb-0">
                  {locale === "en" ? "Publication Year" : "Năm xuất bản"}
                </h4>
                <p>{book.year}</p>
              </div>
            </div>
            {book.shop_link && (
              <Link
                href={book.shop_link}
                target="_blank"
                className="flex items-center gap-3 border border-black w-fit p-2 transition-colors hover:text-[#ce2027] hover:!border-[#ce2027]"
              >
                {locale === "en" ? "Shop now" : "Mua sách"}
                <BookLock size={18} />
              </Link>
            )}
          </div>
          <div className="col-md-8 col-12">
            <p>
              {locale === "en" ? "Authors: " : "Tác giả: "}
              <span className="italic text-justify">
                {book.authors.join("; ")}
              </span>
            </p>

            <p className="text-justify">{useDOMParser(book.description)}</p>
          </div>
        </div>
      </Modal>
    </>
  );
}
