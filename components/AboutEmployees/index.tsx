import React from 'react';
import '../AboutEmployees/style.css';
import Image from 'next/image';
import firstEmployees from '../../public/assets/first-employees.png';
import secondEmployees from '../../public/assets/second-employees.png';
import thirdEmployees from '../../public/assets/third-employees.png';
import { RiLinkedinLine } from 'react-icons/ri';
import { FiTwitter } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa6';

function AboutEmployees() {
  return (
    <>
      <div id="employees">
        <div className="container">
          <div className="employees">
            <div className="first-employees">
              <Image src={firstEmployees} alt="" />
              <h1>Tom Cruise</h1>
              <p>Founder & Chairman</p>
              <div className="employees-icon">
                <FiTwitter />
                <FaInstagram />
                <RiLinkedinLine />
              </div>
            </div>
            <div className="second-employees">
              <Image src={secondEmployees} alt="" />
              <h1>Emma Watson</h1>
              <p>Managing Director</p>
              <div className="employees-icon">
                <FiTwitter />
                <FaInstagram />
                <RiLinkedinLine />
              </div>
            </div>

            <div className="third-employees">
              <Image src={thirdEmployees} alt="" />
              <h1>Will Smith</h1>
              <p>Product Designer</p>
              <div className="employees-icon">
                <FiTwitter />
                <FaInstagram />
                <RiLinkedinLine />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutEmployees;
