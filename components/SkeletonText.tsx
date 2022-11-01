import { Skeleton } from "./Skeleton";

export function SkeletonText({ className }: { className: string }) {
  return <Skeleton className={`rounded-lg py-2.5 ${className}`} />;
}
