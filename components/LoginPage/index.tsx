import Image from 'next/image';
import React from 'react';
import shopImg from '../../public/assets/shop-img.png';
import '../LoginPage/style.css';
import Link from 'next/link';

function LoginPage() {
  return (
    <>
      <div id="login">
        <div className="container">
          <div className="login">
            <div className="login-img">
              <Image src={shopImg} alt="login" />
            </div>
            <div className="login-inputs">
              <div className="login-text">
                <h1>Log in to Exclusive</h1>
                <p>Enter your details below</p>
              </div>
              <input type="text" placeholder="Email or Phone Number" />
              <input type="password" placeholder="Password" />
              <div className="login-buttons">
                <button className="login-create">Log in</button>
                <button className="forget-btn">Forget Password?</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
