import { siteConfig, pricingConfig, designTokens } from './lib/brand';

const services = [
  {
    title: 'Brand Identity',
    text: 'Visual identity systems, logo thinking, typography, and consistent brand expression built to feel premium and memorable.',
    price: 'From K150',
  },
  {
    title: 'Music & Promo Art',
    text: 'Poster concepts, cover art, social visuals, and campaign creatives for musicians, creatives, and local businesses.',
    price: 'From K150',
  },
  {
    title: 'Tourism & Web Presence',
    text: 'Landing pages, marketing visuals, and digital experiences that help tourism brands and founders attract attention online.',
    price: 'Custom quote',
  },
];

const work = [
  {
    title: 'Tourism Campaign Kit',
    tag: 'Branding + visual system',
    text: 'A polished campaign package raising the perception of a destination or local experience through storytelling and modern design.',
  },
  {
    title: 'Music Promo Bundle',
    tag: 'Poster + social media art',
    text: 'A release-ready visual package built to support event announcements, content engagement, and artist positioning.',
  },
  {
    title: 'Creative Portfolio Experience',
    tag: 'Website + digital presence',
    text: 'A consciously crafted online presence that communicates trust, taste, and clarity for the audience you want to attract.',
  },
];

const process = [
  'Discover the vision, audience, and the emotional hook you want your brand to carry.',
  'Translate that vision into an intentional direction, palette, typography and layout system.',
  'Design and refine final assets for launch, social use, digital platforms and business credibility.',
  'Launch with confidence and iterate as your business grows.',
];

const testimonials = [
  {
    quote: 'The work felt premium from the first concept. It immediately elevated how our audience understood the brand.',
    author: 'Client, Creative Brand Project',
  },
  {
    quote: 'Clean execution, strong creative thinking, and a clear understanding of how visuals must support business goals.',
    author: 'Founder, Tourism+Culture Venture',
  },
];

const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber}`;
const emailLink = `mailto:${siteConfig.email}`;

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-mark">OB</div>
        <nav className="nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="button button-primary" href={whatsappLink} target="_blank" rel="noreferrer">
          Book a call
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <span className="eyebrow">{siteConfig.movementName}</span>
            <h1>{siteConfig.tagline}</h1>
            <p className="lead">{siteConfig.originLine}</p>
            <p className="description">
              {siteConfig.brandName} is a creative studio rooted in Livingstone, Zambia and built for businesses,
              creators, and cultural brands that want design that feels clear, elevated, and memorable.
            </p>

            <div className="cta-row">
              <a className="button button-primary" href={whatsappLink} target="_blank" rel="noreferrer">
                Start a project
              </a>
              <a className="button button-ghost" href="#services">
                Explore services
              </a>
            </div>

            <div className="metrics">
              <div>
                <strong>2–4 days</strong>
                <span>Poster turnaround</span>
              </div>
              <div>
                <strong>1–4 weeks</strong>
                <span>Branding projects</span>
              </div>
              <div>
                <strong>Worldwide</strong>
                <span>Remote delivery</span>
              </div>
            </div>
          </div>

          <div className="hero-card-wrap">
            <div className="hero-card">
              <div className="card-topline">
                <span className="status">Creative Studio</span>
                <span className="online-pill">Online</span>
              </div>
              <div className="visual-grid" aria-hidden="true">
                <div className="block one"></div>
                <div className="block two"></div>
                <div className="block three"></div>
                <div className="block four"></div>
              </div>
              <div className="card-bottom">
                <div>
                  <small>Founder</small>
                  <strong>{siteConfig.founderName}</strong>
                </div>
                <div>
                  <small>Based in</small>
                  <strong>{siteConfig.locationLabel}</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-title">
            <span className="eyebrow">Services</span>
            <h2>Creative services for brands that want to be remembered.</h2>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="info-card" key={service.title}>
                <span className="chip">{service.price}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="work">
          <div className="section-title">
            <span className="eyebrow">Selected work</span>
            <h2>Designed to move attention into action.</h2>
          </div>

          <div className="work-grid">
            {work.map((item) => (
              <article className="work-card" key={item.title}>
                <div className="mini-visual" aria-hidden="true" />
                <span className="tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="process">
          <div className="section-title">
            <span className="eyebrow">Process</span>
            <h2>Simple process. Premium outcomes.</h2>
          </div>

          <div className="process-grid">
            {process.map((step, index) => (
              <div className="process-card" key={step}>
                <span className="step-number">0{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="pricing">
          <div className="section-title">
            <span className="eyebrow">Pricing</span>
            <h2>Transparent starting points for creative work.</h2>
          </div>

          <div className="pricing-grid">
            <article className="price-card featured">
              <span className="chip">{pricingConfig.posterSinglePrice}</span>
              <h3>Single Poster</h3>
              <p>{pricingConfig.posterSingleNote}</p>
              <small>{pricingConfig.revisionStandard}</small>
            </article>

            <article className="price-card">
              <span className="chip">{pricingConfig.posterTrioPrice}</span>
              <h3>Three-Design Bundle</h3>
              <p>{pricingConfig.posterTrioNote}</p>
              <small>{pricingConfig.turnaroundPoster}</small>
            </article>

            <article className="price-card">
              <span className="chip">{pricingConfig.customNote}</span>
              <h3>Branding Project</h3>
              <p>Custom scope for identity and digital presence work.</p>
              <small>{pricingConfig.turnaroundBranding}</small>
            </article>
          </div>

          <p className="pricing-disclaimer">{pricingConfig.pricingDisclaimer}</p>
        </section>

        <section className="section testimonials">
          <div className="section-title">
            <span className="eyebrow">Client perspective</span>
            <h2>Creative work that feels clear and credible.</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((quote) => (
              <blockquote className="quote-card" key={quote.author}>
                <p>“{quote.quote}”</p>
                <footer>{quote.author}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="cta-panel" id="contact">
          <div>
            <span className="eyebrow">Contact</span>
            <h2>Need a visual identity or digital touchpoint that actually speaks to your audience?</h2>
          </div>
          <div className="cta-actions">
            <a className="button button-primary" href={whatsappLink} target="_blank" rel="noreferrer">
              WhatsApp {siteConfig.whatsappDisplay}
            </a>
            <a className="button button-ghost" href={emailLink}>
              {siteConfig.email}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
