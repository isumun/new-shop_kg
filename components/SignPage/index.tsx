import Image from 'next/image';
import React from 'react';
import shopImg from '../../public/assets/shop-img.png';
import { FcGoogle } from 'react-icons/fc';
import '../SignPage/style.css';
import Link from 'next/link';

function SignupPage() {
  return (
    <>
      <div id="signup">
        <div className="container">
          <div className="signup">
            <div className="signup-img">
              <Image src={shopImg} alt="signup" />
            </div>
            <div className="signup-inputs">
              <div className="signup-text">
                <h1>Create an account</h1>
                <p>Enter your details below</p>
              </div>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email or Phone Number" />
              <input type="password" placeholder="Password" />
              <div className="signup-buttons">
                <button className="signup-create">Create Account</button>
                <button className="google-btn">
                  <FcGoogle />
                  Sign up with Google
                </button>
              </div>

              <div className="goTo-login">
                <p>Already have account?</p>
                <Link href="/login">Log in</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupPage;
