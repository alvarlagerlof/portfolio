import Skeleton from "./Skeleton";

export default function SkeletonText({ className }: { className: string }) {
  return <Skeleton className={`rounded-lg py-2 ${className}`} />;
}
