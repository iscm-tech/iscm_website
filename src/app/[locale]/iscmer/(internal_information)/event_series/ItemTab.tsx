"use client";

import envConfig from "@/config";
import { ConfigProvider, Image, Tabs } from "antd";

export default function ItemTabs() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            itemSelectedColor: "#ce2027",
          },
        },
      }}
    >
      <Tabs
        type="card"
        items={[
          {
            key: "2020",
            label: "2020",
            children: (
              <div className="p-4 border border-black">
                <Image
                  src={`${envConfig.API_ENDPOINT}/public/static/images/event_series/2020.jpg`}
                  alt="Event Series 2020"
                  width="100%"
                  height={600}
                  className="w-full object-contain"
                />
              </div>
            ),
            destroyOnHidden: true,
          },
          {
            key: "2021",
            label: "2021",
            children: (
              <div className="p-4 border border-black">
                <Image
                  src={`${envConfig.API_ENDPOINT}/public/static/images/event_series/2021.jpg`}
                  alt="Event Series 2021"
                  width="100%"
                  height={600}
                  className="w-full object-contain"
                />
              </div>
            ),
            destroyOnHidden: true,
          },
          {
            key: "2022",
            label: "2022",
            children: (
              <div className="p-4 border border-black">
                <Image
                  src={`${envConfig.API_ENDPOINT}/public/static/images/event_series/2022.png`}
                  alt="Event Series 2022"
                  width="100%"
                  height={600}
                  className="w-full object-contain"
                />
              </div>
            ),
            destroyOnHidden: true,
          },
          {
            key: "2023",
            label: "2023",
            children: (
              <div className="p-4 border border-black">
                <Image
                  src={`${envConfig.API_ENDPOINT}/public/static/images/event_series/2023.png`}
                  alt="Event Series 2023"
                  width="100%"
                  height={600}
                  className="w-full object-contain"
                />
              </div>
            ),
            destroyOnHidden: true,
          },
          {
            key: "2024",
            label: "2024",
            children: (
              <div className="p-4 border border-black">
                <Image
                  src={`${envConfig.API_ENDPOINT}/public/static/images/event_series/2024.png`}
                  alt="Event Series 2024"
                  width="100%"
                  height={600}
                  className="w-full object-contain"
                />
              </div>
            ),
            destroyOnHidden: true,
          },
          {
            key: "2025",
            label: "2025",
            children: (
              <div className="p-4 border border-black">
                <Image
                  src={`${envConfig.API_ENDPOINT}/public/static/images/event_series/2025.jpg`}
                  alt="Event Series 2025"
                  width="100%"
                  height={600}
                  className="w-full object-contain"
                />
              </div>
            ),
            destroyOnHidden: true,
          },
          {
            key: "2026",
            label: "2026",
            children: (
              <div className="p-4 border border-black">
                <Image
                  src={`${envConfig.API_ENDPOINT}/public/static/images/event_series/2026.png`}
                  alt="Event Series 2026"
                  width="100%"
                  height={600}
                  className="w-full object-contain"
                />
              </div>
            ),
            destroyOnHidden: true,
          },
        ]}
      />
    </ConfigProvider>
  );
}
