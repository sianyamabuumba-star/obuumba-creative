# GitHub Copilot Repository Instructions

Act as the Lead Frontend Architect, PWA Specialist, and UI/UX Engineer for the AI Builders and Creative Studios Ecosystem repository (O’BUUMBA Systems & LiamBuilds.ai).

---

## 🎯 Core Objective
Build, extend, and maintain a high-performance, single-page PWA and static portal representing the unified 5-node business architecture anchored by O’BUUMBA Systems and LiamBuilds.ai.

---

## 📜 Mandatory Architectural Rules

### 1. Single Source of Truth (`src/lib/brand.js`)
- ALL phone numbers (`260776745837`), email addresses (`sianyamabuumba@gmail.com`), pricing ($9 Master Vault / $37 Pro Backend), turnaround times, brand copy, and contact CTAs MUST be imported from `src/lib/brand.js`.
- Never hardcode contact details, prices, or node metadata inside individual components.

### 2. Zero-Backend Lead Capture
- Do NOT create backend server endpoints, Node API routes, or form handlers for lead capture.
- All conversion CTAs must generate direct WhatsApp deep links using `BRAND_CONFIG.getWhatsAppLink(keyword)` or client-side `mailto:` fallbacks.
- Required trigger keywords: `SERVICES`, `CODE`, `TOLO3`, `VAULT`, `BUSINESS`.

### 3. PWA-Safe Relative Paths (GitHub Pages / Subfolder Deployment)
- Use strictly relative paths (e.g., `./manifest.webmanifest`, `./sw.js`, `./assets/...`).
- NEVER use root-relative paths starting with `/` (e.g., `/manifest.webmanifest`), as they break on subfolder hosting like GitHub Pages or Cloudflare Pages.

### 4. Service Worker & Cache Versioning
- Maintain cache versioning in `sw.js` (currently `obuumba-v2`).
- Purge outdated caches on activation and support full offline fallback capabilities.

### 5. Design System & Color Palette
- Deep Royal Purple: `#581c87` (Primary Accents & Headings)
- Metallic Gold: `#d4af37` (CTA Highlights, Badges & Pricing Cards)
- Obsidian Dark: `#09090b` (Main Canvas Background)
- Surface Card: `#18181b` (Card Backgrounds)
- Ivory / Off-White: `#fafafa` (Primary Scannable Body Text)
- Muted Silver: `#a1a1aa` (Secondary Metadata)

### 6. The 5 Ecosystem Nodes
- LiamBuilds.ai Services: Custom AI Apps & Agentic Automation (`Active Core`)
- LiamBuilds.ai Workflows: n8n & ManyChat Automation Blueprints (`Automation Engine`)
- TOLO3 AI App Builder: No-Code / Low-Code Generative Micro-Apps (`Software Studio`)
- O’BUUMBA Creative Studio: Visual Assets, Perchance Prompts & $9 Master Vault (`Flagship Vault`)
- Online Business & Side Hustles: Monetization Matrix & Digital Product Funnels (`Monetization Matrix`)

---

## 🚀 Task Instructions for Copilot
When modifying code or creating new components:
1. Ensure all styles adhere to the dark luxury-tech theme (`#09090b` / `#581c87` / `#d4af37`).
2. Validate that PWA assets resolve cleanly under relative `./` paths.
3. Keep concept-project status badges (`Active Core`, `Automation Engine`, `Software Studio`, `Flagship Vault`, `Monetization Matrix`) visible on all ecosystem node cards.
