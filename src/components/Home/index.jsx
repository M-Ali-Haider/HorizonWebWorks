import Image from "next/image";
import dynamic from "next/dynamic";
import SmoothScroll from "@/components/SmoothScroll/index";

const Landing = dynamic(() => import("@/components/Landing/index"), {
  ssr: false,
  loading: () => (
    <Image src="/placeholder.png" alt="Loading..." width={200} height={200} />
  ),
});

const Home = () => {
  return (
    <SmoothScroll>
      <main className="bg-[#0f0f0f]">
        <div className="h-screen" />
        <Landing />
        <div className="h-screen" />
      </main>
    </SmoothScroll>
  );
};

export default Home;
