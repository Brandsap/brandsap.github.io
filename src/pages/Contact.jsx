export default function Contact() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading section-heading-center">
          <div className="pill pill-soft">Contact</div>
          <h2>Tell us about your next launch.</h2>
          <p>
            Share a few details about your product, timeline, and what you’d
            like to build. We’ll reply with next steps and availability.
          </p>
        </div>

        <div className="hero-card hero-card-main glass-card" style={{ maxWidth: 560, margin: "0 auto" }}>
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! We’ll get back to you shortly.");
            }}
          >
            <div className="input-row">
              <div className="input-group">
                <label>Name</label>
                <input type="text" required />
              </div>
              <div className="input-group">
                <label>Email</label>
                <input type="email" required />
              </div>
            </div>

            <div className="input-group">
              <label>Company / product</label>
              <input type="text" required />
            </div>

            <div className="input-group">
              <label>What are you looking to create?</label>
              <textarea rows="4" required />
            </div>

            <button type="submit" className="primary-btn" style={{ width: "100%", marginTop: "0.6rem" }}>
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
