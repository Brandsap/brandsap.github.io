import Hero from "../components/Hero.jsx";
import ShowcaseSection from "../components/ShowcaseSection.jsx";
import FeatureSection from "../components/FeatureSection.jsx";

export default function Home() {
  return (
    <>
      <section className="section hero-section">
        <Hero />
      </section>

      <section className="section">
        <ShowcaseSection />
      </section>

      <section className="section">
        <FeatureSection />
      </section>
    </>
  );
}
