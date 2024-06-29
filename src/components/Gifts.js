import React from 'react';
import './Gifts.css';
import giftIcon from '../assets/images/gift.svg';
import heartIcon from '../assets/images/heart.svg';
import LnPaymentQrCode from './LnPaymentQrCode';
import bankQR from '../assets/images/generatedQR.png';

function Gifts() {
  return (
    <div className='details-container'>
      <div className="details-point">
        <img src={giftIcon} alt="Dárek ikona" className="details-icon" />
        <h2 className="details-title">Dary</h2>
        <p className="details-description">
        Tím největším darem pro nás bude, když náš den strávíte s námi. Pokud chcete, budeme rádi když nám přispějete na naši svatební cestu. 
        </p>
        <p className="details-description">
        Níže necháváme QR kódy s platebními metodami. Do zprávy pro příjemce nám napište svůj tip na destinaci.
        </p>
        <p className="details-description">
        Kromě finančního daru rádi přijmeme jakoukoliv pomoc při přípravách a organizaci našeho dne. 
        </p>
        <p className="details-description">
        <b>Děkujeme.</b><br/>
        <img src={heartIcon} alt="Srdce ikona" className="heart-icon" />
        </p>
      </div>
      <div className="details-point">
        <h2 className="details-title">Bankonvní spojení</h2>
        <img src={bankQR} alt="Bankovní spojení" className="details-qr" />
      </div>
      <div className="details-point">
        <h2 className="details-title">BTC Lightning</h2>
        <LnPaymentQrCode />
      </div>
    </div>
  );
}

export default Gifts;
