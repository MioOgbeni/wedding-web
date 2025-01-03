import React from 'react';
import grillIcon from '../assets/images/obcerstveni.svg';
//import cakeIcon from '../assets/images/krajeni.svg';
import leaveIcon from '../assets/images/rucicka.svg';
//import leave2Icon from '../assets/images/odjezd2.svg';
import cheersIcon from '../assets/images/pripitek.svg';
import arriveIcon from '../assets/images/auto.svg';
import heartIcon from '../assets/images/srdicko.svg';

function Program() {
  return (
    <div className="details-container">
      <div className="details-point-program">
        <img src={arriveIcon} alt="Příjezd ikona" className="details-icon" />
        <h2 className="details-title-program">13.00–14.00</h2>
        <p className="details-description">
           příjezd hostů
        </p>
      </div>
      <div className="details-point-program">
        <img src={heartIcon} alt="Obřad ikona" className="details-icon" />
        <h2 className="details-title-program">14.30</h2>
        <p className="details-description">
          OBŘAD
        </p>
      </div>
      <div className="details-point-program">
        <img src={cheersIcon} alt="Přípitek ikona" className="details-icon" />
        <h2 className="details-title-program">15.00</h2>
        <p className="details-description">
          přípitek a&nbsp;krájení dortu
        </p>
      </div>
      <div className="details-point-program">
        <img src={grillIcon} alt="Grilovačka ikona" className="details-icon" />
        <h2 className="details-title-program">15.30</h2>
        <p className="details-description">
          grilovačka a&nbsp;volná zábava
        </p>
      </div>
      <div className="details-point-program">
        <img src={leaveIcon} alt="Odjezd ikona" className="details-icon" />
        <h2 className="details-title-program">22.00</h2>
        <p className="details-description">
          odjezd
        </p>
      </div>
    </div>
  );
}

export default Program;
