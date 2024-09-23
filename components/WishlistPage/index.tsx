import React from 'react';
import imgJoystick from '../../public/assets/Joystick.png';
import Image from 'next/image';
import imageLike from '../../public/assets/Vector.png';
import '../WishlistPage/style.css';
import { RiDeleteBin6Line, RiShoppingCart2Line } from 'react-icons/ri';
import { BiCartAlt } from 'react-icons/bi';

function WishlistPage() {
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
      <div id="wishlist">
        <div className="container">
          <div className="wishlist">
            <div className="wishlist-quantity">
              <h3>Wislist(4)</h3>
              <button>Move All To Bag</button>
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
                      <RiDeleteBin6Line />
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
              </div>
              <div className="productCard">
                <div className="productImage">
                  <div className="productImg">
                    <Image src={imgJoystick} alt="" />
                  </div>

                  <div className="productLike">
                    <h2>
                      <RiDeleteBin6Line />
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
              </div>
              <div className="productCard">
                <div className="productImage">
                  <div className="productImg">
                    <Image src={imgJoystick} alt="" />
                  </div>

                  <div className="productLike">
                    <h2>
                      <RiDeleteBin6Line />
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
              </div>
              <div className="productCard">
                <div className="productImage">
                  <div className="productImg">
                    <Image src={imgJoystick} alt="" />
                  </div>

                  <div className="productLike">
                    <h2>
                      <RiDeleteBin6Line />
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
              </div>
              <div className="productCard">
                <div className="productImage">
                  <div className="productImg">
                    <Image src={imgJoystick} alt="" />
                  </div>

                  <div className="productLike">
                    <h2>
                      <RiDeleteBin6Line />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WishlistPage;
