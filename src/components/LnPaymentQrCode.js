import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import axios from 'axios';

const LnPaymentQrCode = () => {
  const [lnInvoice, setLnInvoice] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(lnInvoice);
    alert('LN faktura byla zkopírována do schránky.');
  };

  const generateLnInvoice = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('https://lnurl.novak.my/convert', {
        input: 'tomnov@bitlifi.com',
      });

      setLnInvoice(response.data.bolt11Invoice);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const openWallet = () => {
    if (lnInvoice) {
      const url = `lightning:${lnInvoice}`;
      window.location.href = url;
    } else {
      alert('Payment request not available');
    }
  };

  return (
    <div>
      <button className={'buttons'} onClick={generateLnInvoice} disabled={loading}>
        {loading ? 'Generuji LN fakturu...' : 'Vygenerovat LN fakturu'}
      </button>
      <p className="details-description">*Každá LN faktura je splatná pouze jednou.<br/>Částku zadáte až ve své peněžence.</p>
      {error && <p className="details-description">Error: {error}</p>}
      {lnInvoice && <QRCode onClick={openWallet} renderAs={'svg'} level={'Q'} includeMargin={true} value={lnInvoice} className='details-qr ln-invoice'/>}
    </div>
  );
};

export default LnPaymentQrCode;
