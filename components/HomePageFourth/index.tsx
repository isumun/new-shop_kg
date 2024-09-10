import React from 'react';
import imgJoystick from '../../public/assets/Joystick.png';
import Image from 'next/image';
import imageLike from '../../public/assets/Vector.png';
import '../HomePageFourth/style.css';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineRemoveRedEye } from 'react-icons/md';

function HomePageFourth() {
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
      <div id="fourth-block">
        <div className="container">
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
        </div>
      </div>
    </>
  );
}

export default HomePageFourth;
