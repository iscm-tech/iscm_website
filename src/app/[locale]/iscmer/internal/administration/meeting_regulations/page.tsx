import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="text-center uppercase">Quy chế họp và lưu trữ biên bản</h1>
      <div className="content-body mt-5">
        <p>
          Link truy cập:{" "}
          <Link
            href="https://docs.google.com/spreadsheets/d/1tMc-Iuul27ykrobGg2pjW1lH_b_NigwdGCbNTp4hxos/edit?usp=sharing"
            target="_blank"
            className="text-[#cd2027]!"
          >
            [Nhấn vào đây]
          </Link>
        </p>
        <div>
          <h3>I. Hệ thống các cuộc họp nội bộ</h3>
          <p>
            Nhằm đảm bảo luồng thông tin xuyên suốt, hệ thống họp tại ISCM được
            quy định theo 5 cấp độ:
          </p>

          <ul className="list-disc! pl-4 mb-4">
            <li className="list-item! text-justify">
              Họp Toàn Viện (All-hands): Viện trưởng họp cùng toàn bộ thành viên
              ISCM định kỳ 02 tháng/lần.
            </li>
            <li className="list-item! text-justify">
              Họp Ban điều hành (Heads):
              <ul className="list-disc! pl-4 mb-4">
                <li className="list-item! text-justify">
                  Họp chung: Viện trưởng họp cùng toàn thể các Trưởng nhóm chức
                  năng định kỳ 02 tuần/lần.
                </li>
                <li className="list-item! text-justify">
                  Họp riêng (1-on-1): Viện trưởng họp riêng với từng Trưởng nhóm
                  chức năng định kỳ 01 tháng/lần.
                </li>
                <li className="list-item! text-justify">
                  Họp Báo cáo tiến độ (Review): Viện trưởng họp cùng Quản
                  lý/Điều phối viên của các Labs, Centers, Dự án và nhóm Gọi vốn
                  (Fundraising) định kỳ 01 tháng/lần.
                </li>
                <li className="list-item! text-justify">
                  Họp Triển khai (Teams/Projects): Nhóm chức năng và dự án họp
                  chủ động theo lịch do Head/Lead/ Manager/Coordinator sắp xếp.
                </li>
                <li className="list-item! text-justify">
                  Họp Định hướng & Khai vấn nhân sự trẻ (Youth Mentoring): Viện
                  trưởng họp riêng với lực lượng Thực tập sinh (Interns), Cộng
                  tác viên và Chuyên viên trẻ (dưới 30 tuổi) định kỳ 03
                  tháng/lần. (Mục đích: Lắng nghe, truyền cảm hứng, gỡ rối và
                  phát triển ý tưởng mới).
                </li>
                <li className="list-item! text-justify">
                  Họp Đột xuất (Ad-hoc): Triệu tập theo yêu cầu của Viện trưởng
                  để xử lý vấn đề cấp bách.
                </li>
              </ul>
            </li>
          </ul>

          <h3>II. Quy định lập và Lưu trữ biên bản họp (Meeting Minutes)</h3>
          <p>
            Yêu cầu bắt buộc: Tất cả các cuộc họp trên đều phải ghi nhận bằng
            Biên bản họp theo biểu mẫu thống nhất, lưu trữ đúng tên/cấu trúc
            ngay sau cuộc họp theo quy tắc phân luồng sau:
          </p>
          <ol className="list-decimal! pl-4 mb-4">
            <li className="list-item!">
              Đối với Họp Dự án / Sự kiện
              <ul className="list-disc! pl-4">
                <li className="list-item!">
                  Lưu trữ: Lưu trực tiếp tại thư mục (folder) của dự án/sự kiện
                  đó.
                </li>
                <li className="list-item!">
                  Trách nhiệm: Trưởng ban tổ chức (Host) hoặc Điều phối viên
                  (Coordinator).
                </li>
              </ul>
            </li>
            <li className="list-item!">
              Đối với Họp Vận hành & Chuyên môn chung
              <ul className="list-disc! pl-4">
                <li className="list-item!">
                  Lưu trữ: Lưu tập trung tại hệ thống chung của ISCM theo các
                  nhóm thư mục đã phân loại:
                  <p>
                    - Họp toàn Viện (All-hands).
                    <br />
                    - Họp cấp Quản lý (Heads). <br />
                    - Họp Đối tác (Stakeholders). <br />
                    - Họp nội bộ Nhóm chức năng (Teams). <br />- Họp chuyên đề
                    dài hạn (ASIIN, Phát triển chương trình đào tạo...).
                  </p>
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
