import { useState } from 'react';

const EmailButton = ({ text = "abdullah.binmansoor4@gmail.com", subject = "Project Inquiry", className = "btn-primary", style = {}, onClickWrapper }) => {
  const [copied, setCopied] = useState(false);
  const email = "abdullah.binmansoor4@gmail.com";

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    
    if (onClickWrapper) onClickWrapper();

    // Redirect to email client after a short delay so they see the copied message
    setTimeout(() => {
      setCopied(false);
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    }, 1500);
  };

  return (
    <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}`} className={className} style={style} onClick={handleCopy}>
      {copied ? "Email Copied! 📋" : text}
    </a>
  );
};

export default EmailButton;
