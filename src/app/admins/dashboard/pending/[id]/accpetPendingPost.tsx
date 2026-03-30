"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { acceptPendingPost } from "@/services/post.service";
import { CircleCheckBigIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function AcceptPendingPost({
  idPost,
  lang,
}: {
  idPost: string;
  lang: "vi" | "en";
}) {
  const router = useRouter();

  async function handleAcceptPost() {
    try {
      await acceptPendingPost(lang, idPost, "news", {
        headers: {
          authorization: Cookies.get("sessionToken"),
        },
      });

      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <DropdownMenuItem className="cursor-pointer" onClick={handleAcceptPost}>
      <CircleCheckBigIcon /> Accept
    </DropdownMenuItem>
  );
}
