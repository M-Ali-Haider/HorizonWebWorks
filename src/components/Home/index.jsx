import Landing from "../Landing";
import SmoothScroll from "../SmoothScroll";

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
