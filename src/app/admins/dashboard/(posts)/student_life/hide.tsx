"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { toast } from "@/hooks/use-toast";
import { createUpdatePostServices } from "@/services/post.service";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HidePost({
  idPost,
  isDraft,
  lang,
}: {
  idPost: string;
  isDraft: boolean;
  lang: "vi" | "en";
}) {
  const router = useRouter();

  async function handleHide() {
    try {
      await createUpdatePostServices.updatePost("news", idPost, lang, {
        metadata: { id: idPost, draft: !isDraft },
      });

      router.refresh();

      toast({
        title: "Toggle Hide Post Success",
        duration: 2500,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  return (
    <DropdownMenuItem className="cursor-pointer" onClick={handleHide}>
      {!isDraft ? (
        <>
          <EyeOff /> Hide
        </>
      ) : (
        <>
          <Eye /> Show
        </>
      )}
    </DropdownMenuItem>
  );
}
