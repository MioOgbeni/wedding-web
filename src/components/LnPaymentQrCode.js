import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import axios from 'axios';

const LnPaymentQrCode = () => {
  const [lnInvoice, setLnInvoice] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateLnInvoice = async () => {
    setLoading(true);
    setError(null);

    try {
      const amount = 1000; // Amount in millisatoshis (1 satoshi = 1000 millisatoshis)
      const address = 'tomnov@bitlifi.com'; // Replace with your LNURL address
      const lnurl = `https://lnurlpay.com/${address}/${amount}`;

      const response = await axios.get(lnurl);
      setLnInvoice(response.data.pr);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={generateLnInvoice} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Invoice'}
      </button>
      {error && <p>Error: {error}</p>}
      {lnInvoice && <p>{lnInvoice}</p>}
      {lnInvoice && <QRCode value={lnInvoice} className='details-qr'/>}
    </div>
  );
};

export default LnPaymentQrCode;
