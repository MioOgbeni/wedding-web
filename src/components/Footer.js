import './Footer.css'; // Import the CSS for styling
import oggyIcon from '../assets/images/oggy.svg';
import tomIcon from '../assets/images/tom.svg';
import viaIcon from '../assets/images/via.svg';
import heartIcon from '../assets/images/heart.svg';


function Footer() {
  return (
    <footer>
        <img src={heartIcon} alt="Srdce ikona" className="cat-icon" />
        <div className="cat-container">
          <img src={oggyIcon} alt="Oggy ikona" className="cat-icon" />
          <img src={tomIcon} alt="Tom ikona" className="cat-icon" />
          <img src={viaIcon} alt="Via ikona" className="cat-icon" />
        </div>
        <p className="author">Lucie & Tomáš</p>
        <p className="author">24–8–24</p>
    </footer>
  );
}

export default Footer;
