import React from 'react';
import inviteIcon from '../assets/images/oznameni_online.png';
import './Invite.css'; // Import the CSS file for styling

function Invite() {
  return (
    <div className="details-container">
      <img src={inviteIcon} alt="Pozvánka" className="inviteImage" />
    </div>
  );
}

export default Invite;
