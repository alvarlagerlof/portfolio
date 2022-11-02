import { SkeletonText } from "components/SkeletonText";

export default function Loading() {
  return (
    <div className="space-y-6 md:space-y-8">
      <SkeletonText className="w-[35ch] max-w-full h-[2.5rem] md:h-[4.5rem]" />
      <SkeletonText className="w-[60ch] max-w-full h-[1rem] md:h-[2rem]" />
    </div>
  );
}
