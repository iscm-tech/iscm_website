"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { toast } from "@/hooks/use-toast";
import { rejectPendingPost } from "@/services/post.service";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function RejectPending({
  idPost,
  lang,
}: {
  idPost: string;
  lang: "vi" | "en";
}) {
  const router = useRouter();

  async function handleDelete() {
    try {
      await rejectPendingPost(lang, idPost);
      router.refresh();

      toast({
        title: "Reject Post Success",
        duration: 2500,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  return (
    <DropdownMenuItem
      className="hover:bg-red-400 cursor-pointer hover:text-white"
      onClick={handleDelete}
    >
      <Trash2 /> Reject
    </DropdownMenuItem>
  );
}
