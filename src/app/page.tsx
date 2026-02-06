import HeroSection from "@/components/home/HeroSection";
import NewArrivalsSection from "@/components/home/NewArrivalsSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import BestSellersSection from "@/components/home/BestSellersSection";
import BrandStorySection from "@/components/home/BrandStorySection";
import EditorialSection from "@/components/home/EditorialSection";
import { getLang } from "@/i18n/server";

export default async function HomePage() {
  const lang = await getLang();

  return (
    <>
      <HeroSection lang={lang} />
      <NewArrivalsSection lang={lang} />
      <CategoriesSection lang={lang} />
      <BestSellersSection lang={lang} />
      <BrandStorySection lang={lang} />
      <EditorialSection lang={lang} />
    </>
  );
}

