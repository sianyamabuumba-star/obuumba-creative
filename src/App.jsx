import { useMemo, useState } from 'react';
import {
  siteConfig,
  pricingConfig,
  ecosystemNodes,
  getWhatsAppLink,
} from './lib/brand';

const services = [
  {
    title: 'Brand Identity',
    text: 'Visual identity systems, premium social graphics, and clear brand direction for businesses that want perceived value.',
    price: 'From K250',
  },
  {
    title: 'Music & Promo Art',
    text: 'Poster concepts, event visuals, music covers, and audience-focused creative assets designed to stop the scroll.',
    price: 'From K250',
  },
  {
    title: 'Tourism & Web Presence',
    text: 'Creative marketing systems, digital presentation assets, and visual direction for hospitality, tourism, and service brands.',
    price: 'Custom quote',
  },
];

const portfolio = [
  {
    title: 'Tourism Campaign Kit',
    tag: 'Branding + Visual Story',
    text: 'An elevated destination campaign identity designed to make hospitality and travel offers feel premium and trust-worthy.',
  },
  {
    title: 'Music Promo Bundle',
    tag: 'Poster + Social Content',
    text: 'A release-ready visual system built to support announcements, streaming pushes, and audience activation.',
  },
  {
    title: 'Creative Portfolio Experience',
    tag: 'Web Presence + Digital Brand',
    text: 'A clever, concise, conversion-focused online presence built to communicate clarity, quality, and positioning.',
  },
];

const process = [
  'Clarify the offer, audience, and creative objective in a short discovery conversation.',
  'Build the design direction, tone, hierarchy, and visual assets around your message.',
  'Refine the concept through a tight revision round and final delivery workflow.',
  'Launch with confidence and keep iterating as your business grows.',
];

const testimonials = [
  {
    quote: 'The visuals immediately made the brand feel more premium, clearer, and far more deliberate.',
    author: 'Brand Client',
  },
  {
    quote: 'Strong creative instinct, clean execution, and a real understanding of what audiences respond to.',
    author: 'Tourism Founder',
  },
];

const defaultForm = {
  name: '',
  email: '',
  project: 'Brand design',
  budget: 'K500–K1,000',
  note: '',
};

function App() {
  const [form, setForm] = useState(defaultForm);

  const whatsAppLink = useMemo(() => {
    const message = [
      'Hello O\'BUUMBA Creative,',
      '',
      `Name: ${form.name || 'Client'}`,
      `Email: ${form.email || 'Not provided'}`,
      `Project: ${form.project}`,
      `Budget: ${form.budget}`,
      `Brief: ${form.note || 'No additional details provided yet.'}`,
    ].join('%0A');

    return getWhatsAppLink('SERVICES', message);
  }, [form]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-mark">OB</div>
        <nav className="nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#ecosystem">Ecosystem</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="button button-primary" href={getWhatsAppLink('SERVICES')} target="_blank" rel="noreferrer">
          Book a project
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <span className="eyebrow">{siteConfig.movementName}</span>
            <h1>{siteConfig.tagline}</h1>
            <p className="lead">{siteConfig.originLine}</p>
            <p className="description">
              {siteConfig.brandName} is a premium creative studio rooted in Livingstone, Zambia. We build visual systems,
              design experiences, and digital assets that help founders, businesses, and creatives show up with clarity,
              confidence and authority.
            </p>

            <div className="cta-row">
              <a className="button button-primary" href={getWhatsAppLink('SERVICES')} target="_blank" rel="noreferrer">
                Start your project
              </a>
              <a className="button button-ghost" href="#ecosystem">
                Explore ecosystem
              </a>
            </div>

            <div className="metric-grid">
              <div>
                <strong>K250</strong>
                <span>starter poster pricing</span>
              </div>
              <div>
                <strong>48–72h</strong>
                <span>fast poster turnaround</span>
              </div>
              <div>
                <strong>Worldwide</strong>
                <span>remote service delivery</span>
              </div>
            </div>
          </div>

          <div className="hero-visual-card">
            <div className="studio-panel">
              <div className="panel-head">
                <span className="status-pill">Creative Studio</span>
                <span className="status-pill inverse">Live</span>
              </div>

              <div className="visual-grid" aria-hidden="true">
                <div className="visual-box tall" />
                <div className="visual-box" />
                <div className="visual-box" />
                <div className="visual-box" />
              </div>

              <div className="panel-meta">
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

        <section className="section" id="ecosystem">
          <div className="section-heading">
            <span className="eyebrow">Ecosystem</span>
            <h2>AI builders, creative systems, and digital growth infrastructure.</h2>
          </div>

          <div className="ecosystem-grid">
            {ecosystemNodes.map((node) => (
              <article className="ecosystem-card" key={node.name}>
                <span className="mini-badge">{node.label}</span>
                <h3>{node.name}</h3>
                <p>{node.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <span className="eyebrow">Services</span>
            <h2>Creative services built for brands that want to look premium and perform clearly.</h2>
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

        <section className="section" id="portfolio">
          <div className="section-heading">
            <span className="eyebrow">Portfolio</span>
            <h2>Selected concepts and commercially-minded creative direction.</h2>
          </div>

          <div className="portfolio-grid">
            {portfolio.map((item) => (
              <article className="portfolio-card" key={item.title}>
                <div className="portfolio-visual" aria-hidden="true" />
                <span className="tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="process">
          <div className="section-heading">
            <span className="eyebrow">Process</span>
            <h2>Simple and deliberate. Built for clarity and momentum.</h2>
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
          <div className="section-heading">
            <span className="eyebrow">Pricing</span>
            <h2>Transparent starting points for high-impact creative work.</h2>
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
              <h3>Promo Pack</h3>
              <p>{pricingConfig.posterTrioNote}</p>
              <small>{pricingConfig.turnaroundPoster}</small>
            </article>

            <article className="price-card">
              <span className="chip">{pricingConfig.customNote}</span>
              <h3>Branding Project</h3>
              <p>Custom scope for identity, campaign, and digital presence work.</p>
              <small>{pricingConfig.turnaroundBranding}</small>
            </article>
          </div>

          <p className="pricing-note">{pricingConfig.pricingDisclaimer}</p>
        </section>

        <section className="section testimonials">
          <div className="section-heading">
            <span className="eyebrow">Client perspective</span>
            <h2>Designed to elevate perception before the first conversation even starts.</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <blockquote className="quote-card" key={item.author}>
                <p>“{item.quote}”</p>
                <footer>{item.author}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="section-heading">
            <span className="eyebrow">Contact</span>
            <h2>Tell us what you want to build, launch or promote.</h2>
          </div>

          <div className="contact-grid">
            <form className="inquiry-form" onSubmit={(event) => {
              event.preventDefault();
              window.open(whatsAppLink, '_blank', 'noopener,noreferrer');
            }}>
              <label>
                Name
                <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
              </label>

              <label>
                Email
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
              </label>

              <label>
                Project type
                <select name="project" value={form.project} onChange={handleChange}>
                  <option value="Brand design">Brand design</option>
                  <option value="Poster design">Poster design</option>
                  <option value="Tourism promotion">Tourism promotion</option>
                  <option value="Web presence">Web presence</option>
                  <option value="Creative campaign">Creative campaign</option>
                </select>
              </label>

              <label>
                Budget range
                <select name="budget" value={form.budget} onChange={handleChange}>
                  <option value="K250–K500">K250–K500</option>
                  <option value="K500–K1,000">K500–K1,000</option>
                  <option value="K1,000–K2,500">K1,000–K2,500</option>
                  <option value="Custom budget">Custom budget</option>
                </select>
              </label>

              <label>
                Project brief
                <textarea name="note" value={form.note} onChange={handleChange} placeholder="Tell us more about your offer, event, audience, or goals." rows="5" />
              </label>

              <div className="form-actions">
                <button type="submit" className="button button-primary">
                  Send via WhatsApp
                </button>
                <a className="button button-ghost" href={siteConfig.social.email}>
                  Email us
                </a>
              </div>
            </form>

            <aside className="contact-panel">
              <div className="contact-card">
                <p className="eyebrow">Reach out</p>
                <h3>{siteConfig.brandName}</h3>
                <ul>
                  <li>{siteConfig.whatsappDisplay}</li>
                  <li>{siteConfig.email}</li>
                  <li>{siteConfig.locationLabel}</li>
                </ul>
                <a className="button button-primary" href={siteConfig.social.whatsapp} target="_blank" rel="noreferrer">
                  WhatsApp us now
                </a>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
