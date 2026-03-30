import PageHeader from "@/components/partials/pageHeader";
import Masonry from "../student_studiolab/[slug]/components/Masonry";
import { getLocale } from "next-intl/server";

export default async function page() {
  const locale = await getLocale();

  return (
    <>
      <PageHeader />
      <div className="container py-20">
        <div className="pb-10">
          <h1 className="text-center text-5xl mb-4">Gallery</h1>
          <p className="text-justify">
            {locale === "vi"
              ? `Gallery là không gian sáng tạo đa chức năng, nơi diễn ra các hoạt
            động triển lãm tranh, đồ án sinh viên và các sự kiện nghệ thuật đặc
            sắc. Không chỉ là nơi trưng bày, gallery còn là điểm hẹn của những
            buổi workshop học thuật, nghệ thuật. Với thiết kế mở, thân
            thiện và truyền cảm hứng, gallery đóng vai trò như một cầu nối giữa
            cộng đồng sinh viên, nghệ sĩ và những người yêu nghệ thuật.`
              : `The gallery is a multifunctional creative space where student exhibitions, art showcases, and academic workshops regularly take place. More than just a display area, the gallery serves as a vibrant hub for academic and artistic workshops. With its open, welcoming, and inspiring design, the gallery acts as a bridge connecting students, artists, and art enthusiasts within the community.`}
          </p>
        </div>

        <Masonry
          gallery={[
            "https://iscm-api.ueh.edu.vn/public/static/images/studiolab/gallery/IMG_0818.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/studiolab/gallery/IMG_9589.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/studiolab/gallery/IMG_9592.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/studiolab/gallery/IMG_9594.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/studiolab/gallery/IMG_9600.jpg",
            "https://iscm-api.ueh.edu.vn/public/static/images/studiolab/gallery/IMG_9894.jpg",
          ]}
        />
      </div>
    </>
  );
}
