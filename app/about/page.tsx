import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../../app/globals.css';
import AboutStory from '@/components/AboutStory';

const About: React.FC = () => {
  return (
    <>
      <Header />
      <AboutStory />
      <Footer />
    </>
  );
};

export default About;
