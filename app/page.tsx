import Image from "next/image";
import Cover from "@/components/Cover";
import PlaceList from "@/components/PlaceList";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   <div className="mx-auto max-w-7xl px-6 ">
    
    <Cover/>
    <PlaceList/>
    <Footer/>
   </div>
   
  );
}
