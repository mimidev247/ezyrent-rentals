const EmptyState = ({ location }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white px-6 py-16 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-2xl">
        🏠
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">
        No properties found
      </h3>
      <p className="mt-2 text-sm text-slate-600">
        {location === "all"
          ? "Try adjusting your filters to see available listings."
          : `No listings match your ${location} selection. Try a different location.`}
      </p>
    </div>
  );
};

export default EmptyState;
