import Nav from '../../components/Nav';
import Banner from '../../components/Banner';
import Feature from '../../components/Feature';
import Footer from '../../components/Footer';

const Homepage: React.FC = (): JSX.Element => {
    return (
        <>
            <Nav/>
            <main>
              <Banner/>
              <Feature/>
            </main>
            <Footer/>
        </>
    );
};
  
export default Homepage;
  