import { useState } from "react";
import { useToast } from "../hooks/useToast.jsx";
import Modal from "./Modal";

const BookingForm = ({ property, isOpen, onClose }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferredDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    toast({
      title: "Inspection Booked!",
      description: `Your inspection for ${property?.name} has been scheduled for ${formData.preferredDate}. We'll contact you shortly.`,
    });
    
    setFormData({ name: "", phone: "", email: "", preferredDate: "" });
    onClose();
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Book Inspection" size="sm">
      <p className="mb-4 text-sm text-slate-600">
        Schedule a viewing for {property?.name}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-700">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-slate-400"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-slate-700">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="e.g., 08012345678"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-slate-400"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-700">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-slate-400"
          />
        </div>
        
        <div className="space-y-2">
          <label
            htmlFor="preferredDate"
            className="text-sm font-medium text-slate-700"
          >
            Preferred Date
          </label>
          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            value={formData.preferredDate}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-slate-400"
          />
        </div>
        
        <div className="flex gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Confirm Booking
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default BookingForm;
