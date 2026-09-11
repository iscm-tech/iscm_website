import envConfig from "@/config";
import { getLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function page() {
  const locale = await getLocale();

  return (
    <div className="py-4">
      <h1 className="text-center uppercase">
        {locale === "en"
          ? "Organizational structure & management model at ISCM"
          : "Mô hình tổ chức & quản lý tại ISCM"}
        <br />
        <span className="text-base">
          {locale === "en"
            ? "(Officially effective from August 2026)"
            : "(Áp dụng chính thức từ tháng 08/2026)"}
        </span>
      </h1>

      <div className="content-body mt-5">
        <p>
          {locale === "en" ? "Access Link:" : "Link truy cập:"}{" "}
          <Link
            href="https://docs.google.com/spreadsheets/d/1TvHGm4XOnBHcm41swyc4J6q4A-kiO7JVDwuKgcm4ygI/edit?gid=0#gid=0"
            target="_blank"
            className="text-[#cd2027]!"
          >
            {locale === "en" ? "[Click here]" : "[Nhấn vào đây]"}
          </Link>
        </p>

        {locale === "vi" && (
          <>
            <h3>Phần I: Nguyên tắc tổ chức và Vận hành chung</h3>

            <p className="text-justify">
              ISCM vận hành theo mô hình linh hoạt, kết hợp giữa quản lý theo
              chức năng (Functional) và quản lý theo dự án/sự kiện
              (Matrix/Project-based). Mô hình này nhằm bảo đảm tính minh bạch,
              hiệu quả và khả năng phối hợp liên ngành, liên nhóm trong toàn
              Viện.
            </p>
            <ol className="list-decimal! pl-4 mb-4">
              <li className="list-item!">
                <b>Thẩm quyền của Viện trưởng:</b> Là người nắm quyền điều hành
                tối cao tại ISCM, chịu trách nhiệm cuối cùng về chiến lược phát
                triển, nhân sự, học thuật, tài chính, đối ngoại và chất lượng
                vận hành chung của Viện. Viện trưởng trực tiếp phân công, bổ
                nhiệm các vị trí: Head, Manager, Coordinator và Host.
              </li>
              <li className="list-item!">
                <b>Vai trò của Viện phó:</b> Là người hỗ trợ trực tiếp Viện
                trưởng, phụ trách toàn bộ các hoạt động nội bộ của ISCM, đặc
                biệt là vận hành nội bộ, tài chính, nhân sự, hành chính, truyền
                thông nội bộ và bên ngoài, đồng thời phối hợp các hoạt động hỗ
                trợ Viện trưởng. Viện phó chịu trách nhiệm trực tiếp đối với
                chuyên viên Operation & Finance, chuyên viên Truyền thông và các
                đầu việc nội bộ khác do Viện trưởng giao.
              </li>
              <li className="list-item!">
                <b>
                  Quy định về cấp báo cáo và giao việc chéo
                  (Cross-functional):
                </b>{" "}
                Thành viên thuộc nhóm chức năng nào sẽ làm việc theo ngành dọc
                và báo cáo trực tiếp cho Trưởng nhóm (Head) đó. Khi cần thiết,
                thành viên có thể báo cáo vượt cấp trực tiếp cho Viện trưởng.
                Trưởng nhóm chức năng không được quyền tự ý điều động nhân sự
                của nhóm khác. Chỉ có Viện trưởng mới có quyền phân công một
                thành viên làm việc chéo sang nhóm chức năng khác hoặc dự án
                khác.
              </li>
              <li className="list-item!">
                <b>Tính linh hoạt trong vai trò:</b> Một cá nhân có thể đảm
                nhiệm nhiều vai trò cùng lúc, ví dụ: vừa là Manager của một dự
                án, vừa là Coordinator của một lab, vừa là Host của một sự kiện,
                vừa là Member của một dự án khác. Khi tham gia vào bất kỳ dự
                án/nhóm nào, cá nhân phải tuân thủ tuyệt đối sự phân công và
                điều hành của người đứng đầu dự án/nhóm đó, bất kể cấp bậc hành
                chính của cá nhân đó ở nhóm gốc là cao hay thấp.
              </li>
              <li className="list-item!">
                <b>Viện phó, Giám đốc chương trình đào tạo:</b> Do Viện trưởng
                phân công, nhưng bắt buộc phải được Ban Giám đốc UEH ra quyết
                định công nhận chính thức mới có hiệu lực.
              </li>
            </ol>

            <h3>Phần II: Phân tầng và Mô tả các vị trí quản lý</h3>
            <p>
              Hệ thống nhân sự tại ISCM được phân tầng rõ ràng với các vai trò
              và mức độ chịu trách nhiệm cụ thể như sau:
            </p>
            <ol className="list-decimal! pl-4">
              <li>
                Viện trưởng (Institute Director)
                <ul className="list-disc! pl-4">
                  <li className="list-item!">
                    Vai trò: Người đứng đầu, nắm quyền ra quyết định về chiến
                    lược, nhân sự và tài chính của Viện.
                  </li>
                  <li className="list-item!">
                    Trách nhiệm: Định hướng tầm nhìn, dẫn dắt toàn bộ hoạt động
                    của ISCM, trực tiếp quản lý các cấp quản lý cấp trung, phê
                    duyệt các quyết định nhân sự, chiến lược, tài chính và hoạt
                    động triển khai liên viện/liên đơn vị, đồng thời giám sát
                    chất lượng tổng thể.
                  </li>
                </ul>
              </li>
              <li>
                Viện phó (Deputy Director)
                <ul className="list-disc! pl-4">
                  <li className="list-item!">
                    Vai trò: Người hỗ trợ trực tiếp Viện trưởng, phụ trách toàn
                    bộ hoạt động nội bộ và hỗ trợ điều hành thường nhật của
                    Viện.
                  </li>
                  <li className="list-item!">
                    Trách nhiệm: Điều phối nội bộ; theo dõi và hỗ trợ vận hành;
                    phụ trách chuyên viên O&F và chuyên viên Truyền thông; theo
                    dõi tiến độ công việc nội bộ; hỗ trợ Viện trưởng kiểm soát
                    kế hoạch, nhắc thời hạn, phân luồng công việc và bảo đảm các
                    hoạt động nội bộ vận hành thông suốt.
                  </li>
                  <li className="list-item!">
                    Phạm vi quản lý: Quản lý trực tiếp các đầu việc hỗ trợ nội
                    bộ, đặc biệt là nhân sự hỗ trợ nội bộ, tài chính – hậu cần,
                    truyền thông và các công việc hành chính phối hợp.
                  </li>
                </ul>
              </li>
              <li>
                Trưởng nhóm chức năng (Head)
                <ul className="list-disc! pl-4">
                  <li className="list-item!">
                    Vai trò: Quản lý cấp cao, chịu trách nhiệm trực tiếp trước
                    Viện trưởng về một mảng nghiệp vụ cốt lõi của Viện.
                  </li>
                  <li className="list-item!">
                    Trách nhiệm: Định hướng nhóm; ra quyết định trong phạm vi
                    chức năng; quản lý tổng thể hoạt động của nhóm; phối hợp với
                    các Head khác trong các dự án/sự kiện chung theo phân công
                    của Viện trưởng; chịu trách nhiệm về kết quả đầu ra của
                    nhóm.
                  </li>
                  <li className="list-item!">
                    Cơ cấu: Gồm 05 nhóm chức năng: Operation and Finance (Vận
                    hành và Tài chính); Academia (Đào tạo học thuật); Research
                    (Nghiên cứu khoa học); Partnership (Đối tác chiến lược);
                    Engagement (Kết nối cộng đồng).
                  </li>
                </ul>
              </li>
              <li>
                Quản lý cấp cao dự án/chuyên môn (Lead / Manager)
                <ul className="list-disc! pl-4">
                  <li className="list-item!">
                    Vai trò: Người đứng đầu các cấu phần lớn mang tính chiến
                    lược hoặc chuyên môn sâu.
                  </li>
                  <li className="list-item!">
                    Trách nhiệm: Trực tiếp định hướng, quản lý tổng thể, ra
                    quyết định trong phạm vi phụ trách, báo cáo với Viện trưởng
                    và dẫn dắt các nhóm học phần (Course modules), phòng thí
                    nghiệm (Lab), trung tâm trực thuộc (Center) hoặc các dự án
                    quy mô lớn (Large-scale projects).
                  </li>
                  <li className="list-item!">
                    Nguyên tắc: Nếu đã có vị trí Lead/Manager cho một cấu phần
                    thì không cần Coordinator cho cùng cấu phần đó, trừ khi Viện
                    trưởng quyết định khác.
                  </li>
                </ul>
              </li>
              <li>
                Điều phối viên (Coordinator)
                <ul className="list-disc! pl-4">
                  <li className="list-item!">
                    Vai trò: Người phụ trách chính về mặt vận hành, giữ vai trò
                    đầu mối thông tin cho các hoạt động mang tính dài hạn hoặc
                    có cấu trúc bền vững.
                  </li>
                  <li className="list-item!">
                    Trách nhiệm: Lập kế hoạch, theo dõi tiến độ, điều phối nguồn
                    lực và hỗ trợ vận hành hằng ngày.
                  </li>
                  <li className="list-item!">
                    Phạm vi điều phối: Các nhóm nghiên cứu, lab, center, dự án
                    vừa và nhỏ, và các sáng kiến (initiatives).
                  </li>
                  <li className="list-item!">
                    Báo cáo: Trực tiếp báo cáo tiến độ cho Viện trưởng hoặc cấp
                    quản lý trực tiếp.
                  </li>
                </ul>
              </li>
              <li>
                Người phụ trách sự kiện (Host)
                <ul className="list-disc! pl-4">
                  <li className="list-item!">
                    Vai trò: Đầu mối chịu trách nhiệm cao nhất đối với các hoạt
                    động, sự kiện có tính thời vụ.
                  </li>
                  <li className="list-item!">
                    Trách nhiệm: Lập kế hoạch, điều phối nhân sự, điều phối ngân
                    sách, tổ chức triển khai hoạt động/sự kiện được giao, bảo
                    đảm sự kiện diễn ra thành công và báo cáo kết quả trực tiếp
                    với Viện trưởng.
                  </li>
                </ul>
              </li>
              <li>
                Thành viên (Members)
                <ul className="list-disc! pl-4">
                  <li className="list-item!">
                    Vai trò: Nhân sự thực thi trực tiếp các nghiệp vụ chuyên
                    môn.
                  </li>
                  <li className="list-item!">
                    Trách nhiệm: Triển khai các đầu việc được giao, bảo đảm chất
                    lượng và tiến độ, báo cáo kết quả công việc cho Viện trưởng
                    hoặc Trưởng nhóm mà mình được phân công.
                  </li>
                </ul>
              </li>
            </ol>

            <h3>Phần III: Cơ chế Phối hợp và Báo cáo</h3>
            <ol className="list-decimal! pl-4">
              <li className="list-item!">
                <b>Phối hợp theo ngành dọc:</b> Thành viên làm việc theo nhóm
                chức năng chính và báo cáo theo tuyến quản lý trực tiếp. Trưởng
                nhóm chịu trách nhiệm tổng hợp và báo cáo cho Viện trưởng.
              </li>
              <li className="list-item!">
                <b>Phối hợp liên nhóm:</b> Khi một nhiệm vụ liên quan nhiều
                nhóm, Viện trưởng là người phân công đầu mối chính. Các nhóm
                khác chỉ tham gia theo đúng phần việc được giao.
              </li>
              <li className="list-item!">
                <b>Nguyên tắc “1 đầu mối – 1 trách nhiệm”:</b> Mỗi đầu việc lớn
                phải có một người chịu trách nhiệm chính; tránh chồng chéo trách
                nhiệm giữa các nhóm và tránh tình trạng nhiều người cùng làm
                nhưng không ai chịu trách nhiệm cuối cùng.
              </li>
              <li className="list-item!">
                <b>Cơ chế báo cáo:</b> Báo cáo định kỳ theo tuần, tháng hoặc
                giai đoạn. Báo cáo cần ngắn gọn, rõ ràng: việc đã làm, việc đang
                làm, việc còn vướng và việc cần quyết định.
              </li>
            </ol>
          </>
        )}
        {locale === "en" && (
          <>
            <h3>Part I: General Principles of Organization and Operations</h3>
            <p className="text-justify">
              ISCM operates under a flexible model combining functional
              management and matrix/project-based management. This model is
              designed to ensure transparency, efficiency, and interdisciplinary
              and cross-team coordination throughout the Institute.
            </p>
            <ol className="list-decimal! pl-4 mb-4">
              <li className="list-item!">
                <b>Authority of the Institute Director:</b> The Institute
                Director holds the highest executive authority at ISCM and has
                ultimate responsibility for the Institute&apos;s development
                strategy, personnel, academic affairs, finance, external
                relations, and overall operational quality. The Institute
                Director directly assigns and appoints Heads, Managers,
                Coordinators, and Hosts.
              </li>
              <li className="list-item!">
                <b>Role of the Deputy Director:</b> The Deputy Director directly
                supports the Institute Director and oversees ISCM&apos;s
                internal activities, particularly internal operations, finance,
                human resources, administration, internal and external
                communications, and other support activities for the Institute
                Director. The Deputy Director is directly responsible for the
                Operation & Finance Officer, Communications Officer, and other
                internal assignments delegated by the Institute Director.
              </li>
              <li className="list-item!">
                <b>Reporting lines and cross-functional assignments:</b>{" "}
                Members work within their functional reporting lines and report
                directly to their respective Head. When necessary, they may
                report directly to the Institute Director. Functional Heads may
                not independently reassign personnel from other groups. Only the
                Institute Director may assign a member to work across another
                functional group or project.
              </li>
              <li className="list-item!">
                <b>Role flexibility:</b> An individual may hold multiple roles
                simultaneously—for example, serving as a Project Manager, Lab
                Coordinator, Event Host, and Member of another project. When
                participating in any project or group, the individual must
                strictly follow the assignments and direction of that
                project&apos;s or group&apos;s leader, regardless of the
                individual&apos;s administrative rank in their original group.
              </li>
              <li className="list-item!">
                <b>Deputy Director and Academic Program Directors:</b> These
                positions are assigned by the Institute Director but become
                effective only after formal recognition by the UEH Board of
                Directors.
              </li>
            </ol>

            <h3>Part II: Organizational Levels and Management Roles</h3>
            <p>
              ISCM&apos;s personnel system is organized into clearly defined
              levels, with specific roles and degrees of responsibility as
              follows:
            </p>
            <ol className="list-decimal! pl-4">
              <li>
                Institute Director
                <ul className="list-disc! pl-4">
                  <li className="list-item!">
                    Role: Head of the Institute, with decision-making authority
                    over its strategy, personnel, and finance.
                  </li>
                  <li className="list-item!">
                    Responsibilities: Sets the vision; leads all ISCM
                    activities; directly manages middle-management positions;
                    approves personnel, strategic, and financial decisions and
                    inter-institute/inter-unit initiatives; and oversees overall
                    quality.
                  </li>
                </ul>
              </li>
              <li>
                Deputy Director
                <ul className="list-disc! pl-4">
                  <li className="list-item!">
                    Role: Directly supports the Institute Director, oversees all
                    internal activities, and assists with the Institute&apos;s
                    day-to-day management.
                  </li>
                  <li className="list-item!">
                    Responsibilities: Coordinates internal activities; monitors
                    and supports operations; supervises the O&F Officer and
                    Communications Officer; tracks internal work progress;
                    assists the Institute Director with plan control, deadline
                    reminders, and work allocation; and ensures smooth internal
                    operations.
                  </li>
                  <li className="list-item!">
                    Management scope: Directly manages internal support work,
                    especially internal support personnel, finance and
                    logistics, communications, and coordinated administrative
                    tasks.
                  </li>
                </ul>
              </li>
              <li>
                Functional Head
                <ul className="list-disc! pl-4">
                  <li className="list-item!">
                    Role: Senior manager directly accountable to the Institute
                    Director for one of the Institute&apos;s core functional
                    areas.
                  </li>
                  <li className="list-item!">
                    Responsibilities: Sets the group&apos;s direction; makes
                    decisions within its functional scope; manages all group
                    activities; coordinates with other Heads on joint
                    projects/events as assigned by the Institute Director; and
                    remains accountable for the group&apos;s outputs.
                  </li>
                  <li className="list-item!">
                    Structure: Five functional groups—Operation and Finance,
                    Academia, Research, Partnership, and Engagement.
                  </li>
                </ul>
              </li>
              <li>
                Senior Project/Specialist Management (Lead / Manager)
                <ul className="list-disc! pl-4">
                  <li className="list-item!">
                    Role: Leads major strategic components or areas requiring
                    specialized expertise.
                  </li>
                  <li className="list-item!">
                    Responsibilities: Provides direction, overall management,
                    and decision-making within the assigned scope; reports to
                    the Institute Director; and leads course modules, labs,
                    affiliated centers, or large-scale projects.
                  </li>
                  <li className="list-item!">
                    Principle: When a component already has a Lead/Manager, a
                    Coordinator is not required for that same component unless
                    otherwise decided by the Institute Director.
                  </li>
                </ul>
              </li>
              <li>
                Coordinator
                <ul className="list-disc! pl-4">
                  <li className="list-item!">
                    Role: Primary operational lead and information focal point
                    for long-term or sustainably structured activities.
                  </li>
                  <li className="list-item!">
                    Responsibilities: Plans activities, tracks progress,
                    coordinates resources, and supports daily operations.
                  </li>
                  <li className="list-item!">
                    Coordination scope: Research groups, labs, centers,
                    small-to-medium projects, and initiatives.
                  </li>
                  <li className="list-item!">
                    Reporting: Reports progress directly to the Institute
                    Director or immediate manager.
                  </li>
                </ul>
              </li>
              <li>
                Event Host
                <ul className="list-disc! pl-4">
                  <li className="list-item!">
                    Role: The primary person accountable for seasonal or
                    time-bound activities and events.
                  </li>
                  <li className="list-item!">
                    Responsibilities: Plans activities, coordinates personnel
                    and budgets, implements assigned activities/events, ensures
                    successful delivery, and reports results directly to the
                    Institute Director.
                  </li>
                </ul>
              </li>
              <li>
                Members
                <ul className="list-disc! pl-4">
                  <li className="list-item!">
                    Role: Personnel who directly perform professional duties.
                  </li>
                  <li className="list-item!">
                    Responsibilities: Carry out assigned tasks, ensure quality
                    and timely completion, and report work results to the
                    Institute Director or the group leader to whom they are
                    assigned.
                  </li>
                </ul>
              </li>
            </ol>

            <h3>Part III: Coordination and Reporting Mechanisms</h3>
            <ol className="list-decimal! pl-4">
              <li className="list-item!">
                <b>Vertical coordination:</b> Members work within their primary
                functional groups and follow direct reporting lines. Heads
                consolidate information and report to the Institute Director.
              </li>
              <li className="list-item!">
                <b>Cross-group coordination:</b> When a task involves multiple
                groups, the Institute Director appoints the primary focal point.
                Other groups participate only within their assigned scope.
              </li>
              <li className="list-item!">
                <b>“One focal point – one accountability” principle:</b> Each
                major task must have one person with primary responsibility.
                Responsibilities should not overlap across groups, and multiple
                contributors should not result in the absence of final
                accountability.
              </li>
              <li className="list-item!">
                <b>Reporting mechanism:</b> Reports are submitted weekly,
                monthly, or by project phase. They should be concise and clear,
                covering completed work, ongoing work, obstacles, and matters
                requiring decisions.
              </li>
            </ol>
          </>
        )}

        <figure className="w-full flex items-center justify-center mt-4">
          <Image
            src={"/images/about/company_organization.jpg"}
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
