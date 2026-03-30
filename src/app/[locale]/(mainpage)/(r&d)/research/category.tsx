"use client";

import { ibm_plex_sans } from "@/app/fontDeclare";
import { Modal } from "antd";
import { set } from "date-fns";
import { useLocale } from "next-intl";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";

const mainstream_cate = [
  {
    title: "Framework Transition",
    introduction:
      "Framework Transition involves redefining existing paradigms to enhance urban governance and development. It includes Governance and Policy Innovation, which fosters collaborative and adaptive policymaking among stakeholders to address dynamic urban needs. This mainstream also emphasizes Global and Comparative Urban Development, allowing cities to learn from diverse practices worldwide and adopt solutions tailored to their contexts. Lastly, the Smart City Model and Framework integrates technology and data analytics into urban planning, improving infrastructure and public services while enhancing the quality of life for residents. Together, these elements promote resilient, efficient, and sustainable urban environments.",
    thumb: "/images/researches/framework.png",
    introductionVi:
      "Tập trung định hình lại mô hình đô thị thông qua đổi mới chính sách và quản trị, thúc đẩy hợp tác đa bên và tích hợp công nghệ vào quy hoạch nhằm nâng cao khả năng phục hồi và chất lượng sống đô thị.",
  },
  {
    title: "Glocal Design",
    introduction:
      "Glocal Design emphasizes the integration of local context with global perspectives in urban planning and development, focusing on Urban Sustainability and Resilience as well as Smart Housing. It advocates for creating urban environments that can adapt to environmental, social, and economic challenges by promoting sustainable practices that minimize resource consumption and enhance residents' quality of life. Resilience strategies address climate change and social inequalities, ensuring cities can recover from disruptions. Additionally, Smart Housing incorporates advanced technologies and sustainable design principles to create energy-efficient, accessible homes that meet the diverse needs of communities while prioritizing environmental sustainability and community engagement.",
    thumb: "/images/researches/Glocal Design.png",
    introductionVi:
      "Kết hợp bối cảnh địa phương với góc nhìn toàn cầu trong thiết kế, hướng tới môi trường đô thị bền vững và thích ứng. Bao gồm các giải pháp nhà ở thông minh, tiết kiệm tài nguyên và thân thiện với cộng đồng.",
  },
  {
    title: "Human-Centric Orientation",
    introduction:
      "Human-Centric Orientation centers on the needs and experiences of individuals in urban planning, highlighting Social Equity and Inclusive Urban Design, Health and Well-Being, and Behavioral Study alongside Human-Centric Design. This approach aims to create urban environments that are accessible and equitable for all residents, ensuring that marginalized communities can actively participate in the planning process and benefit from inclusive public spaces. It emphasizes the connection between urban design and the health of individuals, advocating for environments that promote physical activity, mental well-being, and social interactions. By incorporating insights from behavioral studies, planners can better understand how people engage with their surroundings, leading to the creation of spaces that prioritize user experience and foster a sense of community, ultimately enhancing the quality of life for all urban dwellers.",
    cateLink: "/research/human_centric_approach",
    thumb: "/images/researches/human.jpg",
    introductionVi:
      "Tập trung vào công bằng xã hội, sức khỏe cộng đồng và thiết kế đô thị hòa nhập để nâng cao chất lượng sống cho mọi nhóm cư dân. Lấy con người làm trọng tâm trong các thiết kế, giải pháp.",
  },
  {
    title: "Tech Solutions",
    introduction:
      "Tech Solutions mainstream encompasses the integration of technology into urban planning and development, focusing on Smart Infrastructure and Tech, Data-driven Urban Design, and Emerging Technologies in Urban Context. Smart Infrastructure and Tech applies advanced tools, such as IoT and sensors, to enhance the efficiency and functionality of urban systems, improving services like transportation, waste management, and energy usage. Data-driven and Urban Design leverages analytics and real-time data to inform planning decisions, enabling more responsive and adaptive environments that meet the dynamic needs of residents. Additionally, Emerging Tech in Urban Context applies technologies to address urban challenges, streamline processes, and foster innovation in governance and community engagement, ultimately creating smarter, more resilient urban spaces.",
    cateLink: "/research/tech_solutions",
    thumb: "/images/researches/sim_lab.jpg",
    introductionVi:
      "Ứng dụng công nghệ trong quy hoạch và phát triển đô thị. Bao gồm hạ tầng thông minh, phân tích dữ liệu, IoT, và công nghệ mới nhằm tối ưu dịch vụ đô thị và tăng cường sự tham gia của cộng đồng.",
  },
  {
    title: "Urban System",
    introduction:
      "Urban System focuses on the interconnected components that shape urban life, emphasizing Urban Mobility and Transportation, Disaster Preparedness and Urban Safety, and Urban Economics. Effective urban mobility and transportation systems are essential for facilitating movement, reducing congestion, and promoting accessibility, thereby enhancing the overall quality of urban life. Disaster Preparedness and Urban Safety involve planning and infrastructure designed to mitigate risks from natural disasters and ensure the protection of residents, fostering resilience in the face of emergencies. Additionally, Urban Economics examines the financial dynamics of cities, including the impact of economic policies, real estate markets, and employment opportunities, striving to create sustainable economic growth while addressing inequalities and enhancing the overall prosperity of urban communities.",
    cateLink: "/research/urban_system",
    thumb: "/images/studiolab/test_bed.jpg",
    introductionVi:
      "Nghiên cứu các hệ thống cấu thành đô thị như giao thông, kinh tế, an toàn và ứng phó thiên tai. Hướng tới sự kết nối linh hoạt giữa hạ tầng và con người để xây dựng đô thị hiệu quả và bền vững.",
  },
];

export default function ResearchCategory() {
  const [activeCate, setActiveCate] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setActiveCate((prev) => {
        if (prev === mainstream_cate.length - 1) return 0;
        return prev + 1;
      });
    }, 3000);
  }, []);

  return (
    <>
      <div className="!hidden lg:!block">
        <div
          className="row flex-nowrap w-full transition-transform duration-500"
          style={{
            transform: `translateX(calc(-${activeCate} * 50%))`,
            transformOrigin: "left center",
          }}
        >
          {mainstream_cate.map((cate) => (
            <CateCard key={cate.title} {...cate} />
          ))}
        </div>

        <div className="flex mt-4">
          {Array.from({ length: mainstream_cate.length }).map((_, id) => (
            <div
              key={id}
              className={`rounded-full h-5 mx-1 ${id === activeCate ? "w-10 bg-[#cd2027]" : "w-5 bg-gray-300 hover:scale-125"} transition-all cursor-pointer duration-300`}
              onClick={() => setActiveCate(id)}
            ></div>
          ))}
        </div>
      </div>

      <div className="!block lg:!hidden">
        {mainstream_cate.map((cate, id) => (
          <Cate key={id} {...cate} />
        ))}
      </div>
    </>
  );
}

const CateCard = (cate: (typeof mainstream_cate)[0]) => {
  const locale = useLocale();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        key={cate.title}
        className="col-12 col-lg-6"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex flex-col items-center bg-gray-200 hover:bg-gray-300 pt-3 px-3 transition-colors duration-300 cursor-pointer rounded-lg w-full h-full">
          <figure className="flex-1 w-full mb-0">
            <Image
              src={cate.thumb}
              alt={cate.title}
              className="max-h-[450px] w-full h-full rounded-md object-cover"
              width={650}
              height={200}
              quality={100}
            />
          </figure>
          <h3 className={`${ibm_plex_sans.className} mb-0 leading-[46.8px]`}>
            {cate.title}
          </h3>
        </div>
      </div>
      <Modal
        title={<h3>{cate.title}</h3>}
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={<></>}
        className="!w-fit max-w-[50vw]"
      >
        <figure className="mb-0 h-[250px]">
          <Image
            src={cate.thumb}
            alt={cate.title}
            className="h-full object-contain"
            width={650}
            height={200}
            quality={100}
          />
        </figure>
        <p className="text-base font-normal m-0 mt-2 w-full text-justify">
          {locale === "en" ? cate.introduction : cate.introductionVi}
        </p>
      </Modal>
    </>
  );
};

const Cate = (cate: (typeof mainstream_cate)[0]) => {
  const locale = useLocale();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Fragment key={cate.title + "lg"}>
      <div
        key={cate.title}
        className="mb-3 col-12 bg-gray-200 hover:bg-gray-300 pt-3 rounded-lg transition-colors duration-300"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex flex-col items-center cursor-pointer rounded-lg w-full h-full">
          <figure className="flex-1 w-full mb-0">
            <Image
              src={cate.thumb}
              alt={cate.title}
              className="max-h-[450px] w-full h-full rounded-md object-cover"
              width={650}
              height={200}
              quality={100}
            />
          </figure>
          <h3 className={`${ibm_plex_sans.className} mb-0 leading-[46.8px]`}>
            {cate.title}
          </h3>
        </div>
      </div>
      <Modal
        title={<h3>{cate.title}</h3>}
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={<></>}
        className="!w-fit max-w-[50vw]"
      >
        <figure className="mb-0 h-[250px]">
          <Image
            src={cate.thumb}
            alt={cate.title}
            className="h-full object-contain"
            width={650}
            height={200}
            quality={100}
          />
        </figure>
        <p className="text-base font-normal m-0 mt-2 w-full text-justify">
          {locale === "en" ? cate.introduction : cate.introductionVi}
        </p>
      </Modal>
    </Fragment>
  );
};
