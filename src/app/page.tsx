import HeroSection from "@/components/home/HeroSection";
import NewArrivalsSection from "@/components/home/NewArrivalsSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import BestSellersSection from "@/components/home/BestSellersSection";
import BrandStorySection from "@/components/home/BrandStorySection";
import EditorialSection from "@/components/home/EditorialSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <NewArrivalsSection />
      <CategoriesSection />
      <BestSellersSection />
      <BrandStorySection />
      <EditorialSection />
    </>
  );
}

