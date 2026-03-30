"use client";

import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { barlow } from "@/app/fontDeclare";

const CustomTabs = styled(Tabs)`
  .ant-tabs-tab {
    ${barlow.style};
    font-size: 18px;
  }

  .ant-tabs-tab:hover {
    color: #ce2027;
  }

  .ant-tabs-tab[selected="true"] {
    font-weight: bold !important;
  }

  .ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #ce2027 !important;
    font-weight: bold !important;
  }

  .ant-tabs-ink-bar {
    background: #ce2027 !important;
  }
`;

export default function YearTabs({
  items,
  defaultKey,
  tabPosition = "top",
  center = false,
}: {
  items: TabsProps["items"];
  defaultKey: string;
  tabPosition?: "top" | "bottom" | "left" | "right";
  center?: boolean;
}) {
  const router = useRouter();

  return (
    <AntdRegistry>
      <CustomTabs
        centered={center}
        defaultActiveKey={defaultKey}
        items={items}
        tabBarStyle={{ color: "#971919" }}
        tabPosition={tabPosition}
        onChange={(key) => {
          router.push(`?year=${key}`, { scroll: false });
        }}
      />
    </AntdRegistry>
  );
}
