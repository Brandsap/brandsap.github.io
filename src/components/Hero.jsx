// src/components/Hero.jsx
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="section hero-section">
      <div className="container hero-grid">
        {/* LEFT SIDE */}
        <div className="hero-copy">
          <div className="pill pill-soft hero-pill">
            <span className="pill-dot" />
            BRANDSAP • Brand • Strategy • Digital
          </div>

          <h1 className="hero-title">
            Shape a brand
            <br />
            that sticks in memory.
          </h1>

          <p className="hero-subtitle">
            We help modern teams turn ideas into sharp, memorable digital
            experiences – from visual identity and websites to launch-ready
            campaigns.
          </p>

          <div className="hero-actions">
            {/* Go to Contact page */}
            <button
              className="primary-btn hero-primary"
              onClick={() => navigate("/contact")}
            >
              Start building
            </button>

            {/* Go to Services / portfolio page */}
            <button
              className="ghost-btn hero-ghost"
              onClick={() => navigate("/services")}
            >
              View work
            </button>
          </div>

          <div className="hero-meta">
            <span className="meta-label">Made for modern brands</span>
            <span className="meta-dot" />
            <span>Strategy, design &amp; web in one place.</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-visual">
          <div className="hero-card hero-card-main glass-card">
            <div className="hero-card-header">
              <span className="chip chip-green">Brand system</span>
              <span className="chip chip-neutral">Live preview</span>
            </div>

            <div className="hero-card-body">
              <div className="badge-row">
                <div className="badge-pill">
                  <span className="badge-dot" />
                  Logo &amp; identity
                </div>
                <div className="badge-pill">Web experience</div>
              </div>

              <div className="stacked-panels">
                <div className="panel panel-top">
                  <span className="panel-label">Launch timeline</span>
                  <span className="panel-value">4–6 weeks</span>
                </div>

                <div className="panel panel-middle">
                  <span className="panel-label">Brand clarity</span>
                  <span className="panel-bar">
                    <span className="panel-bar-fill" />
                  </span>
                </div>

                <div className="panel panel-bottom">
                  <span className="panel-label">Conversion uplift</span>
                  <span className="panel-value">+32%</span>
                </div>
              </div>
            </div>
          </div>

          {/* FLOATING CARD – always in front & gently moving */}
          <div className="hero-card hero-card-float glass-card">
            <span className="chip chip-purple">Micro-site</span>
            <h3 className="hero-card-title">Interactive brand stories</h3>
            <p className="hero-card-text">
              Scroll-based animations and subtle motion that keep visitors
              engaged without feeling heavy.
            </p>
          </div>

          {/* we’re hiding these in CSS, but keep markup in case we want glows later */}
          <div className="hero-glow hero-glow-1" />
          <div className="hero-glow hero-glow-2" />
        </div>
      </div>
    </section>
  );
}
