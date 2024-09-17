import Image from 'next/image';
import React from 'react';
import iconPhone from '../../public/assets/icons-phone.png';
import iconMail from '../../public/assets/icons-mail.png';
import '../ContactMassage/style.css';

function ContactMassage() {
  return (
    <>
      <div id="contact">
        <div className="container">
          <div className="contact">
            <div className="home-link">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/contact">Contact</a>
            </div>
            <div className="contact__connection">
              <div className="connection">
                <div className="connection__call">
                  <div className="phone-logo">
                    <Image src={iconPhone} alt="iconPhone" />
                    <span>Call To Us</span>
                  </div>
                  <p>We are available 24/7, 7 days a week.</p>
                  <p>Phone: +8801611112222</p>
                </div>
                <hr className="hr-contact" />
                <div className="connection__email">
                  <div className="mail-logo">
                    <Image src={iconMail} alt="iconPhone" />
                    <span>Write To US</span>
                  </div>
                  <p>
                    Fill out our form and we will contact <br /> you within 24
                    hours.
                  </p>
                  <p>Emails: customer@exclusive.com</p>
                  <p>Emails: support@exclusive.com</p>
                </div>
              </div>
              <div className="contact__add">
                <div className="contact__inputs">
                  <input type="text" placeholder="Your Name" />
                  <input type="email" placeholder="Your Email" />
                  <input type="number" placeholder="Your Phone" />
                </div>
                <div className="message">
                  <textarea placeholder="Your Message" />
                </div>
                <div className="submit">
                  <button type="submit">Send Massage</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMassage;
