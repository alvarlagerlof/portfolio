export default function Skeleton({ className }: { className: string }) {
  return <div className={`bg-skeleton motion-safe:animate-pulse rounded ${className}`} />;
}
