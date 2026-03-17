import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './BookACall.css';

const BookACall = () => {
  const location = useLocation();
  const [copiedSubject, setCopiedSubject] = useState(false);
  const [copiedBody, setCopiedBody] = useState(false);
  
  const initSubject = location.state?.subject || "Project Inquiry and Strategy Call";
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const emailBody = `Hi Abdullah,\n\nI am reaching out regarding a potential project. \n\nHere are some initial details:\n- \n- \n\nI would love to book a strategy call with you to discuss this further.\n\nBest regards,\n[Your Name]`;

  const copyToClipboard = (text, setCopiedField) => {
    navigator.clipboard.writeText(text);
    setCopiedField(true);
    setTimeout(() => {
      setCopiedField(false);
    }, 2000);
  };

  return (
    <div className="book-a-call-page container section" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 className="section-title">Let's Connect!</h1>
      <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
        To book a call, simply email me. <br/> <strong style={{color: 'var(--accent)'}}>My email (abdullah.binmansoor4@gmail.com) is already copied to your clipboard!</strong>
      </p>

      <div className="email-template-container" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '2rem', width: '100%', maxWidth: '700px', textAlign: 'left' }}>
        <h3 style={{ marginBottom: '1.5rem', color: 'white', textAlign: 'center' }}>Email Template</h3>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 'bold' }}>To:</label>
          <div style={{ padding: '0.8rem', background: 'var(--bg-primary)', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
            abdullah.binmansoor4@gmail.com
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <label style={{ color: 'var(--text-secondary)', fontWeight: 'bold' }}>Subject:</label>
            <button onClick={() => copyToClipboard(initSubject, setCopiedSubject)} className="btn-secondary" style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem', borderRadius: '4px' }}>
              {copiedSubject ? "Copied!" : "Copy"}
            </button>
          </div>
          <div style={{ padding: '0.8rem', background: 'var(--bg-primary)', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
            {initSubject}
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <label style={{ color: 'var(--text-secondary)', fontWeight: 'bold' }}>Body:</label>
            <button onClick={() => copyToClipboard(emailBody, setCopiedBody)} className="btn-secondary" style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem', borderRadius: '4px' }}>
              {copiedBody ? "Copied!" : "Copy"}
            </button>
          </div>
          <pre style={{ padding: '1rem', background: 'var(--bg-primary)', borderRadius: '6px', border: '1px solid var(--border-color)', whiteSpace: 'pre-wrap', fontFamily: 'inherit', color: 'var(--text-primary)', lineHeight: '1.6' }}>
            {emailBody}
          </pre>
        </div>
        
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Open your email client, paste the email address into the "To" field, and paste the template to get started!</p>
        </div>
      </div>
    </div>
  );
};

export default BookACall;
