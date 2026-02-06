import {
  PRODUCT_1_IMAGE,
  PRODUCT_2_IMAGE,
  PRODUCT_3_IMAGE,
  PRODUCT_4_IMAGE
} from "@/constants";

export interface Product {
  id: string;
  name: string;
  namePl: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  sizes: string[];
  colors: string[];
  description: string;
  descriptionPl: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Cashmere Blend Coat",
    namePl: "Płaszcz z kaszmiru",
    price: 899,
    originalPrice: 1199,
    image: PRODUCT_1_IMAGE,
    category: "outerwear",
    isNew: true,
    isBestSeller: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Beige", "Camel", "Black"],
    description: "Luxurious cashmere blend coat with elegant silhouette",
    descriptionPl: "Luksusowy płaszcz z mieszanki kaszmiru o eleganckim kroju",
  },
  {
    id: "2",
    name: "Silk Blouse",
    namePl: "Jedwabna bluzka",
    price: 349,
    image: PRODUCT_2_IMAGE,
    category: "tops",
    isNew: true,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Blush", "Ivory", "Navy"],
    description: "Delicate silk blouse with feminine details",
    descriptionPl: "Delikatna jedwabna bluzka z kobiecymi detalami",
  },
  {
    id: "3",
    name: "Merino Wool Sweater",
    namePl: "Sweter z wełny merino",
    price: 429,
    image: PRODUCT_3_IMAGE,
    category: "tops",
    isBestSeller: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Cream", "Grey", "Rose"],
    description: "Soft merino wool sweater for everyday elegance",
    descriptionPl: "Miękki sweter z wełny merino na co dzień",
  },
  {
    id: "4",
    name: "Linen Midi Dress",
    namePl: "Lniana sukienka midi",
    price: 549,
    originalPrice: 699,
    image: PRODUCT_4_IMAGE,
    category: "dresses",
    isNew: true,
    isBestSeller: true,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Taupe", "White", "Olive"],
    description: "Flowing linen dress perfect for any occasion",
    descriptionPl: "Zwiewna lniana sukienka na każdą okazję",
  },
];

export const categories = [
  { id: "dresses", name: "Dresses", namePl: "Sukienki" },
  { id: "tops", name: "Tops & Blouses", namePl: "Bluzki i Topy" },
  { id: "outerwear", name: "Outerwear", namePl: "Okrycia wierzchnie" },
  { id: "accessories", name: "Accessories", namePl: "Akcesoria" },
];

export const getNewArrivals = () => products.filter((p) => p.isNew);
export const getBestSellers = () => products.filter((p) => p.isBestSeller);
export const getProductsByCategory = (category: string) =>
  products.filter((p) => p.category === category);
export const getProductById = (id: string) => products.find((p) => p.id === id);
