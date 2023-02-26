import { SkeletonText } from "components/SkeletonText";
import { WithDividers } from "components/WithDividers";

export default function Loading() {
  return (
    <WithDividers direction="vertical">
      <div>
        <SkeletonText className="w-[40ch] max-w-full h-[3.5rem] mb-4" />
        <SkeletonText className="w-[60ch] max-w-full h-[2rem] mb-8" />
        <SkeletonText className="w-[30ch] max-w-full h-[2rem]" />
      </div>
      <div>
        <SkeletonText className="w-[64ch] max-w-full h-[50rem]" />
      </div>
    </WithDividers>
  );
}
