import React from 'react';
import Image from 'next/image';
import { SlArrowRightCircle } from 'react-icons/sl';
import { SlArrowLeftCircle } from 'react-icons/sl';
import '../HomePageThird/style.css';
import imgPhone from '../../public/assets/CellPhone.png';
import imgComputers from '../../public/assets/computers.png';
import imgCamera from '../../public/assets/Camera.png';
import imgWatch from '../../public/assets/SmartWatch.png';
import imgHeadPhones from '../../public/assets/Headphone.png';
import imgGaming from '../../public/assets/Gamepad.png';

function HomePageThird() {
  return (
    <>
      <div id="third-block">
        <div className="container">
          <div className="third-block">
            <div className="cotegories">
              <button className="color"></button>
              <p>Categories</p>
            </div>
            <div className="browse-cotegory">
              <h1>Browse By Category</h1>
              <div className="browse-prev-next">
                <button className="prev-browse">
                  <SlArrowLeftCircle />
                </button>
                <button className="next-browse">
                  <SlArrowRightCircle />
                </button>
              </div>
            </div>
            <div className="category-images">
              <div className="img-phone">
                <Image src={imgPhone} alt="" />
                <h3>Phones</h3>
              </div>
              <div className="img-computers">
                <Image src={imgComputers} alt="" />
                <h3>Computers</h3>
              </div>
              <div className="img-watch">
                <Image src={imgWatch} alt="" />
                <h3>Watches</h3>
              </div>
              <div className="img-camera">
                <Image src={imgCamera} alt="" />
                <h3>Cameras</h3>
              </div>
              <div className="img-headPhone">
                <Image src={imgHeadPhones} alt="" />
                <h3>Headphones</h3>
              </div>
              <div className="img-gaming">
                <Image src={imgGaming} alt="" />
                <h3>Gaming</h3>
              </div>
            </div>
          </div>
          <hr className="productHr" />
        </div>
      </div>
    </>
  );
}

export default HomePageThird;
