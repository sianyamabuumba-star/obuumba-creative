// O'BUUMBA CREATIVE — Central Brand Configuration & Editable Pricing
// Owner: Edit values in this file to update site-wide content and pricing.

export const siteConfig = {
  brandName: "O'BUUMBA Creative",
  founderName: "Boston Nastie",
  movementName: "L'Stone Ku Chalo",
  tagline: "CREATE. INSPIRE. UPLIFT.",
  originLine: "From Livingstone to the world.",
  whatsappDisplay: "+260 776 745 837",
  whatsappNumber: "260776745837",
  email: "sianyamabuumba@gmail.com",
  locationLabel: "Livingstone, Zambia — working worldwide",
  domain: "obuumbacreative.com",
  metaTitle: "O'BUUMBA Creative — Rooted in Livingstone. Built for the World.",
  metaDescription:
    "O'BUUMBA Creative is a Livingstone, Zambia creative studio by Boston Nastie — design, branding, music artwork, video visuals, tourism marketing & websites. Create. Inspire. Uplift.",
  social: {
    instagram: "@sianyamabuumba",
    whatsapp: "https://wa.me/260776745837",
    email: "mailto:sianyamabuumba@gmail.com",
  },
};

export const pricingConfig = {
  masterVault: "$9",
  proBackend: "$37",
  posterSinglePrice: "K250",
  posterSingleNote: "starting price for one promotional poster",
  posterTrioPrice: "K500",
  posterTrioNote: "starting price for a promo pack with social adaptations",
  customNote: "Custom quotation",
  pricingDisclaimer:
    "Final pricing depends on scope, complexity, deliverables and turnaround time. Prices below are starting guides only.",
  revisionStandard: "2 revision rounds included",
  turnaroundPoster: "48–72 hours after brief and deposit confirmation",
  turnaroundBranding: "1–4 weeks, subject to agreement",
};

export const designTokens = {
  colors: {
    black: "#0A0A0F",
    black2: "#101018",
    card: "#14141D",
    card2: "#1A1A26",
    purple: "#581c87",
    purpleDeep: "#3B1443",
    purpleGlow: "#8B5CF6",
    gold: "#D4AF37",
    goldSoft: "#F5D98A",
    goldDeep: "#8A6D1B",
    ivory: "#F5F5F7",
    muted: "#A1A1AA",
    dim: "#7F7F8B",
  },
  typography: {
    displayFont: 'Fraunces, Georgia, "Times New Roman", serif',
    bodyFont: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
  },
};

export const ecosystemNodes = [
  {
    name: 'LiamBuilds.ai Services',
    label: 'Active Core',
    description: 'Custom AI apps, launch systems, and premium digital experiences for ambitious businesses.',
  },
  {
    name: 'LiamBuilds.ai Workflows',
    label: 'Automation Engine',
    description: 'n8n, ManyChat, and conversion flows designed to move leads into action without friction.',
  },
  {
    name: 'TOLO3 AI App Builder',
    label: 'Software Studio',
    description: 'No-code and low-code tools that turn ideas into useful product experiences quickly.',
  },
  {
    name: "O'BUUMBA Creative Studio",
    label: 'Flagship Vault',
    description: 'Creative strategy, music visuals, brand design, promotion kits, and premium marketing assets.',
  },
  {
    name: 'Online Business & Side Hustles',
    label: 'Monetization Matrix',
    description: 'Digital product funnels, side-income systems, and monetisation frameworks that scale with clarity.',
  },
];

export const leadKeywords = ['SERVICES', 'CODE', 'TOLO3', 'VAULT', 'BUSINESS'];

export function getWhatsAppLink(keyword = 'SERVICES', customText = '') {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  const trimmed = (customText || `Hello O'BUUMBA Creative, I am interested in the ${keyword} opportunity.`)
    .replace(/\s+/g, ' ')
    .trim();
  const text = encodeURIComponent(trimmed);
  return `${base}?text=${text}`;
}
