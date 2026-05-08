import envConfig from "@/config";
import { MenuType } from "@/types/menu.type";
export const address = "232/6 Vo Thi Sau St., Xuan Hoa Ward, HCMC, Vietnam";
export const copyright = "© Copyright by ISCM";

export const mainMenuEn: Array<MenuType> = [
  {
    name: "About",
    subMenu: [
      {
        name: "Overview",
        url: "/overview",
      },
      {
        name: "Facilities",
        url: "/facilities",
      },
      {
        name: "More",
        group: [
          { name: "Library", url: "/library" },
          { name: "Order Design", url: "https://forms.gle/9ZeiYxVvBkgpyYrh8" },
        ],
      },
    ],
  },
  {
    name: "News & Events",
    subMenu: [
      {
        name: "Experience",
        group: [
          {
            name: "ISCM Life",
            url: "/iscm_life",
          },
          {
            name: "Student Life",
            url: "/student_life",
          },
        ],
      },
      {
        name: "Expert Insights",
        url: "/expert_insight",
      },
      {
        name: "Up-coming Events",
        url: "/events",
      },
    ],
  },
  {
    name: "Education",
    subMenu: [
      {
        name: "Undergraduate",
        group: [
          { name: "BAUD", url: "/undergraduate/baud" },
          { name: "BAUD - Architect", url: "/undergraduate/baud-arch" },
          { name: "BMOM", url: "/undergraduate/bmom" },
        ],
      },
      {
        name: "Graduate",
        group: [
          {
            name: "MSCIM",
            url: "/graduate/master-of-smart-city-and-innovation-management",
          },
        ],
      },
      {
        name: "Non-degree Programs",
        url: "/non_degree",
      },
      {
        name: "More",
        group: [
          { name: "Admission", url: "/open_admission" },
          { name: "Student StudioLab", url: "/facilities/student_studiolab" },
          {
            name: "International StudioLab",
            url: "/facilities/international_studiolab",
          },
          {
            name: "Skill Share",
            url: "https://bit.ly/iscm-skillshare",
          },
        ],
      },
    ],
  },
  {
    name: "R&D",
    subMenu: [
      {
        name: "Research",
        url: "/research",
        group: [
          {
            name: "Publications",
            url: "/research/publications",
          },
          {
            name: "Projects",
            url: "/research/projects",
          },
          {
            name: "Books",
            url: "/research/books",
          },
        ],
      },
      {
        name: "LivingLab",
        group: [
          {
            name: "Move System",
            url: `${envConfig.PRODUCTION_DOMAIN}/move-system`,
          },
        ],
      },
      {
        name: "Competition",
        url: "/competition",
        group: [
          {
            name: "IDC 2020",
            url: "/competition/futurecity",
          },
          {
            name: "IDC 2021",
            url: "/competition/smartcityplus",
          },
          {
            name: "IDC 2023",
            url: "/competition/carbonneutrality",
          },
          {
            name: "IDC 2025",
            url: "/competition/4th_international_design_competition",
          },
        ],
      },
    ],
  },
  {
    name: "People",
    subMenu: [
      {
        name: "",
        group: [
          {
            name: "Advisory Board",
            url: "/advisory",
          },
          {
            name: "Members",
            url: "/members",
          },
          // {
          //   name: "Adjunct Professors",
          //   url: "/adjunctprofessors",
          // },
          {
            name: "Glocal Experts",
            url: "/network",
          },
        ],
      },
      { name: "", group: [{ name: "Recruitment", url: "/recruitment" }] },
    ],
  },
];

export const iscmerMenuEn: MenuType = {
  name: "ISCMer",
  url: "/iscmer",
  subMenu: [
    {
      name: "UEH & Affiliated Units",
      // url: "/iscmer/ueh",
      group: [
        { name: "UEHer", url: "/iscmer/ueh/ueher" },
        { name: "Finance & Accounting", url: "/iscmer/ueh/finance&accounting" },
        { name: "Knowledge Hub", url: "/iscmer/ueh/knowledge_hub" },
        {
          name: "Training Program Search System",
          url: "/iscmer/ueh/program_finder",
        },
        {
          name: "Academic Calendar",
          url: "/iscmer/ueh/academic_calendar",
        },
      ],
    },
    {
      name: "New Members",
      url: "/iscmer/internal/onboarding_guide",
    },
    {
      name: "Overview",
      url: "/iscmer",
      group: [
        {
          name: "ISCM Strategy/Plan",
          url: "/iscmer/internal/overview/strategy+plan",
        },
        {
          name: "ISCM & UEH",
          url: "/iscmer/internal/overview/ueh",
        },
        {
          name: "ISCM & CTD",
          url: "/iscmer/internal/overview/ctd",
        },
        {
          name: "ISCM & UEH Sustainability",
          url: "/iscmer/internal/overview/ueh_sustainability",
        },
        {
          name: "ISCM & Covergence Tech Hub",
          url: "/iscmer/internal/overview/convergence_tech_hub",
        },
        {
          name: "ISCM & MakerSpace",
          url: "/iscmer/internal/overview/makerspace",
        },
        {
          name: "Company Organization",
          url: "/iscmer/internal/overview/company_organization",
        },
        {
          name: "Review and Assessment of ISCM Members",
          url: "/iscmer/internal/overview/iscm_members_evaluation",
        },
      ],
    },
    {
      name: "General Administration",
      group: [
        {
          name: "Internal Rules and Regulations",
          url: "/iscmer/internal/administration/rules",
        },
        {
          name: "Finance & Payments",
          url: "/iscmer/internal/administration/finance&payments",
        },
        {
          name: "Internal Meeting Regulations",
          url: "/iscmer/internal/administration/meeting_regulations",
        },
        {
          name: "Event Procedure",
          url: "/iscmer/internal/administration/event",
        },
        {
          name: "Equipment Procedure",
          url: "/iscmer/internal/administration/equipment",
        },
        {
          name: "Book Procedure",
          url: "/iscmer/internal/administration/book",
        },
        {
          name: "Templates - Documents",
          url: "/iscmer/internal/administration/templates",
        },
        {
          name: "Storage Structure",
          url: "/iscmer/internal/administration/storage_structure",
        },
      ],
    },
    {
      name: "Group-based Management",
      group: [
        {
          name: "Operation & Finance",
          url: "/iscmer/internal/groups/operation_finance",
        },
        {
          name: "Academia",
          url: "/iscmer/internal/groups/academia",
        },
        {
          name: "Research",
          url: "/iscmer/internal/groups/research",
        },
        {
          name: "Community Engagement",
          url: "/iscmer/internal/groups/community_engagement",
        },
        {
          name: "PR & Communication",
          url: "/iscmer/internal/groups/pr_communication",
        },
        {
          name: "Partnership",
          url: "/iscmer/internal/groups/partnership",
        },
      ],
    },
  ],
};

export const iscmname =
  'Institute of <br class="lg:hidden inline-block" /> Smart City and Management';

// About
export const about = {
  title: "About ISCM",
  image: "/images/about/about-page.jpg",
  content:
    "Founded in September 2020, the Institute of Smart City and Management (ISCM) is a part of the College of Technology and Design, University of Economics Ho Chi Minh City (UEH University). Aspiring to develop communal efforts to improve the smartness, resilience, and sustainability of the society, ISCM has actively marked the way in improving the quality of urban futures through international integrated education activities, and practical problem-solving projects.",
};
// Success story
export const success_story = {
  bg_image: "/images/backgrounds/success_story.jpg",
  content:
    "At ISCM, Smart City is not about the destination, it is about a lifelong journey. From our perspective, cities are considered organisms full of ceaseless activities. In these activities, urban problems may emerge. To effectively solve these problems, we must prioritize them, allocate our limited assets, and apply technology to create smart solutions. Smart is not only about applying advanced technology, but it also integrates all efficient resources as sustainable as possible. Within our smart city, decisions are human-centric, and the unity of universities, organizations, government,  stakeholders, and communities create a co-creative culture. This, hereby, leads this organism to be more lively, a place for all people, leaving no one behind. </br> </br> We are shaping the unknown future by our main fields of Smart Planning, Smart Design, Smart Management, Smart Transportation, and Integrated Application. We warmly welcome you to join our extensive network, be inspired, and inspire the world by our innovation, ambition, and creativity. </br> </br> Assoc. Prof. Tu Anh Trinh, <br /> Director of Institute of Smart City and Management",
};

export const portalCates: { [key: number | string]: string } = {
  392: "Tin tức nổi bật",
  393: "Cuộc sống ISCM",
  394: "Khoa học - Góc nhìn chuyên gia",
  395: "Báo chí nói về ISCM",
  396: "Tuyển sinh và hướng nghiệp",
};

export const breadcrumb: {
  [key: string]: {
    title: string;
    shortDesc: string;
  };
} = {
  overview: {
    title: "About us",
    shortDesc:
      "Different people, students, and stakeholders from diverse backgrounds unite to solve local challenges through global thinking. This is how the Institute of Smart City and Management (ISCM) advances on our lifelong journey, where everyone joins hands with a shared vision to build smarter, more inclusive and sustainable futures.",
  },
  student_life: {
    title: "Student Life",
    shortDesc: "",
  },
  iscm_life: {
    title: "ISCM Life",
    shortDesc:
      "On the journey of “Shaping the Unknown Future,” ISCM continuously carries out educational activities, research projects, and initiatives that support diverse communities, aiming to connect people and foster smart and sustainable urban development. We believe this journey will continue to create positive impacts for communities today and in the future.",
  },
  expert_insight: { title: "Expert Insight", shortDesc: "" },
  iscm_in_the_media: { title: "ISCM in the Media", shortDesc: "" },
  open_admission: { title: "Open Admission", shortDesc: "" },
  events: {
    title: "Up-coming Events",
    shortDesc:
      "With a strong commitment to knowledge sharing and community engagement—particularly in the areas of technology, design, and the development of smart and sustainable urban and regional environments—the Institute of Smart City and Management (ISCM) regularly hosts a range of academic and professional events. These include webinars, seminars, conferences, workshops, and competitions. Such initiatives consistently garner interest and active participation from distinguished experts worldwide, representing leading universities, research institutions, and enterprises. Many of these contributors are also research partners and guest speakers closely affiliated with ISCM.",
  },
  research: {
    title: "Research",
    shortDesc:
      "Research is one of the key pillars that drives ISCM’s performance and is conducted out in collaboration with both local and international partners. Our priorities are the research-led solutions to urban challenges, technological advances, sustainability and social development.",
  },
  studiolab: {
    title: "StudioLab",
    shortDesc:
      "Studio Lab includes open and in-house space with advanced technology for all stakeholders to experience an interactive environment. At ISCM Studio Lab, physical tools and virtual appliances well facilitate study and research activities to simulate and optimize solutions to practical issues. All stakeholders are encouraged to approach the modern equipment to reach the fullest outcomes.",
  },
  advisory: {
    title: "Advisory Board",
    shortDesc:
      "ISCM’s Advisory Board is composed of distinguished educators and administrators who have held leadership positions in government, universities and major corporations. The board’s guidance is highly valued and integrated to enhance the quality and effectiveness of both teaching and research.",
  },
  members: {
    title: "Members",
    shortDesc:
      "The ISCM team is proud to be an active and resilient team bringing together glocal talents from diverse fields. Together, we work to contribute to our lifelong journey towards sustainable regional and urban life, through educational and research activities.",
  },
  adjunctprofessors: {
    title: "Adjunct Professors",
    shortDesc:
      "Thanks to valuable contributions and generous support from our adjunct professors, who are distinguished scholars and researchers from reputable universities in Europe and South Korea, students of ISCM will have opportunities to learn and be supervised directly from our adjunct professors.",
  },
  network: {
    title: "Glocal Experts",
    shortDesc:
      "The ISCM Glocal Expert Network brings together like-minded professionals, who are professionals with specialised expertise across diverse sectors. The network is a platform to exchange specialized knowledge, experience, and insights. Additionally, it helps inspire passion for science, and develop a better education/life through various activities of mutual benefit including training, research, and support for local authorities and communities.",
  },
  student_studiolab: { title: "Student StudioLab", shortDesc: "" },
  international_studiolab: { title: "International StudioLab", shortDesc: "" },
  competition: {
    title: "Competition",
    shortDesc:
      "Competitions are regular activities, offering a knowledgeable platform to encourage participants to promote innovation and interest in solving urban issues in creative ways.",
  },
  graduate: {
    title: "Graduate program",
    shortDesc:
      "The Master’s Program in Smart City and Innovation Management is a place for future urban managers to develop and implement solutions for building intelligent and sustainable communities and regions through logical, creative, and practical approaches. With an open and internationally oriented academic environment, the program brings together a distinguished faculty of leading professors and experts in urban design and planning from Vietnam and around the world. Students also have the opportunity to participate in international joint programs in Belgium (Hasselt University and KU Leuven) and South Korea (Handong Global University).",
  },
  non_degree: {
    title: "Non-degree Program",
    shortDesc: `The Institute of Smart City and Management (ISCM) offers diverse non-degree programs to advance global leadership and urban innovation. These programs serve two main groups: high-level officials, undergraduate or graduate students.
For professionals and policymakers, ISCM provides the Advanced Program for Glocal Leaders, focused on leadership development and capacity building. This program equips participants with strategic insights and essential skills to address complex urban challenges effectively.
Meanwhile, students can participate in international design studios, summer courses, and workshops, organized in collaboration with global university partners. These hands-on programs are held in various locations worldwide, offering interdisciplinary learning, cultural exchange, and practical solutions for smart city development.`,
  },
  undergraduate: {
    title: "Bachelor in Architectural and Urban Design inclusive Smart City",
    shortDesc:
      "Architectural and Urban Design Inclusive Smart City Bachelor Program is one of the programs in UEH with multidisciplinary and sustainable approaches. Students enrolling in the program steps on the journey to sharpening their multi-angle analysis of community hindrances, applying technology and finally devote themselves to “think globally, act locally” solutions. Students also have a chance to study abroad with the Dual Degree Program in New Zealand with the University of Auckland.",
  },
  recruitment: {
    title: "Recruitment",
    shortDesc: "",
  },
  publications: {
    title: "Pulications",
    shortDesc: "",
  },
  projects: {
    title: "Projects",
    shortDesc: "",
  },
  library: {
    title: "Library",
    shortDesc: "",
  },
  books: {
    title: "Books",
    shortDesc: "",
  },
};
