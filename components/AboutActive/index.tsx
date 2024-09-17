import React from 'react';
import '../AboutActive/style.css';
import Image from 'next/image';
import imgsaller from '../../public/assets/sallers.png';
import imgDollar from '../../public/assets/Dollar.png';
import imgAnual from '../../public/assets/bag-dollar.png';

function AboutActive() {
  return (
    <>
      <div id="aboutActive">
        <div className="container">
          <div className="aboutActive">
            <div className="about__sallers">
              <Image src={imgsaller} alt="" />
              <h1>10.5k</h1>
              <p>Sallers active our site</p>
            </div>
            <div className="about__mopnthly">
              <Image src={imgDollar} alt="" />
              <h1>33K </h1>
              <p>Customers monthly</p>
            </div>
            <div className="about__customer">
              <Image src={imgsaller} alt="" />
              <h1>45.5K </h1>
              <p>Customer active in our site</p>
            </div>
            <div className="about__anual">
              <Image src={imgAnual} alt="" />
              <h1>25k </h1>
              <p>Anual gross sale in our site</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutActive;
