"use client";

import { mobile1, mobile2 } from "@/constants";
import { message } from "antd";
import { Slash } from "lucide-react";

export default function PhoneNumber({
  size = "medium",
}: {
  size?: "small" | "medium";
}) {
  const [messageApi, contextHolder] = message.useMessage();

  const copyNumber = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    const content = e.currentTarget?.textContent;
    if (content) {
      navigator.clipboard.writeText(content);
      messageApi.success("Phone number copied");
    }
  };

  return (
    <div className="flex gap-1 items-center">
      {contextHolder}
      <p
        className={`${
          size === "small" ? "text-xs " : "text-base"
        } mb-0 cursor-pointer hover:text-[#ce2027]`}
        onClick={copyNumber}
      >
        {mobile1}
      </p>
      <Slash size={size === "small" ? 10 : 14} />
      <p
        className={`${
          size === "small" ? "text-xs" : "text-base"
        } mb-0 cursor-pointer hover:text-[#ce2027]`}
        onClick={copyNumber}
      >
        {mobile2}
      </p>
    </div>
  );
}
