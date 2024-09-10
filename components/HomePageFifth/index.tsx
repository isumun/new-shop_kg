import React from 'react';
import Image from 'next/image';
import '../HomePageFifth/style.css';
import imgBufer from '../../public/assets/Bufer.png';

function HomePageFifth() {
  return (
    <>
      <div id="fifth-block">
        <div className="container">
          <div className="fifth-block">
            <div className="music__block">
              <div className="music-block-info">
                <p>categories</p>
                <h1>
                  Enhance Your <br /> Music Experience
                </h1>
                <div className="music-time">
                  <div className="music-section">
                    <h3>19</h3>
                    <p>days</p>
                  </div>
                  <div className="music-section">
                    <h3>23</h3>
                    <p>hours</p>
                  </div>
                  <div className="music-section">
                    <h3>03</h3>
                    <p>minutes</p>
                  </div>
                  <div className="music-section">
                    <h3>56</h3>
                    <p>seconds</p>
                  </div>
                </div>
                <button>Buy Now!</button>
              </div>
              <div className="music-block-image">
                <Image src={imgBufer} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePageFifth;
