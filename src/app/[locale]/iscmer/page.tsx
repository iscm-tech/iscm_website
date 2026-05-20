import envConfig from "@/config";
import { Anchor } from "antd";
import { LinkIcon } from "lucide-react";
import { getLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

export default async function page() {
  const locale = await getLocale();

  return (
    <div className="mx-auto w-full">
      <div className="bg-[#F0F6FB]">
        <div className="container">
          <figure className="row items-center justify-center">
            <Image
              src={`${envConfig.API_ENDPOINT}/public/static/images/event_series/2026.png`}
              alt="Timeline 2026"
              width={2400}
              height={2000}
              quality={95}
              className="object-cover w-full"
            />
          </figure>
        </div>
      </div>

      <section className="container">
        {/* <div className="row">
          <p>
            {locale === "en" ? (
              <>
                ISCMer is the official internal information platform for members
                of the Institute of Smart City and Management (ISCM), under the
                University of Economics Ho Chi Minh City (UEH).
              </>
            ) : (
              <>
                ISCMer là nền tảng thông tin nội bộ chính thức dành cho các
                thành viên thuộc Viện Đô thị Thông minh và Quản lý (ISCM), trực
                thuộc Đại học Kinh tế Thành phố Hồ Chí Minh (UEH).
              </>
            )}
          </p>
          <p>
            {locale === "en" ? (
              <>The platform was developed to support members in:</>
            ) : (
              <>Nền tảng được xây dựng nhằm hỗ trợ thành viên trong việc:</>
            )}
          </p>
          <ul className="list-disc! pl-4">
            <li className="list-item!">
              {locale === "en" ? (
                <>Accessing and updating information quickly and accurately.</>
              ) : (
                <>
                  Tiếp cận và cập nhật thông tin một cách nhanh chóng, chính
                  xác.
                </>
              )}
            </li>
            <li className="list-item!">
              {locale === "en" ? (
                <>
                  Searching for documents, regulations, and internal data
                  through a systematic interface.
                </>
              ) : (
                <>Tra cứu tài liệu, quy định và dữ liệu nội bộ theo hệ thống.</>
              )}
            </li>
            <li className="list-item!">
              {locale === "en" ? (
                <>
                  Optimizing work efficiency by standardizing information
                  sources.
                </>
              ) : (
                <>
                  Tối ưu hóa hiệu quả làm việc thông qua việc chuẩn hóa nguồn
                  thông tin.
                </>
              )}
            </li>
          </ul>
        </div> */}
        <div className="row mt-5">
          <div className="col-9">
            {/* <div id="structure">
              <h2 className="text-2xl font-bold mb-4">
                1.{" "}
                {locale === "en"
                  ? "Structure and Content of ISCMer"
                  : "Cấu trúc và nội dung của ISCMer"}
              </h2>
              <p>
                {locale === "en"
                  ? "ISCMer is organized into key content groups to ensure logic and convenience during use:"
                  : "ISCMer được tổ chức thành các nhóm nội dung chính, đảm bảo tính logic và thuận tiện trong quá trình khai thác:"}
              </p>

              <div id="structure-ueh" className="mt-4">
                <h4 className="text-xl font-semibold mb-2">
                  1.1.{" "}
                  {locale === "en"
                    ? "UEH System and Related Entities"
                    : "Hệ thống UEH và các đơn vị liên quan"}
                </h4>
                <p>
                  {locale === "en" ? (
                    <>
                      This section provides links to official platforms and
                      systems of UEH, as well as its subordinate and affiliated
                      units, including:
                    </>
                  ) : (
                    <>
                      Nhóm nội dung này cung cấp các liên kết đến các nền tảng
                      và hệ thống chính thức của UEH cũng như các đơn vị trực
                      thuộc và liên kết, bao gồm:
                    </>
                  )}
                </p>

                <ul className="list-disc! pl-4">
                  <li className="list-item!">UEHer</li>
                  <li className="list-item!">
                    {locale === "en" ? (
                      <>Finance & Accounting System</>
                    ) : (
                      <>Tài chính Kế toán</>
                    )}
                  </li>
                  <li className="list-item!">
                    {locale === "en" ? <>Knowledge Hub</> : <>Kho tri thức</>}
                  </li>
                  <li className="list-item!">
                    {locale === "en" ? (
                      <>Training Program Search System</>
                    ) : (
                      <>Tra cứu chương trình đào tạo</>
                    )}
                  </li>
                  <li className="list-item!">
                    {locale === "en" ? (
                      <>Academic Calendar</>
                    ) : (
                      <>Khung thời gian đào tạo</>
                    )}
                  </li>
                </ul>
                <p className="mt-4">
                  {locale === "en" ? (
                    <>
                      These links assist members in looking up academic
                      information, managing academic affairs, and accessing UEH
                      resources.
                    </>
                  ) : (
                    <>
                      Các liên kết này hỗ trợ thành viên trong việc tra cứu
                      thông tin học tập, quản trị học vụ và tiếp cận các nguồn
                      tài nguyên của UEH.
                    </>
                  )}
                </p>
              </div>

              <div id="structure-iscm" className="mt-4">
                <h4 id="structure-iscm" className="text-xl font-semibold mb-2">
                  1.2.{" "}
                  {locale === "en" ? (
                    <>ISCM Internal Information</>
                  ) : (
                    <>Thông tin nội bộ ISCM</>
                  )}
                </h4>
                <p>
                  {locale === "vi" ? (
                    <>
                      Nội dung nội bộ của ISCM được phân chia thành ba nhóm
                      chính:
                    </>
                  ) : (
                    <>Internal content is divided into three main categories:</>
                  )}
                </p>

                <h5 id="structure-iscm-overview" className="text-lg!">
                  1.2.1.{" "}
                  {locale === "vi" ? (
                    <>Thông tin tổng thể</>
                  ) : (
                    <>General Information</>
                  )}
                </h5>
                <p>
                  {locale === "en" ? (
                    <>Internal content is divided into three main categories:</>
                  ) : (
                    <>
                      Bao gồm các tài liệu mang tính định hướng và tổng quan về
                      hoạt động của Viện:
                    </>
                  )}
                </p>
                <ul className="list-disc! pl-4">
                  <li className="list-item!">ISCM Strategy & Plan</li>
                  <li className="list-item!">ISCM & UEH</li>
                  <li className="list-item!">ISCM & CTD</li>
                  <li className="list-item!">ISCM & UEH Sustainability</li>
                  <li className="list-item!">ISCM & Covergence Tech Hub</li>
                  <li className="list-item!">ISCM & MakerSpace</li>
                  <li className="list-item!">
                    {locale === "vi" ? (
                      <>Cơ cấu tổ chức ISCM</>
                    ) : (
                      <>ISCM Organizational Structure</>
                    )}
                  </li>
                  <li className="list-item!">
                    {locale === "vi" ? (
                      <>Các đánh giá của ISCM</>
                    ) : (
                      <>ISCM Member Evaluation</>
                    )}
                  </li>
                </ul>
                <p className="mt-4">
                  {locale === "en" ? (
                    <>
                      This group content helps members understand the
                      development direction, organizational structure, and
                      operational performance of ISCM.
                    </>
                  ) : (
                    <>
                      Nhóm nội dung này giúp thành viên hiểu rõ định hướng phát
                      triển, cấu trúc tổ chức và hiệu quả hoạt động của ISCM.
                    </>
                  )}
                </p>

                <h5 id="structure-iscm-common_management" className="text-lg!">
                  1.2.2.{" "}
                  {locale === "en" ? (
                    <>General Administration</>
                  ) : (
                    <>Quản trị chung</>
                  )}
                </h5>
                <p>
                  {locale === "en" ? (
                    <>
                      Includes regulations, procedures, and documents serving
                      operational activities:
                    </>
                  ) : (
                    <>
                      Bao gồm các quy định, quy trình và tài liệu phục vụ hoạt
                      động vận hành:
                    </>
                  )}
                </p>
                <ul className="list-disc! pl-4">
                  <li className="list-item!">
                    {locale === "vi" ? (
                      <>Nội quy và Quy định</>
                    ) : (
                      <>Rules and Regulations</>
                    )}
                  </li>
                  <li className="list-item!">
                    {locale === "en" ? (
                      <>Finance & Payments</>
                    ) : (
                      <>Tài chính & Thanh toán</>
                    )}
                  </li>
                  <li className="list-item!">
                    {locale === "en" ? (
                      <>Internal Meeting Regulations</>
                    ) : (
                      <>Quy chế họp nội bộ</>
                    )}
                  </li>
                  <li className="list-item!">
                    {locale === "en" ? (
                      <>Event Management</>
                    ) : (
                      <>Quản trị tổ chức sự kiện</>
                    )}
                  </li>
                  <li className="list-item!">
                    {locale === "en" ? (
                      <>Equipment Management</>
                    ) : (
                      <>Quản trị thiết bị</>
                    )}
                  </li>
                  <li className="list-item!">
                    {locale === "en" ? (
                      <>Book Management</>
                    ) : (
                      <>Quản trị sách</>
                    )}
                  </li>
                  <li className="list-item!">
                    {locale === "en" ? "Templates" : "Mẫu - Tài liệu"}
                  </li>
                </ul>
                <p className="mt-4">
                  {locale === "en"
                    ? "These documents serve as the foundation for ensuring transparency, consistency, and efficiency in administration."
                    : "Các tài liệu trong nhóm này đóng vai trò nền tảng trong việc đảm bảo tính minh bạch, nhất quán và hiệu quả trong quản trị."}
                </p>

                <h5 id="structure-iscm-group_management" className="text-lg!">
                  1.2.3.{" "}
                  {locale === "en"
                    ? "Functional Group Management"
                    : "Quản trị theo từng nhóm riêng"}
                </h5>
                <p>
                  {locale === "en"
                    ? "Provides specialized documents and guidelines tailored to each department:"
                    : " Cung cấp các tài liệu và hướng dẫn chuyên môn theo từng bộ phận, bao gồm:"}
                </p>
                <ul className="list-disc! pl-4">
                  <li className="list-item!">
                    {locale === "vi" ? (
                      <>Nhóm Vận hành & Tài chính</>
                    ) : (
                      <>Operation & Finance (O&F)</>
                    )}
                  </li>
                  <li className="list-item!">
                    {locale === "vi" ? <>Nhóm Học thuật</> : <>Academia</>}
                  </li>
                  <li className="list-item!">
                    {locale === "en" ? <>Research</> : <>Nhóm Nghiên cứu</>}
                  </li>
                  <li className="list-item!">
                    {locale === "vi" ? (
                      <>Nhóm Gắn kết cộng đồng</>
                    ) : (
                      <>Community Engagement</>
                    )}
                  </li>
                  <li className="list-item!">
                    {locale === "en" ? (
                      <>PR & Communication</>
                    ) : (
                      <> Nhóm Truyền thông & Quan hệ Công chúng</>
                    )}
                  </li>
                  <li className="list-item!">
                    {locale === "en" ? <>Partnership</> : <> Nhóm Hợp tác</>}
                  </li>
                </ul>
                <p className="mt-4">
                  {locale === "vi" ? (
                    <>
                      {" "}
                      Nội dung được thiết kế nhằm hỗ trợ từng nhóm chức năng
                      triển khai công việc theo đúng vai trò và định hướng
                      chuyên môn.
                    </>
                  ) : (
                    <>
                      The content is designed to support each functional group
                      in executing tasks according to their specific roles and
                      professional directions.
                    </>
                  )}
                </p>
              </div>
            </div>
            <div id="strategy">
              <h2 className="text-2xl font-bold mb-4">
                2. {locale === "en" ? "Usage Guidelines" : "Định hướng sử dụng"}
              </h2>

              <p>
                {locale === "vi" ? (
                  <>
                    ISCMer được định vị là nền tảng thông tin trung tâm, đóng
                    vai trò hỗ trợ toàn diện cho hoạt động học tập, nghiên cứu
                    và vận hành tại ISCM.
                  </>
                ) : (
                  <>
                    ISCMer is positioned as the central information hub, playing
                    a comprehensive supporting role for academic, research, and
                    operational activities at ISCM.
                  </>
                )}
              </p>

              <p>
                <b>
                  {locale === "vi" ? (
                    <>Thành viên được khuyến khích:</>
                  ) : (
                    <>Members are encouraged to:</>
                  )}
                </b>
              </p>
              <ul className="list-disc! pl-4 mb-4">
                <li className="list-item!">
                  {locale === "en" ? (
                    <>
                      Proactively search for information on ISCMer before
                      submitting related requests.
                    </>
                  ) : (
                    <>
                      Chủ động tra cứu thông tin trên ISCMer trước khi thực hiện
                      các yêu cầu liên quan
                    </>
                  )}
                </li>
                <li className="list-item!">
                  {locale === "en" ? (
                    <>
                      Use the platform as the primary official reference during
                      work.
                    </>
                  ) : (
                    <>
                      Sử dụng nền tảng như nguồn tham chiếu chính thức trong quá
                      trình làm việc
                    </>
                  )}
                </li>
                <li className="list-item!">
                  {locale === "en" ? (
                    <>
                      Frequently check for updates to ensure access to the
                      latest information.
                    </>
                  ) : (
                    <>
                      Thường xuyên cập nhật để đảm bảo tiếp cận các thông tin
                      mới nhất
                    </>
                  )}
                </li>
              </ul>
              <p>
                {locale === "en" ? (
                  <>
                    With its standardized system structure and content, ISCMer
                    contributes to improving administrative efficiency,
                    enhancing connectivity, and ensuring synchronization across
                    all activities of the Institute of Smart City and
                    Management.
                  </>
                ) : (
                  <>
                    Với cấu trúc hệ thống và nội dung được chuẩn hóa, ISCMer góp
                    phần nâng cao hiệu quả quản trị, tăng cường tính kết nối và
                    đảm bảo sự đồng bộ trong toàn bộ hoạt động của Viện Đô thị
                    Thông minh và Quản lý.
                  </>
                )}
              </p>
            </div> */}
            <div id="new_members">
              <h2 className="text-2xl font-bold mb-4">
                {locale === "en"
                  ? "Welcome to ISCM - Onboarding Guide"
                  : "Hướng dẫn hội nhập dành cho thành viên mới"}
              </h2>

              <p>
                {locale === "vi" ? (
                  <>
                    Để nhanh chóng nắm bắt công việc và hòa nhập cùng tập thể,
                    các thành viên mới vui lòng đọc kỹ và thực hiện theo 4 mục
                    dưới đây:
                  </>
                ) : (
                  <>
                    To quickly grasp the workflow and integrate with the team,
                    new members are requested to read carefully and follow the 4
                    sections below:
                  </>
                )}
              </p>

              <h5 id="portal&intranet" className="text-lg!">
                1.{" "}
                {locale === "vi"
                  ? "Cổng thông tin & Mạng nội bộ"
                  : "ISCM Website & Intranet"}
              </h5>
              <ul className="list-disc! pl-4">
                {locale === "vi" ? (
                  <>
                    <li className="list-item!">
                      Bước 1 - Tìm hiểu chung: Truy cập website chính thức của
                      ISCM để nắm tổng quan về tầm nhìn, hoạt động và các dự án
                      của Viện.
                    </li>
                    <li className="list-item!">
                      Bước 2 - Gia nhập Mạng nội bộ (ISCMer): Truy cập mục
                      ISCMer để điền form yêu cầu cấp quyền vào hệ thống làm
                      việc nội bộ. <br />
                      Quy định tài khoản: Giảng viên/Nhân viên Full-time và Sinh
                      viên UEH bắt buộc dùng email @ueh.edu.vn. Các đối tượng
                      khác đăng ký bằng 01 email cá nhân duy nhất.
                    </li>
                  </>
                ) : (
                  <>
                    <li className="list-item!">
                      Step 1 – General Overview: Access the official ISCM
                      website to understand the overall vision, activities, and
                      projects of the Institute.
                    </li>
                    <li className="list-item!">
                      Step 2 – Join the Internal Network (ISCMer): Access the
                      ISCMer section to fill out the form requesting access to
                      the internal work system.
                      <br />
                      Account Regulations: Full-time Lecturers/Staff and UEH
                      students are required to use an @ueh.edu.vn email. Other
                      members must register with a single, unique personal
                      email.
                    </li>
                  </>
                )}
              </ul>
              {locale === "vi" ? (
                <p>
                  <b>Lưu ý</b>: Hệ thống chỉ cấp quyền truy cập cho những nhân
                  sự đã có tên chính thức trong danh sách nhân sự nội bộ (Nhóm
                  2).
                </p>
              ) : (
                <p>
                  <b>Note</b>: The system only grants access to individuals
                  whose names are officially on the Core Member list (Group 2).
                </p>
              )}

              <h5 id="worklist" className="text-lg!">
                2.{" "}
                {locale === "vi"
                  ? "Hệ thống thông tin & Quản lý công việc"
                  : "ISCM Worklist 2026"}
              </h5>
              <p>
                {locale === "vi" ? (
                  <>
                    Để thuận tiện cho quá trình làm việc và tra cứu, toàn bộ hệ
                    thống thông tin của ISCM được vận hành đồng bộ qua 2 nền
                    tảng:
                  </>
                ) : (
                  <>
                    To facilitate work and information effectively, the entire
                    ISCM information system operates synchronously across two
                    platforms:
                  </>
                )}
              </p>

              {locale === "vi" ? (
                <ul className="list-disc! pl-4 mb-4">
                  <li className="list-item!">
                    <Link
                      className="text-[#cd2027]! font-bold inline-flex items-center gap-2"
                      href="https://iscm.ueh.edu.vn/iscmer"
                      target="_blank"
                    >
                      Mạng nội bộ chính thức (ISCMer - Internal Website)
                      <LinkIcon size={16} />
                    </Link>
                    : ISCMer là nơi hiển thị toàn bộ thông tin chung nhất của
                    UEH và ISCM. Bất cứ khi nào bạn cần tra cứu các hướng dẫn,
                    quy chế, quy định cho mọi hoạt động/chức năng của Viện, hoặc
                    các cập nhật mới nhất, hãy truy cập vào hệ thống này.
                  </li>
                  <li className="list-item!">
                    <Link
                      className="text-[#cd2027]! font-bold inline-flex items-center gap-2"
                      href="https://docs.google.com/spreadsheets/d/1iITXJ8_6N28KJMnoTOaPg7GvQFKqhSwp/edit?gid=439586388#gid=439586388"
                      target="_blank"
                    >
                      Kho dữ liệu nền tảng (ISCM Worklist 2026 - Back-end){" "}
                      <LinkIcon size={16} />
                    </Link>
                    : Đây là tệp cơ sở dữ liệu gốc (Master file) của Viện.
                    Worklist đóng vai trò lưu trữ toàn bộ khung cấu trúc công
                    việc và các quy định nêu trên. Tệp này đóng vai trò là hệ
                    thống dự phòng (backup) vững chắc, đảm bảo mọi hoạt động tra
                    cứu và vận hành của Viện vẫn diễn ra thông suốt trong trường
                    hợp website ISCMer cần bảo trì hoặc gặp sự cố.
                  </li>
                </ul>
              ) : (
                <ul className="list-disc! pl-4 mb-4">
                  <li className="list-item!">
                    <Link
                      className="text-[#cd2027]! font-bold inline-flex items-center gap-2"
                      href="https://iscm.ueh.edu.vn/iscmer"
                      target="_blank"
                    >
                      Official Intranet (ISCMer - Internal Website)
                      <LinkIcon size={16} />
                    </Link>
                    : This is the hub for general information from both UEH and
                    ISCM. Access this system whenever you need to look up
                    guidelines, regulations, policies, or the latest updates.
                  </li>
                  <li className="list-item!">
                    <Link
                      className="text-[#cd2027]! font-bold inline-flex items-center gap-2"
                      href="https://docs.google.com/spreadsheets/d/1iITXJ8_6N28KJMnoTOaPg7GvQFKqhSwp/edit?gid=1950620498#gid=1950620498"
                      target="_blank"
                    >
                      Core Database (ISCM Worklist 2026 - Back-end){" "}
                      <LinkIcon size={16} />
                    </Link>
                    : This serves as the Institute&apos;s Master file. It stores
                    the entire work structure and the regulations mentioned
                    above. This file acts as a robust backup system, ensuring
                    that operations and lookups continue smoothly even if the
                    ISCMer website undergoes maintenance or encounters issues.
                  </li>
                </ul>
              )}
              <p>
                {locale === "vi" ? (
                  <>
                    Bên cạnh đó, yêu cầu đọc kỹ các email được gửi từ UEH, UEH
                    family để cập nhật các thông tin, quy định mới của UEH
                  </>
                ) : (
                  <>
                    Additional Note: Please read all emails sent from UEH and
                    the UEH &quot;family&quot; carefully to stay updated on new
                    information and regulations.
                  </>
                )}
              </p>

              <h5 id="members" className="text-lg!">
                3.{" "}
                {locale === "vi"
                  ? "Hệ thống phân loại nhân sự"
                  : "ISCM Members"}
              </h5>

              <p>
                {locale === "vi" ? (
                  <>
                    Tùy vào tính chất công việc, nhân sự tại ISCM được phân loại
                    thành 4 nhóm chính:
                  </>
                ) : (
                  <>
                    Depending on the nature of the work, ISCM personnel are
                    classified into 4 main groups:
                  </>
                )}
              </p>

              {locale === "vi" ? (
                <ul className="list-decimal! pl-4 mb-4">
                  <li className="list-item!">
                    Nhóm 1. Ban Cố vấn (Advisors): Các chuyên gia cấp cao hợp
                    tác với ISCM thông qua Biên bản ghi nhớ (MOU).
                  </li>
                  <li className="list-item!">
                    Nhóm 2. Nhân sự Nội bộ (Core Members):
                    <ul className="list-disc! pl-4">
                      <li className="list-item!">
                        Toàn thời gian (Full-time): Giảng viên, chuyên viên, CTV
                        (Ký hợp đồng với UEH).
                      </li>
                      <li className="list-item!">
                        Bán thời gian (Part-time): Giảng viên đồng cơ hữu, Giáo
                        sư thỉnh giảng (Ký hợp đồng với UEH).
                      </li>
                      <li className="list-item!">
                        Thực tập sinh (Interns): Hỗ trợ Admin hoặc làm dự án (Ký
                        thỏa thuận thực tập với ISCM).
                      </li>
                    </ul>
                  </li>
                  <li className="list-item!">
                    Nhóm 3. Giảng viên Thỉnh giảng (Visiting Lecturers): Tham
                    gia giảng dạy theo từng môn học được đặt hàng.
                  </li>
                  <li className="list-item!">
                    Nhóm 4. Chuyên gia Glocal (Glocal Experts): Mạng lưới chuyên
                    gia đối tác. Khi trúng thầu dự án chung, chuyên gia sẽ thỏa
                    thuận hợp đồng chi tiết với ISCM về khối lượng công việc và
                    thù lao.
                  </li>
                </ul>
              ) : (
                <ul className="list-decimal! pl-4 mb-4">
                  <li className="list-item!">
                    Group 1. Advisors: Senior experts collaborating with ISCM
                    through a Memorandum of Understanding (MOU).
                  </li>
                  <li className="list-item!">
                    Group 2. Core Members:
                    <ul className="list-disc! pl-4">
                      <li className="list-item!">
                        Full-time: Lecturers, specialists and project officers
                        (Contracted with UEH).
                      </li>
                      <li className="list-item!">
                        Part-time: Joint-appointment lecturers and visiting
                        professors (Contracted with UEH).
                      </li>
                      <li className="list-item!">
                        Interns: Supporting administration or project tasks
                        (Internship agreement signed with ISCM).
                      </li>
                    </ul>
                  </li>
                  <li className="list-item!">
                    Group 3. Visiting Lecturers: Participate in teaching
                    specific commissioned courses.
                  </li>
                  <li className="list-item!">
                    Group 4. Glocal Experts: A network of partner experts. Upon
                    winning joint project bids, experts will negotiate detailed
                    contracts with ISCM regarding workload and remuneration.
                  </li>
                </ul>
              )}

              <h5 id="communication_channels" className="text-lg!">
                4.{" "}
                {locale === "vi"
                  ? "Các kênh liên lạc & Trao đổi"
                  : "Communication Channels"}
              </h5>

              <p>
                {locale === "vi" ? (
                  <>
                    Thành viên mới sẽ được Viện trưởng, Trưởng nhóm thêm vào các
                    Nhóm trao đổi tương ứng. Xin lưu ý mục đích sử dụng của từng
                    kênh:
                  </>
                ) : (
                  <>
                    New members will be added to the corresponding discussion
                    groups by the Director or Team Leaders. Please note the
                    specific purpose of each channel:
                  </>
                )}
              </p>
              {locale === "vi" ? (
                <ul className="list-disc! pl-4 mb-4">
                  <li className="list-item!">
                    Zalo &quot;ISCM Member&quot;: Kênh thông báo công việc chính
                    thức dành cho toàn bộ nhân sự làm việc Toàn thời gian & Bán
                    thời gian (Nhóm 2).
                  </li>
                  <li className="list-item!">
                    Zalo &quot;ISCM Tám&quot;: Kênh giao tiếp thân mật, gắn kết
                    dành riêng cho các nhân sự người Việt Nam làm việc Toàn thời
                    gian (Nhóm 2)
                  </li>
                  <li className="list-item!">
                    Facebook Group &quot;Sinh viên ISCM&quot;: Cộng đồng mở kết
                    nối toàn bộ nhân sự Viện, sinh viên đang học và Cựu sinh
                    viên (Alumni).
                  </li>
                </ul>
              ) : (
                <ul className="list-disc! pl-4 mb-4">
                  <li className="list-item!">
                    Zalo &quot;ISCM Member&quot;: The official work announcement
                    channel for all Full-time & Part-time personnel (Group 2).
                  </li>
                  <li className="list-item!">
                    Zalo &quot;ISCM Tám&quot;: An informal communication and
                    networking channel exclusively for Vietnamese Full-time
                    personnel (Group 2).
                  </li>
                  <li className="list-item!">
                    Facebook Group &quot;Sinh viên ISCM&quot;: An open community
                    connecting all Institute staff, current students, and
                    Alumni.
                  </li>
                </ul>
              )}
              <p>
                {locale === "vi" ? (
                  <>
                    Nhóm làm việc chuyên môn (nhóm chức năng, Group theo Dự
                    án/Sự kiện): Kênh thao tác công việc hàng ngày của từng team
                    nhỏ. Lưu ý: Nhóm sẽ tự động giải tán sau khi dự án/sự kiện
                    nghiệm thu kết thúc.
                  </>
                ) : (
                  <>
                    Professional Work Groups (Functional groups,
                    Project/Event-based groups): Channels for daily operations
                    within small teams. Note: These groups will automatically
                    disband after the project/event has been finalized and
                    closed.
                  </>
                )}
              </p>
            </div>
          </div>
          <div className="col-3">
            <div className="sticky top-15">
              <Anchor
                targetOffset={150}
                items={[
                  // {
                  //   key: "#structure",
                  //   href: "#structure",
                  //   title:
                  //     locale === "en" ? (
                  //       <>1. Structure and Content of ISCMer</>
                  //     ) : (
                  //       <>1. Cấu trúc và nội dung của ISCMer</>
                  //     ),
                  //   children: [
                  //     {
                  //       key: "1-1",
                  //       href: "#structure-ueh",
                  //       title:
                  //         locale === "en" ? (
                  //           <>1.1. UEH System and Related Entities</>
                  //         ) : (
                  //           <>1.1. Hệ thống UEH và các đơn vị liên quan</>
                  //         ),
                  //     },
                  //     {
                  //       key: "1-2",
                  //       href: "#structure-iscm",
                  //       title:
                  //         locale === "en" ? (
                  //           <>1.2. ISCM Internal Information</>
                  //         ) : (
                  //           <>1.2. Thông tin nội bộ ISCM</>
                  //         ),
                  //       children: [
                  //         {
                  //           key: "1-2-1",
                  //           href: "#structure-iscm-overview",
                  //           title:
                  //             locale === "en" ? (
                  //               <>1.2.1 General Information</>
                  //             ) : (
                  //               <>1.2.1 Thông tin tổng thể</>
                  //             ),
                  //         },
                  //         {
                  //           key: "1-2-2",
                  //           href: "#structure-iscm-common_management",
                  //           title:
                  //             locale === "en" ? (
                  //               <>1.2.2 General Administration</>
                  //             ) : (
                  //               <>1.2.2 Quản trị chung</>
                  //             ),
                  //         },
                  //         {
                  //           key: "1-2-3",
                  //           href: "#structure-iscm-group_management",
                  //           title:
                  //             locale === "en" ? (
                  //               <>1.2.3 Functional Group Management</>
                  //             ) : (
                  //               <>1.2.3 Quản trị theo nhóm chức năng</>
                  //             ),
                  //         },
                  //       ],
                  //     },
                  //   ],
                  // },
                  // {
                  //   key: "2",
                  //   href: "#strategy",
                  //   title:
                  //     locale === "en" ? (
                  //       <>2. Usage Guidelines</>
                  //     ) : (
                  //       <>2. Định hướng sử dụng</>
                  //     ),
                  // },
                  {
                    key: "1",
                    href: "#new_members",
                    title:
                      locale === "en" ? (
                        <>Onboarding Guide</>
                      ) : (
                        <>Hướng dẫn thành viên mới</>
                      ),
                    children: [
                      {
                        key: "1",
                        href: "#portal&intranet",
                        title:
                          locale === "en" ? (
                            <>1. ISCM Website & Intranet</>
                          ) : (
                            <>1. Cổng thông tin & Mạng nội bộ</>
                          ),
                      },
                      {
                        key: "2",
                        href: "#worklist",
                        title:
                          locale === "en" ? (
                            <>2. ISCM Worklist 2026</>
                          ) : (
                            <>2. Hệ thống thông tin & Quản lý công việc</>
                          ),
                      },
                      {
                        key: "3",
                        href: "#members",
                        title:
                          locale === "en" ? (
                            <>3. ISCM Members</>
                          ) : (
                            <>3. Hệ thống phân loại nhân sự</>
                          ),
                      },
                      {
                        key: "4",
                        href: "#communication_channels",
                        title:
                          locale === "en" ? (
                            <>4. Communication Channels</>
                          ) : (
                            <>4. Các kênh liên lạc & Trao đổi</>
                          ),
                      },
                    ],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
