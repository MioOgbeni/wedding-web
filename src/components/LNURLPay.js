import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import axios from 'axios';

const LNURLPay = () => {
  const [lnurl, setLnurl] = useState('');

  useEffect(() => {
    // Fetch the LNURL from the provided URL
    axios.get('https://bitlifi.com/.well-known/lnurlp/tomnov')
      .then(response => {
        if (response.data && response.data.lnurl) {
          setLnurl(response.data.lnurl);
        } else {
          console.error('Invalid response format:', response);
        }
      })
      .catch(error => {
        console.error('Error fetching LNURL:', error);
      });
  }, []);

  return (
    <div>
      <h1>Support Us with BTC Lightning</h1>
      {lnurl ? (
        <QRCode value={lnurl} />
      ) : (
        <p>Loading QR code...</p>
      )}
    </div>
  );
};

export default LNURLPay;
