import { FileTextIcon } from "lucide-react";
import { getLocale } from "next-intl/server";
import Link from "next/link";
import React from "react";

export default async function page() {
  const locale = await getLocale();
  return (
    <div>
      <h1 className="text-center uppercase">
        {locale === "en"
          ? "SPENDING REGULATIONS & PAYMENT PROCEDURES"
          : " QUY CHẾ CHI TIÊU & QUY TRÌNH THANH TOÁN"}
      </h1>
      <div className="content-body mt-5">
        {locale === "en" && (
          <>
            <h3>I. Financial Regulations System (02 Tracks)</h3>
            <p>
              All financial inflows and outflows at ISCM are managed and
              cross-checked based on two regulatory systems (updated annually):
            </p>
            <ul className="list-disc! pl-4 mb-4">
              <li className="list-item!">
                Track 1 - UEH Internal Financial Regulations: Defines standard
                expenditure levels of the University for education activities,
                scientific research, and domestic/international travel expenses.
                (Accessible via the UEHer system).
              </li>

              <li className="list-item!">
                Track 2 - ISCM Internal Financial Regulations: Defines specific
                spending and incentive mechanisms funded by ISCM’s internal
                budget. Applied to expenses outside UEH regulations or items not
                covered by approved UEH plans/proposals.
              </li>
            </ul>
            <h3>II. Payment Workflow Classification (04 Flows)</h3>
            <p>
              To ensure accurate budget source allocation and efficient
              processing, payment procedures are divided into four workflows:
            </p>
            <ol className="list-decimal! pl-4 mb-4">
              <li className="list-item">
                Individual Payment - Track 1 applicable
                <ul className="list-disc! pl-4">
                  <li className="list-item!">
                    Categories: Travel expenses, teaching remuneration, personal
                    advance payments.
                  </li>
                  <li className="list-item!">
                    Responsible party: Members handle self-payment procedures
                    directly with UEH Finance & Accounting Department.
                  </li>
                </ul>
              </li>

              <li className="list-item">
                Event / Project / Research Payment - Track 1 applicable
                <ul className="list-disc! pl-4">
                  <li className="list-item!">
                    Categories: Event organization costs, research funding,
                    project equipment procurement, etc.
                  </li>
                  <li className="list-item!">
                    Responsible party: Direct project owners (Head, Lead,
                    Manager, Coordinator, Host).
                  </li>
                </ul>
              </li>

              <li className="list-item">
                ISCM Fund Payment (with UEH) - Track 1 applicable
                <ul className="list-disc! pl-4">
                  <li className="list-item!">
                    Categories: Operational costs, large-scale event series, or
                    fund disbursement through UEH systems.
                  </li>
                  <li className="list-item!">
                    Responsible party: Operations & Finance team (Ms. Mai / Ms.
                    Tram).
                  </li>
                </ul>
              </li>

              <li className="list-item">
                Internal Payments & Incentives - ISCM Fund (Track 2 applicable)
                <ul className="list-disc! pl-4">
                  <li className="list-item!">
                    Categories:
                    <br />
                    Project development incentives for individuals who
                    successfully connect projects/funding.
                    <br />
                    Welfare and operational support expenses funded by ISCM
                    internal budget (not through UEH funding).
                  </li>
                  <li className="list-item!">
                    Responsible party: Proposer in coordination with O&amp;F
                    Head to submit internal approval workflow to the Institute
                    Director.
                  </li>
                </ul>
              </li>
            </ol>
            <ul className="mt-4">
              <h4>Form Directory:</h4>

              <li className="list-item! mt-3">
                <Link
                  className="flex gap-1 hover:text-[#cd2027]! transition-colors"
                  target="_blank"
                  href={
                    "https://docs.google.com/document/d/13UGGiAIj8D9NoFXTmOygFTL3c0wDsHwr/edit?usp=sharing&ouid=108537813011262227879&rtpof=true&sd=true"
                  }
                >
                  <FileTextIcon />
                  Internal Financial Regulations
                </Link>
              </li>

              <li className="list-item! mt-3">
                <Link
                  className="flex gap-1 hover:text-[#cd2027]! transition-colors"
                  target="_blank"
                  href={
                    "https://docs.google.com/spreadsheets/d/17AQFFAC-RzG4sVjn9jzC7ad24hL_QvibLifgH_3Drzw/edit?usp=sharing"
                  }
                >
                  <FileTextIcon />
                  Payment Document Preparation Guide
                </Link>
              </li>
            </ul>
          </>
        )}
        {locale === "vi" && (
          <>
            <h3>I. Hệ thống quy chế tài chính (02 Tracks)</h3>
            <p>
              Mọi hoạt động thu chi tại ISCM được quản lý và đối chiếu dựa trên
              2 hệ thống quy chế (được cập nhật hàng năm):
            </p>
            <ul className="list-disc! pl-4 mb-4">
              <li className="list-item!">
                Track 1 - Quy chế chi tiêu nội bộ UEH: Quy định các định mức chi
                tiêu ngân sách chuẩn của Trường dành cho hoạt động giáo dục,
                NCKH, và công tác phí (trong/ngoài nước). (Tra cứu tại hệ thống
                UEHer).
              </li>
              <li className="list-item!">
                Track 2 - Quy chế chi tiêu nội bộ ISCM: Quy định các định mức
                chi/thưởng đặc thù từ nguồn quỹ riêng của Viện. Áp dụng cho các
                khoản nằm ngoài quy chế của UEH hoặc không thuộc các Kế hoạch/Tờ
                trình đã được UEH phê duyệt.
              </li>
            </ul>
            <h3>II. Phân luồng quy trình thanh toán (04 Flows)</h3>
            <p>
              Nhằm đảm bảo hồ sơ được xử lý chính xác nguồn tiền và nhanh chóng,
              quy trình thanh toán được chia thành 4 luồng:
            </p>
            <ol className="list-decimal! pl-4 mb-4">
              <li className="list-item">
                Thanh toán Cá nhân (Individual Payment) - Áp dụng theo Track 1{" "}
                <ul className="list-disc! pl-4">
                  <li className="list-item!">
                    Hạng mục: Công tác phí, thù lao giảng dạy, tạm ứng cá nhân.
                  </li>
                  <li className="list-item!">
                    Người thực hiện: Thành viên tự chủ động làm thủ tục
                    (Self-payment) với phòng Tài chính - Kế toán UEH.
                  </li>
                </ul>
              </li>
              <li className="list-item">
                Thanh toán Sự kiện/ Dự án/ Nghiên cứu (Event/ Project Payment) -
                Áp dụng theo Track 1
                <ul className="list-disc! pl-4">
                  <li className="list-item!">
                    Hạng mục: Chi phí tổ chức sự kiện, ngân sách NCKH, mua sắm
                    thiết bị dự án...
                  </li>
                  <li className="list-item!">
                    Người thực hiện: Người phụ trách trực tiếp (Head, Lead,
                    Manager, Coordinator, Host).
                  </li>
                </ul>
              </li>
              <li className="list-item">
                Thanh toán Quỹ chung (ISCM Fund Payment with UEH) - Áp dụng theo
                Track 1
                <ul className="list-disc! pl-4">
                  <li className="list-item!">
                    Hạng mục: Chi phí vận hành bộ máy, chuỗi sự kiện lớn (Event
                    Series), hoặc giải ngân các nguồn tài trợ thông qua hệ thống
                    UEH.
                  </li>
                  <li className="list-item!">
                    Người thực hiện: Nhóm chuyên trách Operation & Finance (Ms.
                    Mai / Ms. Trâm).
                  </li>
                </ul>
              </li>
              <li className="list-item">
                Thanh toán & Khen thưởng nội bộ ISCM (ISCM Internal Payments &
                Incentives) - Áp dụng theo Track 2
                <ul className="list-disc! pl-4">
                  <li className="list-item!">
                    Hạng mục:
                    <br />
                    Thưởng phát triển dự án (Incentives) cho cá nhân kết nối
                    thành công dự án/tài trợ.
                    <br />
                    Các khoản chi phúc lợi, hỗ trợ vận hành đặc thù thuộc quỹ
                    riêng của Viện (không qua ngân sách UEH).
                  </li>
                  <li className="list-item!">
                    Người thực hiện: Người đề xuất phối hợp cùng Trưởng Nhóm O&F
                    thực hiện thủ tục nội bộ trình Viện trưởng phê duyệt.
                  </li>
                </ul>
              </li>
            </ol>
            <ul className="mt-4">
              <h4>Danh mục các forms:</h4>
              <li className="list-item! mt-3">
                <Link
                  className="flex gap-1 hover:text-[#cd2027]! transition-colors"
                  target="_blank"
                  href={
                    "https://docs.google.com/document/d/13UGGiAIj8D9NoFXTmOygFTL3c0wDsHwr/edit?usp=sharing&ouid=108537813011262227879&rtpof=true&sd=true"
                  }
                >
                  <FileTextIcon />
                  Quy chế chi tiêu nội bộ
                </Link>
              </li>
              <li className="list-item! mt-3">
                <Link
                  className="flex gap-1 hover:text-[#cd2027]! transition-colors"
                  target="_blank"
                  href={
                    "https://docs.google.com/spreadsheets/d/17AQFFAC-RzG4sVjn9jzC7ad24hL_QvibLifgH_3Drzw/edit?usp=sharing"
                  }
                >
                  <FileTextIcon /> Hướng dẫn chuẩn bị hồ sơ thanh toán
                </Link>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
