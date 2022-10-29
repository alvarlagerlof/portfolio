import Image from "next/image";
import { useBannerData } from "next-banner";

export default function Default() {
  const {
    meta: {
      title = "This is a placeholder title",
      description = "Placeholder description that is a little longer and spans lines",
    },
  } = useBannerData();

  return (
    <div className="w-[1200px] h-[630px] fixed top-0 left-0 bg-green-100 py-20 px-24 flex flex-col justify-between">
      <div className="space-y-2">
        <h1 className="font-heading text-[5.5em] leading-[1.2]">{title}</h1>
        <h2 className="font-subheading text-[2.7em] leading-[1.4]">{description}</h2>
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center space-x-6">
          <div className="rounded-full overflow-hidden w-16 h-16">
            <Image src="/profile.png" alt="" width={100} height={100} />
          </div>
          <h3 className="font-subheading font-medium text-primary text-[2.7em]">
            By Alvar Lagerlöf
          </h3>
        </div>
        <Image src="/icons/star.svg" alt="" width={50} height={50} />
      </div>
    </div>
  );
}