import React from 'react';
import firstImg from '../../public/assets/Frame 560.svg';
import imgJoystick from '../../public/assets/Joystick.png';
import Image from 'next/image';
import { SlArrowRight } from 'react-icons/sl';
import { SlArrowRightCircle } from 'react-icons/sl';
import { SlArrowLeftCircle } from 'react-icons/sl';
import imageLike from '../../public/assets/Vector.png';
import '../Hero/Hero.css';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import imgPhone from '../../public/assets/CellPhone.png';
import imgComputers from '../../public/assets/computers.png';
import imgCamera from '../../public/assets/Camera.png';
import imgWatch from '../../public/assets/SmartWatch.png';
import imgHeadPhones from '../../public/assets/Headphone.png';
import imgGaming from '../../public/assets/Gamepad.png';
import imgBufer from '../../public/assets/Bufer.png';
import { Input } from 'postcss';

function Hero() {
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
    <div id="hero">
      <div className="container">
        <div className="hero">
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
          <div className="second-block">
            <div className="today-color">
              <button className="color"></button>
              <p>Today’s</p>
            </div>
            <div className="flash-block">
              <h1>Flash Sales</h1>
              <div className="time">
                <div className="time-section">
                  <p>days</p>
                  <h3>19:</h3>
                </div>
                <div className="time-section">
                  <p>hours</p>
                  <h3>23:</h3>
                </div>
                <div className="time-section">
                  <p>minutes</p>
                  <h3>03:</h3>
                </div>
                <div className="time-section">
                  <p>seconds</p>
                  <h3>56</h3>
                </div>
              </div>
              <div className="btn-prev-next">
                <button className="prev-btn">
                  <SlArrowLeftCircle />
                </button>
                <button className="next-btn">
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
            <div className="productAllProduct">
              <button>View All Products</button>
            </div>
            <hr className="productHr" />
          </div>
        </div>
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
        <div className="fourth-block">
          <div className="cotegories">
            <button className="color"></button>
            <p>This Month</p>
          </div>
          <div className="bestProduct">
            <h1>Best Selling Products</h1>
            <button>view All</button>
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
        </div>
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
        <div className="seventh-block">
          <div className="cotegories">
            <button className="color"></button>
            <p>Featured</p>
          </div>
          <div className="newArial">
            <h1>New Arial</h1>
          </div>
        </div>
        <div className="eight-block"></div>
      </div>
    </div>
  );
}

export default Hero;
