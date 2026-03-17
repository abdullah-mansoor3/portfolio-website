import EmailButton from '../components/EmailButton';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page container section" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 className="section-title">Let's Build Something Great</h1>
      <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
        Ready to optimize your business workflows or deploy your next intelligent agent? Book a strategy call or send me an email directly.
      </p>
      
      <div className="contact-options" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <EmailButton className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.2rem' }} text="Email: abdullah.binmansoor4@gmail.com" subject="Project Inquiry & Strategy Call" />
        <a href="https://www.upwork.com/freelancers/~01107fc9d26d862654" target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}>
          Hire me on Upwork
        </a>
      </div>

      <div className="social-links" style={{ marginTop: '4rem', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
        <a href="https://www.linkedin.com/in/abdullah-bin-mansoor-023a1a257/" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>LinkedIn</a>
        <a href="https://github.com/abdullah-mansoor3" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>GitHub</a>
        <a href="https://www.fiverr.com/s/yvPEoNZ" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>Fiverr</a>
      </div>
    </div>
  );
};

export default Contact;
