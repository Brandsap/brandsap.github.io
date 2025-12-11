export default function Footer() {
  return (
    <footer id="contact" className="footer">
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
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#work">Case studies</a>
            <a href="#services">Services</a>
          </div>
          <div className="footer-column">
            <h4>Contact</h4>
            <a href="mailto:hello@brandsap.studio">hello@brandsap.studio</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
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
