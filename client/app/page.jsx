import Hero from "@/components/Hero/Hero";
import ChooseDestination from "@/components/Sections/ChooseDestination";
import ChooseRestaurant from "@/components/Sections/ChooseRestaurant";
import ChooseFight from "@/components/Sections/ChooseFight";
import ShoppingMalls from "@/components/Sections/ShoppingMalls";
import TouristicPlaces from "@/components/Sections/TouristicPlaces";
import AboutCompany from "@/components/Sections/AboutCompany";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ChooseDestination />
      <ChooseRestaurant />
      <ChooseFight />
      <ShoppingMalls />
      <TouristicPlaces />
      <AboutCompany/>
      <Contact/>
    </>
  );
}
