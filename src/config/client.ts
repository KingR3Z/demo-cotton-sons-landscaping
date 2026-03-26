export const client = {
  // Business Details
  name: "Cotton & Sons Landscaping",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Hove.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07740 425128",
  email: "",
  website: "",

  // Location
  address: "Hove",
  city: "Hove",
  county: "",
  postcode: "",
  basedIn: "Hove",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "5",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Anna Peters", rating: 5, text: "Jules and his team helped us with a full garden redesign. They were great to work with - respectful, flexible and we are very happy with the final result. ", date: "6 months ago" },
    { name: "Sara Rowland", rating: 5, text: "Cotton & Sons recently did some work on my garden including taming some very unruly ivy. They were friendly, reliable, efficient and did a great job. I highly recommend and will definitely use again.  ", date: "4 years ago" },
    { name: "E Marks", rating: 5, text: "Cotton and Son installed a 20+M squared patio in our hilly garden. Which meant digging down to create the level area, installing a retaining wall as well as a lovely raised bed. Practical, patient and efficient job done. Garden left tidy …  ", date: "3 years ago" },
    { name: "Nick Hale", rating: 5, text: "Jules did a great job on our new patio and inset paved steps. Great quality of work and reasonably priced!  ", date: "3 years ago" },
    { name: "Nick Price", rating: 5, text: "Really pleased with the service we received - design and installation of high quality raised beds and replacement of garden shed roof. Would recommend.  ", date: "3 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Cotton & Sons Landscaping | Landscaper in Hove",
    description: "Professional landscaper in Hove. 5.0-star rated on Google. Call for a free quote.",
  },
};
