"use client";

import React, { useState } from "react";
import { barlow } from "@/app/fontDeclare";
import { Drawer } from "antd";
import $ from "jquery";
import { useDOMParser } from "@/hooks/domHook";

export default function ShortBio({ bio }: { bio: string }) {
  const [open, setOpen] = useState<boolean>(false);
  const [bioState, setBioState] = useState<string>(bio || "");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div>
        <p className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-md capitalize mb-2 block">
          Short Bio
        </p>
        <div
          className="px-2 flex items-center w-full h-[35px] border-[2px] border-[#F2F3F5] rounded-sm cursor-pointer overflow-hidden whitespace-nowrap hover:outline"
          onClick={showDrawer}
        >
          {bioState}
        </div>
      </div>

      <Drawer
        title="Short Bio"
        closable={{ "aria-label": "Close Button" }}
        onClose={onClose}
        open={open}
      >
        <div
          id="shortBio"
          className="w-full h-full outline-none"
          style={barlow.style}
          contentEditable
          autoFocus
          onBlur={() => {
            const shortBio = $("#shortBio").text();
            setBioState(shortBio);
          }}
        >
          {useDOMParser(bio)}
        </div>
      </Drawer>
    </div>
  );
}
