import { useNavigate } from "react-router-dom";

const CARDS = [
  {
    label: "Purpose-built",
    title: "Built for product-led brands",
    body: "Position your brand around outcomes, not buzzwords. Clear messaging, sharp visuals, and interfaces that feel instantly familiar.",
  },
  {
    label: "Fast execution",
    title: "Move from idea to launch quickly",
    body: "We design and build in parallel – so you can review live prototypes early, iterate fast, and launch on time.",
  },
  {
    label: "Crafted detail",
    title: "Delight in the micro-interactions",
    body: "Hover states, transitions, and micro-copy are treated as first-class citizens, not afterthoughts.",
  },
];

export default function ShowcaseSection() {
  const navigate = useNavigate(); // 👈 IMPORTANT — now navigate is defined

  return (
    <div className="container">
      <div className="section-heading">
        <div>
          <div className="pill pill-outline">Made for modern teams</div>
          <h2>Product-grade brand experiences</h2>
        </div>
        <p>
          Brandsap combines product thinking with visual design. The result is a
          website that feels as polished and responsive as your product.
        </p>
      </div>

      <div className="card-grid">
        {CARDS.map((card) => (
          <article key={card.title} className="showcase-card glass-card">
            <div className="card-label">{card.label}</div>
            <h3>{card.title}</h3>
            <p>{card.body}</p>

            <button
              className="text-link"
              onClick={() => navigate("/process")}
            >
              Learn more <span>↗</span>
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
