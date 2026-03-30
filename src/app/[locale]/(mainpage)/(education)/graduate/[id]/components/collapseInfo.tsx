"use client";

import type { CSSProperties } from "react";
import React from "react";
import type { CollapseProps } from "antd";
import { Collapse, theme } from "antd";
import { barlow } from "@/app/fontDeclare";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const CollapseStyled = styled(Collapse)`
  .ant-collapse-header-text {
    transition: color 0.15s;
  }

  .ant-collapse-item-active {
    .ant-collapse-header-text {
      color: #ce2027 !important;
    }
  }
`;

const CollapseInfo = ({
  data,
}: {
  data: { key: string; label: string; children: React.ReactNode }[];
}) => {
  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    borderRadius: 0,
    border: "1px solid #ccc",
    ...barlow.style,
    fontSize: "16px",
    color: "#ce2027 !important",
    fontWeight: "bold",
  };

  const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
    panelStyle
  ) =>
    data.map((item) => ({
      key: item.key,
      label: item.label,
      children: item.children,
      style: panelStyle,
    }));

  return (
    <CollapseStyled
      bordered={false}
      defaultActiveKey={["1"]}
      expandIcon={({ isActive }) =>
        isActive ? (
          <FontAwesomeIcon icon={faMinus} className="!text-[#ce2027]" />
        ) : (
          <FontAwesomeIcon icon={faPlus} />
        )
      }
      style={{ background: token.colorBgContainer }}
      items={getItems(panelStyle)}
    />
  );
};

export default CollapseInfo;
