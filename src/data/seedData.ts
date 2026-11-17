import { Series, Chapter, Artifact, BrandSettings, Order } from '../types';

export const initialBrandSettings: BrandSettings = {
  tagline: "WEAR YOUR BATTLES",
  subTagline: "Built for the ones who fight unseen battles, heal in silence, and carry the weight of purpose.",
  announcement: "ARCHIVE SERIES 01 — THE GENTLE ARMOR™ IS NOW REVEALED",
  announcementActive: true,
  currency: "INR",
  currencySymbol: "₹",
  freeShippingThreshold: 2499,
  shippingFlatRate: 150,
  razorpayKeyId: "rzp_test_QBattlesLiveAuth",
  instagramUrl: "https://instagram.com/quietbattles",
  supportEmail: "concierge@quietbattles.com",
  coupons: [
    {
      code: "BATTLE10",
      discountType: "percentage",
      discountValue: 10,
      minOrderValue: 2000,
      active: true,
      usageCount: 142
    },
    {
      code: "QUIET10",
      discountType: "percentage",
      discountValue: 10,
      minOrderValue: 2000,
      active: true,
      usageCount: 89
    },
    {
      code: "FIRSTWARRIOR",
      discountType: "fixed",
      discountValue: 300,
      minOrderValue: 2499,
      active: true,
      usageCount: 215
    }
  ]
};

export const initialSeries: Series[] = [
  {
    id: "series-01",
    number: "01",
    title: "THE GENTLE ARMOR™",
    theme: "Healing, protection, emotional strength and helping others while still healing yourself.",
    mainLine: "Built for the ones who heal others while still healing themselves.",
    description: "An armor does not always gleam in iron. Sometimes, armor is soft. It absorbs blows without returning cruelty. Series 01 captures the quiet resilience of those who anchor others even while their own foundation is rebuilding. Crafted in heavyweight, structured cottons engineered to drape with dignified presence.",
    productDirection: "Oversized Heavyweight T-shirts",
    bannerImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop",
    status: "published",
    order: 1
  },
  {
    id: "series-02",
    number: "02",
    title: "SHIFT CHANGE™",
    theme: "Purpose, responsibility, unseen effort and finding meaning in an unexpected role.",
    mainLine: "You planned one life. Purpose assigned you another.",
    description: "Dedicated to the unexpected turns of duty. The midnight shifts, the unspoken obligations, and the quiet dignity of standing where you are needed rather than where you wished to be. Heavy French Terry silhouettes with structural dropped shoulders.",
    productDirection: "Architectural Crewneck Sweatshirts",
    bannerImage: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=1600&auto=format&fit=crop",
    status: "coming_soon",
    order: 2
  },
  {
    id: "series-03",
    number: "03",
    title: "THE WEIGHT OF BECOMING™",
    theme: "Responsibility, legacy, brotherhood, wounds, redemption and the process of becoming.",
    mainLine: "You don't become worthy by being chosen. You become worthy by what you carry.",
    description: "The culmination of trials. Deep heavyweight garments engineered to feel like a grounded mantle. Raw hems, reinforced double-needle seams, and hand-distressed structural lines mirroring internal scars.",
    productDirection: "Heavyweight Box Hoodies",
    bannerImage: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1600&auto=format&fit=crop",
    status: "coming_soon",
    order: 3
  }
];

export const initialChapters: Chapter[] = [
  {
    id: "ch-01-01",
    seriesId: "series-01",
    number: 1,
    title: "The One Who Stayed",
    subtitle: "When departure was easy, remaining was an act of quiet defiance.",
    narrativeText: [
      "There is a silent covenant among those who refuse to abandon post. Not because glory awaits, but because the space left behind would be too cold for others to endure.",
      "In the first hours of darkness, courage is not a roaring speech. It is a slow, steady breath. The decision to absorb the shockwave so someone behind you can sleep unbothered.",
      "The One Who Stayed honors that unwritten contract: to bear witness, to stand firm, and to make steadfastness look like grace."
    ],
    quote: "True protection is rarely witnessed; it is felt in the storm that never reached you.",
    quoteAuthor: "THE ARCHIVE · ENTRY 01.1",
    mainVisual: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop"
    ],
    connectedArtifactId: "art-01",
    status: "published",
    order: 1
  },
  {
    id: "ch-01-02",
    seriesId: "series-01",
    number: 2,
    title: "Soft Strength",
    subtitle: "Brittleness breaks under impact. Softness absorbs and outlasts.",
    narrativeText: [
      "We were taught that shields must be iron and words must be stone. But stone shatters under relentless percussive force. What survives is supple.",
      "Soft strength does not hit back; it takes the blow, dissipates its venom, and returns calm. It is the hardest virtue to cultivate because ego demands retaliation, but mastery demands containment."
    ],
    quote: "Do not confuse restraint for absence of force.",
    quoteAuthor: "THE ARCHIVE · ENTRY 01.2",
    mainVisual: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop"
    ],
    connectedArtifactId: "art-01",
    status: "published",
    order: 2
  },
  {
    id: "ch-01-03",
    seriesId: "series-01",
    number: 3,
    title: "Built to Heal",
    subtitle: "Bandages are not signs of defeat; they are proof of continuation.",
    narrativeText: [
      "Every scar is tissue that knitted back stronger than virgin skin. We wear the marks of what tested us not as badges of tragedy, but as architectural reinforcements.",
      "To build to heal means designing an inner sanctum where vulnerability is treated not as a flaw to conceal, but as raw stone waiting to be carved into resilience."
    ],
    quote: "You heal by giving others the sanctuary you never had.",
    quoteAuthor: "THE ARCHIVE · ENTRY 01.3",
    mainVisual: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop"
    ],
    connectedArtifactId: "art-01",
    status: "published",
    order: 3
  },
  {
    id: "ch-01-04",
    seriesId: "series-01",
    number: 4,
    title: "The Protector Within",
    subtitle: "The guardian you search for in the fog is the one looking through your eyes.",
    narrativeText: [
      "Childhood ends the day you realize no chariot is arriving over the hill. You are the adult in the room.",
      "The protector within awakens when responsibility ceases to be a burden and transforms into an identity. You stand tall not because you fear nothing, but because you care for something greater than your fear."
    ],
    quote: "When the walls fell, we became the wall.",
    quoteAuthor: "THE ARCHIVE · ENTRY 01.4",
    mainVisual: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop"
    ],
    connectedArtifactId: "art-01",
    status: "published",
    order: 4
  },
  {
    id: "ch-01-05",
    seriesId: "series-01",
    number: 5,
    title: "Still Becoming",
    subtitle: "The work is never finished. The master is forever an apprentice to the journey.",
    narrativeText: [
      "Perfection is a static dead-end. Becoming is an ongoing, living fire. As long as breath fills your lungs, another chapter unfolds.",
      "Wear your unfinished state with reverence. You are still shedding skin. You are still learning kindness. You are still becoming."
    ],
    quote: "We are not finished garments; we are living threads.",
    quoteAuthor: "THE ARCHIVE · ENTRY 01.5",
    mainVisual: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop"
    ],
    connectedArtifactId: "art-01",
    status: "published",
    order: 5
  }
];

export const initialArtifacts: Artifact[] = [
  {
    id: "art-01",
    seriesId: "series-01",
    chapterId: "ch-01-01",
    name: "ARTIFACT 01 — THE GENTLE ARMOR™ OVERSIZED TEE",
    category: "Oversized Streetwear T-shirt",
    price: 2999,
    compareAtPrice: 3800,
    gsm: 280,
    fabric: "100% Combed Compact Cotton, Single Jersey (Zero-shrink pre-washed)",
    fit: "Boxy silhouette, exaggerated drop shoulders, reinforced rib collar, side split vents",
    colors: ["Obsidian Black", "Washed Charcoal", "Bone Ash"],
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: [
      { size: 'S', stock: 12 },
      { size: 'M', stock: 18 },
      { size: 'L', stock: 24 },
      { size: 'XL', stock: 15 },
      { size: 'XXL', stock: 7 }
    ],
    inStock: true,
    status: "published",
    description: "The physical embodiment of Series 01. Engineered from custom 280 GSM combed compact cotton, this tee serves as tactile armor against daily frictions. The drape is intentionally heavy, shielding the wearer while maintaining breathability and velvet-like softness against sensitized skin.",
    storyExcerpt: "Built for the ones who heal others while still healing themselves.",
    careDetails: [
      "Cold gentle machine wash inside out with similar dark tones",
      "Do not bleach or dry clean",
      "Dry flat in shade to preserve structured collar tension",
      "Cool iron on reverse side; never iron directly over the archival typography"
    ],
    shippingNotice: "Dispatches within 24–48 hours across India via Express Air. Complimentary shipping on orders above ₹2,499."
  },
  {
    id: "art-02",
    seriesId: "series-02",
    chapterId: "ch-02-01",
    name: "ARTIFACT 02 — SHIFT CHANGE™ CREWNECK SWEATSHIRT",
    category: "Heavy French Terry Crewneck",
    price: 4299,
    compareAtPrice: 5200,
    gsm: 420,
    fabric: "100% Loopback French Terry Cotton, brushed interior",
    fit: "Relaxed articulated silhouette, ergonomic elbow darting, thick ribbed cuffs",
    colors: ["Deep Midnight Navy", "Muted Steel Grey"],
    images: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: [
      { size: 'S', stock: 0 },
      { size: 'M', stock: 0 },
      { size: 'L', stock: 0 },
      { size: 'XL', stock: 0 },
      { size: 'XXL', stock: 0 }
    ],
    inStock: false,
    status: "coming_soon",
    description: "Engineered for long hours in low temperatures. Heavy 420 GSM loopback cotton that absorbs movement without restricting mobility. Designed for the unexpected duty.",
    storyExcerpt: "You planned one life. Purpose assigned you another.",
    careDetails: [
      "Wash inside out at 30°C",
      "Hang dry immediately",
      "Iron low on reverse"
    ],
    shippingNotice: "Archive reservation will open upon Series 02 announcement."
  }
];

export const initialOrders: Order[] = [
  {
    id: "ord-1001",
    orderNumber: "QB-94812",
    createdAt: "2026-11-16T14:22:00Z",
    customer: {
      fullName: "Aarav Sharma",
      email: "aarav.sharma@example.com",
      phone: "+91 98765 43210",
      addressLine1: "402 Crescent Horizon, Bandra West",
      city: "Mumbai",
      state: "Maharashtra",
      postalCode: "400050"
    },
    items: [
      {
        id: "ci-1",
        artifact: initialArtifacts[0],
        selectedSize: "L",
        selectedColor: "Obsidian Black",
        quantity: 1
      }
    ],
    subtotal: 2999,
    shipping: 0,
    discount: 0,
    total: 2999,
    paymentMethod: "razorpay_upi",
    paymentStatus: "Paid",
    fulfillmentStatus: "In Transit",
    razorpayPaymentId: "pay_QB_Live9283741",
    trackingNumber: "DELHIVERY-982187319",
    courierPartner: "Delhivery Air Express",
    trackingTimeline: [
      {
        title: "Order Placed & Payment Verified",
        description: "Payment confirmed via Razorpay UPI.",
        timestamp: "Nov 16, 2026 · 02:22 PM",
        location: "System Gateway",
        completed: true
      },
      {
        title: "Archival Piece Inspected & Sealed",
        description: "Garment hand-checked, lint-cleared, and placed in moisture-barrier dust pouch.",
        timestamp: "Nov 16, 2026 · 05:40 PM",
        location: "Mumbai Studio Fulfillment Center",
        completed: true
      },
      {
        title: "Dispatched with Delhivery Air",
        description: "Docket registered. Air waybill generated.",
        timestamp: "Nov 17, 2026 · 09:15 AM",
        location: "Santacruz Air Cargo Hub, Mumbai",
        completed: true
      },
      {
        title: "Out for Final Mile Delivery",
        description: "Assigned to dedicated courier delivery marshal.",
        timestamp: "Pending",
        location: "Bandra Delivery Station",
        completed: false
      }
    ]
  }
];
