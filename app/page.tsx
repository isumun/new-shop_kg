import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../app/globals.css';
import HomePageFirst from '@/components/HomePageFirst';
import HomePageSecond from '@/components/HomePageSecond';
import HomePageThird from '@/components/HomePageThird';
import HomePageFourth from '@/components/HomePageFourth';
import HomePageFifth from '@/components/HomePageFifth';
import HomePageSixth from '@/components/HomePageSixth';
import HomePageSeventh from '@/components/HomePageSeventh';
import HomePageEighth from '@/components/HomePageEighth';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <HomePageFirst />
      <HomePageSecond />
      <HomePageThird />
      <HomePageFourth />
      <HomePageFifth />
      <HomePageSixth />
      <HomePageSeventh />
      <HomePageEighth />
      <Footer />
    </>
  );
};

export default Home;
