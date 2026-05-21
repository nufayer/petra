import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import WhyChooseUs from "@/components/OurFeatures";
import PetInfoSection from "@/components/PetInfo";
import AdoptionProcess from "@/components/Process";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <Featured />
      <PetInfoSection />
      <WhyChooseUs />
      <AdoptionProcess />
    </div>
  );
}
