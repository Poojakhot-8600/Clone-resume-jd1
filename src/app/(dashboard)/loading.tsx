export default function DashboardLoading() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto animate-pulse">
      {/* Header Skeleton */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="h-6 w-48 bg-neutral-200 rounded" />
          <div className="h-3 w-72 bg-neutral-100 rounded" />
        </div>
        <div className="flex gap-2">
          <div className="h-9 w-28 bg-neutral-200 rounded" />
          <div className="h-9 w-32 bg-neutral-200 rounded" />
        </div>
      </div>

      {/* KPI Cards Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-24 bg-white border border-neutral-200 rounded-xl p-4 flex items-center justify-between shadow-xs">
            <div className="space-y-2">
              <div className="h-3 w-16 bg-neutral-200 rounded" />
              <div className="h-6 w-12 bg-neutral-200 rounded" />
            </div>
            <div className="h-9 w-9 bg-neutral-100 rounded-sm" />
          </div>
        ))}
      </div>

      {/* Main Content Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="h-80 bg-white border border-neutral-200 rounded-xl p-6 shadow-xs lg:col-span-1" />
        <div className="h-80 bg-white border border-neutral-200 rounded-xl p-6 shadow-xs lg:col-span-2" />
      </div>
    </div>
  );
}
