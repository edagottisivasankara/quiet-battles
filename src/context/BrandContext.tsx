import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  Series, 
  Chapter, 
  Artifact, 
  CartItem, 
  Order, 
  BrandSettings, 
  GarmentSize, 
  Coupon 
} from '../types';
import { 
  initialSeries, 
  initialChapters, 
  initialArtifacts, 
  initialBrandSettings, 
  initialOrders 
} from '../data/seedData';

type ViewMode = 
  | 'home' 
  | 'archive' 
  | 'series' 
  | 'chapter' 
  | 'artifact' 
  | 'admin'
  | 'about' 
  | 'philosophy' 
  | 'faq' 
  | 'shipping-policy' 
  | 'returns-policy' 
  | 'contact'
  | 'tracking';

interface BrandContextType {
  // Navigation & View
  view: ViewMode;
  setView: (view: ViewMode) => void;
  selectedSeriesId: string | null;
  setSelectedSeriesId: (id: string | null) => void;
  selectedChapterId: string | null;
  setSelectedChapterId: (id: string | null) => void;
  selectedArtifactId: string | null;
  setSelectedArtifactId: (id: string | null) => void;
  
  // Data State
  seriesList: Series[];
  chapterList: Chapter[];
  artifactList: Artifact[];
  orders: Order[];
  brandSettings: BrandSettings;

  // Actions for Content Management
  updateSeries: (updated: Series) => void;
  addSeries: (newSeries: Series) => void;
  deleteSeries: (id: string) => void;
  updateChapter: (updated: Chapter) => void;
  addChapter: (newChapter: Chapter) => void;
  deleteChapter: (id: string) => void;
  updateArtifact: (updated: Artifact) => void;
  addArtifact: (newArtifact: Artifact) => void;
  deleteArtifact: (id: string) => void;
  updateBrandSettings: (settings: BrandSettings) => void;
  addCoupon: (coupon: Coupon) => void;
  deleteCoupon: (code: string) => void;
  updateOrderStatus: (orderId: string, status: Order['fulfillmentStatus']) => void;
  resetToDefaults: () => void;

  // E-Commerce Cart
  cart: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToCart: (artifact: Artifact, size: GarmentSize, color: string, quantity?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateCartQuantity: (itemId: string, delta: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartItemCount: number;

  // Checkout & Orders
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  createOrder: (orderData: Omit<Order, 'id' | 'orderNumber' | 'createdAt' | 'trackingNumber' | 'courierPartner' | 'trackingTimeline'>) => Order;
  getOrderByNumber: (orderNumber: string) => Order | undefined;

  // Atmosphere
  ambientSound: boolean;
  toggleAmbientSound: () => void;
  
  // Helpers
  navigateToSeries: (seriesId: string) => void;
  navigateToChapter: (chapterId: string) => void;
  navigateToArtifact: (artifactId: string) => void;
}

const BrandContext = createContext<BrandContextType | undefined>(undefined);

export const BrandProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Navigation
  const [view, setView] = useState<ViewMode>('home');
  const [selectedSeriesId, setSelectedSeriesId] = useState<string | null>('series-01');
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>('ch-01-01');
  const [selectedArtifactId, setSelectedArtifactId] = useState<string | null>('art-01');

  // Atmosphere
  const [ambientSound, setAmbientSound] = useState<boolean>(false);

  // Cart & Checkout
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('qb_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Core CMS Data
  const [seriesList, setSeriesList] = useState<Series[]>(() => {
    const saved = localStorage.getItem('qb_series');
    return saved ? JSON.parse(saved) : initialSeries;
  });

  const [chapterList, setChapterList] = useState<Chapter[]>(() => {
    const saved = localStorage.getItem('qb_chapters');
    return saved ? JSON.parse(saved) : initialChapters;
  });

  const [artifactList, setArtifactList] = useState<Artifact[]>(() => {
    const saved = localStorage.getItem('qb_artifacts');
    return saved ? JSON.parse(saved) : initialArtifacts;
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('qb_orders');
    return saved ? JSON.parse(saved) : initialOrders;
  });

  const [brandSettings, setBrandSettings] = useState<BrandSettings>(() => {
    const saved = localStorage.getItem('qb_settings');
    return saved ? JSON.parse(saved) : initialBrandSettings;
  });

  // LocalStorage persistence
  useEffect(() => {
    localStorage.setItem('qb_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('qb_series', JSON.stringify(seriesList));
  }, [seriesList]);

  useEffect(() => {
    localStorage.setItem('qb_chapters', JSON.stringify(chapterList));
  }, [chapterList]);

  useEffect(() => {
    localStorage.setItem('qb_artifacts', JSON.stringify(artifactList));
  }, [artifactList]);

  useEffect(() => {
    localStorage.setItem('qb_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('qb_settings', JSON.stringify(brandSettings));
  }, [brandSettings]);

  const toggleAmbientSound = () => {
    setAmbientSound(prev => !prev);
  };

  // Navigation helpers
  const navigateToSeries = (seriesId: string) => {
    setSelectedSeriesId(seriesId);
    setView('series');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToChapter = (chapterId: string) => {
    setSelectedChapterId(chapterId);
    setView('chapter');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToArtifact = (artifactId: string) => {
    setSelectedArtifactId(artifactId);
    setView('artifact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cart operations
  const addToCart = (artifact: Artifact, size: GarmentSize, color: string, quantity = 1) => {
    setCart(prev => {
      const existingIndex = prev.findIndex(item => 
        item.artifact.id === artifact.id && 
        item.selectedSize === size && 
        item.selectedColor === color
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prev, {
        id: `${artifact.id}-${size}-${color}-${Date.now()}`,
        artifact,
        selectedSize: size,
        selectedColor: color,
        quantity
      }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => prev.filter(item => item.id !== itemId));
  };

  const updateCartQuantity = (itemId: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === itemId) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((sum, item) => sum + (item.artifact.price * item.quantity), 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Orders creation & lookup
  const createOrder = (orderData: Omit<Order, 'id' | 'orderNumber' | 'createdAt' | 'trackingNumber' | 'courierPartner' | 'trackingTimeline'>): Order => {
    const docketNum = `DELHIVERY-${Math.floor(100000000 + Math.random() * 900000000)}`;
    const newOrder: Order = {
      ...orderData,
      id: `ord-${Date.now()}`,
      orderNumber: `QB-${Math.floor(10000 + Math.random() * 90000)}`,
      createdAt: new Date().toISOString(),
      trackingNumber: docketNum,
      courierPartner: 'Delhivery Air Express',
      fulfillmentStatus: 'Processing',
      trackingTimeline: [
        {
          title: 'Acquisition Confirmed & Paid',
          description: `Transaction validated via ${orderData.paymentMethod}.`,
          timestamp: 'Just Now',
          location: 'Razorpay Gateway',
          completed: true
        },
        {
          title: 'Archival Inspection',
          description: 'Garment allocation & seam density check.',
          timestamp: 'Scheduled Today',
          location: 'Fulfillment Center, Mumbai',
          completed: false
        },
        {
          title: 'Air Transit Handover',
          description: 'Package consigned to courier.',
          timestamp: 'Next Business Day',
          location: 'Express Air Hub',
          completed: false
        }
      ]
    };
    setOrders(prev => [newOrder, ...prev]);
    clearCart();
    return newOrder;
  };

  const getOrderByNumber = (orderNumber: string): Order | undefined => {
    const query = orderNumber.trim().toUpperCase();
    return orders.find(o => o.orderNumber.toUpperCase() === query || o.trackingNumber.toUpperCase() === query);
  };

  // CMS Updates
  const updateSeries = (updated: Series) => {
    setSeriesList(prev => prev.map(s => s.id === updated.id ? updated : s));
  };

  const addSeries = (newSeries: Series) => {
    setSeriesList(prev => [...prev, newSeries]);
  };

  const deleteSeries = (id: string) => {
    setSeriesList(prev => prev.filter(s => s.id !== id));
  };

  const updateChapter = (updated: Chapter) => {
    setChapterList(prev => prev.map(c => c.id === updated.id ? updated : c));
  };

  const addChapter = (newChapter: Chapter) => {
    setChapterList(prev => [...prev, newChapter]);
  };

  const deleteChapter = (id: string) => {
    setChapterList(prev => prev.filter(c => c.id !== id));
  };

  const updateArtifact = (updated: Artifact) => {
    setArtifactList(prev => prev.map(a => a.id === updated.id ? updated : a));
  };

  const addArtifact = (newArtifact: Artifact) => {
    setArtifactList(prev => [...prev, newArtifact]);
  };

  const deleteArtifact = (id: string) => {
    setArtifactList(prev => prev.filter(a => a.id !== id));
  };

  const updateBrandSettings = (settings: BrandSettings) => {
    setBrandSettings(settings);
  };

  const addCoupon = (coupon: Coupon) => {
    setBrandSettings(prev => ({
      ...prev,
      coupons: [...prev.coupons, coupon]
    }));
  };

  const deleteCoupon = (code: string) => {
    setBrandSettings(prev => ({
      ...prev,
      coupons: prev.coupons.filter(c => c.code !== code)
    }));
  };

  const updateOrderStatus = (orderId: string, status: Order['fulfillmentStatus']) => {
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, fulfillmentStatus: status } : o));
  };

  const resetToDefaults = () => {
    localStorage.clear();
    setSeriesList(initialSeries);
    setChapterList(initialChapters);
    setArtifactList(initialArtifacts);
    setBrandSettings(initialBrandSettings);
    setOrders(initialOrders);
    setCart([]);
  };

  return (
    <BrandContext.Provider value={{
      view,
      setView,
      selectedSeriesId,
      setSelectedSeriesId,
      selectedChapterId,
      setSelectedChapterId,
      selectedArtifactId,
      setSelectedArtifactId,
      seriesList,
      chapterList,
      artifactList,
      orders,
      brandSettings,
      updateSeries,
      addSeries,
      deleteSeries,
      updateChapter,
      addChapter,
      deleteChapter,
      updateArtifact,
      addArtifact,
      deleteArtifact,
      updateBrandSettings,
      addCoupon,
      deleteCoupon,
      updateOrderStatus,
      resetToDefaults,
      cart,
      isCartOpen,
      setIsCartOpen,
      addToCart,
      removeFromCart,
      updateCartQuantity,
      clearCart,
      cartTotal,
      cartItemCount,
      isCheckoutOpen,
      setIsCheckoutOpen,
      createOrder,
      getOrderByNumber,
      ambientSound,
      toggleAmbientSound,
      navigateToSeries,
      navigateToChapter,
      navigateToArtifact
    }}>
      {children}
    </BrandContext.Provider>
  );
};

export const useBrand = () => {
  const context = useContext(BrandContext);
  if (!context) throw new Error('useBrand must be used within a BrandProvider');
  return context;
};
