const FEATURES = [
  {
    tag: "Strategy",
    title: "Brand foundations",
    body: "Workshops, positioning, and messaging systems that keep every touchpoint aligned.",
    items: ["Positioning & narrative", "Voice and tone", "Launch roadmap"],
  },
  {
    tag: "Design",
    title: "Visual identity",
    body: "Logos, color systems, and component libraries tuned for digital products.",
    items: ["Logo suites", "Design tokens", "UI component kit"],
  },
  {
    tag: "Digital",
    title: "Web & product",
    body: "Responsive marketing sites and product-adjacent experiences built in React.",
    items: ["Landing pages", "Product marketing", "Interactive demos"],
  },
];

export default function FeatureSection() {
  return (
    <div className="container">
      <div className="section-heading section-heading-center">
        <div className="pill pill-soft">What we ship</div>
        <h2>Everything your brand needs to launch and grow.</h2>
        <p>
          From first concept to live website, we stay with you through each
          iteration so your brand evolves with your product.
        </p>
      </div>

      <div className="feature-grid">
        {FEATURES.map((feat) => (
          <article key={feat.title} className="feature-card glass-card">
            <span className="chip chip-neutral">{feat.tag}</span>
            <h3>{feat.title}</h3>
            <p>{feat.body}</p>
            <ul>
              {feat.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
