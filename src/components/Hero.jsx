import EmailButton from './EmailButton';
import './Hero.css';

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Abdullah Bin Mansoor</span>
        </h1>
        <h2 className="hero-subtitle">
          AI Engineer & Automation Expert
        </h2>
        <p className="hero-description">
          I help forward-thinking businesses build end-to-end machine learning and agentic AI systems. 
          From deep learning architectures to real-world deployment, I deliver scalable, production-grade intelligence.
        </p>
        <div className="hero-buttons">
          <EmailButton className="btn-primary" subject="Let's chat about a project!" text="Email: abdullah.binmansoor4@gmail.com" />
          <a href="https://www.upwork.com/freelancers/~01107fc9d26d862654" target="_blank" rel="noreferrer" className="btn-secondary">
            Hire me on Upwork
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="glowing-orb"></div>
        <div className="tech-stack-floating">
          <span className="badge">Agentic AI</span>
          <span className="badge">Computer Vision</span>
          <span className="badge">LLM & RAG</span>
          <span className="badge">Data Automation</span>
        </div>
      </div>
    </header>
  );
};

export default Hero;
