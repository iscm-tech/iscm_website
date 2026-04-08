"use client";

import { useLocale } from "next-intl";

import { faSistrix } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "antd";
import { barlow } from "@/app/fontDeclare";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export default function SearchBar() {
  const locale = useLocale();

  return (
    // <Input.Search
    //   placeholder={locale === "en" ? "Search..." : "Tìm kiếm..."}
    //   allowClear
    //   variant="borderless"
    //   suffix={null}
    //   enterButton={<FontAwesomeIcon icon={faSistrix} size="lg" color="white" />}
    //   onSearch={(value) => console.log(value)}
    //   styles={{
    //     root: {
    //       width: "100%",
    //       borderBottom: "1px solid #fff",
    //     },
    //     input: {
    //       color: "#fff",
    //       fontFamily: barlow.style.fontFamily,
    //     },
    //     suffix: {
    //       display: "none",
    //     },
    //   }}
    //   classNames={{
    //     input: "placeholder:!text-[#f4f4f4] placeholder:!italic",
    //   }}
    // />

    <div>
      <Dialog>
        <DialogTrigger asChild>
          <p>falskjdfas</p>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>No Close Button</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
