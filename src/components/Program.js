import React from 'react';

function Program() {
  return (
    <div className="details-container">
      <div className="details-point">
        <h2 className="details-title">13.00–14.00</h2>
        <p className="details-description">
           příjezd hostů
        </p>
      </div>
      <div className="details-point">
        <h2 className="details-title">14.30</h2>
        <p className="details-description">
          <b>OBŘAD</b>
        </p>
      </div>
      <div className="details-point">
        <h2 className="details-title">15.00</h2>
        <p className="details-description">
          přípitek a krájení dortu
        </p>
      </div>
      <div className="details-point">
        <h2 className="details-title">15.30</h2>
        <p className="details-description">
          grilovačka a volná zábava
        </p>
      </div>
      <div className="details-point">
        <h2 className="details-title">22.00</h2>
        <p className="details-description">
          odjezd
        </p>
      </div>
    </div>
  );
}

export default Program;
