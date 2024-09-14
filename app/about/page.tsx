import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../../app/globals.css';
import AboutStory from '@/components/AboutStory';
import AboutActive from '@/components/AboutActive';
import AboutEmployees from '@/components/AboutEmployees';
import AboutServies from '@/components/AboutServies';

const About: React.FC = () => {
  return (
    <>
      <Header />
      <AboutStory />
      <AboutActive />
      <AboutEmployees />
      <AboutServies />
      <Footer />
    </>
  );
};

export default About;
