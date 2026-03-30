"use client";

import React, { FormEvent, useEffect, useState } from "react";
import { Drawer } from "antd";
import $ from "jquery";

export default function Interest({ interest }: { interest: string[] | null }) {
  const [open, setOpen] = useState<boolean>(false);

  const [interestState, setInterestState] = useState<string[]>(interest || []);
  const [htmlContent, setHtmlContent] = useState<string>("");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleUpdateListState = (e: FormEvent<HTMLDivElement>) => {
    const editedInterestState = (e.target as HTMLDivElement).childNodes;
    const t: string[] = [];
    editedInterestState.forEach((item) => t.push(item.textContent || ""));
    setInterestState(t);
    setHtmlContent((e.target as HTMLDivElement).innerHTML);
  };

  useEffect(() => {
    const temp: string = interest
      ? interest.map((item) => `<li>${item}</li>`).join("")
      : "";

    setHtmlContent(temp);
  }, [interest]);

  return (
    <div>
      <div>
        <p className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-md capitalize mb-2 block">
          Interests
        </p>
        <div
          className="px-2 flex items-center w-full h-[35px] border-[2px] border-[#F2F3F5] rounded-sm cursor-pointer overflow-hidden whitespace-nowrap hover:outline"
          onClick={showDrawer}
        >
          {interestState.join("; ")}
        </div>
      </div>

      <Drawer
        title="Interests"
        closable={{ "aria-label": "Close Button" }}
        onClose={onClose}
        open={open}
      >
        <div
          id="interest"
          className="w-full h-full outline-none"
          contentEditable
          suppressContentEditableWarning
          autoFocus
          onBlur={handleUpdateListState}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </Drawer>
    </div>
  );
}
