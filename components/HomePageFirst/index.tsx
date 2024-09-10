import React from 'react';
import { SlArrowRight } from 'react-icons/sl';
import firstImg from '../../public/assets/Frame 560.svg';
import '../HomePageFirst/style.css';
import Image from 'next/image';
function HomePageFirst() {
  return (
    <div>
      <div id="first-block">
        <div className="container">
          <div className="first-block">
            <div className="categories">
              <div className="woman-btn">
                <a>Woman’s Fashion</a>
                <SlArrowRight />
              </div>
              <div className="man-btn">
                <a>Men’s Fashion</a>
                <SlArrowRight />
              </div>
              <p>Electronics</p>
              <p>Home & Lifestyle</p>
              <p>Medicine</p>
              <p>Sports & Outdoor</p>
              <p>Baby’s & Toys</p>
              <p>Groceries & Pets</p>
              <p>Health & Beauty</p>
            </div>
            <div className="first-block__img">
              <Image src={firstImg} alt="footerimg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageFirst;
