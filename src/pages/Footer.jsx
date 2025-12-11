import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <div className="brand-mark-wrapper">
            <span className="brand-mark" />
            <span className="brand-name">Brandsap</span>
          </div>
          <p className="footer-text">
            A small studio helping product teams design brands and websites that
            feel as focused as the products behind them.
          </p>
        </div>

        <div className="footer-right">
          <div className="footer-column">
            <h4>Studio</h4>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/process">Process</Link>
          </div>
          <div className="footer-column">
            <h4>Work</h4>
            <Link to="/customers">Customers</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} Brandsap Studio.</span>
          <span className="footer-badge">Available for new projects</span>
        </div>
      </div>
    </footer>
  );
}
