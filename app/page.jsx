import AboutCard from "@/components/AboutCard";
import Top from "@/components/Top";

export default function Home() {
  return (
    <>
    <h1 ><Top/></h1>
    <div className="grid grid-cols-1 md:grid-cols-2 p-2">
    <AboutCard/>
    </div>
    

    </>
  );
}
