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
        <p className="program-details-description">
          13.00–14. 00 Příjezd hostů
        </p>
        <p className="program-details-description">
          14.30 Obřad
        </p>
        <p className="program-details-description">
          15.00 Přípitek a krájení dortu
        </p>
        <p className="program-details-description">
        15.30 Grilovačka a volná zábava
        </p>
        <p className="program-details-description">
        22.00 odjezd
        </p>
      </div>
      <div className="program-details-point">
        <img src={treeIcon} alt="Stromeček ikona" className="program-details-icon-small" />
      </div>
    </div>
  );
}

export default Program;
