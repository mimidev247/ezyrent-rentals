import { formatPrice } from "../data/properties";

const PropertyCard = ({ property, onViewDetails }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative overflow-hidden">
        <div className="aspect-[16/10] w-full">
          <img
            src={property.imageUrl}
            alt={property.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur-sm">
          {property.location}
        </span>
      </div>
      
      <div className="p-4">
        <h3 className="mb-2 line-clamp-1 text-lg font-semibold text-slate-900">
          {property.name}
        </h3>
        
        <p className="mb-3 text-2xl font-bold text-slate-900">
          {formatPrice(property.price)}
          <span className="text-sm font-normal text-slate-500">/year</span>
        </p>
        
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-1">
            <span aria-hidden="true">🛏️</span>
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <span aria-hidden="true">🛁</span>
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-1">
            <span aria-hidden="true">🚗</span>
            <span>{property.parking}</span>
          </div>
        </div>
      </div>
      
      <div className="p-4 pt-0">
        <button
          type="button"
          onClick={() => onViewDetails(property)}
          className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
