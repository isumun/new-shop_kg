import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/assets/logo.png';

const Header: React.FC = () => {
  return (
<<<<<<< Updated upstream
    <header className="w-full py-4 bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center cursor-pointer">
          <Link href="/" legacyBehavior>
            <a>
              <Image src={logo} alt="Logo" width={50} height={50} />
            </a>
          </Link>
          <span className="ml-2 text-xl font-bold">My Shop</span>
=======
    <>
      <div className="wrap">
        <div className="header__content">
          <div className="header__language">
            <div className="container">
              <div className="header__content__top">
                <div className="header__language__text">
                  Summer Sale For All Swim Suits And Free Express Delivery - OFF
                  50%!<a>ShopNow</a>
                </div>
                <div className="header__language__choice">
                  English
                  <GoChevronDown />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header__head">
          <div className="container">
            <div className="header__head__content">
              <div className="header__head__logo">
                <h1>Exclusive</h1>
              </div>
              <div className="header__head__nav">
                <a href="#">Home</a>

                <a href="#">Shop</a>

                <a href="#">About</a>

                <a href="#">Contact</a>
              </div>
              <div className="header__head__search">
                <input
                  className="header__head__search__input"
                  type="text"
                  placeholder="What are you looking for?
"
                />
                <span>
                  <CiHeart />
                </span>
                <span>
                  <BiCartAlt />
                </span>
                <span>
                  <IoPersonCircleOutline />
                </span>
              </div>
            </div>
          </div>
>>>>>>> Stashed changes
        </div>
        <nav>
          <Link href="/login" legacyBehavior>
            <a className="text-lg">Login</a>
          </Link>
        </nav>
      </div>
<<<<<<< Updated upstream
    </header>
=======
      <hr className="headerHr" />
    </>
>>>>>>> Stashed changes
  );
};

export default Header;
