import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../../app/globals.css';
import ContactMassage from '@/components/ContactMassage';

const Contact: React.FC = () => {
  return (
    <>
      <Header />
      <ContactMassage />
      <Footer />
    </>
  );
};

export default Contact;
