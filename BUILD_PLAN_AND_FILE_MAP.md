# Exclusive Media Website Build Plan and File Map

## 1. Repo Inspection Summary

**Current repository state:** The repository is effectively empty and currently contains only Git metadata plus `.gitkeep`. There is no application framework, package manifest, routing setup, styling system, component library, or deployment configuration yet.

**Implication:** The implementation should scaffold a production-minded web application from scratch. The simplest robust path is a Next.js App Router project with TypeScript and Tailwind CSS because it supports SEO metadata, file-based routing, reusable React components, static content configuration, and future route expansion without adding a backend prematurely.

**Recommended stack:**

- **Framework:** Next.js with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS with CSS custom properties for the Exclusive Media visual system
- **State:** Local React state for calculator, scorecard, forms, tabs, and FAQ accordions
- **Forms:** Client-side stubs that prevent accidental live submission until CRM/webhook/TCPA/10DLC requirements are approved
- **Content:** Centralized TypeScript content/config files under `src/content`
- **Deployment assumption:** Vercel-compatible static/server-rendered Next.js app unless the client specifies another host

## 2. Strategic Build Principles

The website should be built as a conversion system, not a brochure. Every page and CTA should support this funnel:

```text
Visitor -> Growth Leak Scorecard -> Audit Application -> Growth Architecture Audit -> Growth OS Buildout -> Care Plan / Partnership
```

The site should position Exclusive Media as a **Digital Growth Architecture** firm: the strategic connector across marketing, website, CRM, automation, booking, attribution, reputation, retention, and operational follow-up.

### Expert Lens Requirements

- **Implementation Architect:** Componentized, maintainable, route-ready, minimal dependencies.
- **Conversion Copy Chief:** Preserve the “Your marketing may be working. The system behind it may be leaking.” narrative.
- **Funnel Architect:** Make Scorecard and Audit CTAs dominant, with clear next-step hierarchy.
- **Visual Identity Strategist:** Use charcoal/black, warm white, gray, digital teal/gold, gridlines, dashboards, system maps, and architecture-inspired layouts.
- **Compliance-Safe Claims Auditor:** Add visible disclaimers and code comments for proof, legal, TCPA, 10DLC, HIPAA/FINRA/legal boundaries, and revenue claims.
- **AI Output Verification Engineer:** Verify build, routes, forms, calculator, accessibility basics, responsiveness, and production errors before handoff.

## 3. Proposed Route Map

| Route | Purpose | Primary CTA |
| --- | --- | --- |
| `/` | Full homepage conversion narrative | Calculate My Revenue Leaks |
| `/scorecard` | Multi-step Growth Leak Scorecard | View My Score / Apply for Audit |
| `/audit` | Paid Growth Architecture Audit sales page | Apply for Growth Architecture Audit |
| `/services` | Growth OS Buildout and ongoing service model | Book Audit / Discuss Buildout |
| `/industries` | Priority verticals and headless landing-page strategy | See My Industry Leaks |
| `/industries/med-spas` | Optional first vertical template | Calculate Med Spa Leaks |
| `/industries/hvac` | Optional vertical template | Calculate HVAC Leaks |
| `/industries/legal` | Optional vertical template | Calculate Firm Leaks |
| `/case-studies` | Proof placeholders and transformation layouts | Apply for Audit |
| `/about` | Positioning, philosophy, founder TODO | Start with Scorecard |
| `/faq` | Expanded objection handling | Calculate Leaks |
| `/contact` | Audit application / lead capture form | Submit Application Stub |
| `/privacy` | Placeholder privacy policy | Contact for questions |
| `/terms` | Placeholder terms | Contact for questions |
| `/launch-checklist` | Internal compliance and launch checklist, optionally hidden from nav | Complete legal/proof checklist |

## 4. Homepage Section Plan

1. **Top Alert Bar**
   - Configurable “Live Status: Limited Diagnostic Growth Audit Slots Remaining.”
   - Careful implementation-credit language.
   - Content stored in config to avoid stale scarcity claims.

2. **Header / Navigation**
   - Logo: Exclusive Media
   - Descriptor: Digital Growth Architecture
   - Anchors: The Disconnected Leak, The 4-Stage OS, Why Us, Audit Options, FAQ
   - Primary CTA: Calculate Leaks

3. **Hero Section**
   - Core headline: “Your Marketing Is Attracting Leads. Your Disconnected System Is Leaking Them.”
   - Subheadline connecting ads, website, CRM, follow-up, booking, and review engine.
   - Primary CTA: Calculate My Revenue Leaks
   - Secondary CTA: See How It Works
   - Trust language: established $500K–$5M service businesses.
   - Two-System Co-Existence Protocol mention.

4. **Customer Journey Diagnostic Visual**
   - Premium fragmented vs connected comparison.
   - Include response lag, disconnected forms, attribution, speed-to-lead, booking, accountability.

5. **Metrics / Trust Row**
   - `$12M+`, `80+`, `<60s`, `98.4%` metrics.
   - Internal comment: client-provided marketing claims requiring proof/legal approval.

6. **Hidden Revenue Leak Section**
   - “You Don’t Have an Advertising Problem. You Have a Disconnected Systems Problem.”
   - Include 7 PM lead example.

7. **Fragmented Chaos vs Connected Growth Architecture**
   - Two-column persuasive card layout.
   - Chaos: Cold Lead Decay, Vendor Finger-Pointing, Blindfolded Ad Spend, Staff Manual Fatigue.
   - Connected: <60-Second Speed-to-Lead, Single Accountable Partner, Crystal-Clear Attribution, Operational Relief.

8. **Exclusive Growth Operating System**
   - Interactive tabs/stepper for ATTRACT, CONVERT, SERVE, GROW.
   - Include explanation, benefit, deliverables, and transition statements.

9. **Interactive Growth Leak Calculator**
   - Inputs: spend, response lag, lead volume, customer value.
   - Outputs: estimated monthly lost opportunity, suspected leak, recommended next step.
   - Label clearly as an estimate, not a guarantee.
   - Configurable formula with explanatory comments.

10. **Comparison Table**
    - Traditional Agency / Contractor vs Exclusive Media Growth OS.
    - Rows for scope, integration, accountability, response speed, time commitment, attribution, adoption, optimization.

11. **Proof / Transformation Stories**
    - Healthcare, HVAC, law firm examples.
    - Mark as client-provided placeholder proof pending approval.

12. **Speed-to-Lead Demo**
    - Chat-style after-hours booking demo.
    - Compliance note for regulated industries: deterministic, template-based, staff-reviewed, or legally approved.

13. **Offer Ladder / Path Forward**
    - Scorecard, Audit, Buildout, Care Plan, Operations Partnership.
    - Clear scope and investment disclaimers.

14. **Guarantee / Risk Reversal**
    - Conservative roadmap-revision language only.
    - Flag `$10,000 recoverable revenue` claim as requiring proof/legal approval before public use.

15. **FAQ Section**
    - Accordion with homepage FAQs.

16. **Final CTA**
    - “Stop Losing Customers to a Disconnected System.”
    - CTA: Claim Your Growth Leak Scorecard.
    - Include TCPA-conscious form flow, report delivery, and qualification language.

## 5. Proposed File Map

```text
/
├── package.json
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── tailwind.config.ts
├── eslint.config.mjs
├── README.md
├── BUILD_PLAN_AND_FILE_MAP.md
└── src/
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── globals.css
    │   ├── scorecard/page.tsx
    │   ├── audit/page.tsx
    │   ├── services/page.tsx
    │   ├── industries/page.tsx
    │   ├── industries/[slug]/page.tsx
    │   ├── case-studies/page.tsx
    │   ├── about/page.tsx
    │   ├── faq/page.tsx
    │   ├── contact/page.tsx
    │   ├── privacy/page.tsx
    │   ├── terms/page.tsx
    │   └── launch-checklist/page.tsx
    ├── components/
    │   ├── layout/
    │   │   ├── Header.tsx
    │   │   ├── Footer.tsx
    │   │   └── TopAlertBar.tsx
    │   ├── ui/
    │   │   ├── CTAButton.tsx
    │   │   ├── SectionHeading.tsx
    │   │   ├── ComplianceNotice.tsx
    │   │   ├── MetricCard.tsx
    │   │   ├── OfferCard.tsx
    │   │   ├── TestimonialCard.tsx
    │   │   ├── IndustryCard.tsx
    │   │   └── ComparisonTable.tsx
    │   ├── interactive/
    │   │   ├── Calculator.tsx
    │   │   ├── FAQAccordion.tsx
    │   │   ├── ScorecardForm.tsx
    │   │   ├── StageStepper.tsx
    │   │   ├── LeadDemoChat.tsx
    │   │   └── SystemMap.tsx
    │   ├── forms/
    │   │   └── AuditApplicationForm.tsx
    │   └── sections/
    │       ├── Hero.tsx
    │       ├── JourneyDiagnostic.tsx
    │       ├── HiddenLeak.tsx
    │       ├── ChaosVsArchitecture.tsx
    │       ├── GrowthOS.tsx
    │       ├── ProofSection.tsx
    │       ├── OfferLadder.tsx
    │       ├── RiskReversal.tsx
    │       └── FinalCTA.tsx
    ├── content/
    │   ├── siteConfig.ts
    │   ├── homepage.ts
    │   ├── offers.ts
    │   ├── growthOS.ts
    │   ├── faqs.ts
    │   ├── industries.ts
    │   ├── proof.ts
    │   ├── compliance.ts
    │   └── todos.ts
    ├── lib/
    │   ├── calculator.ts
    │   ├── scorecard.ts
    │   ├── tracking.ts
    │   ├── formStubs.ts
    │   └── seo.ts
    └── types/
        ├── content.ts
        ├── forms.ts
        └── scorecard.ts
```

## 6. Component Responsibilities

### Layout Components

- `Header.tsx`: Navigation, mobile menu, CTA routing, anchor links.
- `Footer.tsx`: Secondary navigation, legal links, compliance-sensitive disclaimers.
- `TopAlertBar.tsx`: Configurable diagnostic slot/status message.

### UI Components

- `CTAButton.tsx`: Shared button/link with tracking hook.
- `SectionHeading.tsx`: Eyebrow, title, subcopy, alignment.
- `ComplianceNotice.tsx`: Reusable visible compliance/approval notes.
- `MetricCard.tsx`: Metrics with proof-required annotations.
- `OfferCard.tsx`: Offer ladder pricing/scope cards.
- `TestimonialCard.tsx`: Placeholder proof cards with approval labels.
- `IndustryCard.tsx`: Vertical-specific pain points and CTAs.
- `ComparisonTable.tsx`: Traditional vendor vs Growth OS comparison.

### Interactive Components

- `Calculator.tsx`: Estimate-only growth leak calculator using `src/lib/calculator.ts`.
- `FAQAccordion.tsx`: Accessible accordion with keyboard-friendly controls.
- `ScorecardForm.tsx`: Multi-step local-state diagnostic with mock result screen.
- `StageStepper.tsx`: Four-stage Growth OS tabs/cards.
- `LeadDemoChat.tsx`: Chat-style after-hours booking demo with compliance note.
- `SystemMap.tsx`: Visual flow from ad click to review/reactivation.

### Form Components

- `AuditApplicationForm.tsx`: Contact/application form with unchecked TCPA consent checkbox, hidden UTM field placeholders, and safe submit stub.

## 7. Content Configuration Plan

Use `src/content` to prevent hard-coded copy sprawl and to make future edits easier.

Key config objects should include:

- `siteConfig.ts`: Brand name, descriptor, metadata, nav, alert status, audit slot copy.
- `homepage.ts`: Hero copy, diagnostic visual points, comparison copy, final CTA.
- `offers.ts`: Scorecard, Audit, Buildout, Care Plan, Partnership pricing and disclaimers.
- `growthOS.ts`: ATTRACT, CONVERT, SERVE, GROW stage content plus seven internal engines.
- `faqs.ts`: Homepage and expanded FAQ content.
- `industries.ts`: Priority vertical cards and dynamic vertical landing page templates.
- `proof.ts`: Placeholder case studies and proof-required flags.
- `compliance.ts`: TCPA, 10DLC, regulated-industry, legal-review, claim-review notes.
- `todos.ts`: Business/legal questions that must be answered before launch.

## 8. Calculator and Scorecard Logic

### Calculator

The calculator should use a simple transparent estimate formula:

```text
estimatedLostOpportunity = leadVolume * averageCustomerValue * responseLagLeakFactor
```

If lead volume is absent, derive a conservative proxy from monthly marketing spend. If average customer value is absent, use a configurable default and clearly label the result as an estimate.

The calculator must never state the estimate as verified revenue loss.

### Scorecard

Score categories:

- **Attract:** traffic quality, source clarity, vendor fragmentation, attribution.
- **Convert:** website trust, forms, booking path, offer clarity.
- **Serve:** response time, CRM usage, automation, staff handoff.
- **Grow:** reviews, retention, reactivation, reporting.

Output:

- Growth System Score from 1–100.
- Primary leak stage.
- Three recommended next actions.
- CTA to apply for the Growth Architecture Audit.

## 9. Compliance and Launch Review Requirements

Add visible or internal review flags for:

- `$12M+ client revenue captured`
- `80+ system buildouts engineered`
- `<60s average response speed`
- `98.4% staff adoption rate`
- `391% higher conversion rate`
- `85% manual data entry reduction`
- `$10,000 recoverable revenue guarantee`
- Any case-study numbers, testimonials, names, logos, screenshots, or graphs
- TCPA consent language and unchecked SMS checkbox
- 10DLC registration before automated SMS launch
- STOP/HELP handling before SMS automation launch
- HIPAA/FINRA/legal boundaries for regulated verticals
- Attorney review for privacy policy and terms

## 10. Implementation Sequence

1. Scaffold Next.js, TypeScript, Tailwind, ESLint configuration.
2. Add global design tokens, fonts, gridline background utilities, and responsive layout primitives.
3. Create content/config files first so pages consume structured content.
4. Build shared layout and UI components.
5. Build interactive calculator, scorecard, FAQ accordion, stage stepper, and application form stubs.
6. Build homepage sections in required narrative order.
7. Build additional route pages.
8. Add vertical landing template pages.
9. Add analytics/tracking placeholder utility.
10. Add README with local run instructions and launch checklist.
11. Run lint, typecheck, build, and route/link/code inspections.
12. If a visible web app change is implemented, run the dev server and capture screenshots for desktop/mobile review.

## 11. Verification Checklist

Before final handoff, verify:

- `npm install` or package manager install succeeds.
- Lint command succeeds or warnings are documented.
- TypeScript check succeeds.
- Production build succeeds.
- All routes render without missing imports.
- Header/footer links point to valid routes or anchors.
- Calculator updates output and labels results as estimates.
- Scorecard advances through steps and shows a mock result without backend submission.
- Application form prevents accidental live submission.
- TCPA consent checkbox is unchecked by default.
- Mobile classes stack layouts cleanly.
- Interactive controls have focus states and accessible labels.
- Proof and metric claims are flagged as requiring approval.
- Privacy and terms are labeled as attorney-review templates.

## 12. Known Business / Legal TODOs

- Confirm first priority vertical for the first headless landing page.
- Confirm true minimum revenue threshold for applicants.
- Verify which case studies are approved for public use.
- Approve and document all public metrics.
- Provide CRM/webhook endpoint for scorecard and application submissions.
- Approve exact TCPA consent language.
- Complete 10DLC registration before automated SMS launch.
- Provide founder origin story.
- Confirm audit capacity limits by month.
- Decide whether the `$10,000 recoverable revenue` guarantee should remain private, be softened, or be removed.
- Finalize Level 3 buildout tiers and margins.
- Confirm strict out-of-scope services.
- Identify industries requiring special compliance review.
- Choose booking/calendar integration.
- Finalize analytics events.
- Provide brand assets, logos, photos, videos, domain, and deployment target.

## 13. Recommended Next Steps

1. Approve this architecture and file map.
2. Provide or confirm any PDF/source-document excerpts that contain approved testimonials, founder story, and brand details.
3. Scaffold the Next.js application and implement the website end to end.
4. Run verification checks and capture responsive screenshots.
5. Complete legal/proof/TCPA/10DLC review before public launch.
