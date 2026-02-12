 import "../components/Hero.css"
export default function Hero() {
  return (
   <section id="home" className="hero">
  <div className="hero-content">
    
    <p className="hero-tag">Aspiring Data Scientist</p>

    <h2>
      Turning <span className="highlight">Data</span> into 
      <span className="highlight"> Intelligent Solutions</span>
    </h2>

    <p className="hero-desc">
      Computer Science student focused on Machine Learning, AI, and analytics.
      I build data-driven products that solve real-world problems.
    </p>

    <div className="hero-buttons">
      <button
        className="btn-primary"
        onClick={() =>
          document
            .getElementById("projects")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        View Projects
      </button>

    </div>

  </div>
</section>

  );
}
