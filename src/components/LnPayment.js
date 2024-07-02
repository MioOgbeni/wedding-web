import QRCode from 'qrcode.react';
import lnIcon from '../assets/images/lightning.svg';

const LnPayment = () => {
  const lnInvoice = 'lnurl1dp68gurn8ghj7cnfw3kxjenf9e3k7mf09emk2mrv944kummhdchkcmn4wfk8qtm5dakkummkehgv45'
  
  const openWallet = () => {
    if (lnInvoice) {
      const url = `lightning:${lnInvoice}`;
      window.location.href = url;
    } else {
      alert('Payment request not available');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(lnInvoice);
    alert('LN faktura byla zkopírována do schránky.');
  };

  return (
    <div>
      {<QRCode 
        onClick={openWallet} 
        renderAs={'svg'}
        level={'H'}
        includeMargin={true}
        value={lnInvoice} 
        className='details-qr ln-invoice'
        imageSettings={{
          src: lnIcon, // Path to your SVG logo file
          x: null,
          y: null,
          height: 19,
          width: 35,
          excavate: false,
        }}
      />}
      <button className={'buttons'} onClick={copyToClipboard}>
        Zkopírovat LNURL do schránky
      </button>
    </div>
  );
};

export default LnPayment;
