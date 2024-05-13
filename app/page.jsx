// import dynamic from "next/dynamic";
// const AboutCard=dynamic(()=>import( "@/components/AboutCard"),{ssr:false});
import AboutCard from "@/components/AboutCard";
import Top from "@/components/Top";

export default function Home() {
  return (
    <>
    <h1 ><Top/></h1>
    <div className="grid grid-cols-2  max-sm:grid-cols-1 p-2">

    <AboutCard/>
    </div>
    

    </>
  );
}
