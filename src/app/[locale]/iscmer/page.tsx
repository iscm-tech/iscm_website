import envConfig from "@/config";
import { Anchor } from "antd";
import Image from "next/image";

export default function page() {
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
            ISCMer là nền tảng thông tin nội bộ chính thức dành cho các thành
            viên thuộc Viện Đô thị Thông minh và Quản lý (ISCM), trực thuộc Đại
            học Kinh tế Thành phố Hồ Chí Minh (UEH).
          </p>
          <p>Nền tảng được xây dựng nhằm hỗ trợ thành viên trong việc:</p>
          <ul className="list-disc! pl-4">
            <li className="list-item!">
              Tiếp cận và cập nhật thông tin một cách nhanh chóng, chính xác.
            </li>
            <li className="list-item!">
              Tra cứu tài liệu, quy định và dữ liệu nội bộ theo hệ thống.
            </li>
            <li className="list-item!">
              Tối ưu hóa hiệu quả làm việc thông qua việc chuẩn hóa nguồn thông
              tin.
            </li>
          </ul>
        </div>
        <div className="row mt-5">
          <div className="col-9">
            <div id="structure">
              <h2 className="text-2xl font-bold mb-4">
                Cấu trúc và nội dung của ISCMer
              </h2>
              <p>
                ISCMer được tổ chức thành các nhóm nội dung chính, đảm bảo tính
                logic và thuận tiện trong quá trình khai thác:
              </p>

              <div id="structure-ueh" className="mt-4">
                <h4 className="text-xl font-semibold mb-2">
                  1.1. Hệ thống UEH và các đơn vị liên quan
                </h4>
                <p>
                  Nhóm nội dung này cung cấp các liên kết đến các nền tảng và hệ
                  thống chính thức của UEH cũng như các đơn vị trực thuộc và
                  liên kết, bao gồm:
                </p>

                <ul className="list-disc! pl-4">
                  <li className="list-item!">UEHer</li>
                  <li className="list-item!">
                    College of Technology and Design
                  </li>
                  <li className="list-item!">UEH Sustainability</li>
                  <li className="list-item!">Convergence Tech Hub</li>
                  <li className="list-item!">Hệ thống Tài chính – Kế toán</li>
                  <li className="list-item!">Kho tri thức</li>
                  <li className="list-item!">
                    Hệ thống tra cứu chương trình đào tạo
                  </li>
                  <li className="list-item!">Khung thời gian đào tạo</li>
                </ul>
                <p className="mt-4">
                  Các liên kết này hỗ trợ thành viên trong việc tra cứu thông
                  tin học tập, quản trị học vụ và tiếp cận các nguồn tài nguyên
                  của UEH.
                </p>
              </div>

              <div id="structure-iscm" className="mt-4">
                <h4 id="structure-iscm" className="text-xl font-semibold mb-2">
                  1.2. Thông tin nội bộ Viện Đô thị Thông minh và Quản lý (ISCM)
                </h4>
                <p>
                  Nội dung nội bộ của ISCM được phân chia thành ba nhóm chính:
                </p>

                <h5 id="structure-iscm-overview" className="text-base!">
                  1.2.1. Thông tin tổng thể
                </h5>
                <ul className="list-disc! pl-4">
                  <li className="list-item!">UEHer</li>
                  <li className="list-item!">
                    College of Technology and Design
                  </li>
                  <li className="list-item!">UEH Sustainability</li>
                  <li className="list-item!">Convergence Tech Hub</li>
                  <li className="list-item!">Hệ thống Tài chính – Kế toán</li>
                  <li className="list-item!">Kho tri thức</li>
                  <li className="list-item!">
                    Hệ thống tra cứu chương trình đào tạo
                  </li>
                  <li className="list-item!">Khung thời gian đào tạo</li>
                </ul>
                <p className="mt-4">
                  Các liên kết này hỗ trợ thành viên trong việc tra cứu thông
                  tin học tập, quản trị học vụ và tiếp cận các nguồn tài nguyên
                  của UEH.
                </p>

                <h5
                  id="structure-iscm-common_management"
                  className="text-base!"
                >
                  1.2.2. Quản trị chung
                </h5>
                <p>
                  Bao gồm các quy định, quy trình và tài liệu phục vụ hoạt động
                  vận hành:
                </p>
                <ul className="list-disc! pl-4">
                  <li className="list-item!">Nội quy và quy định</li>
                  <li className="list-item!">Quy chế chi tiêu nội bộ</li>
                  <li className="list-item!">Minute Report</li>
                  <li className="list-item!">Quản trị tổ chức sự kiện</li>
                  <li className="list-item!">Quản trị thiết bị</li>
                  <li className="list-item!">Quản trị sách</li>
                  <li className="list-item!">Quản trị nội dung</li>
                </ul>
                <p className="mt-4">
                  Các tài liệu trong nhóm này đóng vai trò nền tảng trong việc
                  đảm bảo tính minh bạch, nhất quán và hiệu quả trong quản trị.
                </p>

                <h5 id="structure-iscm-group_management" className="text-base!">
                  1.2.3. Quản trị theo nhóm chức năng
                </h5>
                <p>
                  Cung cấp các tài liệu và hướng dẫn chuyên môn theo từng bộ
                  phận, bao gồm:
                </p>
                <ul className="list-disc! pl-4">
                  <li className="list-item!">Khối Vận hành & Tài chính</li>
                  <li className="list-item!">Khối Học thuật</li>
                  <li className="list-item!">Khối Nghiên cứu</li>
                  <li className="list-item!">Khối Gắn kết cộng đồng</li>
                  <li className="list-item!">
                    Khối Truyền thông & Quan hệ Công chúng
                  </li>
                  <li className="list-item!">Khối Hợp tác quốc tế</li>
                </ul>
                <p className="mt-4">
                  Nội dung được thiết kế nhằm hỗ trợ từng nhóm chức năng triển
                  khai công việc theo đúng vai trò và định hướng chuyên môn.
                </p>
              </div>
            </div>
            <div id="strategy">
              <h2 className="text-2xl font-bold mb-4">Định hướng sử dụng</h2>

              <p>
                ISCMer được định vị là nền tảng thông tin trung tâm, đóng vai
                trò hỗ trợ toàn diện cho hoạt động học tập, nghiên cứu và vận
                hành tại ISCM.
              </p>

              <p>Thành viên được khuyến khích:</p>
              <ul className="list-disc! pl-4 mb-4">
                <li className="list-item!">
                  Chủ động tra cứu thông tin trên ISCMer trước khi thực hiện các
                  yêu cầu liên quan
                </li>
                <li className="list-item!">
                  Sử dụng nền tảng như nguồn tham chiếu chính thức trong quá
                  trình làm việc
                </li>
                <li className="list-item!">
                  Thường xuyên cập nhật để đảm bảo tiếp cận các thông tin mới
                  nhất
                </li>
              </ul>
              <p>
                Với cấu trúc hệ thống và nội dung được chuẩn hóa, ISCMer góp
                phần nâng cao hiệu quả quản trị, tăng cường tính kết nối và đảm
                bảo sự đồng bộ trong toàn bộ hoạt động của Viện Đô thị Thông
                minh và Quản lý.
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
                    title: "1. Cấu trúc và nội dung của ISCMer",
                    children: [
                      {
                        key: "1-1",
                        href: "#structure-ueh",
                        title: "1.1. Hệ thống UEH và các đơn vị liên quan",
                      },
                      {
                        key: "1-2",
                        href: "#structure-iscm",
                        title:
                          "1.2. Thông tin nội bộ Viện Đô thị Thông minh và Quản lý (ISCM)",
                        children: [
                          {
                            key: "1-2-1",
                            href: "#structure-iscm-overview",
                            title: "1.2.1. Thông tin tổng thể",
                          },
                          {
                            key: "1-2-2",
                            href: "#structure-iscm-common_management",
                            title: "1.2.2. Quản trị chung",
                          },
                          {
                            key: "1-2-3",
                            href: "#structure-iscm-group_management",
                            title: "1.2.3. Quản trị theo nhóm chức năng",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    key: "2",
                    href: "#strategy",
                    title: "2. Định hướng sử dụng",
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
