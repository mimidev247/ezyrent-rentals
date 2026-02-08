const properties = [
  {
    id: "lagos-1",
    name: "Lekki Paradise Villa",
    location: "Lagos",
    price: 12000000,
    beds: 5,
    baths: 4,
    parking: 3,
    description:
      "A spacious villa in Lekki with modern finishes, private garden, and premium security.",
    imageUrl:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "lagos-2",
    name: "Victoria Island Penthouse",
    location: "Lagos",
    price: 10500000,
    beds: 4,
    baths: 4,
    parking: 2,
    description:
      "High-rise penthouse with panoramic city views, rooftop lounge, and premium amenities.",
    imageUrl:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "lagos-3",
    name: "Ikoyi Waterfront Apartment",
    location: "Lagos",
    price: 9000000,
    beds: 3,
    baths: 3,
    parking: 2,
    description:
      "Elegant waterfront apartment with a bright open-plan layout and private balcony.",
    imageUrl:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "lagos-4",
    name: "Ajah Starter Home",
    location: "Lagos",
    price: 2500000,
    beds: 2,
    baths: 2,
    parking: 1,
    description:
      "A compact, well-finished starter home in Ajah with easy access to major routes.",
    imageUrl:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "lagos-5",
    name: "Surulere Family Home",
    location: "Lagos",
    price: 3500000,
    beds: 3,
    baths: 2,
    parking: 2,
    description:
      "Comfortable family home with a generous living area and quiet neighborhood setting.",
    imageUrl:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "abuja-1",
    name: "Maitama Executive Suite",
    location: "Abuja",
    price: 8500000,
    beds: 3,
    baths: 3,
    parking: 2,
    description:
      "Executive suite in Maitama with upscale interiors and proximity to key districts.",
    imageUrl:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "abuja-2",
    name: "Wuse II Modern Flat",
    location: "Abuja",
    price: 4500000,
    beds: 2,
    baths: 2,
    parking: 1,
    description:
      "Modern flat in Wuse II with clean lines, smart layout, and city access.",
    imageUrl:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "abuja-3",
    name: "Asokoro Ministerial Quarters",
    location: "Abuja",
    price: 10000000,
    beds: 4,
    baths: 4,
    parking: 3,
    description:
      "Prestigious Asokoro residence with large rooms, serene views, and premium privacy.",
    imageUrl:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "abuja-4",
    name: "Garki Smart Apartment",
    location: "Abuja",
    price: 3000000,
    beds: 2,
    baths: 2,
    parking: 1,
    description:
      "Smart apartment in Garki with efficient design and a warm, natural light feel.",
    imageUrl:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "ph-1",
    name: "GRA Luxury Duplex",
    location: "Port Harcourt",
    price: 7000000,
    beds: 4,
    baths: 4,
    parking: 2,
    description:
      "Luxury duplex in GRA with expansive living space and a private outdoor area.",
    imageUrl:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "ph-2",
    name: "Trans Amadi Estate Home",
    location: "Port Harcourt",
    price: 4000000,
    beds: 3,
    baths: 3,
    parking: 2,
    description:
      "Estate home with airy interiors, quiet streets, and reliable neighborhood access.",
    imageUrl:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "ph-3",
    name: "Old GRA Colonial House",
    location: "Port Harcourt",
    price: 1500000,
    beds: 2,
    baths: 2,
    parking: 1,
    description:
      "Charming colonial-style house with classic character and a relaxed neighborhood.",
    imageUrl:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  },
];

const formatPrice = (price) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(price);

export { properties, formatPrice };
