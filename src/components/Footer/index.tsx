import { Link } from "react-router-dom";
import scss from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={scss.footer}>
      <div className="wrapperUp">
        <div className="logoBox">
          <Link to="/" className="logo"></Link>
        </div>
        <nav className="navFooter">
          <Link to="shop" className="footerLink"></Link>
          <Link to="collections" className="footerLink"></Link>
          <Link to="about" className="footerLink"></Link>
          <Link to="contact" className="footerLink"></Link>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="footerLink"
          ></a>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="footerLink"
          ></a>
        </nav>
        <div className="newsletterBox">
          <h3 className="newsletterTitle"></h3>
          <p className="newsletterText"></p>
          <form className="newsletterForm">
            <input type="email" name="" id="" className="newsletterInput" />
            <button type="submit" className="newsletterBtn"></button>
          </form>
        </div>
      </div>
      <div className="wrapperDown">
        <p className="copyright"></p>
        <ul className="socialMedia">
          <li>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="socialMediaLink"
            ></a>
          </li>
          <li>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="socialMediaLink"
            ></a>
          </li>
          <li>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="socialMediaLink"
            ></a>
          </li>
          <li>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="socialMediaLink"
            ></a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
