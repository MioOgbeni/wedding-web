import React from 'react';
import giftIcon from '../assets/images/gift.png';

function Gifts() {
  return (
    <div className='details-container'>
      <div className="details-point">
        <img src={giftIcon} alt="Dárek ikona" className="details-icon" />
        <h2 className="details-title">Dary</h2>
        <p className="details-description">
        Tím největším darem pro nás bude, když náš den strávíte s námi. 
        Pokud chcete, budeme rádi když nám přispějete na naši svatební cestu. Níže necháváme QR kód s bankovním spojením. Do zprávy pro příjemce nám napište svůj tip na destinaci.
        Kromě finančního daru rádi přijmeme jakoukoliv pomoc při přípravách a organizaci našeho dne. 
        <br/>Děkujeme.
        </p>
      </div>
    </div>
  );
}

export default Gifts;
