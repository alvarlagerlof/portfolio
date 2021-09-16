import Image from "next/image";
import { useData } from "next-opengraph-image";

export default function Default() {
  const { title, description } = useData({
    placeholder: {
      title: "Alvar Lagerlöf",
      description: "Developer and designer from Stockholm",
    },
  });

  return (
    <div className="w-[1200px] h-[630px] fixed top-0 left-0 bg-green-100 py-20 px-24 flex flex-col justify-between">
      <div className="flex flex-row space-x-6">
        <Image src="/icons/star.svg" alt="" width="50px" height="50px" />
        {title != "Alvar Lagerlöf" && (
          <h3 className="font-subheading font-medium text-primary text-[2.7em]">Alvar Lagerlöf</h3>
        )}
      </div>

      <div className="space-y-2">
        <h1 className="font-heading text-[7em] leading-[1.2]">{title}</h1>
        <h2 className="font-subheading text-[3.4em] leading-[1.3]">{description}</h2>
      </div>
    </div>
  );
}
