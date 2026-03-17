import { useEffect } from 'react';
import './Projects.css';
import EmailButton from '../components/EmailButton';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="projects-page">
      <div className="header-banner">
        <h1>Technical Deep Dives</h1>
        <p>A closer look at the architecture, models, and real-world results of my projects.</p>
      </div>

      <div className="container">
        
        {/* Crypto Sentinel */}
        <section id="crypto" className="project-detail">
          <h2>1. Crypto Sentinel (AI Multi-Agent System)</h2>
          <div className="tech-tags">
            <span>FastAPI</span><span>LangChain</span><span>Llama 3.3 70B</span><span>Next.js</span><span>Docker</span>
          </div>
          <div className="media-container w-full aspect-video mb-4">
            <iframe 
              width="100%" height="400" 
              src="https://www.youtube.com/embed/M3RkNGYE7vk?si=zcKwLi5_-uLu0-Vt" 
              title="Crypto Sentinel Demo" frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
          <div className="content-text">
            <p><strong>Overview:</strong> A comprehensive cryptocurrency analysis platform that uses a multi-agent AI system with ReAct reasoning to combine real-time market data, technical indicators, quantitative risk metrics, and RoBERTa-powered news sentiment analysis.</p>
            <ul>
              <li><strong>Agentic Architecture:</strong> Built an Orchestrator Agent connecting News, Technical, and Quant sub-agents.</li>
              <li><strong>Real-time Streams:</strong> WebSocket streaming of analysis steps and final Buy/Hold/Sell recommendations.</li>
              <li><strong>Quant & Tech:</strong> Integrates RSI, MACD, EMA, Sharpe, Sortino ratios, and Value at Risk (VaR).</li>
            </ul>
            <a href="https://github.com/abdullah-mansoor3/crypto-sentinel" target="_blank" rel="noreferrer" className="btn-outline">View on GitHub</a>
          </div>
        </section>

        {/* Echocardiogram */}
        <section id="echo" className="project-detail">
          <h2>2. Echocardiogram Ejection Fraction Prediction</h2>
          <div className="tech-tags">
            <span>PyTorch</span><span>YOLOv11</span><span>Deep Learning</span><span>Computer Vision</span>
          </div>
          
          <div className="media-gallery" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
             <img src="https://res.cloudinary.com/dlwnwryiu/image/upload/v1773655112/keypoints_visualization_c9fpbj.gif" alt="Keypoint Visualization" height="200" />
             <img src="https://res.cloudinary.com/dlwnwryiu/image/upload/v1773655459/esv_frame_rftwok.png" alt="ESV Frame" height="200"/>
             <img src="https://res.cloudinary.com/dlwnwryiu/image/upload/v1773655106/final-analysis_gr2zew.png" alt="Analysis" height="200"/>
          </div>

          <div className="content-text">
            <p><strong>Overview:</strong> An advanced pipeline predicting Ejection Fraction (EF) from echocardiogram videos on the EchoNet-Dynamic dataset.</p>
            <ul>
              <li><strong>Methodology:</strong> Trained a YOLOv11 pose estimation model to predict 40 anatomical keypoints outlining the Left Ventricle.</li>
              <li><strong>Frame tracking:</strong> Tracks LV areas to isolate End-Systolic (ESV) and End-Diastolic (EDV) frames.</li>
              <li><strong>Accuracy:</strong> Evaluates conditions like systolic dysfunction with 97% classification accuracy.</li>
            </ul>
            <a href="https://github.com/abdullah-mansoor3/ecocardiogram-ef-prediction" target="_blank" rel="noreferrer" className="btn-outline">View on GitHub</a>
          </div>
        </section>

        {/* ECG Digitization */}
        <section id="ecg" className="project-detail">
          <h2>3. End-to-End ECG Digitization Pipeline</h2>
          <div className="tech-tags">
            <span>YOLO</span><span>U-Net</span><span>Computer Vision</span><span>OpenCV</span>
          </div>

          <div className="media-gallery" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <img src="https://res.cloudinary.com/dlwnwryiu/image/upload/v1773655111/lead_segmentation_vsrqba.jpg" alt="Lead Segmentation" height="200"/>
            <img src="https://res.cloudinary.com/dlwnwryiu/image/upload/v1773655103/wave_extraction_xlri1i.png" alt="Wave extraction" height="200"/>
            <img src="https://res.cloudinary.com/dlwnwryiu/image/upload/v1773655116/reconstructed_ecg_paper_ul0tku.png" alt="Final Reconstruction" height="200" />
          </div>

          <div className="content-text">
            <p><strong>Overview:</strong> Full pipeline for digitizing 12-lead ECG paper recordings into highly accurate signals yielding a 90%+ diagnostic accuracy.</p>
            <ul>
              <li><strong>Pipeline:</strong> YOLO lead segmentation {'->'} grid detection & calibration {'->'} UNet wave binary extraction {'->'} 1D signal digitization {'->'} PQRS detection.</li>
              <li><strong>Scale:</strong> Evaluated and utilized on over 20k paper recordings.</li>
            </ul>
            <a href="https://github.com/abdullah-mansoor3/ecg-digitization" target="_blank" rel="noreferrer" className="btn-outline">View on GitHub</a>
          </div>
        </section>
        
        {/* Additional Video Projects */}
        <section id="other" className="project-detail">
          <h2>4. LLM Agents & NLP Tooling</h2>
          <div className="content-text">
             <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', margin: '1rem 0' }}>
               <div style={{flex: 1, minWidth: '300px'}}>
                  <h3>SQL Knowledge Graph Agent</h3>
                  <iframe width="100%" height="250" src="https://www.youtube.com/embed/xXwTQXqfHqg?si=lXcH-wWbEV1wffgy" title="SQL Agent" frameBorder="0" allowFullScreen></iframe>
                  <p className="mt-2 text-sm">Translates natural language directly to SQL using knowledge graph context.</p>
               </div>
               <div style={{flex: 1, minWidth: '300px'}}>
                  <h3>Medical Diagnostic Chatbot</h3>
                  <iframe width="100%" height="250" src="https://www.youtube.com/embed/JXeBxytPsn0?si=9zEnJio-KIkSyNYi" title="Medical Bot" frameBorder="0" allowFullScreen></iframe>
                  <p className="mt-2 text-sm">Provides differential diagnosis from demographics and medical history.</p>
               </div>
               <div style={{flex: 1, minWidth: '300px'}}>
                  <h3>Restaurant Insights Scraper (OpenTable)</h3>
                  <iframe width="100%" height="250" src="https://www.youtube.com/embed/q06eQv970dw?si=RV33uv1nWG9Mn6ce" title="Sentiment Analysis" frameBorder="0" allowFullScreen></iframe>
                  <p className="mt-2 text-sm">Automated data scraping, visualization, and Anthropic AI sentiment analysis.</p>
               </div>
             </div>
          </div>
        </section>


        {/* Call to Action Section */}
        <section className="project-detail" style={{ textAlign: 'center', marginTop: '4rem', padding: '3rem', background: 'var(--bg-secondary)', borderRadius: '12px' }}>
          <h2 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Ready to Build Your Next AI Solution?</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Whether you need a custom LLM agent, a computer vision pipeline, or a full-stack AI application, let's discuss how we can turn your ideas into reality.
          </p>
          <EmailButton className="btn-primary pulse" subject="Project Inquiry from Portfolio" text="Book a Strategy Call Now" />
        </section>

      </div>
    </div>
  );
};

export default Projects;
