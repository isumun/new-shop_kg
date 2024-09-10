import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero/Hero';
import '../app/globals.css';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
};

export default Home;
