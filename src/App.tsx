import React from 'react';
import { BrandProvider, useBrand } from './context/BrandContext';
import { Navbar } from './components/Navbar';
import { ThresholdHero } from './components/ThresholdHero';
import { TheArchive } from './components/TheArchive';
import { SeriesDetail } from './components/SeriesDetail';
import { ChapterChamber } from './components/ChapterChamber';
import { ArtifactDetail } from './components/ArtifactDetail';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { AdminDashboard } from './components/AdminDashboard';
import { PolicyPages } from './components/PolicyPages';
import { Footer } from './components/Footer';

const AppContent: React.FC = () => {
  const { view } = useBrand();

  return (
    <div className="min-h-screen bg-background text-zinc-100 flex flex-col justify-between selection:bg-amber-500/30 selection:text-white">
      <div>
        <Navbar />

        <main>
          {view === 'home' && <ThresholdHero />}
          {view === 'archive' && <TheArchive />}
          {view === 'series' && <SeriesDetail />}
          {view === 'chapter' && <ChapterChamber />}
          {view === 'artifact' && <ArtifactDetail />}
          {view === 'admin' && <AdminDashboard />}
          {(view === 'philosophy' || view === 'about' || view === 'faq' || view === 'shipping-policy' || view === 'returns-policy' || view === 'contact' || view === 'tracking') && (
            <PolicyPages />
          )}
        </main>
      </div>

      <CartDrawer />
      <CheckoutModal />
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <BrandProvider>
      <AppContent />
    </BrandProvider>
  );
};

export default App;
