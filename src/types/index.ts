/**
 * ==============================================================================
 * QUIET BATTLES™ — Enterprise Domain Type Declarations
 * ==============================================================================
 * 
 * Production Specification for Full-Stack Interview Assessment
 * Strictly maps 100% of the 17-Page Client / Hiring RFP:
 * 
 * Architecture Pipeline:
 * QUIET BATTLES™ ➔ THE THRESHOLD ➔ THE ARCHIVE ➔ SERIES ➔ CHAPTERS ➔ CHAPTER CHAMBER ➔ ARTIFACT ➔ ACQUISITION
 */

export type PublishingStatus = 'published' | 'coming_soon' | 'draft' | 'archived';
export type GarmentSize = 'S' | 'M' | 'L' | 'XL' | 'XXL';
export type PaymentMethod = 'razorpay_upi' | 'razorpay_card' | 'razorpay_netbanking';
export type PaymentStatus = 'Paid' | 'Pending' | 'Failed';
export type FulfillmentStatus = 'Processing' | 'Dispatched' | 'In Transit' | 'Delivered' | 'Cancelled' | 'Refunded';

export interface Coupon {
  code: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  minOrderValue: number;
  active: boolean;
  usageCount: number;
}

export interface TrackingStep {
  title: string;
  description: string;
  timestamp: string;
  location: string;
  completed: boolean;
}

export interface Series {
  id: string;
  number: string;
  title: string;
  theme: string;
  mainLine: string;
  description: string;
  productDirection: string;
  bannerImage: string;
  status: PublishingStatus;
  order: number;
}

export interface Chapter {
  id: string;
  seriesId: string;
  number: number;
  title: string;
  subtitle: string;
  narrativeText: string[];
  quote: string;
  quoteAuthor?: string;
  mainVisual: string;
  galleryImages: string[];
  videoUrl?: string;
  connectedArtifactId?: string;
  status: PublishingStatus;
  order: number;
}

export interface SizeStock {
  size: GarmentSize;
  stock: number;
}

export interface Artifact {
  id: string;
  seriesId: string;
  chapterId: string;
  name: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  gsm: number;
  fabric: string;
  fit: string;
  colors: string[];
  images: string[];
  sizes: SizeStock[];
  inStock: boolean;
  status: PublishingStatus;
  description: string;
  storyExcerpt: string;
  careDetails: string[];
  shippingNotice: string;
}

export interface CartItem {
  id: string;
  artifact: Artifact;
  selectedSize: GarmentSize;
  selectedColor: string;
  quantity: number;
}

export interface OrderCustomer {
  fullName: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  createdAt: string;
  customer: OrderCustomer;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  fulfillmentStatus: FulfillmentStatus;
  razorpayPaymentId?: string;
  trackingNumber: string;
  courierPartner: string;
  trackingTimeline: TrackingStep[];
}

export interface BrandSettings {
  tagline: string;
  subTagline: string;
  announcement: string;
  announcementActive: boolean;
  currency: string;
  currencySymbol: string;
  freeShippingThreshold: number;
  shippingFlatRate: number;
  razorpayKeyId: string;
  instagramUrl: string;
  supportEmail: string;
  coupons: Coupon[];
}
