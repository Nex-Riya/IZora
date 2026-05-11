import Footer from "@/components/shared/Footer";
import MarqueeText from "@/components/ui/MarqueeText";
import Navbar from "@/components/user/Navbar";
import FeaturedCollection from "@/components/user/home/FeaturedCollection";
import HeroSection from "@/components/user/home/HeroSection";
import NewArrivals from "@/components/user/home/NewArrivals";
import PromoBanners from "@/components/user/home/PromoBanner";

export default function UserHomePage() {
  return (
    <main className="min-h-screen bg-[#1f1f1f]">
      <Navbar />
      <HeroSection />
      <NewArrivals/>
      <PromoBanners/>
      <MarqueeText/>
      <FeaturedCollection/>
      <Footer/>
    </main>
  );
}