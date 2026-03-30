import envConfig from "@/config";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pt-3">
      <figure className="max-w-full flex justify-center">
        <Image
          src={`${envConfig.API_ENDPOINT}/public/static/images/event_series/2026.png`}
          alt="Timeline 2026"
          width={2400}
          height={2000}
          quality={95}
          className="w-full max-w-[50vw]"
        />
      </figure>
    </div>
  );
}
