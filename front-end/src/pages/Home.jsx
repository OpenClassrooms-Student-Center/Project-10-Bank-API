import PageLayout from '../layouts/PageLayout';
import Hero from '../layouts/Hero';
import Features from '../layouts/Features';

const Home = () => {
  return (
    <PageLayout mainClassName='main'>
      <>
        <Hero />
        <Features />
      </>
    </PageLayout>
  );
};

export default Home;
