import './Footer.css'; // Import the CSS for styling
import oggyIcon from '../assets/images/oggy.svg';
import tomIcon from '../assets/images/tom.svg';
import viaIcon from '../assets/images/via.svg';


function Footer() {
  return (
    <footer>
        <p className="author">Lucie & Tomáš</p>
        <p className="author">2024</p>
        <p className="author">❤️</p>
        <div className="cat-container">
          <img src={oggyIcon} alt="Oggy ikona" className="cat-icon" />
          <img src={tomIcon} alt="Tom ikona" className="cat-icon" />
          <img src={viaIcon} alt="Via ikona" className="cat-icon" />
        </div>
    </footer>
  );
}

export default Footer;
