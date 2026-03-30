"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

import "./style.scss";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarProvider,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, LogOutIcon } from "lucide-react";
import {
  EventsMenuItem,
  EvolvingResearchMenuItem,
  InTheMediaMenuItem,
  NewsMenuItem,
  OpenAdmissionMenuItem,
  StudentLifeMenuItem,
} from "./sidebarMenu";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const currentPath = usePathname();

  const navigator = useRouter();

  const handleLogout = useCallback(() => {
    localStorage.removeItem("sessionToken");
    navigator.push("/admins/auth/login");
  }, []);

  return (
    <section className="cms__wrapper">
      <div className="main__container">
        <SidebarProvider className="min-h-0">
          <Sidebar collapsible="offcanvas" variant="sidebar">
            <SidebarHeader>
              <div className="flex flex-1 justify-between items-center gap-4">
                <Link href="/">
                  <Image
                    className="img-fluid w-auto h-6"
                    src="/images/logo_notext.png"
                    alt="logo"
                    width={150}
                    height={48}
                  />
                </Link>
                <Link href="/admins/dashboard" className="text-xl font-bold">
                  Admin Page
                </Link>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel className="text-md text-black font-bold">
                  Categories
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <NewsMenuItem currentPath={currentPath} />
                    <StudentLifeMenuItem currentPath={currentPath} />
                    <EventsMenuItem currentPath={currentPath} />
                    <EvolvingResearchMenuItem currentPath={currentPath} />
                    {/* <InTheMediaMenuItem currentPath={currentPath} /> */}
                    <OpenAdmissionMenuItem currentPath={currentPath} />
                    <SidebarMenuItem>
                      <Collapsible defaultOpen className="group/collapsible">
                        <SidebarMenuButton asChild>
                          <CollapsibleTrigger>
                            <p className="!text-sm !text-[#3f3f46]">People</p>
                            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                          </CollapsibleTrigger>
                        </SidebarMenuButton>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            <SidebarMenuSubButton
                              isActive={currentPath.includes("members")}
                              href={`/admins/dashboard/members`}
                            >
                              Members
                            </SidebarMenuSubButton>
                          </SidebarMenuSub>
                          <SidebarMenuSub>
                            <SidebarMenuSubButton
                              isActive={currentPath.includes("advisory")}
                              href={`/admins/dashboard/advisory`}
                            >
                              Advisory
                            </SidebarMenuSubButton>
                          </SidebarMenuSub>
                          <SidebarMenuSub>
                            <SidebarMenuSubButton
                              isActive={currentPath.includes(
                                "adjunctprofessors",
                              )}
                              href={`/admins/dashboard/adjunctprofessors`}
                            >
                              Adjunct Professors
                            </SidebarMenuSubButton>
                          </SidebarMenuSub>
                          <SidebarMenuSub>
                            <SidebarMenuSubButton
                              isActive={currentPath.includes("network")}
                              href={`/admins/dashboard/network`}
                            >
                              Glocal Experts
                            </SidebarMenuSubButton>
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </Collapsible>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
              <div className="flex justify-between w-full">
                <div className="flex-1"></div>
                <button
                  className="hover:bg-red-500 transition-colors rounded-sm p-1 hover:text-white"
                  title="Log out"
                  onClick={handleLogout}
                >
                  <LogOutIcon size={22} />
                </button>
              </div>
            </SidebarFooter>
          </Sidebar>

          <div className="w-full h-screen">{children}</div>
        </SidebarProvider>
      </div>
    </section>
  );
}
