import React from 'react';
import imgJoystick from '../../public/assets/Joystick.png';
import Image from 'next/image';
import imageLike from '../../public/assets/Vector.png';
import '../WishJustPage/style.css';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { LuEye } from 'react-icons/lu';

function WishJustPage() {
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
      <div id="wishjust">
        <div className="container">
          <div className="wishjust">
            <div className="wishjust-quantity">
              <div className="JustForYou">
                <button className="color"></button>
                <p>Just For You</p>
              </div>
              <button className="seeAllBtn">See All</button>
            </div>
            <div className="productPage">
              <div className="productCard">
                <div className="productImage">
                  <div className="productImg">
                    <Image src={imgJoystick} alt="" />
                  </div>
                  <h3>-35%</h3>
                  <div className="productLike">
                    <h2>
                      <LuEye />
                    </h2>
                  </div>
                  <button className="productBtn">
                    <p>
                      <RiShoppingCart2Line className="icon" />
                    </p>
                    <h4>Add To Card</h4>
                  </button>
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

                  <div className="productLike">
                    <h2>
                      <LuEye />
                    </h2>
                  </div>
                  <button className="productBtn">
                    <p>
                      <RiShoppingCart2Line className="icon" />
                    </p>
                    <h4>Add To Card</h4>
                  </button>
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

                  <div className="productLike">
                    <h2>
                      <LuEye />
                    </h2>
                  </div>
                  <button className="productBtn">
                    <p>
                      <RiShoppingCart2Line className="icon" />
                    </p>
                    <h4>Add To Card</h4>
                  </button>
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

                  <div className="productLike">
                    <h2>
                      <LuEye />
                    </h2>
                  </div>
                  <button className="productBtn">
                    <p>
                      <RiShoppingCart2Line className="icon" />
                    </p>
                    <h4>Add To Card</h4>
                  </button>
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

                  <div className="productLike">
                    <h2>
                      <LuEye />
                    </h2>
                  </div>
                  <button className="productBtn">
                    <p>
                      <RiShoppingCart2Line className="icon" />
                    </p>
                    <h4>Add To Card</h4>
                  </button>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WishJustPage;
