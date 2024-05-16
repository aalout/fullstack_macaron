import Link from "next/link";
import Banner from "@/components/Banner";
import Menu from "@/components/Menu";
import Promo from "@/components/Promo";
import Product from "@/components/Product";
import TheBest from "@/components/TheBest";
import Holidays from "@/components/Holidays";
import News from "@/components/News";

export default function Home() {
  return (
    <div>
      <Banner/>
      <Menu/>
      <Promo/>
      <Holidays/>
      <Product/>
      <News/>
      <TheBest/>
    </div>
  );
}
