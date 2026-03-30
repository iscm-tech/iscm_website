"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { toast } from "@/hooks/use-toast";
import { deletePostServices  } from "@/services/post.service";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DeletePost({
  idPost,
  lang,
}: {
  idPost: string;
  lang: "vi" | "en";
}) {
  const router = useRouter();

  async function handleDelete() {
    try {
      console.log(lang, idPost);
      await deletePostServices.delete("news", idPost, lang);
      router.refresh();

      toast({
        title: "Delete Post Success",
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
      <Trash2 /> Delete
    </DropdownMenuItem>
  );
}
