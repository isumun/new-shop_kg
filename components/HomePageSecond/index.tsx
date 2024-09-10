import React from 'react';
import imgJoystick from '../../public/assets/Joystick.png';
import Image from 'next/image';
import { SlArrowRightCircle } from 'react-icons/sl';
import { SlArrowLeftCircle } from 'react-icons/sl';
import imageLike from '../../public/assets/Vector.png';
import '../HomePageSecond/style.css';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineRemoveRedEye } from 'react-icons/md';

function HomePageSecond() {
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
      <div id="second-block">
        <div className="container">
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
      </div>
    </>
  );
}

export default HomePageSecond;
