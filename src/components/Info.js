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
import needsIcon from '../assets/images/zazemi2.svg';
import rsvpIcon from '../assets/images/rsvp.svg';
import animalsIcon from '../assets/images/zvirata.svg';

function Info() {
  const navigate = useNavigate();

  const handleRSVPClick = () => {
    navigate('/rsvp');
  };

  return (
    <div className="details-container">
      {/* <h1 className="details-header">INFORMACE</h1> */}
      <div className="details-point" onClick={handleRSVPClick} style={{ cursor: 'pointer' }}>
        <img src={rsvpIcon} alt="RSVP ikona" className="details-icon" />
        <h2 className="details-title">RSVP</h2>
        <p className="details-description">
          Kvůli omezené kapacitě je pozvánka určena pouze adresovaným osobám.
          Potvrďte prosím účast vyplněním dorazníku. Stačí kliknout kamkoliv na tuto kartu.
          <br/>Děkujeme.
        </p>
      </div>
      <div className="details-point">
        <img src={weatherIcon} alt="Počasí ikona" className="details-icon" />
        <h2 className="details-title">Počasí</h2>
        <p className="details-description">
          Obřad se bude konat venku na zahradě za jakéhokoliv počasí, proto prosím počítejte s&nbsp;přímým sluncem, větrem a&nbsp;deštěm.
          V&nbsp;deštivém období zde bývá problém s&nbsp;podmáčenou půdou, vyberte svou obuv a&nbsp;oblečení s&nbsp;ohledem na tuto informaci.
        </p>
      </div>
      <div className="details-point">
        <img src={dresscodeIcon} alt="Dresscode ikona" className="details-icon" />
        <h2 className="details-title">Dresscode</h2>
        <p className="details-description">
          Pohodlné oblečení vhodné na zahradu ke grilování a&nbsp;otevřenému ohni.
          Saka a&nbsp;drahé róby nechte prosím doma.
          Kraťasy a&nbsp;žabky jsou povoleny! Barevnost oděvu ponecháme na vás.
          Budeme rádi, pokud se vyvarujete křiklavým barvám a&nbsp;zelené.
        </p>
      </div>
      <div className="details-point">
        <img src={transportIcon} alt="Doprava ikona" className="details-icon" />
        <h2 className="details-title">Doprava</h2>
        <p className="details-description">
          Pokud potřebujete zařídit dopravu z/do Trokavce, dejte včas vědět skrze formulář.
          Pokusíme se vám ji zajistit s&nbsp;ostatními svatebčany, kteří jedou autem z&nbsp;Prahy, Plzně či Rokycan.
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
        <img src={needsIcon} alt="Zázemí ikona" className="details-icon" />
        <h2 className="details-title">Zázemí</h2>
        <p className="details-description">
        Na úschovu vašich věcí a&nbsp;převlékání bude přístupná maringotka.
        Sedět budeme venku u&nbsp;ohně na dřevěných paletách, židlích či dekách. Počítejte s&nbsp;tím, že se můžete ušpinit.
        Toaleta je zde řešena suchým záchodem.
        Tekoucí pitná voda je dostupná venku u&nbsp;maringotky.
        </p>
      </div>
      <div className="details-point">
        <img src={animalsIcon} alt="Zvířata ikona" className="details-icon" />
        <h2 className="details-title">Zvířata</h2>
        <p className="details-description">
          Prosíme, abyste ničím nekrmili žádné z&nbsp;přítomných zvířat.
          Chodit k&nbsp;ovcím a&nbsp;kravám je z&nbsp;důvodu bezpečnosti zakázáno.
          Děkujeme za respektování těchto pravidel a&nbsp;přání majitelů.
        </p>
      </div>
      <div className="details-point">
        <img src={photosIcon} alt="Fotografování ikona" className="details-icon" />
        <h2 className="details-title">Fotografování</h2>
        <p className="details-description">
          Prosíme, abyste během celého dne nedělali záznamy
          vlastními mobily či fotoaparáty. Máme zajištěného vlastního fotografa
          a&nbsp;pořízené fotografie vám následně rádi poskytneme.
        </p>
      </div>
      <div className="details-point">
        <img src={cateringIcon} alt="Občerstvení ikona" className="details-icon" />
        <h2 className="details-title">Občerstvení</h2>
        <p className="details-description">
          Zajištěny budou suroviny na grilování a&nbsp;další drobné občerstvení. 
          Budeme však rádi, když sebou přinesete něco dobrého vlastní výroby.
          Celé odpoledne, kromě přípitku, proběhne bez alkoholu.
        </p>
      </div>
      <div className="details-point">
        <img src={sleepingIcon} alt="Přespání ikona" className="details-icon" />
        <h2 className="details-title">Přespání</h2>
        <p className="details-description">
          Přespání není zajištěno. Po předchozí domluvě můžeme zajistit
          stanování na pozemku u&nbsp;maringotky ve vlastním stanu
          nebo doporučit ubytování v okolí.
        </p>
      </div>
    </div>
  );
}

export default Info;
