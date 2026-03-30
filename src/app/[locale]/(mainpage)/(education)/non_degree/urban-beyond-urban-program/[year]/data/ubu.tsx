import Link from "next/link";
import React from "react";

const data: {
  [key: string]: {
    thumbnail: string;
    topic: string;
    descVi: React.ReactNode;
    descEn: React.ReactNode;
    gallery?: string[];
    booklet?: string[];
    topicVi?: string;
  };
} = {
  "2024": {
    thumbnail:
      "https://iscm-api.ueh.edu.vn/public/static/images/courses/non-degree/ubu/ubu2024/ubu.png",
    topic:
      "Smart Approach: Co-Design Platform & Nature-Based Solutions for Cam Lam, Khanh Hoa",
    descVi: (
      <p>
        ☀️Cuối tháng 7/2024, Viện Đô thị Thông minh và Quản lý, kết hợp cùng Đại
        học Handong Global (Hàn Quốc), Đại học Ngurah Rai (Indonesia), Đại học
        KU Leuven (Bỉ), và Đại học Trieste (Ý), tổ chức Trại hè Quốc tế Vươn tầm
        Đô thị (Urban Beyond the Urban - UBU) 2024 tại Cam Lâm - Khánh Hòa. Năm
        nay, trại hè lấy chủ đề “Tiếp cận Thông minh: Nền tảng Đồng Sáng tạo và
        Giải pháp Thuận tự nhiên cho Cam Lâm, Khánh Hòa”. <br /> <br />
        🌳 Chương trình Trại hè Quốc tế Urban Beyond the Urban ở Cam Lâm - Khánh
        Hòa đã để lại nhiều dấu ấn trên hành trình kết nối tri thức giữa sinh
        viên đến từ nhiều nước trên thế giới. Chúng tôi tin rằng, cùng với những
        quan sát, khám phá và học hỏi xuyên suốt chuyến đi, các bạn đã hiểu hơn
        về một trong những yếu tố quan trọng cho một đô thị thông minh và bền
        vững. Quan trọng hơn, những kết nối mà các bạn đã có trong suốt chuyến
        đi, với Cam Lâm, với thiên nhiên, và với những người bạn mới, sẽ chính
        là hành trang đầy ý nghĩa cho hành trình để một đô thị vươn khỏi tầm vóc
        của một đô thị phát triển nhanh, trở thành một đô thị phát triển bền
        vững.
      </p>
    ),
    descEn: (
      <p>
        🌳 Following the journey of 2023, the 2nd Urban Beyond the Urban (UBU)
        returns in 2024 with the theme “Smart Approach: Co-Design Platform &
        Nature-Based Solutions for Cam Lam, Khanh Hoa”. This year’s program aims
        to employ a smart approach to tackle urban hindrances. These solutions
        will lead Cam Lam to become a coastal smart sustainable city, which
        successfully leverages the current nature and community features. <br />
        <br /> 🌊 The UBU 2024 is organized by the University of Economics Ho
        Chi Minh City and collaborates with Handong Global University (South
        Korea), Thammasat University (Thailand), Universitas Ngurah Rai
        (Indonesia), the University of Trieste (Italy), and KU Leuven (Belgium).
      </p>
    ),
    gallery: [
      "https://iscm-api.ueh.edu.vn/public/static/images/courses/non-degree/ubu/ubu2024/IMG_9512.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/courses/non-degree/ubu/ubu2024/IMG_9093.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/courses/non-degree/ubu/ubu2024/IMG_9535.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/courses/non-degree/ubu/ubu2024/IMG_9571.jpg",
    ],
    booklet: [
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-01.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-02.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-03.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-04.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-05.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-06.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-07.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-08.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-09.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-10.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-11.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-12.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-13.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-14.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-15.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-16.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-17.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-18.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-19.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-20.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-21.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-22.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-23.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-24.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-25.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-26.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-27.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-28.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-29.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-30.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-31.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-32.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-33.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-34.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-35.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-36.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-37.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-38.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-39.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-40.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-41.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-42.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-43.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-44.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-45.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-46.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-47.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-48.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-49.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-50.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-51.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-52.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-53.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-54.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-55.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-56.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-57.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-58.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-59.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-60.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-61.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-62.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-63.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-64.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-65.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-66.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-67.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-68.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-69.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-70.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-71.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-72.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-73.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-74.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-75.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-76.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-77.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-78.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-79.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-80.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-81.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-82.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-83.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-84.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-85.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-86.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-87.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/ubu/UBU Booklet-88.jpg",
    ],
  },
  "2025": {
    thumbnail:
      "https://iscm-api.ueh.edu.vn/public/static/images/courses/non-degree/ubu/ubu2025/ubu2025.jpg",
    topic: "HOUSING FUTURE – RETHINKING URBAN LIVABILITY",
    descVi: (
      <>
        <p>
          Chúng ta đều cần một ngôi nhà, vậy thì, đâu là sáng kiến để tất cả
          chúng ta đều có thể tiếp cận với một ngôi nhà với giá cả phải chăng,
          nhưng vẫn tiện nghi và bền vững?
        </p>
        <p>
          Nhà ở là nơi khởi đầu cho một thói quen, nơi nuôi dưỡng sức sống mỗi
          ngày, và là nền tảng cho mọi hoạt động sống của con người. Đề cập trực
          tiếp tới vấn đề nhà ở đang được quan tâm tại Việt Nam, Chương trình
          Trại hè Quốc tế Vươn tầm Đô thi - Urban Beyond the Urban (UBU) đã
          chính thức quay trở lại mùa 3 với chủ đề Housing Future: Rethinking
          Urban Livability, UBU 2025 được đồng tổ chức bởi Đại học Kinh tế Thành
          phố Hồ Chí Minh (UEH), Handong Global (Hàn Quốc), trường Đại học
          Thammasat (Thái Lan), Đại học Công nghệ và Thiết kế Singapore
          (Singapore). Chủ đề UBU 2025 - Housing Future: Rethinking Urban
          Livability đưa người tham gia khám phá vai trò của nhà ở trong việc
          kiến tạo nên những đô thị đáng sống và bền vững.
        </p>
        <p>
          Đi qua 3 năm, Trại hè Quốc tế UBU là nơi sinh viên đa ngành đến từ
          Việt Nam và các quốc gia cùng nhau học tập, trao đổi, tham quan đô
          thị, và khám phá định hướng phù hợp để đô thị Việt nam vươn mình trở
          thành đô thị bền vững. Với lịch trình kéo dài 1 tuần, trại hè hứa hẹn
          sẽ mang đến một mùa hè khó quên dành riêng cho các bạn sinh viên!
        </p>
      </>
    ),
    descEn: (
      <>
        <p>
          Everyone needs a house. But how can we ensure that housing is
          affordable, comfortable, and sustainable for all?
        </p>
        <p>
          A home is more than a shelter — it is the foundation of our daily
          routines, a source of vitality, and the base for all aspects of human
          life. Addressing the increasingly pressing housing challenges in
          Vietnam, the Urban Beyond the Urban (UBU) International Summer Camp
          officially returns for its third edition with the theme: Housing
          Future: Rethinking Urban Livability.
        </p>
        <p>
          UBU 2025 is co-organized by the University of Economics Ho Chi Minh
          City (UEH), Handong Global University (Korea), Thammasat University
          (Thailand), and the Singapore University of Technology and Design
          (Singapore). This year’s theme invites participants to explore the
          role of housing in shaping livable and sustainable cities.
        </p>
        <p>
          Over the past three years, UBU has become a vibrant learning platform
          where students from Vietnam and across the region come together to
          study, exchange ideas, explore urban environments, and envision
          sustainable pathways for Vietnamese cities. With a one-week immersive
          program, UBU 2025 promises a summer experience to remember!
        </p>
      </>
    ),
  },
  "2023": {
    thumbnail:
      "https://iscm-api.ueh.edu.vn/public/static/images/courses/non-degree/ubu/ubu2023/ubu2023.jpg",
    topic:
      "INTERNATIONAL SUMMER COURSE URBAN BEYOND THE URBAN IN NHA TRANG: INTEGRATE MULTI-PERSPECTIVE TO DELVE INTO NIGHT ECONOMY",
    topicVi:
      "TRẠI HÈ QUỐC TẾ URBAN BEYOND THE URBAN TẠI NHA TRANG: KẾT HỢP ĐA GÓC NHÌN ĐỂ KHÁM PHÁ NỀN KINH TẾ ĐÊM",
    descVi: (
      <>
        <p>
          🧍Là một du khách, trải nghiệm hoạt đặc sắc của thành phố biển Nha
          Trang,
        </p>
        <p>🚶Là một người bản địa, hiểu về một Nha Trang với đa góc cạnh,</p>
        <p>
          🏃Và trở thành một nhà nghiên cứu, cùng nhau đưa ra các đề xuất thiết
          thực để phát triển du lịch và hơn hết là kinh tế bền vững.
        </p>
        <p>
          Tháng 7 vừa qua, Viện Đô thị Thông minh và Quản lý - trường Đại học
          Kinh tế TP. HCM (UEH-ISCM), kết hợp cùng trường Đại học Handong Global
          (Hàn Quốc) và trường Đại học Thammasat (Thái Lan), đã tổ chức thành
          công Chương trình Trại hè Quốc tế thường niên “Urban Beyond the Urban”
          tại thành phố biển Nha Trang. Chương trình là một phần của chuỗi sự
          kiện năm 2023 của ISCM: Design for Carbon Neutrality Future.
        </p>
        <p>
          Lấy chủ đề là KINH TẾ ĐÊM (Night Economy), trại hè đã thu hút sự tham
          gia của đông đảo các sinh viên Việt Nam và quốc tế đến từ nhiều ngành
          học khác nhau. Các bạn đã cùng nhau tham gia các hoạt động của Trại
          hè, tự tin bung tỏa sức sáng tạo, bứt phá, khẳng định bản thân và “tư
          duy toàn cầu, hành động địa phương”.
        </p>
        <p>
          Đặc biệt, thông qua việc “hóa thân” vào các nhóm đối tượng khác nhau,
          nhóm sinh viên đã kết hợp góc nhìn địa phương, góc nhìn du lịch vào
          nghiên cứu, từ đó đưa ra các đề xuất độc đáo để phát triển Kinh tế
          đêm. Đây đều là các giải pháp có căn cứ khoa học, phù hợp với nhu cầu
          địa phương, giúp cải thiện cuộc sống, thu hút du khách một cách hiệu
          quả và góp phần thúc đẩy phát triển bền vững.
        </p>
        <p>
          👉 Giờ đây, hãy cùng ISCM nhìn lại những khoảnh khắc và hoạt động trải
          nghiệm trong Trại hè Quốc tế (UBU): Kinh tế đêm được ghi lại bởi chính
          các bạn sinh viên và đội ngũ tham gia nhé!
        </p>
      </>
    ),
    descEn: (
      <>
        <p>
          🧍Be tourist, experience fascinating activities of Nha Trang - the
          coastal city,
        </p>
        <p>🚶Be local, discover Nha Trang in many angles,</p>
        <p>
          🏃And be researcher, together develop practical suggestions for
          resilient tourism and in further vision, sustainable economy.
        </p>
        <p>
          In 2023, the Institute of Smart Cities and Management - University of
          Economics Ho Chi Minh city (UEH-ISCM), in collaboration with Handong
          Global University (Korea) and Thammasat University (Thailand),
          successfully organized the annual International Summer Course “Urban
          Beyond the Urban” in Nha Trang. The event is a part of ISCM 2023
          events series: Design for Carbon Neutrality Future.
        </p>
        <p>
          With the main theme of Night Economy, the summer course has attracted
          many Vietnamese and International students, who study in many fields.
          Together, they participated in many activities, confidently unleashed
          their creativity, boldness, and “think global, act local”.
        </p>
        <p>
          Especially, by experience in different roles, the students could
          combine the two local and tourist perspectives in the research,
          thereby coming up with excellent topics for proposals for the night
          economy development. These are all science-based solutions, tailored
          to local needs, help to improve lives, effectively attract tourists
          and contribute to sustainable development.
        </p>
        <p>
          👉 Let’s look back at momentous experiences during the International
          Summer Course (UBU): Night Economy that were captured by the students
          and team.
        </p>
      </>
    ),
    gallery: [
      "https://iscm-api.ueh.edu.vn/public/static/images/courses/non-degree/ubu/ubu2023/nte1.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/courses/non-degree/ubu/ubu2023/nte2.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/courses/non-degree/ubu/ubu2023/nte3.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/courses/non-degree/ubu/ubu2023/nte4.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/courses/non-degree/ubu/ubu2023/nte5.jpg",
    ],
  },
  "2022": {
    thumbnail:
      "https://iscm-api.ueh.edu.vn/public/static/images/courses/non-degree/ubu/ubu2022/ubu.jpg",
    topic: "GLOBAL CITY DEVELOPMENT CAMP",
    topicVi: "GLOBAL CITY DEVELOPMENT CAMP",
    descVi: (
      <>
        <p>
          Trải qua quãng thời gian Covid 19 khó khăn, sau hơn mấy tháng chuẩn bị
          và chờ đợi, cuộc gặp gỡ kỳ diệu giữa các bạn sinh viên Hàn Quốc và
          Việt Nam đã chính thức diễn ra tại TP. Vĩnh Long.
        </p>
        <p>
          Workshop được tổ chức dưới sự chủ trì bởi Viện Đô thị thông minh và
          Quản lý (ISCM) và Đại học Handong Global và cũng đánh dấu cho sự quay
          trở lại với hình thực trực tiếp sau sự ảnh hưởng của đại dịch Covid.
          Tại đây, các bạn sinh viên sẽ có cơ hội khám phá đồng bằng sông Cửu
          Long nói chung và Vĩnh Long nói riêng, một vùng đất xinh đẹp và ẩn sau
          bên trong là những giá trị di tích lịch sử, văn hoá đa dạng mang tính
          quốc tế.
        </p>
        <p>
          Mở đầu chương trình là buổi Orientation giới thiệu về chương trình,
          các hoạt động thú vị và “thử thách” dành cho mỗi đội tham gia trong
          thời gian diễn ra. Đồng thời, các bạn sinh viên đã cùng nhau tham gia
          buổi forum sharing với góc nhìn đa chiều đến từ phía chính quyền địa
          phương, giảng viên và chuyên gia về Mang Thít - Vương quốc lò gạch
        </p>
        <p className="mb-2">Chương trình có sự tham dự của: </p>
        <ul className="pl-4 !text-base">
          <li className="!list-item !list-disc">
            GS. Ducksu Seo, Trưởng khoa Spatial Environment System Engineering,
            Đại học Handong Global
          </li>
          <li className="!list-item !list-disc">
            ThS. Nguyễn Đức Vinh - Phó Giám đốc, Đại học Kinh tế TP. HCM tại
            Phân hiệu Vĩnh Long
          </li>
          <li className="!list-item !list-disc">
            ThS. Trần Thị Quỳnh Mai - Giám đốc chương trình Cử nhân, Viện Đô thị
            thông minh và Quản lý, Trường Công nghệ và Thiết kế UEH
          </li>
          <li className="!list-item !list-disc">
            ThS. Huỳnh Trọng Nhân - Trưởng Bộ môn Quản lý đô thị, trường Đại học
            Xây dựng Miền Tây
          </li>
          <li className="!list-item !list-disc">
            ThS. Nguyễn Tiến Đạt - Giảng viên Khoa Kiến trúc, trường Đại học Xây
            dựng Miền Tây
          </li>
          <li className="!list-item !list-disc">
            Và 30+ sinh viên tham gia đến từ Đại học Handong Global, Đại học
            Kinh tế TP. HCM, Đại học Bách Khoa TP. HCM, Đại học Xây dựng Miền
            Tây
          </li>
        </ul>
      </>
    ),
    descEn: (
      <>
        <p>
          Now in Vinh Long city, going through a difficult time of Covid 19, the
          magical meeting between Korean and Vietnamese students officially
          occurred after more than a few months of preparation and waiting.
        </p>
        <p>
          Organized by the Institute for Smart Cities and Management (ISCM) and
          Handong Global University, the workshop also marks a return to real
          life amid the Covid-19 pandemic. Here, students have the opportunity
          to explore the Mekong Delta and Vinh Long, a beautiful land hidden
          behind the values ​​of various internationalist historical and
          cultural relics.
        </p>
        <p>
          Opening the program was an orientation session introducing the
          program, interesting activities, and &quot;challenges&quot; for each
          participating team during the event. At the same time, the students
          joined in a forum-sharing session with a multi-dimensional perspective
          from the local government, lecturers, and experts on Mang Thit -
          Kingdom of Bricks.
        </p>
        <p className="mb-2">The program was attended by:</p>
        <ul className="pl-4 !text-base">
          <li className="!list-item !list-disc">
            Prof. Ducksu Seo, Dean of Spatial Environment System Engineering,
            Handong Global University
          </li>
          <li className="!list-item !list-disc">
            MSc. Nguyen Duc Vinh - Vice Director, University of Economics Ho Chi
            Minh City at Vinh Long Branch
          </li>
          <li className="!list-item !list-disc">
            MSc. Tran Thi Quynh Mai - Director of the Bachelor Program,
            Institute of Smart City and Management, UEH College of Technology
            and Design
          </li>
          <li className="!list-item !list-disc">
            MSc. Huynh Trong Nhan - Head of Urban Development Division, Mien Tay
            Construction University
          </li>
          <li className="!list-item !list-disc">
            MSc. Nguyen Tien Dat - Lecturer of Architecture department, Mien Tay
            Construction University
          </li>
          <li className="!list-item !list-disc">
            And 30+ students from Handong Global University, Mien Tay
            construction university, University of Economics HCMC, and the
            University of Technology HCMC
          </li>
        </ul>
      </>
    ),
    gallery: [
      "https://iscm-api.ueh.edu.vn/public/static/images/courses/non-degree/ubu/ubu2022/IMG_0005.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/courses/non-degree/ubu/ubu2022/IMG_0477.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/courses/non-degree/ubu/ubu2022/IMG_0497.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/courses/non-degree/ubu/ubu2022/IMG_0504.jpg",
    ],
    booklet: [
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-001.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-001.zip",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-002.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-003.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-004.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-005.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-006.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-007.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-008.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-009.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-010.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-011.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-012.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-013.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-014.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-015.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-016.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-017.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-018.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-019.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-020.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-021.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-022.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-023.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-024.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-025.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-026.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-027.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-028.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-029.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-030.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-031.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-032.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-033.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-034.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-035.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-036.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-037.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-038.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-039.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-040.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-041.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-042.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-043.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-044.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-045.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-046.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-047.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-048.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-049.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-050.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-051.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-052.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-053.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-054.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-055.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-056.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-057.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-058.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-059.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-060.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-061.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-062.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-063.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-064.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-065.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-066.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-067.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-068.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-069.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-070.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-071.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-072.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-073.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-074.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-075.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-076.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-077.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-078.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-079.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-080.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-081.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-082.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-083.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-084.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-085.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-086.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-087.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-088.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-089.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-090.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-091.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-092.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-093.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-094.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-095.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-096.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-097.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-098.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-099.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-100.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-101.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-102.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-103.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-104.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-105.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-106.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-107.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-108.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-109.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-110.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-111.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-112.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-113.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-114.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-115.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-116.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-117.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-118.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-119.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-120.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-121.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-122.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-123.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-124.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-125.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-126.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-127.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-128.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-129.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-130.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-131.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-132.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-133.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-134.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-135.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-136.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-137.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-138.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-139.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-140.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-141.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-142.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-143.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-144.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-145.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-146.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-147.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-148.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-149.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-150.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-151.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-152.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-153.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-154.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-155.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-156.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-157.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-158.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-159.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-160.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-161.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-162.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-163.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-164.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-165.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-166.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-167.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-168.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-169.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-170.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-171.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2022/ubu/booklet-172.jpg",
    ],
  },
  "2021": {
    thumbnail:
      "https://iscm-api.ueh.edu.vn/public/static/images/courses/non-degree/ubu/ubu2021/ubu.jpg",
    topic: "Smart Design City for Zero Carbon Emission",
    topicVi: "Smart Design City for Zero Carbon Emission",
    descVi: (
      <>
        <p>
          Mỗi năm trái đất chỉ tạo ra một lượng tài nguyên hữu hạn và vào ngày
          29/07 nhân loại đã tiêu hết toàn bộ số tài nguyên này của năm 2021.
          Theo báo cáo của Earth Overshoot Day, chỉ trong nửa năm 2021, lượng
          khí thải carbon tăng 6,6% so với năm 2020.
        </p>
        <p>
          Nhằm đề xuất ý tưởng cho vấn đề cấp thiết này, Trại hè Thiết kế Quốc
          tế 2021 đã lựa chọn chủ đề Smart Design City for Zero Carbon Emission
          với mong muốn góp phần thúc đẩy việc giảm khí thải từ các đô thị đồng
          thời kết hợp tư duy, góc nhìn của người trẻ trong việc kiến tạo nên
          các đô thị bền vững, thân thiện trong tương lai.
        </p>
        <p className="mb-2">
          Chương trình có sự tham gia của hơn 60 bạn sinh viên ưu tú đến từ các
          quốc gia Việt Nam, Hàn Quốc, Myanmar, Indonesia, Lào, Nigeria dưới sự
          cố vấn, đồng hành của các giáo sư, chuyên gia quốc tế:
        </p>
        <ul className="pl-4 !text-base">
          <li className="!list-item !list-disc">
            TS. Trịnh Tú Anh - Viện trưởng Viện Đô thị thông minh và quản lý, ĐH
            Kinh tế TP.HCM (UEH)
          </li>
          <li className="!list-item !list-disc">
            TS. Hoàng Ngọc Lan - Phó khoa Quy hoạch, ĐH Kiến trúc TP.HCM (UAH)
          </li>
          <li className="!list-item !list-disc">
            TS. Trần Mai Anh - Viện phó Viện Đào tạo quốc tế, ĐH Kiến trúc
            TP.HCM (UAH)
          </li>
          <li className="!list-item !list-disc">
            ThS. Đinh Trần Gia Hưng - Giảng viên Khoa Kiến trúc, ĐH Kiến trúc
            TP.HCM (UAH)
          </li>
          <li className="!list-item !list-disc">
            Prof. Seo Ducksu - ĐH Handong Global, Hàn Quốc (HGU)
          </li>
          <li className="!list-item !list-disc">
            Prof. Lee Eunjong - ĐH Handong Global, Hàn Quốc
          </li>
          <li className="!list-item !list-disc">
            Prof. Park Changsong - ĐH Handong Global, Hàn Quốc
          </li>
          <li className="!list-item !list-disc">
            Prof. Son Seongchan - ĐH Handong Global, Hàn Quốc
          </li>
          <li className="!list-item !list-disc">
            Prof. Lee Wonsup - ĐH Handong Global, Hàn Quốc
          </li>
          <li className="!list-item !list-disc">
            Mr. Kim Hyoungwoo - ĐH Handong Global, Hàn Quốc
          </li>
          <li className="!list-item !list-disc">
            Ms. Lee Saimi - ĐH Handong Global, Hàn Quốc
          </li>
          <li className="!list-item !list-disc">
            Prof. Hwang Euihyun - ĐH Handong Global, Hàn Quốc
          </li>
          <li className="!list-item !list-disc">Dr. Zin Taryar Win - ADB, M</li>
        </ul>
        <p>
          Chương trình đã được diễn ra thành công và đặt ra nhiều vấn đề mở với
          mong muốn hướng đến và thúc đẩy những thành phố tương lai thân thiện
          với môi trường.
        </p>
      </>
    ),
    descEn: (
      <>
        <p>
          Each year the earth produces only a finite amount of resources and on
          July 29th, humanity has exhausted all of these resources by 2021.
          According to an Earth Overshoot Day report, the amount of carbon
          emissions from gases increased 6.6% in just half of 2021 compared to
          2020.
        </p>
        <p>
          Therefore, the International Design Summer Camp 2021 has chosen the
          theme Smart Design City for Zero Carbon Emission with the desire to
          contribute to the reduction of emissions from cities while combining
          the thinking and perspective of young people in creating sustainable,
          friendly cities in the future.
        </p>
        <p className="mb-2">
          The program has the participation of more than 60 excellent students
          from Vietnam, Korea, Myanmar, Indonesia, Laos, Nigeria under the
          advice and companion of international professors and experts:
        </p>
        <ul className="pl-4 !text-base">
          <li className="!list-item !list-disc">
            Dr. Trinh Tu Anh - Director of Institute of Smart city and
            Management, University of Economics Ho Chi Minh city (UEH)
          </li>
          <li className="!list-item !list-disc">
            Dr. Hoang Ngoc Lan - Vice Dean, Planning Faculty, University of
            Architecture Ho Chi Minh city (UAH)
          </li>
          <li className="!list-item !list-disc">
            Dr. Tran Mai Anh - Deputy Director, Institute of International
            training, University of Architecture Ho Chi Minh city (UAH)
          </li>
          <li className="!list-item !list-disc">
            Ma.Arch. Dinh Tran Gia Hung - Lecturer of Architecture Faculty,
            University of Architecture Ho Chi Minh city (UAH)
          </li>
          <li className="!list-item !list-disc">
            Prof. Seo Ducksu (HGU) / Urban design and planning
          </li>
          <li className="!list-item !list-disc">
            Prof. Lee Eunjong (HGU) / UX product design
          </li>
          <li className="!list-item !list-disc">
            Prof. Park Changsong (HGU) / Mobility design
          </li>
          <li className="!list-item !list-disc">
            Prof. Son Seongchan (HGU) / Architecture and landscape architecture
          </li>
          <li className="!list-item !list-disc">
            Prof. Lee Wonsup (HGU)/ Ergonomics
          </li>
          <li className="!list-item !list-disc">
            Mr. Kim Hyoungwoo (HGU Alumni) / BX design
          </li>
          <li className="!list-item !list-disc">
            Ms. Lee Saimi (HGU Alumni) / UX, UI design
          </li>
          <li className="!list-item !list-disc">
            Prof. Hwang Euihyun (NSU, HGU Alumni) / Architecture
          </li>
          <li className="!list-item !list-disc">
            Dr. Zin Taryar Win (ADB) / Architecture
          </li>
        </ul>
        <p>
          The program was successfully conducted and raised many open issues
          with the desire to target and promote future cities that are
          environmentally friendly.
        </p>
      </>
    ),
    gallery: [
      "https://iscm-api.ueh.edu.vn/public/static/images/courses/non-degree/ubu/ubu2021/1.png",
      "https://iscm-api.ueh.edu.vn/public/static/images/courses/non-degree/ubu/ubu2021/2.png",
      "https://iscm-api.ueh.edu.vn/public/static/images/courses/non-degree/ubu/ubu2021/3.png",
      "https://iscm-api.ueh.edu.vn/public/static/images/courses/non-degree/ubu/ubu2021/4.jpg",
    ],
  },
  "2020": {
    thumbnail:
      "https://iscm-api.ueh.edu.vn/public/static/images/courses/non-degree/ubu/ubu2020/ubu.jpg",
    topic: "Smart design thinking to lead post – pandemic Urban design",
    topicVi: "Smart design thinking to lead post – pandemic Urban design",
    descVi: (
      <>
        <p>
          Studio quốc tế Unitwin Summer Camp là hoạt động thường niên được tổ
          chức dựa trên cơ sở hợp tác giữa 3 nước Việt Nam, Myanmar, Hàn Quốc từ
          năm 2019 do UNESCO Unitwin tài trợ. Theo kế hoạch, Studio năm nay sẽ
          được tổ chức tại Myanmar vào tháng 7/2020. Tuy nhiên, với tình hình
          dịch Covid diễn biến phức tạp, ban tổ chức vẫn quyết tâm duy trì
          truyền thống nhưng có sự đổi mới đáng kể. Studio vừa được tiến hành
          độc lập giữa 3 nước Việt Nam, Myanmar và Hàn Quốc với chủ đề
          &quot;Smart design thinking to lead post - pandemic urban design&quot;
          vừa có những bài giảng và các buổi báo cáo thuyết trình chung thông
          qua hệ thống trực tuyến.
        </p>
        <p>
          Tại Việt Nam, studio với chủ đề &quot;Market life - Story of Sai
          Gon&quot; do Viện Đô thị thông minh và đổi mới – Đại học Kinh tế
          TP.HCM đứng ra tổ chức, cùng sự tham gia của các giảng viên hướng dẫn
          và sinh viên đến từ những trường Đại học Kinh tế TP.HCM, Đại học Bách
          Khoa TP.HCM, Đại học Kiến trúc TP.HCM và Đại học Tôn Đức Thắng. Trong
          suốt quá trình tham gia từ ngày 22 đến 31 tháng 7, sinh viên đã được
          nghe các bài giảng thú vị từ các giáo sư và chuyên gia.
        </p>
        <p>
          Mặc dù được diễn ra theo phương thức khác với mọi năm, nhưng studio
          2020 không chỉ duy trì được những ưu điểm vốn có về sự giao lưu hợp
          tác giữa các nước mà còn hết sức thành công khi tạo cơ hội cho sinh
          viên các nước được hiểu hơn về ý tưởng và cách ứng phó với tình hình
          Covid trong bối cảnh của mỗi nước. Tất cả các ý tưởng đều có thể ứng
          dụng linh hoạt vào tình hình thế giới trong và sau đại dịch. Các bạn
          sinh viên đã có cơ hội học hỏi lẫn nhau và đưa ra được ý tưởng độc
          đáo, sáng tạo. Các ý tưởng này là tiền đề cho sinh viên chuẩn bị tốt
          hơn trong bài dự thi cuộc thi “Future city – smart design for post
          pandemic world” nằm trong chuỗi sự kiện “Shapping the unknown future
          toward smart city” do Viện Đô thị thông minh và quản lý đăng cai tổ
          chức. Xin chân thành cám ơn sự tham gia của các giảng viên:
        </p>
        <p className="mb-2">Đại diện Myanmar: </p>
        <ul className="pl-4 !text-base">
          <li className="!list-item !list-disc">Dr. Zar Chi Min (TUM)</li>
          <li className="!list-item !list-disc">Dr. Zin Zin Moe (TUM)</li>
        </ul>
        <p className="mb-2">Đại diện Hàn Quốc: </p>
        <ul className="pl-4 !text-base">
          <li className="!list-item !list-disc">Dr. Seo Ducksu (HGU) </li>
          <li className="!list-item !list-disc">Mr. Lee</li>
          <li className="!list-item !list-disc">Mr. Bea</li>
        </ul>
        <p className="mb-2">Đại diện Việt Nam: </p>
        <ul className="pl-4 !text-base">
          <li className="!list-item !list-disc">Dr. Trịnh Tú Anh (UEH) </li>
          <li className="!list-item !list-disc">Dr. Nguyễn Quốc Vinh (HUT) </li>
          <li className="!list-item !list-disc">Dr. Hoàng Ngọc Lan (AUH) </li>
          <li className="!list-item !list-disc">Dr. Trần Mai Anh (AUH) </li>
          <li className="!list-item !list-disc">
            Mr. Nguyễn Hồng Long – Cty Proton
          </li>
        </ul>
      </>
    ),
    descEn: (
      <>
        <p>
          The International Studio Unitwin Summer Design Camp is an annual
          activity in cooperation between Vietnam, Korea and Myanmar, which is
          sponsored by UNESCO Unitwin. Due to the pandemic, the 2020 Studio was
          organized online in 3 countries: Vietnam, Myanmar and Korea with the
          topic &quot;Smart design thinking to lead post – pandemic Urban
          design&quot;.
        </p>
        <p>
          The Vietnam studio topic was &quot;Market life - Story of Sai
          Gon&quot; with the participation of instructors and students from:
          University of Economics Ho Chi Minh city (UEH), Ho Chi Minh City
          University of Technology (HUT), University of Architecture Ho Chi Minh
          city (AUH) and Ton Duc Thang University (TDTU). ISCM – UEH plays host
          this activity from 27 to 31 July 2020. During the studio, many
          lectures were presented by professors and experts.
        </p>
        <p>
          Thank you all our speakers for your continued support, energetic
          enthusiasm, kindness, dedication and passion:
        </p>
        <p className="mb-2">Delegate of Myanmar: </p>
        <ul className="pl-4 !text-base">
          <li className="!list-item !list-disc">Dr. Zar Chi Min (TUM)</li>
          <li className="!list-item !list-disc">Dr. Zin Zin Moe (TUM)</li>
        </ul>
        <p className="mb-2">Delegate of Korea: </p>
        <ul className="pl-4 !text-base">
          <li className="!list-item !list-disc">Dr. Seo Ducksu (HGU) </li>
          <li className="!list-item !list-disc">Mr. Lee</li>
          <li className="!list-item !list-disc">Mr. Bea</li>
        </ul>
        <p className="mb-2">Delegate of Vietnam: </p>
        <ul className="pl-4 !text-base">
          <li className="!list-item !list-disc">Dr. Trinh Tu Anh (UEH) </li>
          <li className="!list-item !list-disc">Dr. Nguyen Quoc Vinh (HUT) </li>
          <li className="!list-item !list-disc">Dr. Hoang Ngoc Lan (AUH) </li>
          <li className="!list-item !list-disc">Dr. Tran Mai Anh (AUH) </li>
          <li className="!list-item !list-disc">
            Mr. Nguyen Hong Long – Proton
          </li>
        </ul>
      </>
    ),
    gallery: [
      "https://iscm-api.ueh.edu.vn/public/static/images/courses/non-degree/ubu/ubu2020/_MG_3831.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/courses/non-degree/ubu/ubu2020/_MG_3833.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/courses/non-degree/ubu/ubu2020/_MG_3844.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/courses/non-degree/ubu/ubu2020/IMG_0012.jpg",
    ],
    booklet: [
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-01.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-02.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-03.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-04.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-05.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-06.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-07.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-08.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-09.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-10.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-11.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-12.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-13.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-14.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-15.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-16.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-17.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-18.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-19.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-20.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-21.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-22.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-23.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-24.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-25.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-26.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-27.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-28.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-29.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-30.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-31.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-32.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-33.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-34.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-35.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-36.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-37.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-38.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-39.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-40.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-41.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-42.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-43.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-44.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-45.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-46.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-47.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-48.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-49.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-50.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-51.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-52.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-53.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-54.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-55.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-56.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-57.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-58.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-59.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-60.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-61.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-62.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-63.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-64.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-65.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-66.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-67.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-68.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-69.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-70.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-71.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-72.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-73.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-74.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-75.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-76.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-77.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-78.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-79.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-80.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-81.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-82.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-83.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-84.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-85.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-86.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-87.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-88.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-89.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-90.jpg",
      "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/ubu/ubu2020-91.jpg",
    ],
  },
};

export default data;
