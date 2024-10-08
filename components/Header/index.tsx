import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/assets/logo.png';
import { GoChevronDown } from 'react-icons/go';
import { CiHeart } from 'react-icons/ci';
import { BiCartAlt } from 'react-icons/bi';
import { IoPersonCircleOutline } from 'react-icons/io5';
import '../Header/header.css';

const Header: React.FC = () => {
  return (
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
                <Link href="/">Home</Link>

                <Link href="/contact">Contact</Link>

                <Link href="/about">About</Link>

                <Link href="/sign-up">Sign Up</Link>
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
        </div>
      </div>

      <hr className="headerHr" />
    </>
  );
};

export default Header;
