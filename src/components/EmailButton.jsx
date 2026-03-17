import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EmailButton = ({ text = "abdullah.binmansoor4@gmail.com", subject = "Project Inquiry", className = "btn-primary", style = {}, onClickWrapper }) => {
  const [copied, setCopied] = useState(false);
  const email = "abdullah.binmansoor4@gmail.com";
  const navigate = useNavigate();

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    
    if (onClickWrapper) onClickWrapper();

    // Trigger shockwave effect
    const shockwave = document.createElement('div');
    shockwave.className = 'shockwave';
    shockwave.style.left = `${e.clientX}px`;
    shockwave.style.top = `${e.clientY}px`;
    document.body.appendChild(shockwave);

    // Redirect to /book-a-call and clean up shockwave
    setTimeout(() => {
      setCopied(false);
      shockwave.remove();
      navigate('/book-a-call', { state: { subject } });
    }, 600);
  };

  return (
    <button className={className} style={{...style, border: 'none', fontFamily: 'inherit', fontSize: 'inherit'}} onClick={handleCopy}>
      {copied ? "Email Copied! 📋" : text}
    </button>
  );
};

export default EmailButton;
