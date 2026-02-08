const PropertyFilters = ({
  searchQuery,
  onSearchChange,
  locationFilter,
  onLocationChange,
  sortOrder,
  onSortChange,
  priceRange,
  onPriceRangeChange,
}) => {
  return (
    <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:flex-row md:items-center">
      <div className="relative flex-1">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
          🔍
        </span>
        <input
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search by property name..."
          className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-sm text-slate-900 outline-none transition focus:border-slate-400"
        />
      </div>

      <select
        value={locationFilter}
        onChange={(event) => onLocationChange(event.target.value)}
        className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900"
      >
        <option value="all">All Locations</option>
        <option value="Lagos">Lagos</option>
        <option value="Abuja">Abuja</option>
        <option value="Port Harcourt">Port Harcourt</option>
      </select>

      <select
        value={priceRange}
        onChange={(event) => onPriceRangeChange(event.target.value)}
        className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900"
      >
        <option value="all">All Prices</option>
        <option value="lt-2000000">Below ₦2,000,000</option>
        <option value="2000000-5000000">₦2,000,000 - ₦5,000,000</option>
        <option value="5000000-8000000">₦5,000,000 - ₦8,000,000</option>
        <option value="8000000-plus">₦8,000,000+</option>
      </select>

      <select
        value={sortOrder}
        onChange={(event) => onSortChange(event.target.value)}
        className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900"
      >
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default PropertyFilters;
