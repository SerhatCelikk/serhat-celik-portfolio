import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h2>Serhat Çelik</h2>
        </div>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={location.pathname === '/about' ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/projects" 
            className={location.pathname === '/projects' ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link 
            to="/contact" 
            className={location.pathname === '/contact' ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="home">
      <section className={`hero ${isVisible ? 'visible' : ''}`}>
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hi, I'm <span className="gradient-text">Serhat Çelik</span>
            </h1>
            <h2>Frontend Developer</h2>
            <p className="hero-description">
              I craft pixel-perfect, responsive user interfaces with React, TypeScript, and modern web technologies. 
              With 3+ years of experience, I transform designs into engaging digital experiences.
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">View My Work</Link>
              <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card">
              <div className="card-content">
                <div className="tech-icon">⚛️</div>
                <h3>React</h3>
              </div>
            </div>
            <div className="floating-card" style={{animationDelay: '0.3s'}}>
              <div className="card-content">
                <div className="tech-icon">💎</div>
                <h3>TypeScript</h3>
              </div>
            </div>
            <div className="floating-card" style={{animationDelay: '0.6s'}}>
              <div className="card-content">
                <div className="tech-icon">🐍</div>
                <h3>Python</h3>
              </div>
            </div>
            <div className="floating-card" style={{animationDelay: '0.9s'}}>
              <div className="card-content">
                <div className="tech-icon">🏗️</div>
                <h3>HTML5</h3>
              </div>
            </div>
            <div className="floating-card" style={{animationDelay: '1.2s'}}>
              <div className="card-content">
                <div className="tech-icon">🎨</div>
                <h3>CSS</h3>
              </div>
            </div>
            <div className="floating-card" style={{animationDelay: '1.5s'}}>
              <div className="card-content">
                <div className="tech-icon">📱</div>
                <h3>Responsive</h3>
              </div>
            </div>
          </div>
        </div>
        <Link to="/projects" className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </Link>
      </section>
    </main>
  );
}

function About() {
  return (
    <main className="about">
      <div className="container">
        <section className="about-intro">
          <h1>About Me</h1>
          <p className="lead">
            Software Engineer with a passion for creating exceptional user experiences
          </p>
        </section>

        <section className="about-content">
          <div className="about-grid">
            <div className="about-text">
              <h3>Background</h3>
              <p>
                I hold a Bachelor's in Software Engineering from Maltepe University and have over three years of hands-on experience building responsive, pixel-perfect UIs with React, TypeScript and SASS.
              </p>
              
              <h3>Experience</h3>
              <div className="experience-item">
                <h4>Valentura Investment Technologies</h4>
                <span className="period">Aug 2022 – Aug 2023</span>
                <p>Built and shipped multiple production applications including TokenDoIt, NFTDoIt, and Playland mobile app.</p>
              </div>
              
              <div className="experience-item">
                <h4>Doping Technology</h4>
                <span className="period">Internship</span>
                <p>Contributed to R&D web features and closed frontend bugs in an Agile workflow.</p>
              </div>

              <h3>Skills & Expertise</h3>
              <p>
                These experiences have sharpened my expertise in state management, RESTful APIs, Webpack/Babel bundling, performance optimizations and WCAG-compliant accessibility. I thrive in international, multidisciplinary teams and take pride in writing clean, testable code (unit & end-to-end).
              </p>
              
              <p>
                I am advanced in reading and understanding English and can communicate effectively; although I sometimes search for the right word when speaking, I have dedicated three hours every day for the past week to further improve my spoken English. I believe strong English skills are essential for collaborating in international teams.
              </p>
            </div>

            <div className="skills-grid">
              <div className="skill-category">
                <h4>Frontend</h4>
                <div className="skills">
                  <span className="skill">React</span>
                  <span className="skill">React Native</span>
                  <span className="skill">TypeScript</span>
                  <span className="skill">JavaScript</span>
                  <span className="skill">SASS/CSS</span>
                  <span className="skill">Next.js</span>
                  <span className="skill">Vite.js</span>
                  <span className="skill">Web3.js</span>
                  <span className="skill">HTML5</span>
                </div>
              </div>

              
              <div className="skill-category">
                <h4>Tools & Others</h4>
                <div className="skills">
                  <span className="skill">Webpack</span>
                  <span className="skill">Babel</span>
                  <span className="skill">Git</span>
                  <span className="skill">REST APIs</span>
                  <span className="skill">Testing</span>
                  <span className="skill">Solidity</span>
                  <span className="skill">Python</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function Projects() {
  const projects = [
    {
      title: "TokenDoIt",
      description: "A comprehensive token management platform built with React and modern web technologies.",
      link: "https://tokendoit.com/",
      tech: ["React", "TypeScript", "SASS"],
      type: "Web Platform"
    },
    {
      title: "NFTDoIt",
      description: "NFT marketplace and management system with intuitive user interface.",
      link: "https://nftdoit.net/",
      tech: ["React", "Web3", "CSS"],
      type: "Web Platform"
    },
    {
      title: "Playland Mobile App",
      description: "Mobile gaming application with engaging user experience.",
      link: "https://play.google.com/store/apps/details?id=com.playlandmobile&hl=tr",
      tech: ["React Native", "Mobile UI"],
      type: "Mobile App"
    },
    {
      title: "Gençlik Otobüsü",
      description: "Android app and website for youth transportation services.",
      link: "https://play.google.com/store/apps/details?id=com.serhatcelik.genclikotobusu",
      tech: ["Android", "Web Development"],
      type: "Mobile & Web"
    },
    {
      title: "BeesForce Marketing Site",
      description: "Modern marketing website with responsive design and smooth animations.",
      link: "https://fe-beesforce.vercel.app/",
      tech: ["React", "CSS Animations"],
      type: "Marketing Site"
    },
    {
      title: "Next.js Case Study",
      description: "Pixel-perfect, responsive implementation showcasing modern web development practices.",
      link: "https://nextjs-baykar-case.vercel.app/",
      tech: ["Next.js", "TypeScript", "Responsive Design"],
      type: "Case Study"
    },
    {
      title: "Güvenle Geziyorum",
      description: "Travel guide platform providing safe travel recommendations and information.",
      link: "https://www.guvenlegeziyorum.com/",
      tech: ["React", "Travel APIs"],
      type: "Travel Platform"
    }
  ];

  return (
    <main className="projects">
      <div className="container">
        <section className="projects-intro">
          <h1>Projects</h1>
          <p className="lead">
            A collection of projects showcasing my expertise in frontend development
          </p>
        </section>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <span className="project-type">{project.type}</span>
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create email in mailto format
    const emailTo = 'serhatcelikyazilim@gmail.com';
    const subject = encodeURIComponent(formData.subject || 'Contact Form - Portfolio');
    const body = encodeURIComponent(
      `Hello Serhat,\n\n` +
      `Name: ${formData.name}\n` +
      // `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `This message was sent from your portfolio website.`
    );

    const mailtoUrl = `mailto:serhatcelikyazilim@gmail.com?subject=${subject}&body=${body}`;

    // Open mail application
    window.location.href = mailtoUrl;

    // Clear form data
    setFormData({
      name: '',
      message: '',
      subject: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="contact">
      <div className="container">
        <section className="contact-intro">
          <h1>Get In Touch</h1>
          <p className="lead">
            Let's discuss your next project or collaboration opportunity
          </p>
        </section>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in hearing about new opportunities and exciting projects.
              Whether you're looking for a frontend developer or want to collaborate on something amazing,
              I'd love to hear from you.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <h4>📧 Email</h4>
                <p>serhatcelikyazilim@gmail.com</p>
              </div>
              <div className="contact-method">
                <h4>💼 LinkedIn</h4>
                <p>linkedin.com/in/serhat-celik1</p>
              </div>
              <div className="contact-method">
                <h4>🐙 GitHub</h4>
                <p>github.com/SerhatCelikk</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>

            {/* <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="example@email.com"
              />
            </div> */}

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject of your message"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Email
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
