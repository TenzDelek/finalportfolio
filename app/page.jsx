import dynamic from "next/dynamic";
const AboutCard=dynamic(()=>import( "@/components/AboutCard"),{ssr:false});
import Top from "@/components/Top";

export default function Home() {
  return (
    <>
    <h1 ><Top/></h1>
    <div className="grid grid-cols-2 p-2">

    <AboutCard/>
    </div>
    

    </>
  );
}
