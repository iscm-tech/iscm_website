"use client";

import { ConfigProvider, FloatButton } from "antd";

export default function FloatButtonCustom({
  style,
  children,
}: {
  style?: React.CSSProperties;
  children?: React.ReactNode;
}) {
  return (
    <ConfigProvider
      theme={{
        token: { colorPrimary: "#cd2027" },
      }}
    >
      <FloatButton.Group
        shape="circle"
        styles={{
          list: {
            alignItems: "flex-end",
          },
        }}
        style={{
          insetBlockEnd: 24,
          ...style,
        }}
      >
        {children}
      </FloatButton.Group>
    </ConfigProvider>
  );
}
