import { ibm_plex_sans } from "@/app/fontDeclare";
import NotFound from "@/components/not-found";
import { getBookList } from "@/services/research.service";
import { getLocale } from "next-intl/server";
import Image from "next/image";
import React from "react";
import BookModal from "./bookModal";

export default async function page() {
  try {
    const locale = await getLocale();

    const {
      payload: { data: books },
    } = await getBookList.getList(locale);

    return (
      <div className="container pb-24 pt-16">
        <div className="row">
          {books.map((book) => (
            <div
              className="col-lg-4 col-sm-6 flex mb-4 h-[350px]"
              key={book.id}
            >
              <BookModal book={book} />
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
    return <NotFound />;
  }
}
