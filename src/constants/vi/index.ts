import envConfig from "@/config";
import { MenuType } from "@/types/menu.type";

export const address = "232/6 Võ Thị Sáu, phường Xuân Hòa, TP. Hồ Chí Minh";
export const copyright = "© Bản quyền thuộc về ISCM";

export const mainMenuVi: Array<MenuType> = [
  {
    name: "Về ISCM",
    subMenu: [
      {
        name: "Giới thiệu",
        url: "/overview",
      },
      {
        name: "Cơ sở vật chất",
        url: "/facilities",
      },
      {
        name: "Khác",
        group: [
          { name: "Bộ nhận diện thương hiệu", url: "/brand_identity" },
          {
            name: "Order Design",
            url: "https://forms.gle/9ZeiYxVvBkgpyYrh8",
          },
          {
            name: "Đăng ký mượn thiết bị",
            url: "https://docs.google.com/forms/d/e/1FAIpQLSfK4QSXLES1zIWIJYo-ETp4gAfMymGv-czIDAhjtJ_LaKH4ew/viewform",
          },
        ],
      },
    ],
  },
  {
    name: "Tin & Sự kiện",
    subMenu: [
      {
        name: "Trải nghiệm",
        group: [
          {
            name: "Nhịp sống ISCM",
            url: "/iscm_life",
          },
          {
            name: "Nhịp sống sinh viên",
            url: "/student_life",
          },
        ],
      },
      {
        name: "Góc nhìn chuyên gia",
        url: "/expert_insight",
      },
      {
        name: "Sự kiện sắp tới",
        url: "/events",
      },
    ],
  },
  {
    name: "Giáo dục",
    subMenu: [
      {
        name: "Đại học",
        group: [
          { name: "BAUD", url: "/undergraduate/baud" },
          { name: "BAUD - Kiến trúc sư", url: "/undergraduate/baud-arch" },
          { name: "BMOM", url: "/undergraduate/bmom" },
        ],
      },
      {
        name: "Sau đại học",
        group: [
          {
            name: "MSCIM",
            url: "/graduate/master-of-smart-city-and-innovation-management",
          },
        ],
      },
      {
        name: "Khóa học ngắn hạn",
        url: "/non_degree",
      },
      {
        name: "Khác",
        group: [
          { name: "Thông tin tuyển sinh", url: "/open_admission" },
          { name: "Đồ án sinh viên", url: "/facilities/student_studiolab" },
          { name: "Đồ án quốc tế", url: "/facilities/international_studiolab" },
          {
            name: "Chia sẻ kỹ năng",
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
        name: "Nghiên cứu",
        url: "/research",
        group: [
          {
            name: "Công bố khoa học",
            url: "/research/publications",
          },
          {
            name: "Dự án nghiên cứu",
            url: "/research/projects",
          },
          {
            name: "Sách xuất bản",
            url: "/research/books",
          },
        ],
      },
      {
        name: "Hệ thống phòng nghiên cứu",
        group: [
          {
            name: "Move System",
            url: `${envConfig.PRODUCTION_DOMAIN}/move-system`,
          },
        ],
      },
      {
        name: "Cuộc thi",
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
    name: "Nhân sự",
    subMenu: [
      {
        name: "",
        group: [
          {
            name: "Ban cố vấn",
            url: "/advisory",
          },
          {
            name: "Thành viên",
            url: "/members",
          },
          // {
          //   name: "Adjunct Professors",
          //   url: "/adjunctprofessors",
          // },
          {
            name: "Mạng lưới chuyên gia",
            url: "/network",
          },
        ],
      },
      { name: "", group: [{ name: "Tuyển dụng", url: "/recruitment" }] },
    ],
  },
];

export const iscmerMenuVi: MenuType = {
  name: "ISCMer",
  url: "/iscmer",
  subMenu: [
    {
      name: "UEH & Các đơn vị trực thuộc UEH",
      // url: "/iscmer/ueh",
      group: [
        { name: "UEHer", url: "/iscmer/ueh/ueher" },
        { name: "Tài chính kế toán", url: "/iscmer/ueh/finance&accounting" },
        { name: "Kho tri thức", url: "/iscmer/ueh/knowledge_hub" },
        {
          name: "Tra cứu chương trình đào tạo",
          url: "/iscmer/ueh/program_finder",
        },
        {
          name: "Khung thời gian đào tạo",
          url: "/iscmer/ueh/academic_calendar",
        },
      ],
    },
    {
      name: "Thông tin tổng thể",
      url: "/iscmer",
      group: [
        {
          name: "Chiến lược/Kế hoạch ISCM",
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
          name: "ISCM & Convergence Tech Hub",
          url: "/iscmer/internal/overview/convergence_tech_hub",
        },
        {
          name: "ISCM & MakerSpace",
          url: "/iscmer/internal/overview/makerspace",
        },
        // {
        //   name: "Thành viên mới",
        //   url: "/iscmer/internal/overview/onboarding_guide",
        // },
        {
          name: "Cơ cấu tổ chức",
          url: "/iscmer/internal/overview/company_organization",
        },
        {
          name: "Đánh giá nhân sự",
          url: "/iscmer/internal/overview/iscm_members_evaluation",
        },
      ],
    },
    {
      name: "Quản trị chung",
      group: [
        {
          name: "Nội quy và Quy định",
          url: "/iscmer/internal/administration/rules",
        },
        {
          name: "Tài chính và Thanh toán",
          url: "/iscmer/internal/administration/finance&payments",
        },
        {
          name: "Quy chế họp nội bộ",
          url: "/iscmer/internal/administration/meeting_regulations",
        },
        {
          name: "Quản trị Tổ chức sự kiện",
          url: "/iscmer/internal/administration/event",
        },
        {
          name: "Quản trị Thiết bị",
          url: "/iscmer/internal/administration/equipment",
        },
        {
          name: "Quản trị Sách",
          url: "/iscmer/internal/administration/book",
        },
        {
          name: "Mẫu - Tài liệu",
          url: "/iscmer/internal/administration/templates",
        },
        {
          name: "Tổng quan cấu trúc lưu trữ",
          url: "/iscmer/internal/administration/storage_structure",
        },
      ],
    },
    {
      name: "Quản trị theo từng nhóm",
      group: [
        {
          name: "Nhóm Vận hành & Tài chính",
          url: "/iscmer/internal/groups/operation_finance",
        },
        {
          name: "Nhóm Học thuật",
          url: "/iscmer/internal/groups/academia",
        },
        {
          name: "Nhóm Nghiên cứu",
          url: "/iscmer/internal/groups/research",
        },
        {
          name: "Nhóm Gắn kết cộng đồng",
          url: "/iscmer/internal/groups/community_engagement",
        },
        {
          name: "Nhóm Truyền thông",
          url: "/iscmer/internal/groups/pr_communication",
        },
        {
          name: "Nhóm Quan hệ đối tác",
          url: "/iscmer/internal/groups/partnership",
        },
      ],
    },
  ],
};

export const iscmname =
  'Viện <br class="lg:hidden inline-block" /> Đô thị Thông minh và Quản lý';

// About
export const about = {
  title: "Giới thiệu về ISCM",
  image: "/images/about/about-page.jpg",
  content:
    "Được chính thức thành lập vào Tháng 9 năm 2020, Viện Đô thị Thông minh và Quản lý (ISCM) là viện nghiên cứu và giáo dục trực thuộc Trường Công nghệ và Thiết kế, Đại học Kinh tế TP. Hồ Chí Minh (UEH - CTD). ISCM đang tích cực đẩy mạnh các hoạt động giáo dục quốc tế và tích hợp đa ngành, cùng các dự án/đề án giải quyết vấn đề thực tiễn địa phương thông qua tư duy toàn cầu. Đây chính là những nỗ lực để ISCM có thể kiến tạo cộng đồng chung tay phát triển tính thông minh và bền vững của cộng đồng.",
};

// Success story
export const success_story = {
  bg_image: "/images/backgrounds/success_story.jpg",
  content:
    "Ở ISCM, Đô thị Thông minh không phải là một điểm đến, mà là một hành trình liên tục để bảo vệ trục phát triển bền vững của đô thị. Đối với chúng tôi, mỗi vùng, mỗi đô thị đều có bản chất là một thực thể sống. Trong sự chuyển động và phát triển liên tục của chính thực thể đó, các vấn đề sẽ xuất hiện, làm mất đi tính cân bằng và bền vững vốn có. Ở đô thị thông minh của chúng tôi, các vấn đề này được giải quyết không chỉ qua công nghệ, mà còn qua việc sử dụng các nguồn lực một cách bền vững, các quyết định lấy con người làm trung tâm, và sự đoàn kết của các đại học, tổ chức, chính phủ, các bên liên quan, và cộng đồng để kiến tạo một văn hóa đồng sáng tạo. Chính điều này sẽ giúp cho thực thể sống này trở nên sống động hơn, trở thành một nơi dành cho tất cả mọi người, không để một ai bị bỏ lại phía sau. ISCM, với sứ mệnh về giáo dục và nghiên cứu trong các lĩnh vực Quy hoạch thông minh, Thiết kế thông minh, Quản lý thông minh, Giao thông thông minh, và Ứng dụng tích hợp, đã đang và sẽ luôn hướng tới phát triển các vùng xanh và bền vững trong tương lai. ISCM được truyền cảm hứng, và là một cộng đồng truyền cảm hứng với sự đổi mới, sáng tạo, và hoài bão cho một hành trình cống hiến cho Đô thị bền vững không hồi kết. <br /><br /> PGS. TS. Trịnh Tú Anh, <br /> Viện trưởng Viện Đô thị Thông minh và Quản lý",
};

export const breadcrumb: {
  [key: string]: {
    title: string;
    shortDesc: string;
  };
} = {
  overview: {
    title: "Giới thiệu",
    shortDesc:
      "Tại ISCM, chúng tôi kết nối con người và tri thức để cùng giải quyết các vấn đề đô thị. Từ sinh viên đến các bên liên quan, mọi người cùng chung tay vì một mục tiêu chung: kiến tạo tương lai đô thị bền vững, toàn diện và thông minh.",
  },
  iscm_life: {
    title: "Nhịp sống ISCM",
    shortDesc:
      'Trên hành trình "Shaping the Unknown Future", ISCM không ngừng triển khai các hoạt động giáo dục, nghiên cứu và đề án hỗ trợ đa đối tượng, với mục tiêu kết nối cộng đồng và kiến tạo các vùng đô thị thông minh, bền vững. Chúng tôi tin rằng hành trình này sẽ tiếp tục để lại nhiều dấu ấn tích cực cho cộng đồng hôm nay và mai sau.',
  },
  student_life: {
    title: "Nhịp sống sinh viên",
    shortDesc: "",
  },
  expert_insight: { title: "Góc nhìn chuyên gia", shortDesc: "" },
  iscm_in_the_media: { title: "Báo chí nói gì về ISCM", shortDesc: "" },
  open_admission: { title: "Tuyển sinh", shortDesc: "" },
  events: {
    title: "Sự kiện sắp tới",
    shortDesc:
      "Với mục tiêu lan tỏa tri thức đến cộng đồng, đặc biệt trong các lĩnh vực công nghệ, thiết kế và phát triển vùng đô thị thông minh và bền vững, Viện Đô thị Thông minh và Quản lý thường xuyên tổ chức các hoạt động như webinar, hội thảo, hội nghị, workshop và cuộc thi. Các chương trình này thu hút sự tham gia và chia sẻ từ các chuyên gia giàu kinh nghiệm đến từ các trường đại học, viện nghiên cứu và doanh nghiệp trên toàn thế giới.",
  },
  research: {
    title: "Nghiên cứu",
    shortDesc:
      "Nghiên cứu là một trong những nền tảng chính tại ISCM, được thực hiện thông qua hợp tác với các đối tác trong và ngoài nước. Các ưu tiên nghiên cứu tập trung vào việc phát triển giải pháp nhằm giải quyết thách thức đô thị, thúc đẩy đổi mới công nghệ, phát triển bền vững và tiến bộ xã hội.",
  },
  studiolab: {
    title: "StudioLab",
    shortDesc:
      "ISCM StudioLab phát triển cả không gian mở và trong nhà, được trang bị công nghệ tiên tiến để các bên liên quan có quan tâm có thể trải nghiệm môi trường tương tác. Tại đây, các công cụ vật lý và thiết bị ảo hỗ trợ đắc lực cho hoạt động học tập, nghiên cứu nhằm mô phỏng và tối ưu hóa giải pháp cho các vấn đề thực tiễn. Tất cả thiết bị hiện đại được khuyến khích sử dụng để đạt được kết quả tốt nhất.",
  },
  advisory: {
    title: "Ban cố vấn",
    shortDesc:
      "Ban Cố Vấn của ISCM là những giáo sư và nhà quản lý xuất sắc, đã và đang đảm nhiệm các trọng trách quan trọng trong chính phủ, trường đại học, và tập đoàn lớn. Các ý kiến đóng góp của ban cố vấn được chọn lọc và tiếp thu để đưa vào thực tiễn giảng dạy và nghiên cứu.",
  },
  members: {
    title: "Thành viên",
    shortDesc:
      "Năng động, sáng tạo, và bền vững. Đội ngũ ISCM tập trung các giáo sư, chuyên gia đến từ các lĩnh vực liên quan đến thiết kế kiến trúc, quy hoạch đô thị tại Việt Nam và trên toàn thế giới. Chúng tôi gắn kết với nhau, và cùng nhau bước trên hành trình kiến tạo tính thông minh và bền vững cho vùng và đô thị, thông qua các hoạt động nghiên cứu và giáo dục.",
  },
  adjunctprofessors: {
    title: "Adjunct Professors",
    shortDesc:
      "Đội ngũ Adjunct Professors là các giáo sư đầu ngành đang giảng dạy tại các trường đại học là đối tác chiến lược của ISCM. Các giáo sư sẽ trực tiếp tham gia giảng dạy các cấu phần quan trọng từ giáo dục đại học đến đào tạo thạc sĩ và tiến sĩ. Các bạn sinh viên sẽ có cơ hội được học bằng tiếng Anh và được hướng dẫn tận tình từ các giáo sư ngay cả khi đang ở Việt Nam hay khi qua học tập tại cơ sở của trường đối tác trong khuôn khổ chương trình học.",
  },
  network: {
    title: "Mạng lưới chuyên gia",
    shortDesc:
      "Thực hiện sứ mạng kết nối cộng đồng hướng tới kiến tạo vùng và đô thị bền vững, ISCM đã xây dựng Mạng lưới Chuyên gia ở Việt Nam và trên toàn thế giới. Đây là nơi các giáo sư, chuyên gia hàng đầu trong các lĩnh vực trao đổi tri thức, kinh nghiệm và góc nhìn của bản thân về các vấn đề đô thị. Bên cạnh đó, đây cũng là nơi hành động vì một cuộc sống và cộng đồng bền vững hơn, không để ai bị bỏ lại phía sau với hoạt động giáo dục, dự án nghiên cứu kết hợp giữa chuyên gia, cơ sở ban ngành và người dân",
  },
  student_studiolab: { title: "Đồ án sinh viên", shortDesc: "" },
  international_studiolab: { title: "Đồ án quốc tế", shortDesc: "" },
  competition: {
    title: "Cuộc thi",
    shortDesc:
      "Các cuộc thi được tổ chức thường xuyên, định kỳ, tạo sân chơi trí tuệ nhằm khuyến khích tư duy đổi mới và mối quan tâm đến các vấn đề đô thị cũng như phát triển giải pháp một cách sáng tạo.",
  },
  graduate: {
    title: "Sau đại học",
    shortDesc:
      "Chương trình Thạc sĩ Quản trị Đô thị Thông minh và Sáng tạo là nơi các nhà quản trị đô thị tương lai được rèn luyện để phát triển và đưa ra các giải pháp xây dựng cộng đồng và khu vực thông minh, bền vững bằng cách tiếp cận logic, sáng tạo và thực tiễn. Với môi trường học thuật cởi mở, mang tính quốc tế, chương trình quy tụ đội ngũ giảng viên là các giáo sư, chuyên gia hàng đầu trong lĩnh vực thiết kế và quy hoạch đô thị đến từ Việt Nam và nhiều quốc gia khác. Người học có cơ hội tham gia chương trình liên kết quốc tế tại Bỉ (Đại học Hasselt và Đại học KU Leuven) và Hàn Quốc (Handong Global University).",
  },
  non_degree: {
    title: "Khóa học ngắn hạn",
    shortDesc:
      "Bên cạnh các chương trình đào tạo cấp bằng, ISCM hiện có tổ chức các chương trình đào tạo không cấp bằng dưới hình thức các khóa học ngắn hạn. Các khóa ngắn hạn được tổ chức đại trà hoặc linh hoạt thiết kế riêng theo nhu cầu của đối tác.",
  },
  undergraduate: {
    title: "Kiến Trúc và Thiết Kế Đô Thị Thông Minh",
    shortDesc:
      "Một trong những chương trình đào tạo bậc đại học cung cấp góc nhìn đa ngành, đa lĩnh vực để giải quyết các vấn đề thực tiễn thông qua thiết kế trong quá trình phát triển đô thị. Bên cạnh đó, chương trình học cũng được thiết kế để sinh viên được tiếp cận với vấn đề thực tế, khuyến khích ứng dụng công nghệ để đưa ra giải pháp, cũng như có cơ hội được kết nối với chuyên gia và sinh viên nước ngoài. Từ đó, sinh viên có được kinh nghiệm về hướng tác động hiệu quả đến khu vực thông qua các nút kết nối ở các lĩnh vực liên quan với nhau ngay khi còn ngồi trên ghế nhà trường. Sinh viên theo học sẽ có cơ hội tham gia chương trình song bằng với Đại học Auckland tại New Zealand.",
  },
  recruitment: {
    title: "Tuyển dụng",
    shortDesc: "",
  },
  publications: {
    title: "Công bố khoa học",
    shortDesc: "",
  },
  projects: {
    title: "Dự án nghiên cứu",
    shortDesc: "",
  },
  library: {
    title: "Thư viện",
    shortDesc: "",
  },
  books: {
    title: "Sách xuất bản",
    shortDesc: "",
  },
};
