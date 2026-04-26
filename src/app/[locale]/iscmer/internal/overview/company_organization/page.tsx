import envConfig from "@/config";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="py-4">
      <h1 className="text-center uppercase">
        Mô hình tổ chức & quản lý tại ISCM
        <br />
        <span className="text-base">(Áp dụng chính thức từ tháng 01/2026)</span>
      </h1>

      <div className="content-body mt-5">
        <p>
          Link truy cập:{" "}
          <Link
            href="https://docs.google.com/spreadsheets/d/1TvHGm4XOnBHcm41swyc4J6q4A-kiO7JVDwuKgcm4ygI/edit?gid=0#gid=0"
            target="_blank"
            className="text-[#cd2027]!"
          >
            [Nhấn vào đây]
          </Link>
        </p>

        <h3>Phần I: Nguyên tắc tổ chức và Vận hành chung</h3>

        <p className="text-justify">
          ISCM vận hành theo mô hình linh hoạt, kết hợp giữa quản lý theo chức
          năng (Functional) và quản lý theo dự án/sự kiện
          (Matrix/Project-based). Nhằm đảm bảo tính minh bạch và hiệu quả, quy
          tắc làm việc được quy định như sau:
        </p>
        <ul className="list-disc! pl-4 mb-4">
          <li className="list-item!">
            Thẩm quyền của Viện trưởng: Viện trưởng là người nắm quyền điều hành
            tối cao tại ISCM; trực tiếp phân công, bổ nhiệm các vị trí: Head,
            Lead, Manager, Coordinator, Host;
          </li>
          <li className="list-item!">
            Quy định về cấp báo cáo và giao việc chéo (Cross-functional): Thành
            viên thuộc nhóm chức năng nào sẽ làm việc theo ngành dọc và báo cáo
            trực tiếp cho Trưởng nhóm (Head) đó. Khi cần thiết, thành viên có
            thể báo cáo vượt cấp trực tiếp cho Viện trưởng. <br />
            <span className="text-[#cd2027]">
              <b>Đặc biệt:</b> Trưởng nhóm chức năng không được quyền tự ý điều
              động nhân sự của nhóm khác. Chỉ có Viện trưởng mới có quyền phân
              công một thành viên làm việc chéo (cross-line) sang các dự án hoặc
              nhóm chức năng khác;
            </span>
          </li>
          <li className="list-item!">
            Tính linh hoạt trong vai trò: Một cá nhân có thể đảm nhiệm nhiều vai
            trò cùng lúc (ví dụ: vừa là Manager dự án A, Coordinator lab B, Host
            sự kiện C, và là Member của dự án D);
          </li>
          <li className="list-item!">
            Nguyên tắc tuân thủ: Khi tham gia vào bất kỳ dự án/nhóm nào, cá nhân
            phải tuân thủ tuyệt đối sự phân công, điều hành của người đứng đầu
            dự án/nhóm đó (bất kể cấp bậc hành chính của cá nhân đó ở nhóm chức
            năng gốc là cao hay thấp);
          </li>
          <li className="list-item!">
            Giám đốc Chương trình đào tạo: Đây là vị trí mang tính học thuật đặc
            thù. Dù do Viện trưởng phân công nhưng bắt buộc phải được Ban Giám
            đốc UEH ra quyết định công nhận chính thức mới có hiệu lực.
          </li>
        </ul>
        <h3>Phần II: Phân tầng và Mô tả các vị trí quản lý</h3>
        <p>
          Hệ thống nhân sự tại ISCM được phân tầng rõ ràng với các vai trò và
          mức độ chịu trách nhiệm cụ thể như sau:
        </p>
        <ol className="list-decimal! pl-4">
          <li>
            Viện trưởng (Institute Director)
            <ul className="list-disc! pl-4">
              <li className="list-item!">
                Vai trò: Quản lý cấp cao, chịu trách nhiệm trực tiếp trước Viện
                trưởng về một mảng nghiệp vụ cốt lõi của Viện.
              </li>
              <li className="list-item!">
                Trách nhiệm: Định hướng, ra quyết định, quản lý tổng thể và
                triển khai các hoạt động của nhóm. Có trách nhiệm phối hợp với
                các Head khác trong các dự án/sự kiện chung theo phân công của
                Viện trưởng.
              </li>
              <li className="list-item!">
                Cơ cấu: Gồm 06 nhóm chức năng: Operation and Finance (Vận hành
                và Tài chính), Academia (Đào tạo học thuật), Research (Nghiên
                cứu khoa học), Partnership (Đối tác chiến lược), Engagement (Kết
                nối cộng đồng), Communication & PR (Truyền thông và Quan hệ công
                chúng)
              </li>
            </ul>
          </li>
          <li>
            Trưởng nhóm chức năng (Head)
            <ul className="list-disc! pl-4">
              <li className="list-item!">
                Vai trò: Người đứng đầu, nắm quyền ra quyết định tối cao về
                chiến lược, nhân sự và tài chính của Viện.
              </li>
              <li className="list-item!">
                Trách nhiệm: Định hướng tầm nhìn, dẫn dắt toàn bộ hoạt động của
                ISCM và trực tiếp quản lý các cấp quản lý cấp trung (Head, Lead,
                Manager).
              </li>
            </ul>
          </li>
          <li>
            Quản lý cấp cao dự án/chuyên môn (Lead / Manager)
            <ul className="list-disc! pl-4">
              <li className="list-item!">
                Vai trò: Người đứng đầu các cấu phần lớn mang tính chiến lược
                hoặc chuyên môn sâu.
              </li>
              <li className="list-item!">
                Trách nhiệm: Trực tiếp định hướng, quản lý tổng thể, ra quyết
                định và báo cáo với Viện trưởng. Phụ trách việc dẫn dắt các:
                Nhóm học phần (Course modules), Phòng thí nghiệm (Lab), Trung
                tâm trực thuộc (Center), Các dự án quy mô lớn (Large-scale
                projects). Nếu đã có những vị trí này thì sẽ không có
                Coordinator nữa.
              </li>
            </ul>
          </li>
          <li>
            Điều phối viên (Coordinator)
            <ul className="list-disc! pl-4">
              <li className="list-item!">
                Vai trò: Người phụ trách chính về mặt vận hành, giữ vai trò đầu
                mối thông tin cho các hoạt động mang tính dài hạn hoặc có cấu
                trúc bền vững.
              </li>
              <li className="list-item!">
                Trách nhiệm: Lập kế hoạch, theo dõi tiến độ và điều phối các
                nguồn lực hoạt động hàng ngày của: Các nhóm nghiên cứu, Lab,
                Center, Dự án vừa và nhỏ, hoặc các Sáng kiến (Initiatives). Trực
                tiếp báo cáo tiến độ cho Viện trưởng hoặc cấp quản lý trực tiếp.
              </li>
            </ul>
          </li>
          <li>
            Trưởng ban tổ chức / Phụ trách sự kiện (Host)
            <ul className="list-disc! pl-4">
              <li className="list-item!">
                Vai trò: Đầu mối chịu trách nhiệm cao nhất đối với các hoạt
                động, sự kiện có tính thời vụ (có ngày bắt đầu và kết thúc rõ
                ràng).
              </li>
              <li className="list-item!">
                Trách nhiệm: Lập kế hoạch, điều phối nhân sự, ngân sách và tổ
                chức triển khai các sự kiện/hoạt động được giao. Chịu trách
                nhiệm đảm bảo sự kiện diễn ra thành công và báo cáo kết quả trực
                tiếp với Viện trưởng.
              </li>
            </ul>
          </li>
          <li>
            Thành viên (Members)
            <ul className="list-disc! pl-4">
              <li className="list-item!">
                Vai trò: Nhân sự thực thi trực tiếp các nghiệp vụ chuyên môn.
              </li>
              <li className="list-item!">
                Trách nhiệm: Triển khai các đầu việc được giao theo đúng chất
                lượng và tiến độ. Báo cáo kết quả công việc cho Viện trưởng hoặc
                Trưởng nhóm (Head/Lead/Manager/Host/Coordinator) mà mình được
                phân công.
              </li>
            </ul>
          </li>
        </ol>

        <figure className="w-full flex items-center justify-center mt-4">
          <Image
            src={"/images/about/company_organization.png"}
            alt="Company Organization"
            width={2400}
            height={1200}
            className="w-full object-contain"
            quality={100}
          />
        </figure>
      </div>
    </div>
  );
}
