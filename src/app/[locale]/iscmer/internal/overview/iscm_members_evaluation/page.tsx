import { FileTextIcon, LinkIcon } from "lucide-react";
import { getLocale } from "next-intl/server";
import Link from "next/link";
import React from "react";

export default async function page() {
  const locale = await getLocale();

  return (
    <div>
      <h1 className="text-center uppercase">
        {locale === "en" ? (
          <>
            REGULATIONS ON GOAL SETTING, PERFORMANCE EVALUATION <br /> AND
            WORKING TIME AT ISCM
          </>
        ) : (
          <>
            QUY ĐỊNH VỀ THIẾT LẬP MỤC TIÊU, ĐÁNH GIÁ NHÂN SỰ <br /> VÀ THỜI GIAN
            LÀM VIỆC TẠI ISCM
          </>
        )}
      </h1>

      <div className="content-body mt-5">
        {locale === "en" && (
          <>
            <h3>I. Goal Setting System and Personnel Evaluation</h3>
            <p className="text-justify">
              This system is designed to establish clear direction, closely
              monitor engagement levels, quality of contributions, and
              individual performance, as well as the operational efficiency of
              the entire organization. All evaluation results are directly
              consolidated and managed by the Institute Director, serving as a
              basis for resource allocation, rewards, process improvement, and
              strategic workforce development.
            </p>

            <p className="text-justify">
              The goal-setting and evaluation process is built upon five core
              pillars:
            </p>

            <ul className="list-decimal! pl-4 mb-4">
              <li className="list-item!">
                Goal Setting (Annual OKRs): Based on UEH’s annual strategic
                objectives and ISCM’s direction, each member is assigned
                responsibilities and proactively develops their own OKR set.
                This serves as the foundational benchmark for all annual
                evaluations.
              </li>

              <li className="list-item!">
                Individual Performance Review: Conducted quarterly by direct
                managers (Head, Lead, Manager, Coordinator, Host), assessing
                task completion quality based on committed OKRs, progress, and
                effectiveness of ad-hoc assignments.
              </li>

              <li className="list-item!">
                Cross-functional & Bottom-up Evaluation: Conducted every 1–2
                years, where all members assess the operational quality, support
                effectiveness, and collaboration level of functional teams
                (Operations, Academia, Research, etc.). This helps identify
                bottlenecks in cross-team workflows and improve organizational
                processes.
              </li>

              <li className="list-item!">
                Attendance: Records and validates member participation rates in
                ISCM activities, events, and joint projects.
              </li>

              <li className="list-item!">
                Student Feedback: Collects and records student evaluations
                regarding ISCM staff performance as well as related programs and
                activities.
              </li>

              <li className="list-item!">
                Performance evaluation on Smart Office system
              </li>
            </ul>

            <h3>II. Working Time and Work Arrangement Regulations</h3>

            <p>
              To ensure continuous workflow while maintaining flexibility,
              members must strictly comply with the following absence and
              schedule change reporting procedures:
            </p>

            <ul className="list-disc! pl-4">
              <li className="list-item!">
                Internal changes: In cases of lateness, working from home, or
                changes in office working schedules, members must proactively
                request approval from the Institute Director and update full
                details on the ISCM internal management system.
              </li>

              <li className="list-item!">
                Administrative procedures: For leave requests (personal leave,
                sick leave, etc.) or official business trips, members must
                complete the registration process and strictly follow UEH’s
                official approval workflow (via Smart Office system).
              </li>
            </ul>

            <ul className="mt-4">
              <h4>Form Directory:</h4>

              <li className="list-item! mt-3">
                <Link
                  className="flex gap-1 hover:text-[#cd2027]! transition-colors"
                  target="_blank"
                  href={"https://forms.gle/SxMBaT16JRtAxEJH9"}
                >
                  <FileTextIcon />
                  ISCM Member Performance Evaluation
                </Link>
              </li>

              <li className="list-item! mt-3">
                <Link
                  className="flex gap-1 hover:text-[#cd2027]! transition-colors"
                  target="_blank"
                  href={"https://forms.gle/kzTw93Y4xDw382Do6"}
                >
                  <FileTextIcon />
                  Annual Student Survey
                </Link>
              </li>

              <li className="list-item! mt-3">
                <Link
                  className="flex gap-1 hover:text-[#cd2027]! transition-colors"
                  target="_blank"
                  href={"https://forms.gle/TQP4YWTrLTzjq3Vf7"}
                >
                  <FileTextIcon />
                  Feedback Inbox
                </Link>
              </li>

              <li className="list-item! mt-3">
                <Link
                  className="flex gap-1 hover:text-[#cd2027]! transition-colors"
                  target="_blank"
                  href={"https://forms.gle/ZCoJaAhjd756RBSi7"}
                >
                  <FileTextIcon />
                  Group Evaluation
                </Link>
              </li>
            </ul>
          </>
        )}
        {locale === "vi" && (
          <>
            <h3>I. Hệ thống thiết lập mục tiêu và Đánh giá nhân sự</h3>
            <p className="text-justify">
              Hệ thống này được xây dựng nhằm thiết lập định hướng rõ ràng, theo
              dõi sát sao mức độ gắn kết, chất lượng đóng góp và hiệu suất công
              việc của từng cá nhân cũng như hiệu quả vận hành của toàn bộ máy.
              Toàn bộ kết quả đánh giá sẽ do Viện trưởng trực tiếp tổng hợp và
              quản lý, làm cơ sở để điều chỉnh nguồn lực, khen thưởng, cải tiến
              quy trình và hoạch định chiến lược phát triển đội ngũ.
            </p>

            <p className="text-justify">
              Quy trình thiết lập mục tiêu và đánh giá được thực hiện dựa trên 5
              trụ cột cốt lõi:
            </p>

            <ul className="list-decimal! pl-4 mb-4">
              <li className="list-item!">
                Thiết lập mục tiêu (Annual OKRs): Dựa trên mục tiêu chiến lược
                hàng năm của UEH và định hướng của ISCM, mỗi thành viên sẽ được
                phân công nhiệm vụ và chủ động xây dựng bộ mục tiêu OKR cá nhân.
                Đây là thước đo cơ sở cho mọi hoạt động đánh giá trong năm.
              </li>
              <li className="list-item!">
                Đánh giá hiệu quả công việc cá nhân (Performance Review): Định
                kỳ mỗi quý 1 lần, các cấp quản lý trực tiếp (Head, Lead,
                Manager, Coordinator, Host) sẽ tiến hành đánh giá chất lượng
                hoàn thành nhiệm vụ của các thành viên dựa trên tiến độ, mức độ
                đạt được của các OKR đã cam kết và hiệu quả thực thi các công
                việc phát sinh.
              </li>
              <li className="list-item!">
                Đánh giá hoạt động của các nhóm chức năng (Cross-functional &
                Bottom-up Review): Định kỳ 1 đến 2 năm/lần, toàn bộ các thành
                viên sẽ tham gia đánh giá chất lượng vận hành, hiệu quả hỗ trợ
                và mức độ phối hợp của các nhóm chức năng (Operation, Academia,
                Research, v.v.). Tiêu chí này giúp nhận diện các điểm nghẽn
                trong quy trình làm việc liên nhóm và cải tiến bộ máy quản lý.
              </li>
              <li className="list-item!">
                Chuyên cần (Attendance): Ghi nhận và xác nhận tỷ lệ tham gia của
                các thành viên vào các hoạt động, sự kiện và dự án chung của
                ISCM.
              </li>
              <li className="list-item!">
                Phản hồi từ sinh viên (Student Feedback): Thu thập và ghi nhận
                các ý kiến đánh giá của sinh viên đối với chất lượng hỗ trợ của
                nhân sự ISCM cũng như các chương trình, hoạt động liên quan.
              </li>
              <li className="list-item!">
                Đánh giá performance trên Smart Office
              </li>
            </ul>

            <h3>II. Quy định về thời gian và hình thức làm việc</h3>
            <p>
              Nhằm đảm bảo luồng công việc xuyên suốt nhưng vẫn giữ được tính
              linh hoạt, các thành viên cần tuân thủ nghiêm ngặt quy trình báo
              cáo vắng mặt/thay đổi lịch làm việc như sau:
            </p>
            <ul className="list-disc! pl-4">
              <li className="list-item!">
                Đối với các thay đổi nội bộ: Trường hợp đến muộn, cần làm việc
                từ xa (Work From Home) hoặc thay đổi lịch trực/làm việc tại văn
                phòng, thành viên phải chủ động xin phép Viện trưởng và cập nhật
                thông tin đầy đủ lên hệ thống quản lý nội bộ của ISCM.
              </li>
              <li className="list-item!">
                Đối với các thủ tục hành chính: Trường hợp xin nghỉ phép (giải
                quyết việc riêng, nghỉ ốm, v.v.) hoặc đi công tác chính thức,
                thành viên bắt buộc phải thực hiện thủ tục đăng ký và tuân thủ
                theo đúng quy trình phê duyệt chung của UEH (làm trên hệ thống
                Smart Office).
              </li>
            </ul>

            <ul className="mt-4">
              <h4>Danh mục các forms:</h4>
              <li className="list-item! mt-3">
                <Link
                  className="flex gap-1 hover:text-[#cd2027]! transition-colors"
                  target="_blank"
                  href={"https://forms.gle/SxMBaT16JRtAxEJH9"}
                >
                  <FileTextIcon />
                  Đánh giá hiệu suất thành viên ISCM
                </Link>
              </li>
              <li className="list-item! mt-3">
                <Link
                  className="flex gap-1 hover:text-[#cd2027]! transition-colors"
                  target="_blank"
                  href={"https://forms.gle/kzTw93Y4xDw382Do6"}
                >
                  <FileTextIcon /> Khảo sát sinh viên thường niên
                </Link>
              </li>
              <li className="list-item! mt-3">
                <Link
                  className="flex gap-1 hover:text-[#cd2027]! transition-colors"
                  target="_blank"
                  href={"https://forms.gle/TQP4YWTrLTzjq3Vf7"}
                >
                  <FileTextIcon /> Hòm thư bồ câu
                </Link>
              </li>
              <li className="list-item! mt-3">
                <Link
                  className="flex gap-1 hover:text-[#cd2027]! transition-colors"
                  target="_blank"
                  href={"https://forms.gle/ZCoJaAhjd756RBSi7"}
                >
                  <FileTextIcon /> Đánh giá nhóm
                </Link>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
