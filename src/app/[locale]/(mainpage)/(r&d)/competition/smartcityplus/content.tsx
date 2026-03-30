"use client";

import { useLocale } from "next-intl";
import { meta } from "./meta";
import Image from "next/image";
import Link from "next/link";
import Booklet from "../../../facilities/student_studiolab/[slug]/components/Booklet";

export default function Content() {
  const locale = useLocale();

  return (
    <section className="section-sm">
      <div className="container scroll-smooth">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title text-center ml-[2%]">{meta.title}</h2>
          </div>

          <div className="col-12 mb-4">
            <Image
              src="https://iscm-api.ueh.edu.vn/public/static/images/competitive/smartcity+/BGdense.jpg"
              alt="background"
              className="img-fluid w-full h-auto object-contain"
              width={1200}
              height={600}
            />
          </div>
        </div>
        {/* <!-- research details --> */}
        <div className="row">
          <div className="text-justify col-12 mb-50 content" id="compOverview">
            <h3>
              {locale === "en" ? (
                <>About Competition</>
              ) : (
                <>Giới thiệu Cuộc thi</>
              )}
            </h3>
            <p>
              {locale === "en" ? (
                <>
                  It is the first time in human history, we have no idea what
                  the world will be like in the next 30 years (the writer Yuval
                  Harari). The first half of the 21st century will be3 the most
                  important in the history of the human race because of all the
                  challenges we face from an amazing leap in technology and the
                  urban challenges in a rapidly urbanizing and globalized world.
                  In this phenomenon, smart cities will not just be a trend but
                  also become a must-have. But How Smart cities will deal with
                  urban challenges and How integrated technology and other
                  fields can be applied to solve the urbanization crises? Many
                  successful smart cities in the world recognize that urban
                  cultural values, urban identity integrate with innovation and
                  new technology have always been a driving force of sustainable
                  cities. Especially in a developing country context where
                  cities have very limited resources, finding an identity as a
                  driven force is one of the most important questions as well as
                  proposing urban problem-solving. If you live in a city,
                  especially in a metropolis, you have likely asked yourself How
                  do we say we’re living in a city but always have to flee the
                  city to get fresh air or connect to nature? How do we, as an
                  architect, urban designer or urban planner, and most important
                  as a community, reclaim the public spaces to create a better
                  urban life.
                  <br />
                  <br />
                  SMARTCITY+ is a second international competition launched by
                  Institute of Smart City and Management (ISCM), University of
                  Economics Ho Chi Minh City (UEH), in partnership with Handong
                  Global University, UNESCO/UNITWIN, Chemonics International,
                  HCMC University of Architecture (UAH), HCMC University of
                  Technology and Education, Trieste University, Blekinge
                  Institute of Technology, Seoul National University,
                  Politecnico de Milano, University of Industrial Fine Art,
                  Saxion University, National Institute of Technology Calicut,
                  University of Melbourne, University of Auckland, SmithGroup,
                  XnTree - Global Tech Accelerator, World Smart Cities Forum;
                  SMARTCITY+ proposes an alternative method to achieve livable
                  city that works mainly at the small scale of public spaces. In
                  this competition, participants are asked to explore the
                  possibilities of urban intervention in public space that can
                  lead to positive changes in a larger scale. Participants are
                  free to either extend these existing areas and transform them,
                  or propose a new design on a site of their choice.
                  <br />
                  <br />
                  This competition encourages participants to be bold and think
                  outside the box. How can architecture, urban design and
                  planning go beyond the traditional concept of urban public
                  spaces. Winning participants need to apply unique strategies
                  and creative designs to experiment with new urban scenarios,
                  which are able to promote social exchange, community
                  activities and citizen interaction through the implementation
                  of multifunctional designs.
                </>
              ) : (
                <>
                  Đây là lần đầu tiên trong lịch sử loài người, chúng ta không
                  biết thế giới sẽ như thế nào trong 30 năm tới (theo nhà văn
                  Yuval Noah Harari). Nửa đầu thế kỷ 21 sẽ là giai đoạn quan
                  trọng nhất trong lịch sử loài người vì những thách thức to lớn
                  mà chúng ta đang đối mặt: một bước nhảy vọt đáng kinh ngạc về
                  công nghệ kết hợp với các vấn đề đô thị trong một thế giới
                  đang đô thị hóa và toàn cầu hóa nhanh chóng. Trong bối cảnh
                  này, thành phố thông minh không chỉ là một xu hướng – mà đã
                  trở thành một nhu cầu thiết yếu.
                  <br />
                  <br />
                  Nhưng thành phố thông minh sẽ giải quyết các thách thức đô thị
                  như thế nào? Và làm thế nào để tích hợp công nghệ cùng các
                  lĩnh vực khác nhằm giải quyết khủng hoảng đô thị hóa? Nhiều
                  thành phố thông minh thành công trên thế giới nhận ra rằng
                  việc kết hợp giá trị văn hóa đô thị, bản sắc đô thị với đổi
                  mới và công nghệ mới luôn là động lực thúc đẩy các thành phố
                  bền vững. Đặc biệt trong bối cảnh các quốc gia đang phát triển
                  – nơi các thành phố thường có nguồn lực rất hạn chế – việc tìm
                  ra một bản sắc riêng biệt làm động lực trở thành một trong
                  những câu hỏi quan trọng nhất, đồng thời cũng là chìa khóa để
                  đề xuất các giải pháp cho vấn đề đô thị.
                  <br />
                  <br />
                  Nếu bạn đang sống ở một thành phố, đặc biệt là một siêu đô
                  thị, có lẽ bạn đã từng tự hỏi: Tại sao chúng ta nói mình đang
                  sống trong thành phố nhưng lại luôn phải rời khỏi thành phố để
                  được hít thở không khí trong lành hay kết nối với thiên nhiên?
                  Làm thế nào chúng ta – với tư cách là kiến trúc sư, nhà thiết
                  kế đô thị, nhà quy hoạch đô thị, và quan trọng nhất là với tư
                  cách một cộng đồng – có thể tái chiếm lĩnh các không gian công
                  cộng để tạo ra một cuộc sống đô thị tốt đẹp hơn?
                  <br />
                  <br />
                  SMARTCITY+ là cuộc thi quốc tế lần thứ hai được tổ chức bởi
                  Viện Quản lý Thành phố Thông minh (ISCM), Trường Đại học Kinh
                  tế TP. Hồ Chí Minh (UEH), phối hợp cùng Đại học Handong
                  Global, UNESCO/UNITWIN, Chemonics International, Đại học Kiến
                  trúc TP. HCM (UAH), Đại học Sư phạm Kỹ thuật TP. HCM, Đại học
                  Trieste, Viện Công nghệ Blekinge, Đại học Quốc gia Seoul, Đại
                  học Bách khoa Milano, Đại học Mỹ thuật Công nghiệp, Đại học
                  Saxion, Viện Công nghệ Quốc gia Calicut, Đại học Melbourne,
                  Đại học Auckland, SmithGroup, XnTree – Global Tech
                  Accelerator, và Diễn đàn Thành phố Thông minh Thế giới.
                  <br />
                  <br />
                  SMARTCITY+ đề xuất một phương pháp thay thế để đạt được thành
                  phố đáng sống, tập trung chủ yếu vào quy mô nhỏ của các không
                  gian công cộng. Trong cuộc thi này, người tham gia được khuyến
                  khích khám phá các khả năng can thiệp đô thị tại không gian
                  công cộng có thể tạo ra những thay đổi tích cực ở quy mô lớn
                  hơn. Người tham gia có thể tự do lựa chọn: hoặc mở rộng và
                  biến đổi các khu vực hiện có, hoặc đề xuất một thiết kế hoàn
                  toàn mới tại địa điểm do mình chọn.
                  <br />
                  <br />
                  Cuộc thi khuyến khích người tham gia suy nghĩ táo bạo và vượt
                  ra ngoài khuôn khổ truyền thống: Làm thế nào kiến trúc, thiết
                  kế đô thị và quy hoạch đô thị có thể vượt qua khái niệm truyền
                  thống về không gian công cộng đô thị? Các tác phẩm đoạt giải
                  cần áp dụng những chiến lược độc đáo và thiết kế sáng tạo để
                  thử nghiệm các kịch bản đô thị mới – những thiết kế có khả
                  năng thúc đẩy giao lưu xã hội, hoạt động cộng đồng và sự tương
                  tác giữa người dân thông qua việc triển khai các giải pháp đa
                  chức năng.
                </>
              )}
            </p>
          </div>

          <div className="text-justify col-12 content" id="compTimeline">
            <Image
              src="https://iscm-api.ueh.edu.vn/public/static/images/competitive/smartcity+/timline.jpg"
              alt="timeline"
              className="img-fluid w-full object-contain h-auto"
              width={1200}
              height={600}
            />
          </div>

          <div className="text-justify col-12 mb-50 content" id="compPrize">
            <Image
              src="https://iscm-api.ueh.edu.vn/public/static/images/competitive/smartcity+/price.jpg"
              alt="prizes"
              className="img-fluid w-100 object-contain h-auto"
              width={1200}
              height={600}
            />
          </div>
        </div>

        <div>
          <h3>
            {locale === "en" ? "Competition Booklet" : "Booklet Cuộc thi"}
          </h3>
          <Booklet
            booklet={[
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2021/smartcity/Jan0922-booklet-update-01.jpg",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2021/smartcity/Jan0922-booklet-update-02.jpg",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2021/smartcity/Jan0922-booklet-update-03.jpg",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2021/smartcity/Jan0922-booklet-update-04.jpg",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2021/smartcity/Jan0922-booklet-update-05.jpg",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2021/smartcity/Jan0922-booklet-update-06.jpg",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2021/smartcity/Jan0922-booklet-update-07.jpg",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2021/smartcity/Jan0922-booklet-update-08.jpg",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2021/smartcity/Jan0922-booklet-update-09.jpg",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2021/smartcity/Jan0922-booklet-update-10.jpg",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2021/smartcity/Jan0922-booklet-update-11.jpg",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2021/smartcity/Jan0922-booklet-update-12.jpg",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2021/smartcity/Jan0922-booklet-update-13.jpg",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2021/smartcity/Jan0922-booklet-update-14.jpg",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2021/smartcity/Jan0922-booklet-update-15.jpg",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2021/smartcity/Jan0922-booklet-update-16.jpg",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2021/smartcity/Jan0922-booklet-update-17.jpg",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2021/smartcity/Jan0922-booklet-update-18.jpg",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2021/smartcity/Jan0922-booklet-update-19.jpg",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2021/smartcity/Jan0922-booklet-update-20.jpg",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2021/smartcity/Jan0922-booklet-update-21.jpg",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2021/smartcity/Jan0922-booklet-update-22.jpg",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2021/smartcity/Jan0922-booklet-update-23.jpg",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2021/smartcity/Jan0922-booklet-update-24.jpg",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2021/smartcity/Jan0922-booklet-update-25.jpg",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2021/smartcity/Jan0922-booklet-update-26.jpg",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2021/smartcity/Jan0922-booklet-update-27.jpg",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2021/smartcity/Jan0922-booklet-update-28.jpg",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2021/smartcity/Jan0922-booklet-update-29.jpg",
            ]}
          />
        </div>

        <div className="text-justify col-12 mb-50 content" id="compSponsor">
          <Image
            src="https://iscm-api.ueh.edu.vn/public/static/images/competitive/smartcity+/partners.jpg"
            alt="sponsors"
            className="img-fluid w-100 h-auto object-contain"
            width={1200}
            height={600}
          />
        </div>
      </div>
    </section>
    // <!-- /event single -->
  );
}
