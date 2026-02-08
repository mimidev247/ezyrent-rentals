import { useState, useEffect, useMemo } from "react";
import { properties } from "../data/properties";
import PropertyCard from "../Components/PropertyCard";
import PropertyFilters from "../Components/PropertyFilters";
import PropertyCardSkeleton from "../Components/PropertyCardSkeleton";
import PropertyDetailsModal from "../Components/PropertyDetails";
import EmptyState from "../Components/EmptyState";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("price-asc");
  const [priceRange, setPriceRange] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pageSize = 6;

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, locationFilter, sortOrder, priceRange]);

  const filteredAndSortedProperties = useMemo(() => {
    let result = [...properties];

    // Filter by search query
    if (searchQuery) {
      result = result.filter((property) =>
        property.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by location
    if (locationFilter !== "all") {
      result = result.filter((property) => property.location === locationFilter);
    }

    // Filter by price range
    if (priceRange !== "all") {
      result = result.filter((property) => {
        if (priceRange === "lt-2000000") return property.price < 2000000;
        if (priceRange === "2000000-5000000")
          return property.price >= 2000000 && property.price <= 5000000;
        if (priceRange === "5000000-8000000")
          return property.price > 5000000 && property.price <= 8000000;
        if (priceRange === "8000000-plus") return property.price > 8000000;
        return true;
      });
    }

    // Sort by price
    result.sort((a, b) => {
      if (sortOrder === "price-asc") {
        return a.price - b.price;
      }
      return b.price - a.price;
    });

    return result;
  }, [searchQuery, locationFilter, sortOrder, priceRange]);

  const totalPages = Math.ceil(filteredAndSortedProperties.length / pageSize);
  const paginatedProperties = filteredAndSortedProperties.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleViewDetails = (property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        {/* Header */}
        <header className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Available Rentals
          </h1>
          <p className="text-lg text-slate-600">
            Browse rental properties and find your next home
          </p>
        </header>

        {/* Filters */}
        <PropertyFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          locationFilter={locationFilter}
          onLocationChange={setLocationFilter}
          sortOrder={sortOrder}
          onSortChange={setSortOrder}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
        />

        {/* Property Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <PropertyCardSkeleton key={index} />
            ))}
          </div>
        ) : filteredAndSortedProperties.length === 0 ? (
          <EmptyState location={locationFilter} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        )}

        {/* Results count */}
        {!isLoading && filteredAndSortedProperties.length > 0 && (
          <div className="mt-8 flex flex-col items-center justify-between gap-4 text-sm text-slate-600 md:flex-row">
            <p>
              Showing {(currentPage - 1) * pageSize + 1}-
              {Math.min(currentPage * pageSize, filteredAndSortedProperties.length)} of{" "}
              {filteredAndSortedProperties.length} properties
            </p>
            {totalPages > 1 && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100"
                  disabled={currentPage === 1}
                >
                  Prev
                </button>
                {Array.from({ length: totalPages }).map((_, index) => {
                  const page = index + 1;
                  return (
                    <button
                      key={page}
                      type="button"
                      onClick={() => setCurrentPage(page)}
                      className={`h-8 w-8 rounded-lg text-sm font-medium ${
                        page === currentPage
                          ? "bg-slate-900 text-white"
                          : "border border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100"
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Property Details Modal */}
      <PropertyDetailsModal
        property={selectedProperty}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Index;
