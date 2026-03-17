import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import EmailButton from '../components/EmailButton';
import './Home.css';

const Home = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.animate-on-scroll');
    hiddenElements.forEach((el) => {
      if (observerRef.current) observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="home">
      <Hero />
      
      {/* Client-Centric Value Proposition */}
      <section className="section value-prop animate-on-scroll">
        <div className="container">
          <h2 className="section-title">Are you struggling to turn raw data into actionable intelligence?</h2>
          <p className="section-subtitle">
            I help businesses integrate highly accurate AI/ML models, scalable automation tools, and computer vision pipelines to drive measurable results. 
            Stop experimenting and start deploying robust solutions.
          </p>
          
          <div className="stats-container">
            <div className="stat-card">
              <h3>20+</h3>
              <p>Development Projects Delivered</p>
            </div>
            <div className="stat-card">
              <h3>90%+</h3>
              <p>Accuracy Realized in Healthtech/Fintech</p>
            </div>
            <div className="stat-card">
              <h3>3+</h3>
              <p>Major Research Projects Completed</p>
            </div>
            <div className="stat-card">
              <h3>15k+</h3>
              <p>Business Leads Automated</p>
            </div>
          </div>
          <div className="btn-container" style={{ marginTop: '2rem', textAlign: 'center' }}>
            <EmailButton className="btn-primary pulse" subject="Inquiry to Book a Call" text="Book a Strategy Call Now" />
          </div>
        </div>
      </section>

      {/* Simplified Project Previews */}
      <section className="section featured-work bg-secondary animate-on-scroll">
        <div className="container">
          <h2 className="section-title">Case Studies & Impact</h2>
          <p className="section-subtitle" style={{marginBottom: "2rem"}}>
            Here is a sneak peek of how I've solved complex business problems using AI. 
            For technical architectures and deep dives, view my <Link to="/projects" className="text-link">Projects page</Link>.
          </p>
          
          <div className="project-grid">
            <div className="project-card">
              <div className="project-content">
                <h3>Cardiology Signal Digitization (HealthTech)</h3>
                <p>
                  Built an end-to-end pipeline to automatically digitize 20k+ paper ECG records. 
                  Resulted in highly efficient processing that boosted diagnostic accuracy to 90%+ 
                  and saved countless hours of manual data entry.
                </p>
                <Link to="/projects#ecg" className="btn-secondary">See Technical Details</Link>
              </div>
            </div>

            <div className="project-card">
              <div className="project-content">
                <h3>Crypto Sentinel (FinTech AI Agent)</h3>
                <p>
                  Engineered a real-time autonomous agent that aggregates technical trading indicators, 
                  sentiment analysis, and quantitative risk metrics for smart crypto investments.
                </p>
                <Link to="/projects#crypto" className="btn-secondary">See Technical Details</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Banner - Sandwich Tactic */}
      <section className="section cta-banner animate-on-scroll">
        <div className="container cta-container">
          <h2>Ready to supercharge your business with AI?</h2>
          <p>Let's map out your next intelligent solution on a quick discovery call.</p>
          <div className="social-links" style={{margin: "1rem 0"}}>
             <a href="https://www.linkedin.com/in/abdullah-bin-mansoor-023a1a257/" target="_blank" rel="noreferrer">LinkedIn</a> |
             <a href="https://www.upwork.com/freelancers/~01107fc9d26d862654" target="_blank" rel="noreferrer">Upwork</a> |
             <a href="https://www.fiverr.com/s/yvPEoNZ" target="_blank" rel="noreferrer">Fiverr</a>
          </div>
          <EmailButton className="btn-primary" subject="Project Inquiry" text="Email Me: abdullah.binmansoor4@gmail.com" />
        </div>
      </section>
    </div>
  );
};

export default Home;
