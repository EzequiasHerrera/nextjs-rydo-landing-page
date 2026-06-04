import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureStrip from './components/FeatureStrip';
import HowItWorks from './components/HowItWorks';
import Vehicles from './components/Vehicles';
import Zones from './components/Zones';
import PromoDownloads from './components/PromoDownloads';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans">
      <Navbar />
      <Hero />
      <FeatureStrip />
      <HowItWorks />
      <Vehicles />
      <Zones />
      <PromoDownloads />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
