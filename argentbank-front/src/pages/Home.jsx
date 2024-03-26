import Features from "../components/Features";
import Hero from "../components/Hero";

function Home() {
  document.title = "Home";
  return (
    <>
      <main>
        <Hero />
        <Features />
      </main>
    </>
  );
}

export default Home;
