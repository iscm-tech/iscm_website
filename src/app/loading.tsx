import Image from "next/image";

export default function Loading() {
  return (
    <div className="preloader flex items-center justify-center !fixed !top-0 !bottom-0 !left-0 !right-0 bg-[#FFDC2D]">
      <Image
        unoptimized
        src="/images/preloader.gif"
        width={350}
        height={350}
        alt="preloader"
      />
    </div>
  );
}
