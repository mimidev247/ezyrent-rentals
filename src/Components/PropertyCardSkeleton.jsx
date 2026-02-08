const PropertyCardSkeleton = () => {
  return (
    <div className="animate-pulse overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="h-40 bg-slate-200" />
      <div className="space-y-3 p-4">
        <div className="h-4 w-3/4 rounded bg-slate-200" />
        <div className="h-6 w-1/2 rounded bg-slate-200" />
        <div className="flex gap-3">
          <div className="h-4 w-16 rounded bg-slate-200" />
          <div className="h-4 w-16 rounded bg-slate-200" />
          <div className="h-4 w-16 rounded bg-slate-200" />
        </div>
        <div className="h-10 w-full rounded bg-slate-200" />
      </div>
    </div>
  );
};

export default PropertyCardSkeleton;
