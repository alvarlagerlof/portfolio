import { ArrowLink } from "components/ArrowLink";
import { NextSanityImage } from "components/NextSanityImage";
import { Skeleton } from "components/Skeleton";
import { SkeletonText } from "components/SkeletonText";
import { Social } from "types";

export function Item({ icon, networkName, link }: Omit<Social, "_id">) {
  return (
    <li>
      <ArrowLink newTab href={link ?? ""}>
        <div className="inline-block mr-3 translate-y-1 ">
          <NextSanityImage
            image={icon}
            placeholder="empty"
            height={22}
            width={22}
            alt={`${networkName} icon`}
          />
        </div>

        <span className="font-subheading font-semibold text-xl -mt-4">{networkName}</span>
      </ArrowLink>
    </li>
  );
}

export function ItemLoading() {
  return (
    <div className="flex flex-row space-x-2 pb-1 items-center">
      <Skeleton className="w-6 h-6 rounded-lg" />
      <SkeletonText className="w-28 h-[1.25rem] " />
    </div>
  );
}
