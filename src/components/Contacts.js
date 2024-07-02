import React from 'react';
import './Contacts.css';
//import dresscodeIcon from '../assets/images/dresscode.svg';
import phoneCallIcon from '../assets/images/phone-call.svg';

function Contacts() {
  return (
    <div className="details-container contacts-container">
      <div className="details-point">
        <h2 className="details-title-program">Místo konání</h2>
        <p className="details-description">
            Trokavec 69, Mirošov
        </p>
        <div className="iframe-map">
          <iframe 
          title="Mapa s místem konání svatby"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1025.0279797417902!2d13.699142738923891!3d49.6488823831088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b1da54375ff97%3A0xec487b16f08e77dc!2sTrokavec%2069%2C%20338%2043%20Trokavec!5e0!3m2!1sen!2scz!4v1719697451542!5m2!1sen!2scz&zoom='1'"
          width="100%"
          height="100%"
          allowfullscreen=""
          loading="lazy"
          frameborder="0"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div className="details-point">
        <h2 className="details-title-program">Lucie a Tomáš</h2>
        <p className="details-description">
        <img src={phoneCallIcon} alt="Telefon ikona" className="phone-call-icon" /><a className="tel" href="tel:+420605070685">605 070 685</a> / <img src={phoneCallIcon} alt="Telefon ikona" className="phone-call-icon" /><a className="tel" href="tel:+420735511128">735 511 128</a>
        </p>
      </div>
      <div className="details-point">
        <h2 className="details-title-program">Karolína a Tomáš</h2>
        <p className="details-description">
          svědkové<br/>
          <img src={phoneCallIcon} alt="Telefon ikona" className="phone-call-icon" /><a className="tel" href="tel:+420606289385">606 289 385</a> / <img src={phoneCallIcon} alt="Telefon ikona" className="phone-call-icon" /><a className="tel" href="tel:+420720571551">720 571 551</a>
        </p>
      </div>
    </div>
  );
}

export default Contacts;
