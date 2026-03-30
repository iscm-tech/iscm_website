import Image from "next/image";

import "./style.scss";
import { ibm_plex_sans } from "@/app/fontDeclare";
import Masonry from "../student_studiolab/[slug]/components/Masonry";
import { getLocale } from "next-intl/server";

//#733C1D

export default async function page() {
  const locale = await getLocale();

  return (
    <section className="bg-[#FAF6EE]">
      <div className="flex w-full">
        <div className="flex-1 flex items-center justify-center flex-col">
          <h1
            className="w-full text-center text-transparent uppercase text-9xl tracking-in-expand"
            style={{ WebkitTextStroke: "1px #D5C3B4", letterSpacing: "2.5rem" }}
          >
            maker
          </h1>
          <h1
            className="w-full text-center text-transparent uppercase text-9xl tracking-in-expand"
            style={{ WebkitTextStroke: "1px #D5C3B4", letterSpacing: "2.5rem" }}
          >
            space
          </h1>
        </div>
        <figure className="flex-1 mb-0 relative">
          <Image
            src="/images/studiolab/makerspace/makerspace.jpeg"
            alt="UEH MakerSpace"
            width={800}
            height={600}
            quality={100}
            className="w-full h-full object-cover"
          />
        </figure>
      </div>

      <div
        className="relative min-h-[600px] before:absolute before:z-0 before:bg-[#733C1D]/80 before:top-0 before:left-0 before:bottom-0 before:right-0 flex items-center justify-center"
        style={{
          backgroundImage:
            "url(/images/studiolab/makerspace/introduction.jpeg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 w-[80%]">
          <h2
            className="text-white text-6xl text-center font-extrabold mb-6"
            style={ibm_plex_sans.style}
          >
            UEH MakerSpace
          </h2>
          <h4 className="text-white text-3xl text-center">
            {locale === "en" ? (
              <>
                Connecting knowledge – Inspiring creativity – Building a
                sustainable future
              </>
            ) : (
              <>
                Kết nối tri thức – Khơi nguồn sáng tạo – Kiến tạo tương lai bền
                vững
              </>
            )}
          </h4>
        </div>
      </div>
      <div className="container py-20">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="flex flex-col gap-3 items-center justify-center">
              <div className="border-[5px] border-[#B69985] rounded-full overflow-hidden">
                <Image
                  src="/images/studiolab/makerspace/daotao.jpeg"
                  className="w-[180px] h-[180px] object-cover"
                  alt="training"
                  width={260}
                  height={260}
                  quality={100}
                />
              </div>
              <div>
                <h4 className="mt-2 text-[#733C1D] text-3xl font-extrabold text-center">
                  {locale === "en" ? "Training" : "Đào tạo"}
                </h4>
                <p className="text-justify text-black px-3">
                  {locale === "en" ? (
                    <>
                      UEH MakerSpace serves as an experiential learning hub,
                      offering students access to cutting-edge technologies like
                      3D printing, media design, and product prototyping through
                      practical courses and thematic workshops
                    </>
                  ) : (
                    <>
                      UEH MakerSpace là nền tảng học tập trải nghiệm, nơi sinh
                      viên được tiếp cận công nghệ sáng tạo như in 3D, thiết kế
                      truyền thông, chế tác sản phẩm thông qua các khóa học thực
                      hành và workshop chuyên đề
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="flex flex-col gap-3 items-center justify-center">
              <div className="border-[5px] border-[#B69985] rounded-full overflow-hidden">
                <Image
                  src="/images/studiolab/makerspace/production.jpeg"
                  className="w-[180px] h-[180px] object-cover"
                  alt="training"
                  width={260}
                  height={260}
                  quality={100}
                />
              </div>
              <div>
                <h4 className="mt-2 text-[#733C1D] text-3xl font-extrabold text-center">
                  {locale === "en" ? "Offerings" : "Sản phẩm - Dịch vụ"}
                </h4>
                <p className="text-justify text-black px-3">
                  {locale === "en" ? (
                    <>
                      UEH MakerSpace provides small-scale design and handcrafted
                      production services, specializing in branded gifts, art
                      and educational supplies, recycled materials, and other
                      creative products
                    </>
                  ) : (
                    <>
                      UEH MakerSpace cung cấp dịch vụ thiết kế và chế tác sản
                      phẩm thủ công, độc bản với quy mô nhỏ, tập trung vào quà
                      tặng thương hiệu, họa cụ – giáo cụ học tập, sản phẩm tái
                      chế và các sản phẩm sáng tạo khác
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="flex flex-col gap-3 items-center justify-center">
              <div className="border-[5px] border-[#B69985] rounded-full overflow-hidden">
                <Image
                  src="/images/studiolab/makerspace/community.jpeg"
                  className="w-[180px] h-[180px] object-cover"
                  alt="training"
                  width={260}
                  height={260}
                  quality={100}
                />
              </div>
              <div>
                <h4 className="mt-2 text-[#733C1D] text-3xl font-extrabold text-center">
                  {locale === "en"
                    ? "Community engagement"
                    : "Phục vụ cộng đồng"}
                </h4>
                <p className="text-justify text-black px-3">
                  {locale === "en" ? (
                    <>
                      UEH MakerSpace serves as a creative hub that brings
                      together students, faculty, and the broader community to
                      exhibit products, exchange ideas, and foster
                      interdisciplinary collaboration. This space plays a key
                      role in nurturing a vibrant and interconnected ecosystem
                      of academia, arts, and technology.
                    </>
                  ) : (
                    <>
                      UEH MakerSpace là không gian kết nối sáng tạo, nơi sinh
                      viên, giảng viên và cộng đồng cùng trưng bày sản phẩm,
                      chia sẻ ý tưởng và giao lưu liên ngành, góp phần xây dựng
                      cộng đồng học thuật – nghệ thuật – công nghệ năng động và
                      gắn kết.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-[#733C1D]">
        <h2 className="container text-[#FAF6EE] text-5xl pl-8 py-3 uppercase">
          Đội ngũ nhân sự.
        </h2>

        <div className="flex">
          <div className="flex-1">
            <figure className="w-[500px] h-[500px]">
              <Image
                className="w-full"
                width={300}
                height={300}
                alt=""
                src="/images/studiolab/makerspace/team/2.png"
                quality={100}
              />
            </figure>
          </div>
        </div>
      </div> */}
      <div className="bg-[#733C1D] py-3">
        <div className="container">
          <h3 className="text-center text-[#FAF6EE] leading-relaxed text-4xl font-extrabold mb-4 uppercase">
            {locale === "en" ? (
              <>A showcase of selected products and initiatives by MakerSpace</>
            ) : (
              <>
                Hình ảnh một số sản phẩm và hoạt động <br /> thực hiện bởi
                MakerSpace
              </>
            )}
          </h3>

          <Masonry
            itemStyle={{ borderRadius: "20px", overflow: "hidden" }}
            imageStyle={{ borderRadius: "20px" }}
            gallery={[
              "/images/studiolab/makerspace/product/product 1.jpeg",
              "/images/studiolab/makerspace/product/product 2.jpeg",
              "/images/studiolab/makerspace/product/product 3.jpeg",
              "/images/studiolab/makerspace/product/product 4.jpeg",
              "/images/studiolab/makerspace/product/product 5.jpeg",
              "/images/studiolab/makerspace/product/product 6.jpeg",
              "/images/studiolab/makerspace/product/product 7.jpeg",
              "/images/studiolab/makerspace/product/product 8.jpeg",
              "/images/studiolab/makerspace/product/product 9.jpeg",
              "/images/studiolab/makerspace/product/product 10.jpeg",
              "/images/studiolab/makerspace/product/product 11.jpeg",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
