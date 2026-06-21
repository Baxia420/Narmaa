// ─── Types ───────────────────────────────────────────────────────────────────

export type Car = {
  id: string;
  slug: string;
  name: string;
  category: string;
  seats: number;
  transmission: string;
  fuel: string;
  luggage?: string;
  priceFrom?: number;
  image: string;
  gallery?: string[];
  featured?: boolean;
  popular?: boolean;
  suitableFor: string[];
  included?: string[];
  notes?: string[];
  description?: string;
};

export type Homestay = {
  id: string;
  slug: string;
  name: string;
  location: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  priceFrom?: number;
  image: string;
  gallery?: string[];
  mainImages?: string[];
  featured?: boolean;
  nearby?: string[];
  notes?: string[];
  description?: string;
  bookingUrl?: string;
};

export type Tour = {
  id: string;
  slug: string;
  name: string;
  duration: string;
  pickupIncluded: boolean;
  highlights: string[];
  highlightPhotos?: { image: string; caption: string }[];
  itinerary?: string[];
  suitableFor: string[];
  priceFrom?: number;
  image: string;
  gallery?: string[];
  featured?: boolean;
  notes?: string[];
  description?: string;
  location?: string;
  groupType?: string;
  features?: string[];
};

export type AirportShuttle = {
  id: string;
  slug: string;
  name: string;
  category: string;
  seats: number;
  seatsLabel?: string;
  luggage?: string;
  priceFrom?: number;
  suitableFor: string[];
  image: string;
  notes?: string[];
  featured?: boolean;
  description?: string;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Car Rental" | "Homestay" | "Tours" | "Booking & Payment" | "Airport Shuttle";
};

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  service: string;
  isPlaceholder: boolean;
};

export type TrustPoint = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

// ─── Cars ────────────────────────────────────────────────────────────────────
// Sequence: Myvi, Vios, City | X50, HRV, Alza (Classic) | Avanza, Alza (New), Serena | Vellfire, Alphard, [Placeholder]

export const cars: Car[] = [
  // ── Row 1 ──────────────────────────────────────────────────────────────────
  {
    id: "car-1",
    slug: "perodua-myvi",
    name: "Perodua Myvi",
    category: "Economy",
    seats: 4,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: "2 medium bags",
    priceFrom: 130,
    image: "/images/fleet/perodua-myvi.webp",
    gallery: [
      "/images/fleet/perodua-myvi.webp",
    ],
    featured: true,
    popular: true,
    suitableFor: ["City driving", "Budget-friendly trips", "Solo travellers", "Couples"],
    included: ["Full tank fuel policy", "Basic insurance", "24/7 roadside support"],
    notes: [
      "Deposit amount to be confirmed before booking",
      "Valid driving license required",
      "Mileage limits may apply - confirm with Narmaa Transport",
    ],
    description: "Malaysia's favourite compact hatchback. The Perodua Myvi is fuel-efficient, easy to drive, and perfect for navigating city streets and short trips around KL and Selangor.",
  },
  {
    id: "car-2",
    slug: "toyota-vios",
    name: "Toyota Vios",
    category: "Sedan",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: "3 medium bags",
    priceFrom: 200,
    image: "/images/fleet/toyota-vios.webp",
    gallery: [
      "/images/fleet/toyota-vios.webp",
    ],
    featured: true,
    suitableFor: ["Business travel", "Airport transfers", "Family trips", "Comfortable city driving"],
    included: ["Full tank fuel policy", "Basic insurance", "24/7 roadside support"],
    notes: [
      "Deposit amount to be confirmed before booking",
      "Valid driving license required",
      "Mileage limits may apply - confirm with Narmaa Transport",
    ],
    description: "A reliable and stylish sedan popular across Malaysia. The Toyota Vios offers a smooth, comfortable ride - ideal for airport transfers, business travel, and family outings around KL.",
  },
  {
    id: "car-3",
    slug: "honda-city",
    name: "Honda City",
    category: "Sedan",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: "3 medium bags",
    priceFrom: 230,
    image: "/images/fleet/honda-city.webp",
    gallery: [
      "/images/fleet/honda-city.webp",
    ],
    featured: false,
    suitableFor: ["Business travel", "Airport transfers", "Family trips", "City driving"],
    included: ["Full tank fuel policy", "Basic insurance", "24/7 roadside support"],
    notes: [
      "Deposit amount to be confirmed before booking",
      "Valid driving license required",
      "Mileage limits may apply - confirm with Narmaa Transport",
    ],
    description: "A premium compact sedan offering a refined driving experience. The Honda City combines stylish design with a spacious interior, making it a popular choice for both city commutes and longer journeys.",
  },
  // ── Row 2 ──────────────────────────────────────────────────────────────────
  {
    id: "car-4",
    slug: "proton-x50",
    name: "Proton X50",
    category: "SUV",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: "3 large bags",
    priceFrom: 350,
    image: "/images/fleet/proton-x50.webp",
    gallery: [
      "/images/fleet/proton-x50.webp",
    ],
    featured: false,
    suitableFor: ["Comfortable road trips", "Family travel", "Highway driving", "Outstation journeys"],
    included: ["Full tank fuel policy", "Basic insurance", "24/7 roadside support"],
    notes: [
      "Deposit amount to be confirmed before booking",
      "Valid driving license required",
      "Mileage limits may apply - confirm with Narmaa Transport",
    ],
    description: "A modern compact SUV packed with premium features. The Proton X50 offers a sporty look, comfortable cabin, and advanced tech - great for highway drives and family road trips across Malaysia.",
  },
  {
    id: "car-5",
    slug: "honda-hrv",
    name: "Honda HR-V",
    category: "SUV",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: "3 large bags",
    priceFrom: 300,
    image: "/images/fleet/honda-hrv.webp",
    gallery: [
      "/images/fleet/honda-hrv.webp",
    ],
    featured: false,
    suitableFor: ["Family travel", "Highway driving", "Comfortable road trips", "City driving"],
    included: ["Full tank fuel policy", "Basic insurance", "24/7 roadside support"],
    notes: [
      "Deposit amount to be confirmed before booking",
      "Valid driving license required",
      "Mileage limits may apply - confirm with Narmaa Transport",
    ],
    description: "A versatile and stylish compact SUV from Honda. The HR-V delivers a smooth ride with a premium feel, ample cabin space, and excellent fuel efficiency for both city and highway driving.",
  },
  {
    id: "car-6",
    slug: "perodua-alza-classic",
    name: "Perodua Alza (Classic)",
    category: "MPV",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: "3 medium bags",
    priceFrom: 180,
    image: "/images/fleet/perodua-alza-classic.webp",
    gallery: [
      "/images/fleet/perodua-alza-classic.webp",
    ],
    featured: false,
    suitableFor: ["Family travel", "Small groups", "Budget MPV", "City driving"],
    included: ["Full tank fuel policy", "Basic insurance", "24/7 roadside support"],
    notes: [
      "Deposit amount to be confirmed before booking",
      "Valid driving license required",
      "Mileage limits may apply - confirm with Narmaa Transport",
    ],
    description: "Malaysia's most popular compact MPV in its classic form. The Perodua Alza (Classic) offers practical multi-seater versatility at a budget-friendly price point - great for families and small groups.",
  },
  // ── Row 3 ──────────────────────────────────────────────────────────────────
  {
    id: "car-7",
    slug: "toyota-avanza",
    name: "Toyota Avanza",
    category: "MPV",
    seats: 6,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: "4 large bags",
    priceFrom: 180,
    image: "/images/fleet/toyota-avanza.webp",
    gallery: [
      "/images/fleet/toyota-avanza.webp",
    ],
    featured: true,
    popular: true,
    suitableFor: ["Family travel", "Group trips", "Airport pickup with luggage", "Outstation journeys"],
    included: ["Full tank fuel policy", "Basic insurance", "24/7 roadside support"],
    notes: [
      "Deposit amount to be confirmed before booking",
      "Valid driving license required",
      "Mileage limits may apply - confirm with Narmaa Transport",
    ],
    description: "The Toyota Avanza is a versatile MPV beloved by Malaysian families. Spacious, practical, and easy to drive - ideal for group airport pickups and outstation trips.",
  },
  {
    id: "car-8",
    slug: "perodua-alza",
    name: "Perodua Alza",
    category: "MPV",
    seats: 6,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: "3 large bags",
    priceFrom: 280,
    image: "/images/fleet/perodua-alza.webp",
    gallery: [
      "/images/fleet/perodua-alza.webp",
    ],
    featured: false,
    popular: true,
    suitableFor: ["Family travel", "Group trips", "City driving", "Outstation journeys"],
    included: ["Full tank fuel policy", "Basic insurance", "24/7 roadside support"],
    notes: [
      "Deposit amount to be confirmed before booking",
      "Valid driving license required",
      "Mileage limits may apply - confirm with Narmaa Transport",
    ],
    description: "The all-new Perodua Alza is a bold step up in comfort and technology. With a modern cabin, advanced safety features, and versatile seating, it redefines the Malaysian family MPV experience.",
  },
  {
    id: "car-9",
    slug: "nissan-serena",
    name: "Nissan Serena",
    category: "MPV",
    seats: 7,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: "4 large bags",
    priceFrom: 400,
    image: "/images/fleet/nissan-serena.webp",
    gallery: [
      "/images/fleet/nissan-serena.webp",
    ],
    featured: false,
    suitableFor: ["Large families", "Group travel", "Outstation journeys", "Airport transfers"],
    included: ["Full tank fuel policy", "Basic insurance", "24/7 roadside support"],
    notes: [
      "Deposit amount to be confirmed before booking",
      "Valid driving license required",
      "Mileage limits may apply - confirm with Narmaa Transport",
    ],
    description: "A premium family van offering generous space and comfort for up to 7 passengers. The Nissan Serena is the ideal choice for larger groups seeking a smooth, relaxed journey across Malaysia.",
  },
  // ── Row 4 ──────────────────────────────────────────────────────────────────
  {
    id: "car-10",
    slug: "toyota-vellfire",
    name: "Toyota Vellfire",
    category: "Executive MPV",
    seats: 6,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: "4 large bags",
    priceFrom: 600,
    image: "/images/fleet/toyota-vellfire.webp",
    gallery: [
      "/images/fleet/toyota-vellfire.webp",
    ],
    featured: false,
    suitableFor: ["VIP transport", "Corporate events", "Family luxury travel", "Airport executive pickup"],
    included: ["Full tank fuel policy", "Comprehensive insurance", "24/7 roadside support", "Professional chauffeur available"],
    notes: [
      "Premium chauffeur service available on request",
      "Deposit amount to be confirmed before booking",
      "Advance booking recommended due to high demand",
    ],
    description: "The sporty sibling of the Alphard. The Toyota Vellfire combines executive comfort with bold design - a popular choice for VIP transfers and premium family travel.",
  },
  {
    id: "car-11",
    slug: "toyota-alphard",
    name: "Toyota Alphard",
    category: "Executive MPV",
    seats: 6,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: "4 large bags",
    priceFrom: 600,
    image: "/images/fleet/toyota-alphard.webp",
    gallery: [
      "/images/fleet/toyota-alphard.webp",
    ],
    featured: true,
    popular: true,
    suitableFor: ["VIP transport", "Business travel", "Family comfort", "Airport executive pickup", "Wedding transport"],
    included: ["Full tank fuel policy", "Comprehensive insurance", "24/7 roadside support", "Professional chauffeur available"],
    notes: [
      "Premium chauffeur service available on request",
      "Deposit amount to be confirmed before booking",
      "Advance booking recommended due to high demand",
    ],
    description: "The ultimate executive MPV for premium travel in Malaysia. The Toyota Alphard features luxurious captain seats, whisper-quiet cabin, and a ride quality that defines business-class ground transport.",
  },
  {
    id: "car-12",
    slug: "coming-soon",
    name: "Coming Soon",
    category: "New Addition",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    image: "",
    gallery: [],
    featured: false,
    suitableFor: ["To be confirmed"],
    included: [],
    notes: ["Details coming soon — contact us for more information"],
    description: "We are expanding our fleet. Stay tuned for more vehicle options coming soon.",
  },
];

// ─── Homestays ───────────────────────────────────────────────────────────────

export const homestays: Homestay[] = [
  {
    id: "stay-1",
    slug: "axon-residence-bukit-bintang",
    name: "Axon Residence Bukit Bintang",
    location: "Bukit Bintang, Kuala Lumpur",
    bookingUrl: "https://www.booking.com/Share-uRasgCM",
    guests: 6,
    bedrooms: 2,
    bathrooms: 2,
    amenities: [
      "Swimming pool",
      "Gym",
      "WiFi",
      "Air conditioning",
      "Kitchen",
      "Washing machine",
      "City view",
      "Parking",
      "Security",
    ],
    priceFrom: 350,
    image: "/images/homestays/axon/axon-cover.webp",
    // mainImages are always pinned first; the rest are shuffled per session
    mainImages: [
      "/images/homestays/axon/axon-main-1.webp",
      "/images/homestays/axon/axon-main-2.webp",
    ],
    gallery: [
      "/images/homestays/axon/axon-main-1.webp",
      "/images/homestays/axon/axon-main-2.webp",
      "/images/homestays/axon/axon-3.webp",
      "/images/homestays/axon/axon-4.webp",
      "/images/homestays/axon/axon-5.webp",
      "/images/homestays/axon/axon-6.webp",
      "/images/homestays/axon/axon-7.webp",
      "/images/homestays/axon/axon-8.webp",
      "/images/homestays/axon/axon-9.webp",
      "/images/homestays/axon/axon-11.webp",
      "/images/homestays/axon/axon-12.webp",
      "/images/homestays/axon/axon-13.webp",
    ],
    featured: true,
    nearby: ["Pavilion KL", "Bukit Bintang", "KLCC", "Jalan Alor food street"],
    notes: [
      "Check-in from 3:00 PM · Check-out by 11:00 AM",
      "Security deposit may apply",
      "House rules will be provided before booking",
    ],
    description: "A modern high-rise residence in the heart of Bukit Bintang. Walk to Pavilion KL, enjoy the infinity pool with city skyline views, and experience KL's best dining and shopping at your doorstep.",
  },
  {
    id: "stay-2",
    slug: "reizz-residence-jalan-ampang",
    name: "Reizz Residence",
    location: "Jalan Ampang, Kuala Lumpur",
    bookingUrl: "https://www.booking.com/Share-yxUiIE",
    guests: 4,
    bedrooms: 1,
    bathrooms: 1,
    amenities: [
      "Swimming pool",
      "Gym",
      "WiFi",
      "Air conditioning",
      "Kitchen",
      "Washing machine",
      "City view",
      "Parking",
    ],
    priceFrom: 250,
    image: "/images/homestays/reizz/reizz-cover.webp",
    // mainImages are always pinned first; the rest are shuffled per session
    mainImages: [
      "/images/homestays/reizz/reizz-main-1.webp",
      "/images/homestays/reizz/reizz-main-2.webp",
    ],
    gallery: [
      "/images/homestays/reizz/reizz-main-1.webp",
      "/images/homestays/reizz/reizz-main-2.webp",
      "/images/homestays/reizz/reizz-1.webp",
      "/images/homestays/reizz/reizz-2.webp",
      "/images/homestays/reizz/reizz-3.webp",
      "/images/homestays/reizz/reizz-5.webp",
      "/images/homestays/reizz/reizz-6.webp",
      "/images/homestays/reizz/reizz-7.webp",
      "/images/homestays/reizz/reizz-8.webp",
      "/images/homestays/reizz/reizz-9.webp",
      "/images/homestays/reizz/reizz-10.webp",
      "/images/homestays/reizz/reizz-11.webp",
    ],
    featured: true,
    nearby: ["TRX Exchange", "Pavilion Bukit Jalil", "KL city centre", "Public transport links"],
    notes: [
      "Check-in from 3:00 PM · Check-out by 11:00 AM",
      "Security deposit may apply",
      "House rules will be provided before booking",
    ],
    description: "A stylish and affordable residence with excellent connectivity. Located on Jalan Ampang, Reizz Residence offers easy access to KL's business district and major attractions.",
  },
];

// ─── Tours ───────────────────────────────────────────────────────────────────
// Sequence: KL City, Genting, Malacca | Cameron, Kuala Selangor, Kuala Gandah | Lego Land, Putrajaya

export const tours: Tour[] = [
  {
    id: "tour-1",
    slug: "kl-city-highlights-tour",
    name: "Kuala Lumpur City Highlights Tour",
    duration: "Half day (5–6 hours)",
    pickupIncluded: true,
    highlights: [
      "Petronas Twin Towers",
      "KL Tower",
      "Batu Caves",
      "National Mosque",
      "Merdeka Square",
      "Central Market",
    ],
    highlightPhotos: [
      { image: "/images/tours/kl-city-tour/kl-city-tour-3.webp", caption: "KL City at Night" },
      { image: "/images/tours/kl-city-tour/kl-city-tour-1.webp", caption: "Petronas Twin Towers" },
      { image: "/images/tours/kl-city-tour/kl-city-tour-2.webp", caption: "Petaling Street" },
      { image: "/images/tours/kl-city-tour/kl-city-tour-10.webp", caption: "Batu Caves" },
    ],
    itinerary: [
      "Pickup from your hotel or homestay",
      "Photo stop at Petronas Twin Towers and KLCC Park",
      "Visit Batu Caves",
      "Drive past National Mosque and Merdeka Square",
      "Stop at Central Market for souvenirs",
      "Drop-off at hotel or requested location",
    ],
    suitableFor: ["First-time visitors", "Families", "Solo travellers", "Short-stay tourists"],
    priceFrom: 300,
    image: "/images/tours/kl-city-tour/kl-city-tour-3.webp",
    gallery: [
      "/images/tours/kl-city-tour/kl-city-tour-3.webp",
      "/images/tours/kl-city-tour/kl-city-tour-1.webp",
      "/images/tours/kl-city-tour/kl-city-tour-10.webp",
      "/images/tours/kl-city-tour/kl-city-tour-2.webp",
      "/images/tours/kl-city-tour/kl-city-tour-4.webp",
      "/images/tours/kl-city-tour/kl-city-tour-11.webp",
      "/images/tours/kl-city-tour/kl-city-tour-12.webp",
      "/images/tours/kl-city-tour/kl-city-tour-5.webp",
      "/images/tours/kl-city-tour/kl-city-tour-6.webp",
      "/images/tours/kl-city-tour/kl-city-tour-7.webp",
      "/images/tours/kl-city-tour/kl-city-tour-8.webp",
      "/images/tours/kl-city-tour/kl-city-tour-9.webp",
    ],
    featured: true,
    location: "Kuala Lumpur",
    groupType: "Private Group",
    features: ["Private Chauffeur", "Guided City Tour", "Batu Caves Entry", "Local Driver"],
    notes: [
      "Price is per vehicle, not per person",
      "Entrance fees are not included",
      "Itinerary can be adjusted on the day",
      "Availability to be confirmed",
    ],
    description: "See the best of Kuala Lumpur in half a day. Visit iconic landmarks, explore vibrant markets, and learn about Malaysia's capital with a knowledgeable private driver.",
  },
  {
    id: "tour-2",
    slug: "genting-highlands-day-trip",
    name: "Genting Highlands & French Village Tour",
    duration: "Half day or full day (6–10 hours)",
    pickupIncluded: true,
    highlights: [
      "Genting SkyWorlds Theme Park",
      "Awana Skyway cable car",
      "Sky Casino",
      "Premium outlets",
      "Cool mountain weather",
    ],
    itinerary: [
      "Pickup from your hotel or homestay in KL",
      "Drive to Genting Highlands (approximately 1 hour)",
      "Ride the Awana Skyway cable car",
      "Visit SkyWorlds Theme Park or explore the resort",
      "Shopping at Genting Premium Outlets (optional)",
      "Return drive to KL with drop-off",
    ],
    suitableFor: ["Families with children", "Thrill seekers", "Shoppers", "Couples"],
    priceFrom: 300,
    // Cover photo placeholder — will be updated with cable car photo
    image: "",
    gallery: [
      "/images/tours/genting-highlands/genting-highlands-1.webp",
      "/images/tours/genting-highlands/genting-highlands-11.webp",
      "/images/tours/genting-highlands/genting-highlands-2.webp",
      "/images/tours/genting-highlands/genting-highlands-3.webp",
      "/images/tours/genting-highlands/genting-highlands-4.webp",
      "/images/tours/genting-highlands/genting-highlands-5.webp",
      "/images/tours/genting-highlands/genting-highlands-6.webp",
      "/images/tours/genting-highlands/genting-highlands-7.webp",
      "/images/tours/genting-highlands/genting-highlands-8.webp",
      "/images/tours/genting-highlands/genting-highlands-9.webp",
      "/images/tours/genting-highlands/genting-highlands-10.webp",
    ],
    featured: true,
    location: "Genting Highlands",
    groupType: "Private Group",
    features: ["Private Chauffeur", "Cable Car Ride", "Premium Outlets", "Theme Park Transfer"],
    notes: [
      "Price is per vehicle, not per person",
      "Theme park tickets, cable car fees, and meals are strictly not included",
      "Availability to be confirmed",
    ],
    description: "A fun-filled day trip to Malaysia's mountaintop entertainment city. Enjoy theme parks, cool weather, scenic cable car rides, and premium shopping - all just an hour from KL.",
  },
  {
    id: "tour-3",
    slug: "malacca-historical-day-trip",
    name: "Historical Malacca Private Tour",
    duration: "10 Hours (Full Day)",
    pickupIncluded: true,
    highlights: [
      "A Famosa fortress",
      "Jonker Street",
      "Dutch Square",
      "St. Paul's Church",
      "Malacca River cruise",
      "Local Nyonya cuisine",
    ],
    highlightPhotos: [
      { image: "/images/tours/malacca-tour/malacca-tour-1.webp", caption: "Malacca Straits Mosque" },
      { image: "/images/tours/malacca-tour/malacca-tour-2.webp", caption: "Jonker Street" },
      { image: "/images/tours/malacca-tour/malacca-tour-4.webp", caption: "Malacca River" },
      { image: "/images/tours/malacca-tour/malacca-tour-5.webp", caption: "Heritage Street" },
    ],
    itinerary: [
      "Pick-up from Kuala Lumpur",
      "Stadthuys & Christ Church",
      "A Famosa Fort",
      "Jonker Street Exploration",
      "Malacca River Cruise & Return",
    ],
    suitableFor: ["Families", "Couples", "History lovers", "Food enthusiasts", "First-time visitors"],
    priceFrom: 450,
    image: "/images/tours/malacca-tour/malacca-tour-3.webp",
    gallery: [
      "/images/tours/malacca-tour/malacca-tour-3.webp",
      "/images/tours/malacca-tour/malacca-tour-1.webp",
      "/images/tours/malacca-tour/malacca-tour-2.webp",
      "/images/tours/malacca-tour/malacca-tour-4.webp",
      "/images/tours/malacca-tour/malacca-tour-5.webp",
      "/images/tours/malacca-tour/malacca-tour-6.webp",
      "/images/tours/malacca-tour/malacca-tour-7.webp",
    ],
    featured: true,
    location: "Malacca City",
    groupType: "Private Group",
    features: ["Private Chauffeur", "Guided City Tour", "River Cruise"],
    notes: [
      "Price is per vehicle, not per person",
      "Entrance fees, tickets, and meals are strictly not included",
      "Itinerary can be customized - discuss with Narmaa Transport",
      "Availability to be confirmed",
    ],
    description: "Discover the rich history and vibrant culture of Malacca with a private chauffeur. Explore UNESCO heritage sites, taste authentic Nyonya cuisine, and stroll through the famous Jonker Street.",
  },
  {
    id: "tour-4",
    slug: "cameron-highlands-day-trip",
    name: "Cameron Highlands Day Trip",
    duration: "Full day (10–12 hours)",
    pickupIncluded: true,
    highlights: [
      "BOH Tea Plantation",
      "Strawberry farm",
      "Mossy Forest",
      "Lavender garden",
      "Fresh market",
      "Cool highland climate",
    ],
    highlightPhotos: [
      { image: "/images/tours/cameron-highlands/cameron-highlands-1.webp", caption: "Test1" },
      { image: "/images/tours/cameron-highlands/cameron-highlands-2.webp", caption: "Test2" },
      { image: "/images/tours/cameron-highlands/cameron-highlands-3.webp", caption: "Test3" },
      { image: "/images/tours/cameron-highlands/cameron-highlands-4.webp", caption: "Test4" },
    ],
    itinerary: [
      "Early morning pickup from KL",
      "Scenic drive through Tapah (approximately 3 hours)",
      "Visit BOH Tea Plantation and enjoy highland tea",
      "Stop at a strawberry farm",
      "Explore Mossy Forest boardwalk",
      "Browse the fresh produce market",
      "Return drive to KL with drop-off",
    ],
    suitableFor: ["Nature lovers", "Families", "Couples", "Photographers", "Foodies"],
    priceFrom: 550,
    image: "/images/tours/cameron-highlands/cameron-highlands-1.webp",
    gallery: [
      "/images/tours/cameron-highlands/cameron-highlands-1.webp",
      "/images/tours/cameron-highlands/cameron-highlands-2.webp",
      "/images/tours/cameron-highlands/cameron-highlands-3.webp",
      "/images/tours/cameron-highlands/cameron-highlands-4.webp",
      "/images/tours/cameron-highlands/cameron-highlands-5.webp",
    ],
    featured: true,
    location: "Cameron Highlands",
    groupType: "Private Group",
    features: ["Private Chauffeur", "Tea Plantation Visit", "Strawberry Picking", "Cool Climate"],
    notes: [
      "Price is per vehicle, not per person",
      "Early departure recommended (7–8 AM)",
      "Entrance fees, tickets, and meals are strictly not included",
      "Itinerary can be customized",
      "Availability to be confirmed",
    ],
    description: "Escape the city heat and explore the lush green highlands of Cameron. Visit tea plantations, walk through the mystical Mossy Forest, and enjoy the fresh mountain air.",
  },
  {
    id: "tour-5",
    slug: "kuala-selangor-fireflies-tour",
    name: "Kuala Selangor Fireflies & Eagles Tour",
    duration: "Half day (6–8 hours)",
    pickupIncluded: true,
    highlights: [
      "Eagle Feeding",
      "Fireflies Boat Tour",
      "Bukit Melawati (Silvered Leaf Monkeys)",
      "Seafood Dinner (Optional)",
    ],
    highlightPhotos: [
      { image: "/images/tours/kuala-selangor/kuala-selangor-1.webp", caption: "Eagle Feeding at the River" },
      { image: "/images/tours/kuala-selangor/kuala-selangor-2.webp", caption: "Silvered Leaf Monkeys" },
    ],
    itinerary: [
      "Afternoon pickup from KL",
      "Visit Bukit Melawati & see the monkeys",
      "Eagle feeding boat ride",
      "Seafood dinner by the river (optional)",
      "Fireflies watching cruise at night",
      "Return drive to KL",
    ],
    suitableFor: ["Families", "Nature lovers", "Couples", "Photographers"],
    priceFrom: 350,
    // Cover photo placeholder — will be updated with silver monkey photo
    image: "",
    gallery: [
      "/images/tours/kuala-selangor/kuala-selangor-1.webp",
      "/images/tours/kuala-selangor/kuala-selangor-2.webp",
    ],
    featured: true,
    location: "Kuala Selangor",
    groupType: "Private Group",
    features: ["Private Chauffeur", "Wildlife Experience"],
    notes: [
      "Price is per vehicle, not per person",
      "Boat tickets for eagle feeding and fireflies are strictly not included",
      "Seafood dinner and meals are strictly not included",
    ],
    description: "Experience the magic of Kuala Selangor. Feed magnificent eagles, interact with friendly monkeys at Bukit Melawati, and end the evening with a mesmerizing firefly cruise along the river.",
  },
  {
    id: "tour-6",
    slug: "kuala-gandah-elephant-sanctuary",
    name: "Kuala Gandah Elephant Sanctuary",
    duration: "Full day (8–10 hours)",
    pickupIncluded: true,
    highlights: [
      "Elephant sanctuary visit",
      "Jungle trekking",
      "Wildlife encounters",
      "Scenic countryside drive",
    ],
    itinerary: [
      "Morning pickup from KL",
      "Scenic drive to Kuala Gandah (approximately 2 hours)",
      "Visit the elephant sanctuary",
      "Jungle trekking and nature walk",
      "Return drive to KL with drop-off",
    ],
    suitableFor: ["Families", "Nature lovers", "Wildlife enthusiasts", "Photographers"],
    priceFrom: undefined,
    image: "",
    gallery: [],
    featured: true,
    location: "Kuala Gandah, Pahang",
    groupType: "Private Group",
    features: ["Private Chauffeur", "Wildlife Experience", "Elephant Sanctuary"],
    notes: [
      "Price to be confirmed — contact us for a quote",
      "Entrance fees and meals are not included",
      "Details and itinerary subject to confirmation",
      "Availability to be confirmed",
    ],
    description: "A truly unique wildlife experience just a couple of hours from KL. Visit the Kuala Gandah Elephant Conservation Centre, home to rescued wild elephants. Details and pricing to be confirmed — contact us for more information.",
  },
  {
    id: "tour-7",
    slug: "legoland-malaysia-day-trip",
    name: "Legoland Malaysia Day Trip",
    duration: "Full day (8–10 hours)",
    pickupIncluded: true,
    highlights: [
      "Legoland Theme Park",
      "Rides and attractions",
      "Miniland Malaysia",
      "Water Park (optional)",
    ],
    itinerary: [
      "Morning pickup from KL",
      "Drive to Johor Bahru (approximately 3–4 hours)",
      "Full day at Legoland Malaysia",
      "Return drive to KL",
    ],
    suitableFor: ["Families with children", "Theme park enthusiasts", "Groups"],
    priceFrom: undefined,
    image: "",
    gallery: [],
    featured: false,
    location: "Johor Bahru, Johor",
    groupType: "Private Group",
    features: ["Private Chauffeur", "Theme Park Transfer"],
    notes: [
      "Price to be confirmed — contact us for a quote",
      "Theme park tickets and meals are not included",
      "Details and itinerary subject to confirmation",
      "Availability to be confirmed",
    ],
    description: "Take the kids on the ultimate LEGO adventure at Legoland Malaysia in Johor Bahru. Enjoy rides, Miniland Malaysia, and a full day of family fun — all with the convenience of private transport from KL.",
  },
  {
    id: "tour-8",
    slug: "putrajaya-cyberjaya-tour",
    name: "Putrajaya & Cyberjaya Tour",
    duration: "Half day (4–5 hours)",
    pickupIncluded: true,
    highlights: [
      "Putra Mosque",
      "Putrajaya Lake",
      "Prime Minister's Office",
      "Putrajaya Bridge",
      "Cyberjaya smart city",
    ],
    highlightPhotos: [
      { image: "/images/tours/putrajaya-tour.webp", caption: "Putra Mosque" },
    ],
    itinerary: [
      "Pickup from your hotel or homestay",
      "Drive to Putrajaya (approximately 40 minutes)",
      "Visit the iconic Putra Mosque",
      "Photo stop at the Prime Minister's Office",
      "Drive across Putrajaya's bridges",
      "Brief stop in Cyberjaya",
      "Return to KL with drop-off",
    ],
    suitableFor: ["Architecture lovers", "Photographers", "First-time visitors", "History enthusiasts"],
    priceFrom: 250,
    image: "/images/tours/putrajaya-tour.webp",
    gallery: [
      "/images/tours/putrajaya-tour.webp",
    ],
    featured: false,
    location: "Putrajaya",
    groupType: "Private Group",
    features: ["Private Chauffeur", "Mosque Photo Stop", "Putrajaya Lake View", "Cyberjaya Visit"],
    notes: [
      "Price is per vehicle, not per person",
      "Mosque visit requires modest dress code",
      "Availability to be confirmed",
    ],
    description: "Discover Malaysia's stunning administrative capital. Putrajaya features world-class Islamic architecture, beautiful lakes, and impressive government buildings.",
  },
];

// ─── FAQs ────────────────────────────────────────────────────────────────────

export const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "Do you provide airport pickup?",
    answer: "Yes, we provide airport pickup and drop-off services at KLIA and KLIA2. Please contact us on WhatsApp to arrange your airport transfer with your flight details.",
    category: "General",
  },
  {
    id: "faq-2",
    question: "Can I book car rental, homestay, and tour together?",
    answer: "Absolutely! We can arrange combo packages that include car rental, homestay, and private tours. Contact us on WhatsApp to discuss your travel plan and we will help put together the right package.",
    category: "General",
  },
  {
    id: "faq-3",
    question: "How do I check availability?",
    answer: "The easiest way is to message us on WhatsApp with your preferred dates, service type, and any specific requirements. We typically respond within a few hours.",
    category: "General",
  },
  {
    id: "faq-4",
    question: "What areas do you cover?",
    answer: "We primarily serve Kuala Lumpur, Selangor, KLIA/KLIA2, and selected destinations across Peninsular Malaysia including Malacca, Cameron Highlands, Genting Highlands, and Putrajaya.",
    category: "General",
  },
  {
    id: "faq-5",
    question: "Can tourists book your services?",
    answer: "Yes, tourists are welcome to book our services. We cater to both local and international travellers. Please contact Narmaa Transport on WhatsApp to confirm the latest requirements.",
    category: "General",
  },
  {
    id: "faq-6",
    question: "What documents are needed for car rental?",
    answer: "In general, a valid driving licence is required for all rentals. International visitors may additionally require an International Driving Permit (IDP). Specific document requirements may vary depending on your country of origin and the vehicle selected. Please contact us for full details prior to booking.",
    category: "Car Rental",
  },
  {
    id: "faq-7",
    question: "Is a deposit required for car rental?",
    answer: "Deposit requirements may vary depending on the vehicle and rental duration. Please contact Narmaa Transport on WhatsApp to confirm the deposit amount and payment method before booking.",
    category: "Car Rental",
  },
  {
    id: "faq-8",
    question: "Do you provide a driver or chauffeur?",
    answer: "Yes, professional chauffeur services are available for most vehicles, especially our premium fleet. This is particularly popular for airport transfers, business travel, and tours. Contact us to discuss options.",
    category: "Car Rental",
  },
  {
    id: "faq-10",
    question: "How do I check in to the homestay?",
    answer: "Check-in is from 3:00 PM and check-out is by 11:00 AM. Full access instructions and house rules will be provided after your booking is confirmed.",
    category: "Homestay",
  },
  {
    id: "faq-11",
    question: "Are the homestays suitable for families?",
    answer: "Yes, our homestays are selected to be comfortable for families and small groups. Each listing shows the guest capacity, number of bedrooms, and available amenities.",
    category: "Homestay",
  },
  {
    id: "faq-12",
    question: "Can I customize a tour itinerary?",
    answer: "Yes! Our tour itineraries are flexible. Tell us what you would like to see and do, and we will work with you to create a customized route and schedule that fits your interests and time.",
    category: "Tours",
  },
  {
    id: "faq-13",
    question: "Are meals and entrance fees included in tours?",
    answer: "Unless specifically stated, meals and entrance fees are not included in the tour price. The tour price covers private transport and driver. We can recommend great dining options along the way.",
    category: "Tours",
  },
  {
    id: "faq-14",
    question: "How do I confirm the final price?",
    answer: "Prices shown on the website are starting prices for reference. Final pricing depends on dates, duration, specific requirements, and availability. Contact us on WhatsApp to get a confirmed quote.",
    category: "Booking & Payment",
  },
  {
    id: "faq-15",
    question: "What payment methods do you accept?",
    answer: "Please contact Narmaa Transport on WhatsApp to confirm accepted payment methods and any payment terms before booking.",
    category: "Booking & Payment",
  },
  {
    id: "faq-16",
    question: "Can I cancel or change my booking?",
    answer: "Cancellation and change policies may vary depending on the service and timing. Please contact Narmaa Transport on WhatsApp to confirm the latest cancellation and change policy before booking.",
    category: "Booking & Payment",
  },
  {
    id: "faq-17",
    question: "How do I book an airport shuttle transfer?",
    answer: "You can book directly by clicking our WhatsApp CTA buttons on this page. Share your date, arrival/departure flight numbers, passenger count, and hotel details, and we will confirm your driver and vehicle.",
    category: "Airport Shuttle",
  },
  {
    id: "faq-18",
    question: "Do you monitor flight delays for airport pickup?",
    answer: "Yes! Our drivers monitor your flight status in real-time. If your flight is delayed, we will adjust the pickup time accordingly at no extra cost.",
    category: "Airport Shuttle",
  },
  {
    id: "faq-19",
    question: "What is included in the airport shuttle price?",
    answer: "Our quoted rates start from RM120 and include the vehicle rental, professional driver, toll charges, and airport parking fees. There are no hidden charges. Please note that midnight charges may apply for transfers between 11:30 PM and 6:00 AM.",
    category: "Airport Shuttle",
  },
];

// ─── Testimonials ────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Customer from KL",
    location: "Kuala Lumpur",
    text: "Easy to arrange everything through WhatsApp. The car was clean and ready on time. Would recommend for anyone visiting Malaysia.",
    rating: 5,
    service: "Car Rental",
    isPlaceholder: true,
  },
  {
    id: "testimonial-2",
    name: "Tourist Family",
    location: "Visiting from Singapore",
    text: "We booked a homestay and a Malacca day trip together. Everything was well coordinated and the driver was very friendly and knowledgeable.",
    rating: 5,
    service: "Tour + Homestay",
    isPlaceholder: true,
  },
  {
    id: "testimonial-3",
    name: "Business Traveller",
    location: "Kuala Lumpur",
    text: "Used the Alphard for airport pickup and a series of meetings. Smooth, comfortable, and professional service throughout.",
    rating: 5,
    service: "Car Rental",
    isPlaceholder: true,
  },
];

// ─── Trust Points ────────────────────────────────────────────────────────────

export const trustPoints: TrustPoint[] = [
  {
    id: "trust-1",
    title: "Airport Pickup Available",
    description: "KLIA and KLIA2 pickup and drop-off arranged for your convenience.",
    icon: "Plane",
  },
  {
    id: "trust-2",
    title: "Clean, Well-Maintained Vehicles",
    description: "Every vehicle is thoroughly cleaned and checked before your rental.",
    icon: "ShieldCheck",
  },
  {
    id: "trust-3",
    title: "Local Malaysian Travel Support",
    description: "Friendly local team who knows Malaysia and can help with your plans.",
    icon: "MapPin",
  },
  {
    id: "trust-4",
    title: "Flexible Packages",
    description: "Combine car rental, homestay, and tours into one easy booking.",
    icon: "Package",
  },
  {
    id: "trust-5",
    title: "Fast WhatsApp Response",
    description: "Message us on WhatsApp and get a quick reply - no waiting on hold.",
    icon: "MessageCircle",
  },
  {
    id: "trust-6",
    title: "Transparent Pricing",
    description: "Clear pricing with no hidden fees. Final price confirmed before booking.",
    icon: "BadgeCheck",
  },
];

// ─── Service Areas ───────────────────────────────────────────────────────────

export const serviceAreas: string[] = [
  "Kuala Lumpur",
  "Selangor",
  "KLIA / KLIA2",
  "Putrajaya",
  "Malacca",
  "Cameron Highlands",
  "Genting Highlands",
  "Selected Peninsular Malaysia destinations",
];

// ─── Helper Functions ────────────────────────────────────────────────────────

export function getCarBySlug(slug: string): Car | undefined {
  return cars.find((car) => car.slug === slug);
}

export function getHomestayBySlug(slug: string): Homestay | undefined {
  return homestays.find((homestay) => homestay.slug === slug);
}

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((tour) => tour.slug === slug);
}

export function getFeaturedCars(): Car[] {
  return cars.filter((car) => car.featured);
}

export function getFeaturedHomestays(): Homestay[] {
  return homestays.filter((homestay) => homestay.featured);
}

export function getFeaturedTours(): Tour[] {
  return tours.filter((tour) => tour.featured);
}

export function getRelatedCars(currentSlug: string, limit = 3): Car[] {
  return cars.filter((car) => car.slug !== currentSlug).slice(0, limit);
}

export function getRelatedHomestays(currentSlug: string, limit = 3): Homestay[] {
  return homestays.filter((homestay) => homestay.slug !== currentSlug).slice(0, limit);
}

export function getRelatedTours(currentSlug: string, limit = 3): Tour[] {
  return tours.filter((tour) => tour.slug !== currentSlug).slice(0, limit);
}

export function getFAQsByCategory(category: FAQ["category"]): FAQ[] {
  return faqs.filter((faq) => faq.category === category);
}

export const faqCategories: FAQ["category"][] = [
  "General",
  "Airport Shuttle",
  "Car Rental",
  "Homestay",
  "Tours",
  "Booking & Payment",
];

// ─── Airport Shuttles ────────────────────────────────────────────────────────

export const airportShuttles: AirportShuttle[] = [
  {
    id: "shuttle-1",
    slug: "economy-airport-shuttle",
    name: "Economy Airport Shuttle",
    category: "Economy Hatchback (Myvi or Similar)",
    seats: 3,
    seatsLabel: "2 to 3 pax",
    luggage: "2 luggage (max 24\"/61cm)",
    priceFrom: 120,
    suitableFor: ["Solo travelers", "Couples", "Light luggage", "Budget conscious"],
    image: "/images/fleet/perodua-myvi.webp",
    notes: ["Professional local driver", "Tolls & basic fees included"],
    featured: true,
    description: "Reliable and budget-friendly airport transport service for solo travellers and couples.",
  },
  {
    id: "shuttle-2",
    slug: "sedan-airport-shuttle",
    name: "Sedan Airport Shuttle",
    category: "Comfort Sedan (Toyota Vios or similar)",
    seats: 3,
    luggage: "3 luggage (max 24\"/61cm)",
    priceFrom: 130,
    suitableFor: ["Business travelers", "Small families", "Comfort seekers"],
    image: "/images/airport-shuttle/toyota-vios.webp",
    notes: ["Spacious sedan boot", "Professional meet & greet"],
    featured: true,
    description: "Upgrade your transfer experience with a comfortable sedan for up to 3 passengers.",
  },
  {
    id: "shuttle-3",
    slug: "6-seater-airport-shuttle",
    name: "6-Seater Airport Shuttle",
    category: "MPV (Avanza or similar)",
    seats: 5,
    seatsLabel: "3 to 5 pax",
    luggage: "3 to 5 luggage (max 24\"/61cm)",
    priceFrom: 150,
    suitableFor: ["Families", "Small groups", "Extra luggage"],
    image: "/images/fleet/toyota-avanza.webp",
    notes: ["Flexible seating configurations", "Excellent family convenience"],
    featured: true,
    description: "Spacious multi-purpose vehicle for comfortable group travel. Accommodates 4 to 5 passengers with plenty of room for luggage.",
  },
  {
    id: "shuttle-4",
    slug: "10-seater-airport-shuttle",
    name: "10-Seater Airport Shuttle",
    category: "Premium Van (StarEx)",
    seats: 7,
    seatsLabel: "6 to 7 pax",
    luggage: "6-7 luggage (max 24\"/61cm)",
    priceFrom: 250,
    suitableFor: ["Medium groups", "Corporate transfers", "Family groups"],
    image: "/images/fleet/hyundai-starex.webp",
    notes: ["High roof van configuration", "Spacious cabin with ample luggage capacity"],
    featured: true,
    description: "High-capacity executive van for smooth group logistics between airports and hotels. Fits 6 to 7 passengers comfortably.",
  },
  {
    id: "shuttle-5",
    slug: "18-seater-airport-shuttle",
    name: "18-Seater Airport Shuttle",
    category: "Mini Bus",
    seats: 18,
    seatsLabel: "?? pax (to be confirmed)",
    luggage: "15+ luggage",
    priceFrom: 300,
    suitableFor: ["Large tour groups", "Wedding groups", "Corporate events"],
    image: "/images/airport-shuttle/18-seater.webp",
    notes: ["Full-sized minibus layout", "Comfortable air-conditioned cabin", "Capacity to be confirmed with operator"],
    featured: true,
    description: "Ideal ground transport solution for large passenger groups traveling together across Malaysia.",
  },
];

export function getFeaturedShuttles(): AirportShuttle[] {
  return airportShuttles.filter((shuttle) => shuttle.featured);
}

export function getAirportShuttleBySlug(slug: string): AirportShuttle | undefined {
  return airportShuttles.find((shuttle) => shuttle.slug === slug);
}
