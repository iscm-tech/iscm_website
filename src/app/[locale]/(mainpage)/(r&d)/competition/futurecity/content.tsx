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
              src="https://iscm-api.ueh.edu.vn/public/static/images/competitive/futurecity/futurecity.jpg"
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
              {locale === "en" ? "About Competition" : "Giới thiệu Cuộc thi"}
            </h3>
            <p>
              {locale === "en" ? (
                <>
                  As an estimated 70% of the world population will live in
                  cities by 2050, architecture, urban design, and planning
                  against pandemic will become even more important in years to
                  come. But the pandemic also offers a chance to change and
                  prepare for our future. This is the time for us to reshape the
                  way our cities are built, maintained, and lived in. The
                  question is: How should we shape our city for the unknown
                  future?
                  <br />
                  <br />
                  The global COVID-19 novel coronavirus pandemic has severe
                  negative impacts on all aspects of social life in 2020. It has
                  rapidly spread around the world, posing enormous health,
                  economic, environmental, and social challenges to the entire
                  human population.
                  <br />
                  <br />
                  Future city: Smart design for the post-pandemic world is a
                  first competition launched by Institute of Smart City and
                  Management (ISCM), University of Economics Ho Chi Minh city
                  (UEH) in partnership with University of Architecture Hochiminh
                  city, Hochiminh city the University of Technology, Handong
                  Global University, Technical The University of Mandalay,
                  Blekinge Institute of Technology, Politecnico di Milano, Le
                  Cnam, University of Melbourne. The competition is sponsored by
                  HTE Global Co. Ltd, Handong Engineering and Construction Co.
                  Ltd., and Korea Institute of Building Energy Technology. In
                  this very first competition, participants are asked to look at
                  the existing urban built environment and imagine how it should
                  cope with the future pandemic.
                </>
              ) : (
                <>
                  Khi ước tính 70% dân số thế giới sẽ sống ở các thành phố vào
                  năm 2050, kiến trúc, thiết kế đô thị và quy hoạch đô thị chống
                  chịu đại dịch sẽ trở nên càng quan trọng hơn trong những năm
                  tới. Nhưng đại dịch cũng mang lại cơ hội để thay đổi và chuẩn
                  bị cho tương lai của chúng ta. Đây chính là thời điểm để chúng
                  ta định hình lại cách các thành phố được xây dựng, duy trì và
                  sinh sống. Câu hỏi đặt ra là: Chúng ta nên định hình thành phố
                  của mình như thế nào để đối mặt với tương lai chưa biết?
                  <br /> <br />
                  Đại dịch COVID-19 toàn cầu do virus corona mới gây ra đã tạo
                  ra những tác động tiêu cực nghiêm trọng đến mọi khía cạnh của
                  đời sống xã hội trong năm 2020. Nó lây lan nhanh chóng khắp
                  thế giới, đặt ra những thách thức khổng lồ về y tế, kinh tế,
                  môi trường và xã hội đối với toàn thể nhân loại.
                  <br /> <br />
                  Future city: Smart design for the post-pandemic world là cuộc
                  thi đầu tiên được tổ chức bởi Viện Quản lý Thành phố Thông
                  minh (ISCM), Trường Đại học Kinh tế TP. Hồ Chí Minh (UEH),
                  phối hợp cùng Đại học Kiến trúc TP. Hồ Chí Minh, Đại học Bách
                  khoa TP. Hồ Chí Minh, Đại học Handong Global, Đại học Kỹ thuật
                  Mandalay, Viện Công nghệ Blekinge, Đại học Bách khoa Milano,
                  Le Cnam, Đại học Melbourne. Cuộc thi được tài trợ bởi HTE
                  Global Co. Ltd, Handong Engineering and Construction Co. Ltd.,
                  và Viện Công nghệ Năng lượng Xây dựng Hàn Quốc. Trong cuộc thi
                  đầu tiên này, người tham gia được yêu cầu xem xét môi trường
                  xây dựng đô thị hiện có và tưởng tượng cách nó nên ứng phó với
                  các đại dịch trong tương lai.
                </>
              )}
            </p>
          </div>

          <div className="text-justify col-12 content" id="compTimeline">
            <Image
              src="https://iscm-api.ueh.edu.vn/public/static/images/competitive/futurecity/timeline.jpg"
              alt="timeline"
              className="img-fluid w-full object-contain h-auto"
              width={1200}
              height={600}
            />
          </div>
        </div>

        <h3>{locale === "en" ? "Activities:" : "Các hoạt động:"}</h3>
        <p>
          {locale === "en" ? (
            <>
              The Institute of Smart Cities and Management (ISCM) - University
              of Economics Ho Chi Minh City (UEH) successfully organized the
              international launch event, along with the award ceremony of the
              first international design competition. “Cities of the Future:
              Designing for Post-Pandemic”.
            </>
          ) : (
            <>
              Viện Quản lý Thành phố Thông minh (ISCM) - Trường Đại học Kinh tế
              TP. Hồ Chí Minh (UEH) đã tổ chức thành công sự kiện ra mắt quốc
              tế, đồng thời với lễ trao giải của cuộc thi thiết kế quốc tế đầu
              tiên mang tên “Thành phố Tương lai: Thiết kế cho Thế giới Hậu đại
              dịch” (Cities of the Future: Designing for Post-Pandemic).
            </>
          )}
        </p>

        <h4>The 1st International Design Competition Award Ceremony</h4>
        <p>
          {locale === "en" ? (
            <>
              On September 25, 2020, the award ceremony for the competition was
              conducted in Ho Chi Minh City. This event was held in conjunction
              with the inauguration of the international event hosted by the
              Institute for Smart Cities and Management (UEH - ISCM).
              <br />
              <br />
              In the first round of the competition, competitors were given the
              task of thinking about the urban environment as it exists today
              and imagining how it will react to pandemics in the future.
              Participants are at liberty to submit a new design in a location
              of their choosing, which may be either of the two provided
              options.
              <br />
              <br />
              Participants are encouraged to take risks and think creatively in
              order to succeed in this competition. How might architecture,
              urban design, and planning contribute to the resilience of cities
              during and after an outbreak of a pandemic? Participants are
              required to employ novel approaches and creative conceptions in
              order to combat the pandemic situation, while also taking into
              consideration the progression of technology.
            </>
          ) : (
            <>
              Vào ngày 25 tháng 9 năm 2020, lễ trao giải của cuộc thi đã được tổ
              chức tại Thành phố Hồ Chí Minh. Sự kiện này được tổ chức đồng thời
              với lễ khai mạc sự kiện quốc tế do Viện Quản lý Thành phố Thông
              minh (UEH - ISCM) chủ trì.
              <br />
              <br />
              Trong vòng đầu tiên của cuộc thi, các thí sinh được giao nhiệm vụ
              suy nghĩ về môi trường đô thị hiện tại và tưởng tượng cách nó sẽ
              ứng phó với các đại dịch trong tương lai. Người tham gia có quyền
              tự do đề xuất một thiết kế mới tại địa điểm do mình lựa chọn, có
              thể là một trong hai lựa chọn được cung cấp hoặc bất kỳ địa điểm
              nào khác mà họ mong muốn.
              <br />
              <br />
              Cuộc thi khuyến khích người tham gia mạo hiểm và suy nghĩ sáng tạo
              để đạt được thành công. Kiến trúc, thiết kế đô thị và quy hoạch đô
              thị có thể đóng góp như thế nào để tăng cường khả năng chống chịu
              của thành phố trong và sau đại dịch? Người tham gia cần áp dụng
              những cách tiếp cận mới mẻ cùng các ý tưởng sáng tạo để đối phó
              với tình huống đại dịch, đồng thời xem xét đến sự phát triển của
              công nghệ.
            </>
          )}
        </p>

        <h4>{locale === "en" ? "Winning Projects" : "Các bài thi đạt giải"}</h4>
        <ul>
          <li>
            {locale === "en" ? "First Prize" : "Giải nhất"}:{" "}
            <Link
              className="underline"
              href="https://www.facebook.com/ISCM.UEH/photos/pcb.173323301006243/173320274339879"
              target="_blank"
            >
              https://www.facebook.com/ISCM.UEH/photos/pcb.173323301006243/173320274339879
            </Link>
          </li>
          <li>
            {locale === "en" ? "Second Prize" : "Giải nhì"}:{" "}
            <Link
              className="underline"
              href="https://www.facebook.com/ISCM.UEH/photos/pcb.173323301006243/173320257673214"
              target="_blank"
            >
              https://www.facebook.com/ISCM.UEH/photos/pcb.173323301006243/173320257673214
            </Link>
          </li>
          <li>
            {locale === "en" ? "Favorite" : "Giải bình chọn"} :{" "}
            <Link
              className="underline"
              href="https://www.facebook.com/ISCM.UEH/photos/pcb.173323301006243/173320241006549"
              target="_blank"
            >
              https://www.facebook.com/ISCM.UEH/photos/pcb.173323301006243/173320241006549
            </Link>
          </li>
        </ul>

        <Booklet
          booklet={[
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-01.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-02.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-03.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-04.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-05.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-06.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-07.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-08.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-09.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-10.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-11.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-12.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-13.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-14.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-15.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-16.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-17.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-18.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-19.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-20.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-21.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-22.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-23.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-24.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-25.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-26.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-27.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-28.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-29.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-30.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-31.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-32.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-33.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-34.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-35.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-36.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-37.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-38.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-39.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-40.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-41.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-42.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-43.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-44.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-45.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-46.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-47.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-48.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-49.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-50.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-51.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-52.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-53.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-54.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-55.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-56.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-57.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-58.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-59.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-60.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-61.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-62.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-63.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/booklet/2020/futurecity/CompetitionBooklet2-64.jpg",
          ]}
        />

        <div className="text-justify col-12 mb-50 content" id="compSponsor">
          <Image
            src="https://iscm-api.ueh.edu.vn/public/static/images/competitive/futurecity/partners.jpg"
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
