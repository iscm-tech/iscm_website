"use client";
import { useState } from "react";

import FloatButtonCustom from "@/components/floatButtonCustom";
import { FloatButton } from "antd";
import ContactFloatForm from "./ContactFloatForm";
import { X } from "lucide-react";

export default function HelpingFloat() {
  const [show, setShow] = useState(false);

  return (
    <>
      <FloatButtonCustom>
        <div
          className={`${show ? "scale-100 opacity-100 w-full h-full" : "scale-0 opacity-0 w-0 h-0"} transition-all origin-bottom-right`}
        >
          <ContactFloatForm />
        </div>
        <FloatButton
          icon={
            <div
              className="mb-0 w-full h-full flex items-center justify-center overflow-hidden"
              onClick={() => setShow((prev) => !prev)}
            >
              {!show && (
                <img
                  src="/images/icons/send.png"
                  alt=""
                  className="w-2/3 aspect-square"
                />
              )}

              {show && (
                <span>
                  <X />
                </span>
              )}
            </div>
          }
        />
        <FloatButton.BackTop />
      </FloatButtonCustom>
    </>
  );
}
