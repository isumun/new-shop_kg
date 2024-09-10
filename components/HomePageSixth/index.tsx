import React from 'react';
import imgJoystick from '../../public/assets/Joystick.png';
import Image from 'next/image';

import { SlArrowRightCircle } from 'react-icons/sl';
import { SlArrowLeftCircle } from 'react-icons/sl';
import imageLike from '../../public/assets/Vector.png';
import '../HomePageSixth/style.css';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineRemoveRedEye } from 'react-icons/md';

function HomePageSixth() {
  const arrayLike = [
    imageLike,
    imageLike,
    imageLike,
    imageLike,
    imageLike,
    imageLike,
    imageLike,
    imageLike,
    imageLike,
    imageLike,
    imageLike,
    imageLike,
    imageLike,
    imageLike,
  ];
  return (
    <>
      <div id="sixth-block">
        <div className="container">
          <div className="sixth-block">
            <div className="cotegories">
              <button className="color"></button>
              <p>Our Products</p>
            </div>
            <div className="ourExProduct">
              <h1>Explore Our Products</h1>
              <div className="browse-prev-next">
                <button className="prev-browse">
                  <SlArrowLeftCircle />
                </button>
                <button className="next-browse">
                  <SlArrowRightCircle />
                </button>
              </div>
            </div>
            <div className="productPage">
              {/* cards  */}
              <div className="productCard">
                <div className="productImage">
                  <div className="productImg">
                    <Image src={imgJoystick} alt="" />
                  </div>
                  <h3>-40%</h3>
                  <div className="productLike">
                    <h2>
                      <FaRegHeart />
                    </h2>
                    <h2>
                      <MdOutlineRemoveRedEye />
                    </h2>
                  </div>
                </div>
                <h4>HAVIT HV-G92 Gamepad</h4>
                <div className="productPrice">
                  <h2>$120</h2>
                  <h2
                    style={{
                      color: '#000000',
                    }}
                    className="productPriceSale"
                  >
                    $160
                  </h2>
                </div>
                <div className="lik">
                  {arrayLike.slice(0, 5).map((item, index) => (
                    <div key={index} className="productLikeImage">
                      <Image src={item} alt="" />
                    </div>
                  ))}
                  <h3>({arrayLike.length})</h3>
                </div>
              </div>
              <div className="productCard">
                <div className="productImage">
                  <div className="productImg">
                    <Image src={imgJoystick} alt="" />
                  </div>
                  <h3>-40%</h3>
                  <div className="productLike">
                    <h2>
                      <FaRegHeart />
                    </h2>
                    <h2>
                      <MdOutlineRemoveRedEye />
                    </h2>
                  </div>
                </div>
                <h4>HAVIT HV-G92 Gamepad</h4>
                <div className="productPrice">
                  <h2>$120</h2>
                  <h2
                    style={{
                      color: '#000000',
                    }}
                    className="productPriceSale"
                  >
                    $160
                  </h2>
                </div>
                <div className="lik">
                  {arrayLike.slice(0, 5).map((item, index) => (
                    <div key={index} className="productLikeImage">
                      <Image src={item} alt="" />
                    </div>
                  ))}
                  <h3>({arrayLike.length})</h3>
                </div>
              </div>
              <div className="productCard">
                <div className="productImage">
                  <div className="productImg">
                    <Image src={imgJoystick} alt="" />
                  </div>
                  <h3>-40%</h3>
                  <div className="productLike">
                    <h2>
                      <FaRegHeart />
                    </h2>
                    <h2>
                      <MdOutlineRemoveRedEye />
                    </h2>
                  </div>
                </div>
                <h4>HAVIT HV-G92 Gamepad</h4>
                <div className="productPrice">
                  <h2>$120</h2>
                  <h2
                    style={{
                      color: '#000000',
                    }}
                    className="productPriceSale"
                  >
                    $160
                  </h2>
                </div>
                <div className="lik">
                  {arrayLike.slice(0, 5).map((item, index) => (
                    <div key={index} className="productLikeImage">
                      <Image src={item} alt="" />
                    </div>
                  ))}
                  <h3>({arrayLike.length})</h3>
                </div>
              </div>
              <div className="productCard">
                <div className="productImage">
                  <div className="productImg">
                    <Image src={imgJoystick} alt="" />
                  </div>
                  <h3>-40%</h3>
                  <div className="productLike">
                    <h2>
                      <FaRegHeart />
                    </h2>
                    <h2>
                      <MdOutlineRemoveRedEye />
                    </h2>
                  </div>
                </div>
                <h4>HAVIT HV-G92 Gamepad</h4>
                <div className="productPrice">
                  <h2>$120</h2>
                  <h2
                    style={{
                      color: '#000000',
                    }}
                    className="productPriceSale"
                  >
                    $160
                  </h2>
                </div>
                <div className="lik">
                  {arrayLike.slice(0, 5).map((item, index) => (
                    <div key={index} className="productLikeImage">
                      <Image src={item} alt="" />
                    </div>
                  ))}
                  <h3>({arrayLike.length})</h3>
                </div>
              </div>
              <div className="productCard">
                <div className="productImage">
                  <div className="productImg">
                    <Image src={imgJoystick} alt="" />
                  </div>
                  <h3>-40%</h3>
                  <div className="productLike">
                    <h2>
                      <FaRegHeart />
                    </h2>
                    <h2>
                      <MdOutlineRemoveRedEye />
                    </h2>
                  </div>
                </div>
                <h4>HAVIT HV-G92 Gamepad</h4>
                <div className="productPrice">
                  <h2>$120</h2>
                  <h2
                    style={{
                      color: '#000000',
                    }}
                    className="productPriceSale"
                  >
                    $160
                  </h2>
                </div>
                <div className="lik">
                  {arrayLike.slice(0, 5).map((item, index) => (
                    <div key={index} className="productLikeImage">
                      <Image src={item} alt="" />
                    </div>
                  ))}
                  <h3>({arrayLike.length})</h3>
                </div>
              </div>
              {/* card  */}
            </div>
            <div className="productPage">
              {/* cards  */}
              <div className="productCard">
                <div className="productImage">
                  <div className="productImg">
                    <Image src={imgJoystick} alt="" />
                  </div>
                  <h3>-40%</h3>
                  <div className="productLike">
                    <h2>
                      <FaRegHeart />
                    </h2>
                    <h2>
                      <MdOutlineRemoveRedEye />
                    </h2>
                  </div>
                </div>
                <h4>HAVIT HV-G92 Gamepad</h4>
                <div className="productPrice">
                  <h2>$120</h2>
                  <h2
                    style={{
                      color: '#000000',
                    }}
                    className="productPriceSale"
                  >
                    $160
                  </h2>
                </div>
                <div className="lik">
                  {arrayLike.slice(0, 5).map((item, index) => (
                    <div key={index} className="productLikeImage">
                      <Image src={item} alt="" />
                    </div>
                  ))}
                  <h3>({arrayLike.length})</h3>
                </div>
                <div className="radio-input">
                  <div className="radio-button">
                    <input type="radio" name="example-radio" />
                    <span className="radio"></span>
                  </div>
                  <div className="radio-button">
                    <input type="radio" name="example-radio" />
                    <span className="radio"></span>
                  </div>
                </div>
              </div>
              <div className="productCard">
                <div className="productImage">
                  <div className="productImg">
                    <Image src={imgJoystick} alt="" />
                  </div>
                  <h3>-40%</h3>
                  <div className="productLike">
                    <h2>
                      <FaRegHeart />
                    </h2>
                    <h2>
                      <MdOutlineRemoveRedEye />
                    </h2>
                  </div>
                </div>
                <h4>HAVIT HV-G92 Gamepad</h4>
                <div className="productPrice">
                  <h2>$120</h2>
                  <h2
                    style={{
                      color: '#000000',
                    }}
                    className="productPriceSale"
                  >
                    $160
                  </h2>
                </div>
                <div className="lik">
                  {arrayLike.slice(0, 5).map((item, index) => (
                    <div key={index} className="productLikeImage">
                      <Image src={item} alt="" />
                    </div>
                  ))}
                  <h3>({arrayLike.length})</h3>
                </div>
                <div className="radio-input">
                  <div className="radio-button">
                    <input type="radio" name="example-radio" />
                    <span className="radio"></span>
                  </div>
                  <div className="radio-button">
                    <input type="radio" name="example-radio" />
                    <span className="radio"></span>
                  </div>
                </div>
              </div>
              <div className="productCard">
                <div className="productImage">
                  <div className="productImg">
                    <Image src={imgJoystick} alt="" />
                  </div>
                  <h3>-40%</h3>
                  <div className="productLike">
                    <h2>
                      <FaRegHeart />
                    </h2>
                    <h2>
                      <MdOutlineRemoveRedEye />
                    </h2>
                  </div>
                </div>
                <h4>HAVIT HV-G92 Gamepad</h4>
                <div className="productPrice">
                  <h2>$120</h2>
                  <h2
                    style={{
                      color: '#000000',
                    }}
                    className="productPriceSale"
                  >
                    $160
                  </h2>
                </div>
                <div className="lik">
                  {arrayLike.slice(0, 5).map((item, index) => (
                    <div key={index} className="productLikeImage">
                      <Image src={item} alt="" />
                    </div>
                  ))}
                  <h3>({arrayLike.length})</h3>
                </div>
                <div className="radio-input">
                  <div className="radio-button">
                    <input type="radio" name="example-radio" />
                    <span className="radio"></span>
                  </div>
                  <div className="radio-button">
                    <input type="radio" name="example-radio" />
                    <span className="radio"></span>
                  </div>
                </div>
              </div>
              <div className="productCard">
                <div className="productImage">
                  <div className="productImg">
                    <Image src={imgJoystick} alt="" />
                  </div>
                  <h3>-40%</h3>
                  <div className="productLike">
                    <h2>
                      <FaRegHeart />
                    </h2>
                    <h2>
                      <MdOutlineRemoveRedEye />
                    </h2>
                  </div>
                </div>
                <h4>HAVIT HV-G92 Gamepad</h4>
                <div className="productPrice">
                  <h2>$120</h2>
                  <h2
                    style={{
                      color: '#000000',
                    }}
                    className="productPriceSale"
                  >
                    $160
                  </h2>
                </div>
                <div className="lik">
                  {arrayLike.slice(0, 5).map((item, index) => (
                    <div key={index} className="productLikeImage">
                      <Image src={item} alt="" />
                    </div>
                  ))}
                  <h3>({arrayLike.length})</h3>
                </div>
                <div className="radio-input">
                  <div className="radio-button">
                    <input type="radio" name="example-radio" />
                    <span className="radio"></span>
                  </div>
                  <div className="radio-button">
                    <input type="radio" name="example-radio" />
                    <span className="radio"></span>
                  </div>
                </div>
              </div>
              <div className="productCard">
                <div className="productImage">
                  <div className="productImg">
                    <Image src={imgJoystick} alt="" />
                  </div>
                  <h3>-40%</h3>
                  <div className="productLike">
                    <h2>
                      <FaRegHeart />
                    </h2>
                    <h2>
                      <MdOutlineRemoveRedEye />
                    </h2>
                  </div>
                </div>
                <h4>HAVIT HV-G92 Gamepad</h4>
                <div className="productPrice">
                  <h2>$120</h2>
                  <h2
                    style={{
                      color: '#000000',
                    }}
                    className="productPriceSale"
                  >
                    $160
                  </h2>
                </div>
                <div className="lik">
                  {arrayLike.slice(0, 5).map((item, index) => (
                    <div key={index} className="productLikeImage">
                      <Image src={item} alt="" />
                    </div>
                  ))}
                  <h3>({arrayLike.length})</h3>
                </div>
                <div className="radio-input">
                  <div className="radio-button">
                    <input type="radio" name="example-radio" />
                    <span className="radio"></span>
                  </div>
                  <div className="radio-button">
                    <input type="radio" name="example-radio" />
                    <span className="radio"></span>
                  </div>
                </div>
              </div>
              {/* card  */}
            </div>
            <div className="ourProduct">
              <button>View All Products</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePageSixth;
