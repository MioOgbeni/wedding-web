import React from 'react';
import './Program.css'; // If you have specific styles for this page
import timeIcon from '../assets/images/time.svg';
import treeIcon from '../assets/images/tree-green.svg';

function Program() {
  return (
    <div className="program-details-container">
      {/* <h1 className="program-details-header">PROGRAM</h1> */}
      <div className="program-details-point">
        <img src={timeIcon} alt="Čas ikona" className="program-details-icon" />
        <h2 className="program-details-title">13.00–14. 00</h2>
        <p className="program-details-description">
           příjezd hostů
        </p>
        <h2 className="program-details-title">14.30</h2>
        <p className="program-details-description">
          OBŘAD
        </p>
        <h2 className="program-details-title">15.00</h2>
        <p className="program-details-description">
          přípitek a krájení dortu
        </p>
        <h2 className="program-details-title">15.30</h2>
        <p className="program-details-description">
          grilovačka a volná zábava
        </p>
        <h2 className="program-details-title">22.00</h2>
        <p className="program-details-description">
          odjezd
        </p>
      </div>
      <div className="program-details-point">
        <img src={treeIcon} alt="Stromeček ikona" className="program-details-icon-small" />
      </div>
    </div>
  );
}

export default Program;
