import {
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { PlusCircleIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";

export const NewsMenuItem = ({ currentPath }: { currentPath: string }) => {
  const router = useRouter();

  function handleAddPost(e: MouseEvent<HTMLElement>) {
    router.push(`/admins/dashboard/news/add`);
  }

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild isActive={currentPath.includes("news")}>
        <Link className="w-full" href={`/admins/dashboard/news`}>
          ISCM Life
        </Link>
      </SidebarMenuButton>
      <SidebarMenuAction onClick={handleAddPost}>
        <PlusCircleIcon />
      </SidebarMenuAction>
      {/* <SidebarMenuBadge>10</SidebarMenuBadge> */}
    </SidebarMenuItem>
  );
};

export const StudentLifeMenuItem = ({
  currentPath,
}: {
  currentPath: string;
}) => {
  const router = useRouter();

  function handleAddPost(e: MouseEvent<HTMLElement>) {
    router.push(`/admins/dashboard/student_life/add`);
  }

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        isActive={currentPath.includes("student_life")}
      >
        <Link className="w-full" href={`/admins/dashboard/student_life`}>
          Student Life
        </Link>
      </SidebarMenuButton>
      <SidebarMenuAction onClick={handleAddPost}>
        <PlusCircleIcon />
      </SidebarMenuAction>
      {/* <SidebarMenuBadge>10</SidebarMenuBadge> */}
    </SidebarMenuItem>
  );
};

export const EventsMenuItem = ({ currentPath }: { currentPath: string }) => {
  const router = useRouter();

  function handleAddPost(e: MouseEvent<HTMLElement>) {
    router.push(`/admins/dashboard/events/add`);
  }

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild isActive={currentPath.includes("events")}>
        <Link className="w-full" href={`/admins/dashboard/events`}>
          Events
        </Link>
      </SidebarMenuButton>
      <SidebarMenuAction onClick={handleAddPost}>
        <PlusCircleIcon />
      </SidebarMenuAction>
      {/* <SidebarMenuBadge>10</SidebarMenuBadge> */}
    </SidebarMenuItem>
  );
};

export const EvolvingResearchMenuItem = ({
  currentPath,
}: {
  currentPath: string;
}) => {
  const router = useRouter();

  function handleAddPost(e: MouseEvent<HTMLElement>) {
    router.push(`/admins/dashboard/evolving_research/add`);
  }

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        isActive={currentPath.includes("evolving_research")}
      >
        <Link className="w-full" href={`/admins/dashboard/evolving_research`}>
          Expert Insights
        </Link>
      </SidebarMenuButton>
      <SidebarMenuAction onClick={handleAddPost}>
        <PlusCircleIcon />
      </SidebarMenuAction>
      {/* <SidebarMenuBadge>10</SidebarMenuBadge> */}
    </SidebarMenuItem>
  );
};

export const InTheMediaMenuItem = ({
  currentPath,
}: {
  currentPath: string;
}) => {
  const router = useRouter();

  function handleAddPost(e: MouseEvent<HTMLElement>) {
    router.push(`/admins/dashboard/iscm_in_the_media/add`);
  }

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        isActive={currentPath.includes("iscm_in_the_media")}
      >
        <Link className="w-full" href={`/admins/dashboard/iscm_in_the_media`}>
          In The Media
        </Link>
      </SidebarMenuButton>
      <SidebarMenuAction onClick={handleAddPost}>
        <PlusCircleIcon />
      </SidebarMenuAction>
      {/* <SidebarMenuBadge>10</SidebarMenuBadge> */}
    </SidebarMenuItem>
  );
};

export const OpenAdmissionMenuItem = ({
  currentPath,
}: {
  currentPath: string;
}) => {
  const router = useRouter();

  function handleAddPost(e: MouseEvent<HTMLElement>) {
    router.push(`/admins/dashboard/open_admission/add`);
  }

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        isActive={currentPath.includes("open_admission")}
      >
        <Link className="w-full" href={`/admins/dashboard/open_admission`}>
          Open Admission
        </Link>
      </SidebarMenuButton>
      <SidebarMenuAction onClick={handleAddPost}>
        <PlusCircleIcon />
      </SidebarMenuAction>
      {/* <SidebarMenuBadge>10</SidebarMenuBadge> */}
    </SidebarMenuItem>
  );
};
