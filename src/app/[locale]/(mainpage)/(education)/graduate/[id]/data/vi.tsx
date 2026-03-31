import { useDOMParser as DOMParser } from "@/hooks/domHook";
import { Image } from "antd";

const infoVi = {
  standard: {
    about: (
      <div>
        <p>
          Chương trình đào tạo Thạc sĩ Quản trị đô thị thông minh và sáng tạo
          (MSCIM) trang bị cho người học có trình độ chuyên môn sâu, có năng lực
          làm chủ các lĩnh vực quản trị, khoa học công nghệ có liên quan đến các
          giải pháp tích hợp cho quản trị các đô thị thông minh theo hướng sáng
          tạo. Chương trình đào tạo chú trọng đến các mảng ứng dụng kỹ thuật
          thông minh trong lĩnh vực đô thị và quản trị sáng tạo, thân thiện với
          môi trường và theo định hướng phát triển bền vững.
        </p>
        <p className="font-bold">Thông tin chương trình:</p>

        <ul className="!pl-4">
          {[
            "Trình độ đào tạo: <b>Thạc sĩ - Hệ chính quy - Hướng Ứng dụng</b>",
            "Ngành, Chuyên ngành đào tạo: Quản lý công, Quản trị đô thị thông minh và sáng tạo",
            "Mã ngành: 8340403",
            "Học phí dự kiến: 1,650,000VND/tín chỉ",
          ].map((item) => (
            <li
              className="list-item relative before:content-['-'] before:absolute before:left-0 before:text-black"
              key={item}
            >
              {DOMParser(item)}
            </li>
          ))}
        </ul>
      </div>
    ),
    accordion: [
      {
        label: "Điều kiện dự tuyển",
        content: (
          <div>
            <p className="font-bold">1. Điều kiện dự tuyển</p>
            <p className="mb-3">
              Theo quy định hiện hành của Bộ Giáo dục và Đào tạo và quy chế đào
              tạo của Đại học Kinh tế TP.HCM
            </p>

            <p className="font-bold">2. Thông tin dự tuyển</p>
            <p>Yêu cầu đối với người dự tuyển:</p>
            <ul className="mb-3">
              <li className="list-item relative before:content-['-'] before:absolute before:left-0 before:text-black">
                Đã tốt nghiệp hoặc đã đủ điều kiện công nhận tốt nghiệp đại học
                (hoặc trình độ tương đương trở lên) ngành phù hợp; đối với
                chương trình định hướng Ứng dụng yêu cầu hạng tốt nghiệp từ khá
                trở lên hoặc có bài báo (có ISSN), bài hội thảo khoa học có xuất
                bản (có ISBN) hoặc tham gia đề tài nghiên cứu khoa học cấp cơ sở
                trở lên đã được nghiệm thu liên quan đến lĩnh vực sẽ học tập,
                nghiên cứu. Tất cả những công trình nêu trên được xuất bản không
                quá 5 năm tính đến ngày nộp hồ sơ dự tuyển;
              </li>
              <li className="list-item relative before:content-['-'] before:absolute before:left-0 before:text-black">
                Có năng lực ngoại ngữ từ Bậc 3 trở lên theo Khung năng lực ngoại
                ngữ 6 bậc dùng cho Việt Nam;
              </li>
              <li className="list-item relative before:content-['-'] before:absolute before:left-0 before:text-black">
                Đáp ứng các yêu cầu khác của chuẩn chương trình đào tạo do Bộ
                Giáo dục và Đào tạo ban hành và theo quy định của chương trình
                đào tạo.
              </li>
            </ul>
            <p className="mb-3">
              <b>Danh mục ngành phù hợp:</b> áp dụng theo Phụ lục 2, Quy định
              số: 3840/QĐ-ĐHKT-ĐBCLPTCT (ngày 09 tháng 12 năm 2021).
            </p>
            <p className="mb-2">
              Ứng viên tốt nghiệp đại học không thuộc các ngành phù hợp đối với
              ngành đào tạo thạc sĩ dự tuyển cần hoàn thành yêu cầu học bổ sung
              06 học phần (12 tín chỉ) cơ sở ngành đào tạo thạc sĩ cụ thể như
              sau (theo thông báo hiện hành của Viện Đào tạo Sau đại học):
            </p>

            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li className="block">
                (1) Nguyên lý Tài chính – Ngân hàng (2 TC)
              </li>
              <li className="block">(2) Quản trị học (2 TC)</li>
              <li className="block">(3) Kinh tế vi mô (2 TC)</li>
              <li className="block">(4) Kinh tế vĩ mô (2 TC)</li>
              <li className="block">(5) Xác suất thống kê (2 TC)</li>
              <li className="block">(6) Toán cao cấp (2 TC)</li>
            </ul>

            <p>
              Ứng viên sẽ được miễn 01 (hoặc hơn) học phần trong số 06 học phần
              theo quy định nếu đã được học học phần này ở bậc đại học.
            </p>
            <p className="my-3">
              <b>Ứng viên dự tuyển là công dân nước ngoài:</b> <br />
              nếu đăng ký theo học các chương trình đào tạo thạc sĩ bằng tiếng
              Việt phải đạt trình độ tiếng Việt từ Bậc 4 trở lên theo Khung năng
              lực tiếng Việt dùng cho người nước ngoài hoặc đã tốt nghiệp đại
              học (hoặc trình độ tương đương trở lên) mà chương trình đào tạo
              được giảng dạy bằng tiếng Việt; đáp ứng yêu cầu về ngoại ngữ thứ
              hai theo quy định của UEH (nếu có).
            </p>
            <p>
              <b>
                Đối với chương trình đào tạo được dạy và học bằng tiếng nước
                ngoài:
              </b>{" "}
              ứng viên phải đáp ứng yêu cầu về ngoại ngữ, cụ thể khi có một
              trong những điều kiện sau đây:
            </p>
            <ul>
              <li className="list-item relative before:content-['-'] before:absolute before:left-0 before:text-black">
                Ứng viên là công dân của các Quốc gia sử dụng tiếng nước ngoài
                dùng để giảng dạy là ngôn ngữ chính thức.
              </li>
              <li className="list-item relative before:content-['-'] before:absolute before:left-0 before:text-black">
                Bằng tốt nghiệp trình độ đại học trở lên ngành ngôn ngữ sử dụng
                trong giảng dạy; hoặc bằng tốt nghiệp trình độ đại học trở lên
                mà chương trình được thực hiện chủ yếu bằng ngôn ngữ sử dụng
                trong giảng dạy;
              </li>
              <li className="list-item relative before:content-['-'] before:absolute before:left-0 before:text-black">
                Một trong các văn bằng hoặc chứng chỉ của ngôn ngữ sử dụng trong
                giảng dạy đạt trình độ tương đương Bậc 4 trở lên theo Khung năng
                lực ngoại ngữ 6 bậc dùng cho Việt Nam quy định tại Phụ lục 1 của
                Quy chế này hoặc các chứng chỉ tương đương khác do Bộ Giáo dục
                và Đào tạo công bố, còn hiệu lực tính đến ngày đăng ký dự tuyển.
              </li>
            </ul>
            <p className="font-bold text-black">
              (Theo Quyết định số 3794/QĐ-ĐHKT-ĐTSĐH ngày 08 tháng 12 năm 2021
              về việc ban hành Quy định tuyển sinh và đào tạo trình độ thạc sĩ –
              Điều 5)
            </p>
          </div>
        ),
      },
      {
        label: "Cấu trúc chương trình",
        content: (
          <Image
            className="w-full"
            alt={"Cấu trúc chương trình"}
            src="https://iscm-api.ueh.edu.vn/public/static/images/courses/master_structure/2025/standard.png"
          />
        ),
      },
    ],
  },
  executive: {
    about: (
      <div>
        <p>
          Chương trình Thạc sĩ hệ điều hành cao cấp Quản trị Đô thị thông minh
          và sáng tạo (MESCIM) tại Viện Đô thị thông minh và Quản lý là một
          chương trình sau đại học đặc biệt được thiết kế riêng nhằm đào tạo và
          phát triển các nhà quản trị có kinh nghiệm, cung cấp cho người học
          những năng lực cần thiết để quản lý hiệu quả các lĩnh vực khoa học
          công nghệ, đưa ra các giải pháp tích hợp quy hoạch, thiết kế đô thị
          thông minh bền vững hướng đến con người, và toàn bộ cộng đồng.
        </p>
        <p className="font-bold">Thông tin chương trình:</p>

        <ul className="!pl-4">
          {[
            "Trình độ đào tạo: <b>Thạc sĩ - Hệ điều hành cao cấp - Hướng Ứng dụng</b>",
            "Ngành, Chuyên ngành đào tạo: Quản lý công, Quản trị đô thị thông minh và sáng tạo",
            "Mã ngành: 8340403",
            "Học phí dự kiến: 3,000,000 VND/tín chỉ",
          ].map((item) => (
            <li
              className="list-item relative before:content-['-'] before:absolute before:left-0 before:text-black"
              key={item}
            >
              {DOMParser(item)}
            </li>
          ))}
        </ul>
      </div>
    ),
    accordion: [
      {
        label: "Đối tượng người học",
        content: (
          <div>
            <p>
              Người học mong muốn phát triển chuyên môn và quản lý trong cơ quan
              nhà nước, tổ chức phi chính phủ, viện nghiên cứu, doanh nghiệp tư
              nhân hoặc các lĩnh vực liên quan đến phát triển, quản trị, quy
              hoạch đô thị (thông minh, bền vững), hạ tầng, giao thông, địa ốc,
              kiến trúc, ứng dụng công nghệ và môi trường.
            </p>

            <p className="mt-3 font-bold">
              Ứng viên có ít nhất 02 năm kinh nghiệm làm việc và 01 năm kinh
              nghiệm quản lý từ cấp phòng, ban (hoặc tương đương) trở lên
            </p>
          </div>
        ),
      },
      {
        label: "Điều kiện dự tuyển",
        content: (
          <div>
            <p className="mb-3">
              Thí sinh dự tuyển đào tạo trình độ thạc sĩ chương trình hệ Điều
              hành cao cấp có lý lịch rõ ràng, không đang trong thời gian bị
              truy cứu trách nhiệm hình sự và có đủ các điều kiện sau đây:
            </p>

            <p className="font-bold">
              1. Điều kiện về thâm niên công tác và kinh nghiệm quản lý
            </p>
            <p className="mb-3">
              Thí sinh phải có{" "}
              <i>
                ít nhất 02 năm kinh nghiệm làm việc và 01 năm kinh nghiệm quản
                lý
              </i>{" "}
              từ cấp phòng, ban (hoặc tương đương) trở lên thuộc các tập đoàn,
              doanh nghiệp hoặc các cơ quan, tổ chức. Kinh nghiệm công tác, quản
              lý được tính từ ngày thí sinh có quyết định tuyển dụng, bổ nhiệm
              đến ngày nộp hồ sơ.
            </p>
            <p className="font-bold">2. Điều kiện văn bằng</p>
            <ul className="mb-3">
              <li className="list-item relative before:content-['-'] before:absolute before:left-0 before:text-black">
                Có bằng tốt nghiệp đại học khối ngành kinh tế, kinh doanh và
                quản lý.
              </li>
              <li className="list-item relative before:content-['-'] before:absolute before:left-0 before:text-black">
                Nếu không thuộc khối ngành kinh tế, kinh doanh và quản lý cần
                phải có chứng chỉ bổ sung kiến thức do Ban Đào tạo – Bộ phận Sau
                đại học UEH cấp các môn:
                <ul
                  className="mt-2"
                  style={{ listStyle: "none", paddingLeft: 0 }}
                >
                  <li className="block">
                    (1) Nguyên lý Tài chính – Ngân hàng (2 TC)
                  </li>
                  <li className="block">(2) Quản trị học (2 TC)</li>
                  <li className="block">(3) Kinh tế vi mô (2 TC)</li>
                  <li className="block">(4) Kinh tế vĩ mô (2 TC)</li>
                  <li className="block">(5) Xác suất thống kê (2 TC)</li>
                  <li className="block">(6) Toán cao cấp (2 TC)</li>
                </ul>
              </li>
              <li className="list-item relative before:content-['-'] before:absolute before:left-0 before:text-black">
                Các văn bằng tốt nghiệp đại học và bảng điểm do cơ sở đào tạo
                nước ngoài cấp phải được công chứng tiếng Việt và nộp kèm theo
                văn bản công nhận của Cục Quản lý chất lượng (thông tin về đăng
                ký công nhận văn bằng do nước ngoài cấp xem tại
                https://naric.edu.vn, mục Hướng dẫn quy trình công nhận văn bằng
                do cơ sở giáo dục nước ngoài cấp).
              </li>
            </ul>

            <p className="font-bold">3. Điều kiện Ngoại ngữ:</p>
            <ul className="mb-3">
              <li className="list-item relative before:content-['-'] before:absolute before:left-0 before:text-black">
                Thí sinh cần đạt điểm thi tuyển sinh ngoại ngữ đầu vào của UEH
                đạt từ 50 điểm trở lên (thang điểm 100).
              </li>
              <li className="list-item relative before:content-['-'] before:absolute before:left-0 before:text-black">
                Thí sinh được miễn điều kiện ngoại ngữ đầu vào khi có một trong
                các văn bằng, chứng chỉ sau:
                <ul
                  className="mt-2"
                  style={{ listStyle: "none", paddingLeft: 0 }}
                >
                  <li className="list-item relative before:content-['+'] before:absolute before:left-0 before:text-black">
                    Bằng tốt nghiệp trình độ đại học trở lên ngành ngôn ngữ nước
                    ngoài hoặc bằng tốt nghiệp trình độ đại học trở lên mà
                    chương trình được thực hiện chủ yếu bằng ngôn ngữ nước ngoài
                    (có xác nhận của cơ sở đào tạo cấp bằng);
                  </li>
                  <li className="list-item relative before:content-['+'] before:absolute before:left-0 before:text-black">
                    Bằng tốt nghiệp trình độ đại học, thạc sĩ, tiến sĩ do UEH
                    cấp trong thời gian không quá 02 năm tính đến ngày đăng ký
                    dự tuyển mà chuẩn đầu ra của chương trình đã đáp ứng yêu cầu
                    ngoại ngữ đạt trình độ Bậc 3 trở lên theo Khung năng lực
                    ngoại ngữ 6 bậc dùng cho Việt Nam;
                  </li>
                  <li className="list-item relative before:content-['+'] before:absolute before:left-0 before:text-black">
                    Một trong các văn bằng hoặc chứng chỉ ngoại ngữ đạt trình độ
                    tương đương Bậc 3 trở lên theo khung năng lực ngoại ngữ 6
                    bậc dùng cho Việt Nam (xem Phụ lục I, Bảng tham chiếu quy
                    đổi một số văn bằng chứng chỉ ngoại ngữ) hoặc các chứng chỉ
                    tương đương khác, các chứng chỉ này được cấp bởi các cơ sở
                    giáo dục được Bộ Giáo dục và Đào tạo công bố, còn hiệu lực
                    trong vòng 02 năm tính đến ngày đăng ký dự tuyển.
                  </li>
                </ul>
              </li>
            </ul>
            <p>Ghi chú: Ngoại ngữ đầu vào và đầu ra phải cùng ngôn ngữ.</p>
          </div>
        ),
      },
      {
        label: "Cấu trúc chương trình",
        content: (
          <Image
            className="w-full"
            alt={"Cấu trúc chương trình"}
            src="https://iscm-api.ueh.edu.vn/public/static/images/courses/master_structure/2025/executive.png"
          />
        ),
      },
    ],
  },
  "dual-degree": {
    about: (
      <p>
        Chương trình cung cấp cơ hội học tập cùng các trường đại học hàng đầu
        trên thế giới, giúp người học phát triển chuyên môn trong lĩnh vực quản
        trị đô thị thông minh, sáng tạo và bền vững:
      </p>
    ),
    accordion: [
      {
        label: "Đại học Handong Global (Hàn Quốc)",
        content: (
          <div>
            <p className="mb-3">
              Thạc sĩ Quản trị Đô thị Thông minh và Sáng tạo – Thạc sĩ Công nghệ
              và Sinh thái học con người
            </p>
            <p className="mb-3">
              Tập trung vào việc tích hợp công nghệ và các giải pháp dựa trên dữ
              liệu vào quy hoạch đô thị. Người học sẽ nắm vững kiến thức về hạ
              tầng thông minh, thiết kế đô thị bền vững, hoạch định chính sách
              dựa trên công nghệ và sinh thái học con người.
            </p>
            <Image
              alt="Master OD"
              src="/images/courses/graduate/Master OD -2.png"
              className="mb-3 w-full"
            />
            <i>
              Đại học Handong Global, Hàn Quốc, tọa lạc tại thành phố Pohang
              được thành lập vào năm 1994. Hướng đến việc đào tạo những nhà lãnh
              đạo có khả năng tạo ra sự thay đổi tích cực trên phạm vi toàn cầu,
              thông qua việc kết hợp giữa chất lượng học thuật và giáo dục toàn
              diện. Tiếp cận giáo dục &quot;glocal&quot; – nâng cap năng lực
              quốc tế hóa và gắn bó với cộng đồng địa phương – đóng góp cho cộng
              động bằng trí tuệ và sự sáng tạo.
            </i>
          </div>
        ),
      },
      {
        label: "Đại học Hasselt (Bỉ)",
        content: (
          <div>
            <p className="mb-3">
              Thạc sĩ Quản trị Đô thị Thông minh và Sáng tạo – Thạc sĩ Khoa học
              Giao thông
            </p>
            <p className="mb-3">
              Cung cấp kiến thức chuyên sâu về di chuyển thông minh, giao thông
              thông minh, quy hoạch giao thông bền vững và hậu cần đô thị, giúp
              người học có năng lực thiết kế các hệ thống giao thông phù hợp với
              tương lai.
            </p>
            <Image
              alt="Master OD"
              src="https://iscm-api.ueh.edu.vn/public/static/images/courses/master_structure/2025/uhasselt.png"
              className="mb-3 w-full"
            />
            <i>
              Đại học Hasselt là một trường đại học công lập tọa lạc tại hai
              thành phố Hasselt và Diepenbeek, thuộc vùng Flanders, Bỉ. Hasselt
              là một trường đại học sáng tạo với định hướng quốc tế rõ nét.
              Trường cam kết mang đến chất lượng đào tạo xuất sắc, thực hiện các
              nghiên cứu hàng đầu trong những lĩnh vực mũi nhọn, đồng thời thúc
              đẩy đổi mới và tinh thần khởi nghiệp. Sinh viên được tiếp cận với
              các phương pháp nghiên cứu tiên tiến, học hỏi từ các chuyên gia,
              và tham gia vào các dự án thực tiễn nhằm giải quyết những thách
              thức trong thực tiễn.
            </i>
          </div>
        ),
      },
      {
        label: "Đại học KU Leuven (Bỉ)",
        content: (
          <div>
            <p className="mb-3">
              Thạc sĩ Quản trị Đô thị Thông minh và Sáng tạo – Thạc sĩ Định cư
              Con người
            </p>
            <p className="mb-3">
              Mang đến góc nhìn toàn cầu về nhà ở, quy hoạch không gian và hòa
              nhập xã hội, hỗ trợ người học phát triển các giải pháp sáng tạo
              cho những đô thị đáng sống và công bằng.
            </p>
            <Image
              alt="Master OD"
              src="/images/courses/graduate/Master OD -4.png"
              className="mb-3 w-full"
            />
            <i>
              Trường có 600 năm hình thành và phát triển, được thành lập từ năm
              1425 và là một trong những trường đại học lâu đời nhất châu Âu.
              Đại học KU Leuven luôn giữ vững tinh thần học hỏi và khát vọng
              khám phá tri thức. Chính điều đó đã tạo nên những công trình
              nghiên cứu tiên tiến, thu hút các nhà khoa học hàng đầu, truyền
              cảm hứng cho sinh viên đến từ nhiều quốc gia, và mở rộng hợp tác
              với doanh nghiệp để phục vụ cộng đồng. KU Leuven cung cấp một môi
              trường quốc tế, nơi nghiên cứu sáng tạo là nền tảng cho mọi chương
              trình đào tạo. Tại đây, các nhà nghiên cứu và sinh viên không
              ngừng tìm tòi, học hỏi, và vận dụng kiến thức để giải quyết những
              vấn đề cấp thiết của xã hội hiện đại.
            </i>
          </div>
        ),
      },
    ],
  },
};

export default infoVi;
