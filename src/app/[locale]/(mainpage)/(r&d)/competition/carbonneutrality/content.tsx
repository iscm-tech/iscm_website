"use client";

import { useLocale } from "next-intl";
import { meta } from "./meta";
import Image from "next/image";
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
              src="https://iscm-api.ueh.edu.vn/public/static/images/competitive/carbon/background.jpg"
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
                  For many years, Climate change has affected the entire world,
                  with many negative outcomes such as the high appearance rate
                  of extreme weather conditions, the rapidly rising sea levels,
                  ocean acidification and loss of biodiversity. An action that
                  is said to be efficient to minimize this negative phenomenon
                  is to limit global warming to only 1.5 degrees Celsius - a
                  threshold the Intergovernmental Panel for Climate Change
                  (IPCC) suggests is safe - by the target to be carbon
                  neutrality by mid-21st century.
                  <br />
                  <br />
                  This competition is for our endeavor to promote the ambition
                  of turning the world towards a neutral carbon future in the
                  architectural and urban related perspective through
                  encouraging the participants to propose an alternative method
                  to achieve sustainable urban initiatives. In order to
                  accomplish this, competitors are asked to explore the
                  possibilities of urban intervention housing, urban space, and
                  technology implementation that can lead to positive carbon
                  changes on a larger scale. Participants are free to either
                  extend these existing and transform them or propose a new
                  design on a selected site.
                  <br />
                  <br />
                  The 3rd International Competition: Design For Neutral Carbon
                  Future - launched by UEH University and People’s Committee of
                  Vung Tau City in partnership with many co-organizers (Handong
                  Global University, Politecnico di Milano, Trieste University,
                  University of Melbourne, University of Seoul, Citilinks,
                  UNICITI, OMGEVING, Thammasat University, Ku Leuven University,
                  The Boston Architectural College, Dayananda Sagar College of
                  Architecture, ASPECT Studio, Lee Kuan Yew Centre for
                  Innovative Cities). The 2023 competition is sponsored by UEH
                  University, People’s committee of Vung Tau City, University of
                  Sydney, National Housing Organization and Handong Engineering
                  & Construction.
                </>
              ) : (
                <>
                  Trong nhiều năm qua, biến đổi khí hậu đã ảnh hưởng đến toàn
                  thế giới, với vô số hậu quả tiêu cực như tần suất xuất hiện
                  cao của các hiện tượng thời tiết cực đoan, mực nước biển dâng
                  nhanh, axit hóa đại dương và mất đa dạng sinh học. Một hành
                  động được cho là hiệu quả để giảm thiểu hiện tượng tiêu cực
                  này là hạn chế sự nóng lên toàn cầu chỉ ở mức 1,5 độ Celsius –
                  ngưỡng mà Ủy ban Liên chính phủ về Biến đổi Khí hậu (IPCC) cho
                  là an toàn – với mục tiêu đạt trung hòa carbon vào giữa thế kỷ
                  21.
                  <br />
                  <br />
                  Cuộc thi này nhằm thúc đẩy tham vọng hướng thế giới tới một
                  tương lai trung hòa carbon từ góc nhìn kiến trúc và đô thị,
                  thông qua việc khuyến khích người tham gia đề xuất các phương
                  pháp thay thế để đạt được các sáng kiến đô thị bền vững. Để
                  thực hiện điều này, các thí sinh được yêu cầu khám phá các khả
                  năng can thiệp đô thị liên quan đến nhà ở, không gian đô thị
                  và ứng dụng công nghệ, nhằm tạo ra những thay đổi tích cực về
                  carbon ở quy mô lớn hơn. Người tham gia có thể tự do lựa chọn:
                  hoặc mở rộng và biến đổi các khu vực hiện có, hoặc đề xuất một
                  thiết kế mới tại địa điểm do mình chọn.
                  <br />
                  <br />
                  Cuộc thi Thiết kế Quốc tế lần thứ 3: Design For Neutral Carbon
                  Future – được phát động bởi Trường Đại học Kinh tế TP. Hồ Chí
                  Minh (UEH) và Ủy ban Nhân dân Thành phố Vũng Tàu, phối hợp
                  cùng nhiều đơn vị đồng tổ chức (Đại học Handong Global, Đại
                  học Bách khoa Milano, Đại học Trieste, Đại học Melbourne, Đại
                  học Seoul, Citilinks, UNICITI, OMGEVING, Đại học Thammasat,
                  Đại học Ku Leuven, Boston Architectural College, Dayananda
                  Sagar College of Architecture, ASPECT Studio, Trung tâm Lee
                  Kuan Yew về Thành phố Sáng tạo). Cuộc thi năm 2023 được tài
                  trợ bởi Trường Đại học Kinh tế TP. Hồ Chí Minh (UEH), Ủy ban
                  Nhân dân Thành phố Vũng Tàu, Đại học Sydney, Tổ chức Nhà ở
                  Quốc gia và Handong Engineering & Construction.
                </>
              )}
            </p>
          </div>

          <div className="text-justify col-12 content" id="compTimeline">
            <Image
              src="https://iscm-api.ueh.edu.vn/public/static/images/competitive/carbon/timeline.png"
              alt="timeline"
              className="img-fluid w-full object-contain h-auto"
              width={1200}
              height={600}
            />
          </div>

          <div className="text-justify col-12 mb-50 content" id="compPrize">
            <Image
              src="https://iscm-api.ueh.edu.vn/public/static/images/competitive/carbon/price.png"
              alt="prizes"
              className="img-fluid w-100 object-contain h-auto"
              width={1200}
              height={600}
            />
          </div>

          <div className="text-justify col-12 mb-50 content" id="compPartners">
            <Image
              src="https://iscm-api.ueh.edu.vn/public/static/images/competitive/carbon/organizer.png"
              alt="organizer"
              className="img-fluid w-100 object-contain h-auto"
              width={1200}
              height={600}
            />
          </div>
        </div>

        <div className="text-justify col-12 mb-50 content" id="compSponsor">
          <Image
            src="https://iscm-api.ueh.edu.vn/public/static/images/competitive/carbon/sponsor.png"
            alt="sponsors"
            className="img-fluid w-100 h-auto object-contain"
            width={1200}
            height={600}
          />
        </div>

        <div>
          <Booklet
            booklet={[
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-01.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-02.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-03.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-04.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-05.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-06.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-07.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-08.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-09.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-10.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-11.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-12.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-13.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-14.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-15.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-16.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-17.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-18.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-19.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-20.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-21.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-22.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-23.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-24.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-25.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-26.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-27.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-28.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-29.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-30.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-31.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-32.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-33.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-34.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-35.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-36.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-37.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-38.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-39.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-40.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-41.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-42.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-43.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-44.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-45.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-46.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-47.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-48.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-49.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-50.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-51.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-52.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-53.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-54.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-55.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-56.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-57.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-58.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-59.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-60.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-61.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-62.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-63.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-64.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-65.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-66.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-67.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-68.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-69.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-70.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-71.png",
              "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2024/carbonneutrality/2023_final_-_international_competition_booklet_page_-72.png",
            ]}
          />
        </div>
      </div>
    </section>
    // <!-- /event single -->
  );
}
