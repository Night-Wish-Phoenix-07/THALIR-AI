import RobotMascot from "../components/RobotMascot.jsx";
import Stars from "../components/Stars.jsx";

const features = [
  {
    icon: "💬",
    title: "AI Friend",
    text: "Chat casually, share how you feel, and have a friendly companion by your side.",
  },
  {
    icon: "📚",
    title: "AI Teacher",
    text: "Upload your syllabus, PDFs or notes and learn one small concept at a time.",
  },
  {
    icon: "🌱",
    title: "Learning Companion",
    text: "Track your progress, revise weak topics and celebrate every win together.",
  },
];

export default function Welcome() {
  return (
    <div className="page">
      <Stars />

      <header className="nav glass">
        <div className="logo">
          <span className="logo-dot">✦</span> THALIR <span className="logo-ai">AI</span>
        </div>
        <nav className="nav-buttons">
          <button className="btn btn-ghost">Login</button>
          <button className="btn btn-soft">Sign up</button>
        </nav>
      </header>

      <main className="hero">
        <section className="hero-text">
          <p className="tagline">✨ A little friend. A big learning world.</p>
          <h1>
            Hi, I'm <span className="gradient-text">THALIR</span>!
          </h1>
          <p className="hero-sub">
            I talk with you, understand you, teach you and grow with you.
            Let's learn something wonderful today.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Start chatting 💜</button>
            <button className="btn btn-soft">Upload my syllabus</button>
          </div>
        </section>

        <section className="hero-mascot">
          <div className="mascot-glow" />
          <RobotMascot />
        </section>
      </main>

      <section className="features">
        {features.map((f) => (
          <article key={f.title} className="card glass">
            <div className="card-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </article>
        ))}
      </section>

      <footer className="footer">Made with 💜 for curious learners</footer>
    </div>
  );
}
