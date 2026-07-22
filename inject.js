const fs = require('fs');

const tsFile = fs.readFileSync('frontend/src/app/pages/landing/landing.component.ts', 'utf8');
const htmlFile = fs.readFileSync('frontend/src/app/pages/landing/landing.component.html', 'utf8');
const cssFile = fs.readFileSync('frontend/src/app/pages/landing/landing.css', 'utf8');

// Extract arrays using regex
function extractArray(name) {
    const regex = new RegExp(`(?:${name})\\s*=\\s*(\\[[\\s\\S]*?\\]);`);
    const match = tsFile.match(regex);
    return match ? match[1] : '[]';
}

const trustedCompanyLogos = extractArray('trustedCompanyLogos');
const features = extractArray('features');
const carouselImages = extractArray('carouselImages');
const stats = extractArray('stats');
const testimonials = extractArray('testimonials');
const faqs = extractArray('faqs');

// Convert HTML to JSX
let jsx = htmlFile;
jsx = jsx.replace(/<!--[\s\S]*?-->/g, ''); // Remove comments
jsx = jsx.replace(/class=/g, 'className=');
jsx = jsx.replace(/<img(.*?)>/g, (m, p1) => `<img${p1.replace(/\/$/, '')} />`);
jsx = jsx.replace(/<input(.*?)>/g, (m, p1) => `<input${p1.replace(/\/$/, '')} />`);
jsx = jsx.replace(/<br>/g, '<br />');

// Remove Angular directives
jsx = jsx.replace(/\[class\.([a-zA-Z0-9_-]+)\]="([^"]+)"/g, ''); // Will handle classes manually
jsx = jsx.replace(/\[ngClass\]="[^"]+"/g, ''); 
jsx = jsx.replace(/\*ngIf="([^"]+)"/g, ''); 
jsx = jsx.replace(/\*ngFor="let ([a-zA-Z0-9_]+) of ([a-zA-Z0-9_]+)(?:; let i = index)?"/g, ''); 
jsx = jsx.replace(/#navItem/g, ''); 
jsx = jsx.replace(/@fadeSlideUp/g, '');

// Basic bindings
jsx = jsx.replace(/\(click\)="([^"]+)"/g, (match, fn) => {
    let call = fn.includes('(') ? fn : `${fn}()`;
    if(call.includes('$event')) call = call.replace('$event', 'e');
    return `onClick={(e) => { ${call} }}`;
});
jsx = jsx.replace(/\[src\]="([^"]+)"/g, 'src={$1}');
jsx = jsx.replace(/\[alt\]="([^"]+)"/g, 'alt={$1}');
jsx = jsx.replace(/\[ngStyle\]="([^"]+)"/g, 'style={$1}');
jsx = jsx.replace(/\[style\.transform\]="([^"]+)"/g, 'style={{ transform: $1 }}');

// Replace {{ variable }} with { variable }
jsx = jsx.replace(/\{\{\s*([^}]+)\s*\}\}/g, '{$1}');

// Handle inline styles correctly (object format)
jsx = jsx.replace(/style="([^"]+)"/g, (match, styleStr) => {
    const styleObj = {};
    styleStr.split(';').forEach(s => {
        if(!s.trim()) return;
        let [key, val] = s.split(':');
        if (key && val) {
            key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
            styleObj[key] = val.trim();
        }
    });
    return `style={${JSON.stringify(styleObj)}}`;
});

// Create the React Component
const componentCode = `
        const LandingView = ({ onEnter }) => {
            const [isScrolled, setIsScrolled] = React.useState(false);
            const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
            const [hasSeenSolutions, setHasSeenSolutions] = React.useState(false);
            const [hasSeenStats, setHasSeenStats] = React.useState(false);
            const [hasSeenFeaturesHeader, setHasSeenFeaturesHeader] = React.useState(false);
            const [hasSeenTestimonials, setHasSeenTestimonials] = React.useState(false);
            const [hasSeenAbout, setHasSeenAbout] = React.useState(false);
            const [hasSeenCTA, setHasSeenCTA] = React.useState(false);
            const [activeFaqIndex, setActiveFaqIndex] = React.useState(null);
            const [activeSection, setActiveSection] = React.useState('home');
            const [indicatorStyle, setIndicatorStyle] = React.useState({ left: '0px', width: '0px', opacity: 0 });
            
            const [isAuthAnimating, setIsAuthAnimating] = React.useState(false);
            const [activeFeatureModal, setActiveFeatureModal] = React.useState(null);
            const [activeCarouselIndex, setActiveCarouselIndex] = React.useState(2);

            const trustedCompanyLogos = ${trustedCompanyLogos};
            const features = ${features};
            const carouselImages = ${carouselImages};
            const stats = ${stats};
            const testimonials = ${testimonials};
            const faqs = ${faqs};
            const sections = ['home', 'features', 'solutions', 'about', 'contact'];

            React.useEffect(() => {
                const handleScroll = () => {
                    setIsScrolled(window.scrollY > 50);
                    let currentSection = 'home';
                    for (const section of sections) {
                        const element = document.getElementById(section);
                        if (element) {
                            const rect = element.getBoundingClientRect();
                            if (rect.top <= 250) currentSection = section;
                        }
                    }
                    if (currentSection === 'solutions') setHasSeenSolutions(true);
                    if (document.getElementById('trusted')?.getBoundingClientRect().top <= window.innerHeight - 100) setHasSeenStats(true);
                    if (document.getElementById('features')?.getBoundingClientRect().top <= window.innerHeight - 100) setHasSeenFeaturesHeader(true);
                    if (document.getElementById('testimonials')?.getBoundingClientRect().top <= window.innerHeight - 100) setHasSeenTestimonials(true);
                    if (document.getElementById('about')?.getBoundingClientRect().top <= window.innerHeight - 100) setHasSeenAbout(true);
                    if (document.getElementById('contact')?.getBoundingClientRect().top <= window.innerHeight - 100) setHasSeenCTA(true);
                    
                    if (activeSection !== currentSection) {
                        setActiveSection(currentSection);
                    }
                };
                window.addEventListener('scroll', handleScroll);
                return () => window.removeEventListener('scroll', handleScroll);
            }, [activeSection]);

            React.useEffect(() => {
                const interval = setInterval(() => {
                    setActiveCarouselIndex(prev => (prev + 1) % carouselImages.length);
                }, 3000);
                return () => clearInterval(interval);
            }, [carouselImages.length]);

            const handleAuthClick = (action) => {
                if (isAuthAnimating) return;
                setIsAuthAnimating(true);
                setTimeout(() => {
                    onEnter();
                }, 3150);
            };

            const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
            const openFeatureModal = (feature) => { setActiveFeatureModal(feature); document.body.style.overflow = 'hidden'; };
            const closeFeatureModal = () => { setActiveFeatureModal(null); document.body.style.overflow = ''; };
            const toggleFaq = (index) => setActiveFaqIndex(activeFaqIndex === index ? null : index);
            const setSlide = (index) => setActiveCarouselIndex(index);

            return (
                <div className="landing-wrapper">
                    <style>{\`${cssFile.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`}</style>
                    <div className="landing-content">
                        {/* We manually map the lists since automatic translation is imperfect */}
                        <nav className={\`navbar \${isScrolled ? 'scrolled' : ''}\`}>
                            <div className="nav-content">
                                <div className="logo">
                                    <a href="#home" style={{textDecoration:"none", display:"inline-block"}}>
                                        <img src="https://res.cloudinary.com/b6pdv15b/image/upload/v1784233428/ChatGPT_Image_Jul_17_2026_01_52_49_AM_spmpy1.png" alt="BuildTrack Logo" className="navbar-img-logo" />
                                    </a>
                                </div>
                                <div className="nav-links">
                                    <div className="nav-indicator" style={indicatorStyle}></div>
                                    {sections.map(sec => (
                                        <a key={sec} href={\`#\${sec}\`} className={activeSection === sec ? 'active' : ''}>{sec.charAt(0).toUpperCase() + sec.slice(1)}</a>
                                    ))}
                                </div>
                                <div className="nav-actions">
                                    <div className={\`auth-capsule \${isAuthAnimating ? 'is-animating' : ''}\`}>
                                        <div className={\`capsule-content \${isAuthAnimating ? 'fade-out' : ''}\`}>
                                            <button className="capsule-btn login" onClick={() => handleAuthClick('login')}>Login</button>
                                            <div className="capsule-divider"></div>
                                            <button className="capsule-btn register" onClick={() => handleAuthClick('register')}>Register</button>
                                        </div>
                                        {isAuthAnimating && (
                                            <div className="capsule-animation-layer">
                                                <div className="animation-shine"></div>
                                                <img className="excavator-icon" src="https://res.cloudinary.com/b6pdv15b/image/upload/v1784234335/icon.svg_h6ujfn.svg" alt="Excavator" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                                    <span className="icon-placeholder" style={{display:"inline-block", width:"20px", height:"20px", backgroundColor:"#ccc", borderRadius:"50%", verticalAlign:"middle", marginRight:"8px"}}></span>
                                </button>
                            </div>
                        </nav>
                        
                        {isMobileMenuOpen && (
                            <div className="mobile-menu">
                                {sections.map(sec => (
                                    <a key={sec} href={\`#\${sec}\`} onClick={toggleMobileMenu}>{sec.charAt(0).toUpperCase() + sec.slice(1)}</a>
                                ))}
                                <div style={{display:"flex", gap:"1rem", marginTop:"1.5rem", justifyContent:"center", flexDirection:"column", padding:"0 1rem", alignItems:"center"}}>
                                    <div className={\`auth-capsule \${isAuthAnimating ? 'is-animating' : ''}\`}>
                                        <div className={\`capsule-content \${isAuthAnimating ? 'fade-out' : ''}\`}>
                                            <button className="capsule-btn login" onClick={() => handleAuthClick('login')}>Login</button>
                                            <div className="capsule-divider"></div>
                                            <button className="capsule-btn register" onClick={() => handleAuthClick('register')}>Register</button>
                                        </div>
                                        {isAuthAnimating && (
                                            <div className="capsule-animation-layer">
                                                <div className="animation-shine"></div>
                                                <img className="excavator-icon" src="https://res.cloudinary.com/b6pdv15b/image/upload/v1784234335/icon.svg_h6ujfn.svg" alt="Excavator" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        <section id="home" className="hero">
                            <div className="hero-content">
                                <div className="hero-typography-container">
                                    <div className="typo-row-1"><span className="typo-built">BUILT</span><span className="typo-to">to</span></div>
                                    <div className="typo-row-2"><span className="typo-build">BUILD</span></div>
                                    <div className="typo-row-3"><span className="typo-better">BETTER</span></div>
                                </div>
                                <p className="hero-description">A comprehensive digital ecosystem to orchestrate construction projects, optimize resource allocation, and maintain complete site visibility.</p>
                                <div className="hero-cta"><button className="btn-register-org" onClick={() => handleAuthClick('register')}>Plan Your Project</button></div>
                            </div>
                        </section>

                        <section id="features" className={\`section bg-muted \${hasSeenFeaturesHeader ? 'in-view' : ''}\`}>
                            <div className="container">
                                <div className="section-header">
                                    <h2>Enterprise Capabilities</h2>
                                    <p>A unified digital workspace to orchestrate project lifecycles, monitor site operations, and coordinate your entire workforce.</p>
                                </div>
                                <div className="features-grid">
                                    {features.map((feature, i) => (
                                        <div key={i} className="feature-card">
                                            <div className="feature-image-container"><img src={feature.image} alt={feature.title} className="feature-image" /></div>
                                            <div className="feature-content">
                                                <h3>{feature.title}</h3>
                                                <p>{feature.description}</p>
                                                <div className="feature-footer" onClick={() => openFeatureModal(feature)} style={{cursor:"pointer"}}>
                                                    <span className="learn-more">Learn more</span>
                                                    <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section id="solutions" className={\`section solutions-section \${hasSeenSolutions ? 'in-view' : ''}\`}>
                            <div className="container solutions-container">
                                <div className="showcase-container">
                                    <div className="laptop-mockup"><img src="https://res.cloudinary.com/b6pdv15b/image/upload/v1784292370/l111_a1ml3r.png" alt="Dashboard Mockup Desktop" /></div>
                                    <div className="mobile-mockup"><img src="https://res.cloudinary.com/b6pdv15b/image/upload/v1784293260/p1_phl0lh.png" alt="Dashboard Mockup Mobile" /></div>
                                </div>
                                <div className="solutions-content">
                                    <h2 className="premium-heading">
                                        <span className="reveal-line"><span className="reveal-word">One&nbsp;</span><span className="reveal-word">Platform.</span></span>
                                        <span className="reveal-line"><span className="reveal-word">Complete&nbsp;</span><span className="reveal-word">Project&nbsp;</span><span className="reveal-word">Visibility.</span></span>
                                    </h2>
                                    <p className="description">Centralize project planning, workforce coordination, site monitoring, procurement, analytics, and reporting in one intelligent platform designed for modern construction teams.</p>
                                    <ul className="highlights-list">
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="check-icon"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Real-Time Site Monitoring</span></li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="check-icon"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Project &amp; Workforce Management</span></li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="check-icon"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Resource &amp; Inventory Tracking</span></li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="check-icon"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Analytics &amp; Smart Reporting</span></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="carousel-section">
                            <div className="container">
                                <h2 className="carousel-heading">Platform Experience</h2>
                            </div>
                            <div className="carousel-track">
                                {carouselImages.map((img, i) => (
                                    <div key={i} className={\`carousel-slide \${i === activeCarouselIndex ? 'center' : i === (activeCarouselIndex - 1 + carouselImages.length) % carouselImages.length ? 'prev-1' : i === (activeCarouselIndex + 1) % carouselImages.length ? 'next-1' : i === (activeCarouselIndex - 2 + carouselImages.length) % carouselImages.length ? 'prev-2' : 'next-2'}\`} onClick={() => setSlide(i)}>
                                        <img src={img} alt="Construction Progress" />
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="trusted" className={\`trusted-by \${hasSeenStats ? 'in-view' : ''}\`}>
                            <div className="premium-trust-container">
                                <div className="section-header">
                                    <span className="trust-badge">TRUSTED BY INDUSTRY PROFESSIONALS</span>
                                    <h2>Building Confidence Across Every Project</h2>
                                    <p>BuildTrack empowers construction companies, project managers, engineers, and contractors with a centralized platform designed to improve project visibility, operational efficiency, and decision-making across every stage of construction.</p>
                                </div>
                                <div className="stats-grid">
                                    {stats.map((stat, i) => (
                                        <div key={i} className="stat-item">
                                            <div className="stat-value">{stat.value}{stat.suffix}</div>
                                            <div className="stat-label">{stat.label}</div>
                                            <div className="stat-description">{stat.description}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="logos-track">
                                    <div className="logos-inner">
                                        {trustedCompanyLogos.map((logo, i) => <img key={i} src={logo} alt="Trusted Company" className="trusted-company-logo" />)}
                                        {trustedCompanyLogos.map((logo, i) => <img key={i+100} src={logo} alt="Trusted Company" className="trusted-company-logo" />)}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="testimonials" className={\`section testimonials-section \${hasSeenTestimonials ? 'in-view' : ''}\`}>
                            <div className="container">
                                <div className="section-header">
                                    <span className="testimonials-badge">CUSTOMER SUCCESS</span>
                                    <h2>Trusted by Teams.<br />Built for Better Projects.</h2>
                                    <p>Discover how construction companies, project managers, and engineering teams use BuildTrack to improve collaboration, streamline operations, and deliver projects with greater confidence and visibility.</p>
                                </div>
                                <div className="testimonial-track-container">
                                    <div className="testimonial-track">
                                        {testimonials.map((t, i) => (
                                            <div key={i} className="testimonial-card">
                                                <div className="testimonial-quote">"{t.quote}"</div>
                                                <div className="testimonial-author">
                                                    <div className="author-info">
                                                        <strong>{t.author}</strong>
                                                        <span>{t.role}, {t.company}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        {testimonials.map((t, i) => (
                                            <div key={i+100} className="testimonial-card">
                                                <div className="testimonial-quote">"{t.quote}"</div>
                                                <div className="testimonial-author">
                                                    <div className="author-info">
                                                        <strong>{t.author}</strong>
                                                        <span>{t.role}, {t.company}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="faq" className="section faq-section">
                            <div className="container">
                                <div className="section-header">
                                    <h2>Everything You Need to Know</h2>
                                    <p>Answers to common questions about BuildTrack's platform, security, and enterprise support.</p>
                                </div>
                                <div className="faq-container">
                                    {faqs.map((faq, i) => (
                                        <div key={i} className={\`faq-item \${activeFaqIndex === i ? 'active' : ''}\`}>
                                            <button className="faq-question" onClick={() => toggleFaq(i)}>
                                                {faq.question}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-chevron-down" style={{ transform: activeFaqIndex === i ? 'rotate(180deg)' : 'rotate(0)' }}>
                                                    <path d="m6 9 6 6 6-6" />
                                                </svg>
                                            </button>
                                            <div className="faq-answer">
                                                <div className="faq-answer-inner"><p>{faq.answer}</p></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section id="about" className={\`section about-section \${hasSeenAbout ? 'in-view' : ''}\`}>
                            <div className="container">
                                <div className="about-grid">
                                    <div className="about-content">
                                        <h2 className="premium-heading">About <span className="brand-build">Build</span><span className="brand-track">Track</span></h2>
                                        <p className="description">BuildTrack is a modern Construction Project Management &amp; Site Monitoring Platform created to help organizations simplify complex construction operations through one intelligent digital workspace.</p>
                                        <p className="description">Designed for construction companies, project managers, engineers, contractors, and project stakeholders, BuildTrack centralizes collaboration, improves operational visibility, and enables informed decision-making throughout every phase of a construction project.</p>
                                        <p className="description">By bringing project oversight, team coordination, resource management, and business intelligence together in a unified platform, BuildTrack helps organizations work more efficiently while maintaining transparency, accountability, and project excellence.</p>
                                    </div>
                                    <div className="about-logo-container">
                                        <div className="premium-logo-wrapper">
                                            <img src="https://res.cloudinary.com/b6pdv15b/image/upload/v1784231883/ChatGPT_Image_Jul_16_2026_11_57_24_PM_zhixuh.png" alt="BuildTrack Official Logo" className="buildtrack-logo" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="contact" className={\`section cta-section \${hasSeenCTA ? 'in-view' : ''}\`}>
                            <div className="container">
                                <div className="cta-floating-block">
                                    <div className="cta-background-image" style={{backgroundImage: "url('https://res.cloudinary.com/b6pdv15b/image/upload/v1784230747/ChatGPT_Image_Jul_17_2026_01_08_47_AM_derel6.png')"}}></div>
                                    <div className="cta-content">
                                        <h2>Build the Future of Construction with Confidence</h2>
                                        <p>Empower your organization with a centralized platform designed to simplify project management, enhance collaboration, optimize resources, and deliver greater visibility across every stage of construction.</p>
                                        <button className="btn-register-org-premium" onClick={() => handleAuthClick('register')}>
                                            Get Started
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-icon">
                                                <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <footer className="footer">
                            <div className="container">
                                <div className="footer-top">
                                    <div className="footer-column brand-column">
                                        <a href="#home" style={{textDecoration:"none", display:"inline-block"}}>
                                            <img src="https://res.cloudinary.com/b6pdv15b/image/upload/v1784233026/ChatGPT_Image_Jul_16_1111_59_09_PM_fosv0b.png" alt="BuildTrack Official Logo" className="footer-logo" />
                                        </a>
                                        <p className="brand-description">BuildTrack is an intelligent construction project management platform that empowers organizations to streamline planning, monitor site operations, manage resources, and deliver projects with greater efficiency, transparency, and control.</p>
                                    </div>
                                    <div className="footer-column">
                                        <h4>Platform</h4>
                                        <ul>
                                            <li><a href="#features">Features</a></li>
                                            <li><a href="#about">About</a></li>
                                            <li><a href="#testimonials">Testimonials</a></li>
                                            <li><a href="#faq">FAQ</a></li>
                                            <li><a href="#contact">Contact</a></li>
                                        </ul>
                                    </div>
                                    <div className="footer-column">
                                        <h4>Support</h4>
                                        <ul>
                                            <li><a href="#">Help Center</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                            <li><a href="#">Terms of Service</a></li>
                                            <li><a href="#">Contact Support</a></li>
                                        </ul>
                                    </div>
                                    <div className="footer-column contact-column">
                                        <h4>Contact</h4>
                                        <div className="contact-info"><span className="label">Email</span><a href="mailto:support@buildtrack.com" className="value">support@buildtrack.com</a></div>
                                        <div className="contact-info"><span className="label">Phone</span><a href="tel:+910000000000" className="value">+91 1800 123 4567</a></div>
                                        <div className="contact-info"><span className="label">Location</span><span className="value">Chennai, Tamil Nadu, India</span></div>
                                    </div>
                                </div>
                                <div className="footer-bottom">
                                    <div className="copyright"><p>&copy; 2026 BuildTrack. All rights reserved.</p></div>
                                    <div className="tagline"><p>Built for those who build better.</p></div>
                                </div>
                            </div>
                        </footer>

                        {activeFeatureModal && (
                            <div className="feature-modal-overlay" onClick={closeFeatureModal}>
                                <div className="feature-modal-content" onClick={e => e.stopPropagation()}>
                                    <button className="modal-close-btn" onClick={closeFeatureModal}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                    </button>
                                    <div className="modal-image-container">
                                        <img src={activeFeatureModal.image} alt={activeFeatureModal.title} className="modal-image" />
                                        <div className="modal-image-gradient"></div>
                                    </div>
                                    <div className="modal-text-container">
                                        <h3>{activeFeatureModal.title}</h3>
                                        <p>{activeFeatureModal.description}</p>
                                        <button className="modal-action-btn" onClick={closeFeatureModal}>Got it</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            );
        };
`;

let finalIndexHtml = fs.readFileSync('frontend/src/index.html', 'utf8');

// Replace the existing LandingView in index.html with the newly generated one.
// We must find the start of the previous LandingView and replace it.
const regex = /const LandingView = \(\{ onEnter \}\) => \{[\s\S]*?const LoginView = \(/;
finalIndexHtml = finalIndexHtml.replace(regex, componentCode.trim() + '\n\n        const LoginView = (');

fs.writeFileSync('frontend/src/index.html', finalIndexHtml);
