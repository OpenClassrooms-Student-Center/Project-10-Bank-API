import Hero from '../../components/Home/Hero';
import Features from '../../components/Home/Features';
import { Fragment } from 'react/jsx-runtime';

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Features />
    </Fragment>
  );
}

export default Home;
