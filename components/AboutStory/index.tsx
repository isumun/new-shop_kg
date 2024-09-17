import React from 'react';
import '../AboutStory/style.css';
import imgSide from '../../public/assets/Side Image.png';
import Image from 'next/image';

function AboutStory() {
  return (
    <>
      <div id="aboutStory">
        <div className="container">
          <div className="aboutStory">
            <div className="home-link">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/contact">About</a>
            </div>
            <div className="aboutStory__block">
              <div className="aboutStory__text">
                <h1>Our Story</h1>
                <p>
                  Launced in 2015, Exclusive is South Asia’s premier online
                  shopping <br /> makterplace with an active presense in
                  Bangladesh. Supported <br /> by wide range of tailored
                  marketing, data and service solutions, <br /> Exclusive has
                  10,500 sallers and 300 brands and serves 3 <br /> millioons
                  customers across the region.
                </p>
                <p>
                  Exclusive has more than 1 Million products to offer, growing
                  at a
                  <br />
                  very fast. Exclusive offers a diverse assotment in categories
                  <br />
                  ranging from consumer.
                </p>
              </div>
              <div className="aboutStory__image">
                <Image src={imgSide} alt="imgSide" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutStory;
