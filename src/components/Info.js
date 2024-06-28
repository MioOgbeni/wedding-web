import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Info.css'; // Import the CSS file for styling

// Import the images
import dresscodeIcon from '../assets/images/dresscode.svg';
import weatherIcon from '../assets/images/weather.svg';
import timeIcon from '../assets/images/time.svg';
import transportIcon from '../assets/images/transport.svg';
import sleepingIcon from '../assets/images/sleeping.svg';
import photosIcon from '../assets/images/photos.svg';
import cateringIcon from '../assets/images/catering.svg';
import needsIcon from '../assets/images/needs.svg';
import rsvpIcon from '../assets/images/rsvp.svg';


function Info() {
  const navigate = useNavigate();

  const handleRSVPClick = () => {
    navigate('/rsvp');
  };

  return (
    <div className="details-container">
      {/* <h1 className="details-header">INFORMACE</h1> */}
      <div className="details-point">
        <img src={dresscodeIcon} alt="Dresscode ikona" className="details-icon" />
        <h2 className="details-title">Dresscode</h2>
        <p className="details-description">
          Pohodlné oblečení vhodné na zahradu ke grilování a otevřenému ohni.
          Saka a drahé róby nechte prosím doma. 
          Barevnost oděvu ponecháme na vás.
          Budeme rádi, pokud se vyvarujete křiklavým barvám a zelené.
        </p>
      </div>
      <div className="details-point">
        <img src={weatherIcon} alt="Počasí ikona" className="details-icon" />
        <h2 className="details-title">Počasí</h2>
        <p className="details-description">
          Obřad se bude konat venku na zahradě za jakéhokoliv počasí.
          V deštivém období zde bývá problém s podmáčenou půdou, vyberte svou obuv s ohledem na tuto informaci.
        </p>
      </div>
      <div className="details-point">
        <img src={timeIcon} alt="Čas ikona" className="details-icon" />
        <h2 className="details-title">Čas</h2>
        <p className="details-description">
          Na obřad prosím dorazte včas, na nikoho nečekáme!
          Kvůli nočnímu klidu bude grill party končit ve 22 h.
        </p>
      </div>
      <div className="details-point">
        <img src={transportIcon} alt="Doprava ikona" className="details-icon" />
        <h2 className="details-title">Doprava</h2>
        <p className="details-description">
          Pokud potřebujete zařídit dopravu z/do Trokavce, dejte včas vědět.
          Pokusíme se vám zajistit sběrný odvoz s ostatními svatebčany,
          kteří jedou autem, z Prahy, Plzně či Rokycan.
        </p>
      </div>
      <div className="details-point">
        <img src={sleepingIcon} alt="Přespání ikona" className="details-icon" />
        <h2 className="details-title">Přespání</h2>
        <p className="details-description">
          Přespání není zajištěno. Po předchozí domluvě můžeme zajistit
          stanování na pozemku u maringotky ve vlastním stanu
          nebo doporučit ubytování v okolí.
        </p>
      </div>
      <div className="details-point">
        <img src={photosIcon} alt="Fotografování ikona" className="details-icon" />
        <h2 className="details-title">Fotografování</h2>
        <p className="details-description">
          Prosíme, abyste během celého dne nedělali záznamy
          vlastními mobily či fotoaparáty. Máme zajištěného vlastního fotografa
          a pořízené fotografie vám následně rádi poskytneme.
        </p>
      </div>
      <div className="details-point">
        <img src={cateringIcon} alt="Občerstvení ikona" className="details-icon" />
        <h2 className="details-title">Občerstvení</h2>
        <p className="details-description">
          Zajištěny budou suroviny na grilování a další drobné občerstvení.
          Budeme rádi, když přinesete něco dobrého vlastní výroby.
          Celé odpoledne, kromě přípitku, proběhne bez alkoholu.
        </p>
      </div>
      <div className="details-point">
        <img src={needsIcon} alt="Zázemí ikona" className="details-icon" />
        <h2 className="details-title">Zázemí</h2>
        <p className="details-description">
          Na úschovu vašich věcí a převlékání bude přístupná maringotka.
          <br/>Toaleta je zde řešena suchým záchodem.
          <br/>Pitná tekoucí voda je dostupná u maringotky.
        </p>
      </div>
      <div className="details-point" onClick={handleRSVPClick} style={{ cursor: 'pointer' }}>
        <img src={rsvpIcon} alt="RSVP ikona" className="details-icon" />
        <h2 className="details-title">RSVP</h2>
        <p className="details-description">
          Kvůli omezené kapacitě je pozvánka určena pouze adresovaným osobám.
          Potvrďte prosím účast vyplněním dorazníku. Stačí kliknout kamkoliv na tuto kartu.
          <br/>Děkujeme.
        </p>
      </div>
    </div>
  );
}

export default Info;
