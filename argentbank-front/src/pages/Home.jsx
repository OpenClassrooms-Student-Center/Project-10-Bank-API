import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Nav";

function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
}

export default Home;
