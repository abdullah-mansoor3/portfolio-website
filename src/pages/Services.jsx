import { useEffect, useRef } from 'react';
import EmailButton from '../components/EmailButton';
import './Services.css';

const Services = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
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

  const servicesData = [
    {
      id: "llm",
      title: "Custom AI Applications & LLM Systems",
      description: "I design and build AI-powered applications that integrate large language models into real products and workflows. These systems can analyze documents, answer questions, automate decisions, and assist users in real time.",
      useCases: [
        "RAG document question answering systems",
        "AI copilots and assistants",
        "Knowledge base chatbots",
        "Internal company AI tools",
        "AI-powered dashboards"
      ],
      tech: ["Python", "LangChain", "OpenAI API", "Vector Databases", "FastAPI", "Next.js"],
      diagram: "Documents → Embeddings → Vector DB → LLM → Answer",
      icon: "🧠"
    },
    {
      id: "automation",
      title: "AI Automation & Intelligent Workflows",
      description: "I build automation systems that combine APIs, AI models, and workflow tools to eliminate repetitive work and improve business processes. These systems connect different platforms and use AI to analyze data and make decisions automatically.",
      useCases: [
        "Lead qualification automation",
        "AI-powered CRM workflows",
        "Automated content analysis",
        "Data enrichment pipelines",
        "AI-powered business processes"
      ],
      tech: ["Python", "n8n", "APIs", "Automation Pipelines"],
      diagram: "Form submission → AI analysis → CRM update → Notification",
      icon: "⚡"
    },
    {
      id: "ml",
      title: "Machine Learning Model Development",
      description: "I develop machine learning models that extract insights from data and support decision-making. From forecasting systems to classification models, I focus on building models that are accurate, explainable, and deployable.",
      useCases: [
        "Financial forecasting models",
        "Predictive analytics systems",
        "Classification and recommendation models",
        "Anomaly detection systems"
      ],
      tech: ["TensorFlow", "PyTorch", "Scikit-learn", "Python"],
      icon: "📊"
    },
    {
      id: "cv",
      title: "Computer Vision & Image Analysis",
      description: "I build computer vision systems that detect objects, analyze images, and extract structured information from visual data. These systems can be deployed for automation, inspection, medical analysis, or real-time detection tasks.",
      useCases: [
        "Object detection systems",
        "Medical image analysis",
        "Automated document extraction",
        "Visual quality inspection"
      ],
      tech: ["YOLO", "OpenCV", "PyTorch", "TensorFlow Lite"],
      icon: "👁️"
    },
    {
      id: "scraping",
      title: "Data Extraction & Web Scraping",
      description: "I build data collection systems that gather and structure information from websites, directories, and APIs. These pipelines are designed to produce clean datasets that can be used for analytics, machine learning, or business operations.",
      useCases: [
        "Lead generation datasets",
        "Product and pricing data collection",
        "Market intelligence pipelines",
        "Automated business data extraction"
      ],
      tech: ["Python", "BeautifulSoup", "Selenium", "Data Pipelines"],
      icon: "🕷️"
    },
    {
      id: "deployment",
      title: "AI Deployment & System Integration",
      description: "Building the model is only part of the solution — the real value comes from integrating AI into usable systems. I deploy AI models as APIs and integrate them into applications so they can be used reliably in production environments.",
      useCases: [
        "Deploying ML models as APIs",
        "Integrating AI into web apps",
        "Automation pipelines powered by AI",
        "Lightweight model deployment"
      ],
      tech: ["FastAPI", "Docker", "REST APIs", "Cloud Services"],
      icon: "🚀"
    }
  ];

  return (
    <div className="services-page">
      <div className="services-header animate-on-scroll">
        <h1 className="section-title">Services</h1>
        <p className="section-subtitle">
          I help businesses turn data, models, and automation into practical AI systems that solve real problems.
        </p>
      </div>

      <div className="container">
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={service.id} className="service-card animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-icon">{service.icon}</div>
              <h2 className="service-title">{service.title}</h2>
              <p className="service-desc">{service.description}</p>
              
              {service.diagram && (
                <div className="service-diagram">
                  <span className="diagram-label">Workflow:</span>
                  <code>{service.diagram}</code>
                </div>
              )}

              <div className="service-details">
                <div className="use-cases">
                  <h3>Example Use Cases:</h3>
                  <ul>
                    {service.useCases.map((useCase, i) => (
                      <li key={i}>{useCase}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="technologies">
                  <h3>Technologies:</h3>
                  <div className="tech-tags">
                    {service.tech.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Bridge CTA */}
      <section className="trust-bridge animate-on-scroll">
        <div className="container" style={{ textAlign: "center", maxWidth: "800px" }}>
          <h2>Not sure which service fits your project?</h2>
          <p>
            If you have an idea or problem you want to solve with AI or automation, feel free to reach out. I’m happy to discuss the project and suggest the best approach.
          </p>
          <EmailButton className="btn-primary pulse" style={{ marginTop: "2rem" }} subject="Project Inquiry" text="Contact Me" />
        </div>
      </section>
    </div>
  );
};

export default Services;
