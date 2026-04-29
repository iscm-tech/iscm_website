import envConfig from "@/config";
import { Anchor } from "antd";
import { getLocale } from "next-intl/server";
import Image from "next/image";

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
        <div className="row">
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
        </div>
        <div className="row mt-5">
          <div className="col-9">
            <div id="structure">
              <h2 className="text-2xl font-bold mb-4">
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

                <h5 id="structure-iscm-overview" className="text-base!">
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

                <h5
                  id="structure-iscm-common_management"
                  className="text-base!"
                >
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

                <h5 id="structure-iscm-group_management" className="text-base!">
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
                {locale === "en" ? "Usage Guidelines" : "Định hướng sử dụng"}
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
            </div>
          </div>
          <div className="col-3">
            <div className="sticky top-15">
              <Anchor
                targetOffset={150}
                items={[
                  {
                    key: "#structure",
                    href: "#structure",
                    title:
                      locale === "en" ? (
                        <>1. Structure and Content of ISCMer</>
                      ) : (
                        <>1. Cấu trúc và nội dung của ISCMer</>
                      ),
                    children: [
                      {
                        key: "1-1",
                        href: "#structure-ueh",
                        title:
                          locale === "en" ? (
                            <>1.1. UEH System and Related Entities</>
                          ) : (
                            <>1.1. Hệ thống UEH và các đơn vị liên quan</>
                          ),
                      },
                      {
                        key: "1-2",
                        href: "#structure-iscm",
                        title:
                          locale === "en" ? (
                            <>1.2. ISCM Internal Information</>
                          ) : (
                            <>1.2. Thông tin nội bộ ISCM</>
                          ),
                        children: [
                          {
                            key: "1-2-1",
                            href: "#structure-iscm-overview",
                            title:
                              locale === "en" ? (
                                <>1.2.1 General Information</>
                              ) : (
                                <>1.2.1 Thông tin tổng thể</>
                              ),
                          },
                          {
                            key: "1-2-2",
                            href: "#structure-iscm-common_management",
                            title:
                              locale === "en" ? (
                                <>1.2.2 General Administration</>
                              ) : (
                                <>1.2.2 Quản trị chung</>
                              ),
                          },
                          {
                            key: "1-2-3",
                            href: "#structure-iscm-group_management",
                            title:
                              locale === "en" ? (
                                <>1.2.3 Functional Group Management</>
                              ) : (
                                <>1.2.3 Quản trị theo nhóm chức năng</>
                              ),
                          },
                        ],
                      },
                    ],
                  },
                  {
                    key: "2",
                    href: "#strategy",
                    title:
                      locale === "en" ? (
                        <>2. Usage Guidelines</>
                      ) : (
                        <>Định hướng sử dụng</>
                      ),
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
