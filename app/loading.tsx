import { Skeleton } from "@/app/components/ui/skeleton"

export default function ShowsLoading() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header skeleton */}
      <div className="pt-20 px-4 md:px-8">
        <Skeleton className="h-8 w-48 rounded bg-neutral-800 mb-8" />
      </div>

      {/* Grid skeleton */}
      <div className="px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="w-full aspect-9/13ounded-lg bg-neutral-800" />
              <Skeleton className="h-4 w-3/4 rounded bg-neutral-800" />
              <Skeleton className="h-3 w-1/2 rounded bg-neutral-800" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
