import { useState } from "react";
import { formatPrice } from "../data/properties";
import { useToast } from "../hooks/useToast.jsx";
import BookingForm from "./BookingForm";
import Modal from "./Modal";

const PropertyDetailsModal = ({
  property,
  isOpen,
  onClose,
}) => {
  const { toast } = useToast();
  const [showBookingForm, setShowBookingForm] = useState(false);

  if (!property) return null;

  const handleSaveListing = () => {
    toast({
      title: "Listing Saved!",
      description: `${property.name} has been added to your saved listings.`,
    });
  };

  return (
    <>
      <Modal
        isOpen={isOpen && !showBookingForm}
        onClose={onClose}
        title={property.name}
        size="md"
      >
          
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-xl">
              <div className="aspect-[16/9] w-full">
                <img
                  src={property.imageUrl}
                  alt={property.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur-sm">
                {property.location}
              </span>
            </div>
            
            <div>
              <p className="text-3xl font-bold text-slate-900">
                {formatPrice(property.price)}
                <span className="text-base font-normal text-slate-500">/year</span>
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 border-y border-slate-200 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                  🛏️
                </div>
                <div>
                  <p className="font-semibold">{property.beds}</p>
                  <p className="text-sm text-slate-500">Bedrooms</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                  🛁
                </div>
                <div>
                  <p className="font-semibold">{property.baths}</p>
                  <p className="text-sm text-slate-500">Bathrooms</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                  🚗
                </div>
                <div>
                  <p className="font-semibold">{property.parking}</p>
                  <p className="text-sm text-slate-500">Parking</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Description</h4>
              <p className="text-slate-600 leading-relaxed">
                {property.description}
              </p>
            </div>
            
            <div className="flex flex-col gap-3 pt-4 sm:flex-row">
              <button
                type="button"
                onClick={() => setShowBookingForm(true)}
                className="flex-1 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                📅 Book Inspection
              </button>
              <button
                type="button"
                onClick={handleSaveListing}
                className="flex-1 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                ❤️ Save Listing
              </button>
            </div>
          </div>
      </Modal>
      
      {property && (
        <BookingForm
          property={property}
          isOpen={showBookingForm}
          onClose={() => setShowBookingForm(false)}
        />
      )}
    </>
  );
};

export default PropertyDetailsModal;
