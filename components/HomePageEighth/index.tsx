import React from 'react';
import servies from '../../public/assets/Services.png';
import serviesHeadPhone from '../../public/assets/Services-headPhone.png';
import serviesCheck from '../../public/assets/Services-check.png';
import Image from 'next/image';
import '../HomePageEighth/style.css';

function HomePageEighth() {
  return (
    <>
      <div id="servies">
        <div className="container">
          <div className="servies">
            <div className="first-servies">
              <Image src={servies} alt="footerimg" />
              <h3>FREE AND FAST DELIVERY</h3>
              <p>Free delivery for all orders over $140</p>
            </div>
            <div className="second-servies">
              <Image src={serviesHeadPhone} alt="footerimg" />
              <h3>24/7 CUSTOMER SERVICE</h3>
              <p>Friendly 24/7 customer support</p>
            </div>
            <div className="third-servies">
              <Image src={serviesCheck} alt="footerimg" />
              <h3>MONEY BACK GUARANTEE</h3>
              <p>We reurn money within 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePageEighth;
