import { mkdirSync, writeFileSync } from 'fs';
import { dirname } from 'path';

const pages = [
  ['index.html', 'Your Marketing Is Attracting Leads. Your Disconnected System Is Leaking Them.', 'Exclusive Media connects advertising, websites, CRM, instant follow-up, booking, and reputation into one unified growth operating system.', ['Calculate My Revenue Leaks → /scorecard/', 'Apply for Growth Architecture Audit → /contact/']],
  ['scorecard/index.html', 'Growth Leak Scorecard', 'A three-minute diagnostic for Attract, Convert, Serve, and Grow leaks. Static-hosting version uses a safe form preview until backend/webhook integrations are approved.', ['Annual revenue', 'Industry', 'Decision-maker status', 'Current CRM/software', 'Response time', 'Biggest bottleneck']],
  ['audit/index.html', 'Growth Architecture Audit', 'A $2,500 paid diagnostic that maps customer journey friction, technical feasibility, and the 90-day roadmap before sending more traffic into a leaky system.', ['Customer Journey Friction Map', 'Technical & API Feasibility Audit', '90-Minute Executive Strategy Alignment Session']],
  ['services/index.html', 'Exclusive Growth OS Buildout', 'The full Growth OS connects the four public stages — ATTRACT, CONVERT, SERVE, and GROW — with seven internal engines.', ['Visibility', 'Authority', 'Conversion', 'Nurture & Sales', 'Customer Experience', 'Retention & Expansion', 'Intelligence']],
  ['industries/index.html', 'Industries Served', 'A broad parent brand with vertical-specific landing page expansion for service businesses with disconnected intake, follow-up, attribution, booking, reviews, and reactivation.', ['Med spas', 'Dental and healthcare', 'Legal firms', 'Financial and insurance', 'HVAC and home services', 'Senior living', 'Staffing', 'Real estate']],
  ['case-studies/index.html', 'Case Studies / Proof', 'Placeholder transformation stories with approval flags for names, numbers, screenshots, testimonials, and client permission.', ['Healthcare group: 22 consultations in 14 days pending verification', 'HVAC founder: 2 hours to 45 seconds pending verification', 'Law firm: intake drop-offs pending verification']],
  ['about/index.html', 'About Exclusive Media', 'We are not the company that does everything. We are the company that makes everything work together.', ['Founder origin story TODO', 'Architecture partner behind online growth', 'Strategic connector across the customer journey']],
  ['faq/index.html', 'FAQ', 'Common questions about Digital Growth Architecture, co-existence, scope, compliance, and next steps.', ['Different from an agency?', 'Forced to replace software?', 'How do regulated industries work?', 'What happens after the scorecard?']],
  ['contact/index.html', 'Contact / Apply', 'Static-hosting application preview. Live submission is intentionally disabled until CRM/webhook, TCPA, 10DLC, consent storage, and legal review are complete.', ['Name', 'Business email', 'Phone', 'Company name', 'Website URL', 'Industry', 'Annual revenue', 'Monthly marketing spend']],
  ['privacy/index.html', 'Privacy Policy Template', 'Placeholder legal page requiring attorney review before launch.', ['Data collection tools', 'CRM processors', 'Analytics', 'SMS consent and retention']],
  ['terms/index.html', 'Terms of Use Template', 'Placeholder legal page requiring attorney review before launch.', ['Service terms', 'Disclaimers', 'Limitations', 'Regulated-industry boundaries']],
  ['launch-checklist/index.html', 'Launch Checklist', 'Internal checklist for proof, legal, TCPA, 10DLC, privacy, terms, testimonials, regulated industries, analytics, and deployment.', ['Approve public claims', 'Approve TCPA language', 'Complete 10DLC', 'Verify case studies', 'Confirm CRM endpoint']]
];

const routes = [['Home','index.html'],['Scorecard','scorecard/index.html'],['Audit','audit/index.html'],['Services','services/index.html'],['Industries','industries/index.html'],['Proof','case-studies/index.html'],['FAQ','faq/index.html'],['Apply','contact/index.html']];
function rel(from, to){ const depth = from.split('/').length - 1; return `${'../'.repeat(depth)}${to}`; }

function html(file, title, body, bullets){ const nav = routes.map(([l,h])=>`<a href="${rel(file,h)}">${l}</a>`).join(''); const cssHref = rel(file, 'static/styles.css'); const scorecardHref = rel(file, 'scorecard/index.html'); const contactHref = rel(file, 'contact/index.html'); return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Exclusive Media | ${title}</title>
  <meta name="description" content="Exclusive Media connects advertising, websites, CRM, automated follow-up, booking, and reputation into one growth operating system for established service businesses." />
  <link rel="stylesheet" href="${cssHref}" />
</head>
<body>
  <header class="top"><div class="brand"><strong>Exclusive Media</strong><span>Digital Growth Architecture</span></div><nav>${nav}</nav></header>
  <main class="shell">
    <p class="alert">Live Status: Limited Diagnostic Growth Audit Slots Remaining</p>
    <section class="hero">
      <div><p class="eyebrow">One connected growth system</p><h1>${title}</h1><p>${body}</p><a class="cta" href="${scorecardHref}">Calculate My Revenue Leaks</a><a class="cta secondary" href="${contactHref}">Apply for Audit</a></div>
      <aside class="card"><h2>Disconnected vs Connected</h2><div class="split"><div><b>Fragmented</b><p>Slow response, disconnected forms, blind attribution, manual staff fatigue.</p></div><div><b>Growth OS</b><p>&lt;60s follow-up, booking flow, attribution, single accountable architecture partner.</p></div></div></aside>
    </section>
    <section class="card"><h2>What this page covers</h2><ul>${bullets.map(x=>`<li>${x}</li>`).join('')}</ul></section>
    <section class="notice"><b>Compliance note:</b> Claims, calculator estimates, case studies, SMS/TCPA/10DLC, privacy, terms, and regulated-industry automation boundaries require business/legal approval before public launch.</section>
  </main>
</body>
</html>`}

const css = `:root{color-scheme:dark;--charcoal:#0b0f12;--ink:#12171b;--bone:#f7f3ea;--mist:#d8dfdf;--teal:#33d6c6;--gold:#c5a15a}*{box-sizing:border-box}body{margin:0;font-family:Inter,Space Grotesk,Arial,sans-serif;background:linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px),var(--charcoal);background-size:48px 48px;color:var(--bone)}a{color:inherit}.top{position:sticky;top:0;display:flex;gap:24px;align-items:center;justify-content:space-between;padding:18px clamp(16px,4vw,42px);border-bottom:1px solid rgba(255,255,255,.12);background:rgba(11,15,18,.9);backdrop-filter:blur(14px)}.brand span{display:block;color:var(--gold);font-size:11px;letter-spacing:.24em;text-transform:uppercase}.top nav{display:flex;gap:14px;flex-wrap:wrap;color:rgba(216,223,223,.8);font-size:14px}.shell{width:min(1180px,100%);margin:auto;padding:38px 18px 80px}.alert{display:inline-block;border:1px solid rgba(51,214,198,.28);background:rgba(51,214,198,.08);border-radius:999px;padding:10px 16px;color:var(--mist);font-size:13px}.hero{display:grid;grid-template-columns:1.15fr .85fr;gap:28px;align-items:center;margin:28px 0}.eyebrow{color:var(--gold);letter-spacing:.28em;text-transform:uppercase;font-size:12px;font-weight:800}h1{font-size:clamp(42px,7vw,78px);line-height:.94;letter-spacing:-.055em;margin:8px 0 18px}p,li{color:rgba(216,223,223,.84);font-size:18px;line-height:1.65}.card{border:1px solid rgba(255,255,255,.12);background:linear-gradient(145deg,rgba(18,23,27,.94),rgba(18,23,27,.64));border-radius:28px;padding:26px;box-shadow:0 24px 80px rgba(0,0,0,.32);margin-top:22px}.split{display:grid;grid-template-columns:1fr 1fr;gap:14px}.split div{border:1px solid rgba(255,255,255,.1);border-radius:18px;padding:16px;background:rgba(255,255,255,.05)}.cta{display:inline-flex;margin:10px 10px 0 0;border-radius:999px;background:var(--teal);color:var(--charcoal);padding:14px 20px;font-weight:900;text-decoration:none}.cta.secondary{background:transparent;color:var(--bone);border:1px solid rgba(255,255,255,.22)}.notice{border:1px solid rgba(197,161,90,.4);background:rgba(197,161,90,.1);border-radius:22px;padding:18px;margin-top:22px;color:rgba(247,243,234,.86)}@media(max-width:860px){.hero,.split{grid-template-columns:1fr}.top{align-items:flex-start;flex-direction:column}}`;
mkdirSync('static', { recursive: true });
writeFileSync('static/styles.css', css);
for (const [file,title,body,bullets] of pages){ mkdirSync(dirname(file), { recursive: true }); writeFileSync(file, html(file,title,body,bullets)); }
writeFileSync('404.html', html('404.html', 'Page Not Found', 'Use the navigation below to return to an available static page. If you expected the Next.js app, deploy the built Next output instead of raw source files.', ['Check that every folder and index.html file was uploaded', 'Upload static/styles.css with the pages', 'Use Vercel or a Next-compatible host for the full app']));
