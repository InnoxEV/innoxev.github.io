# INNOX WEBSITE CONSTITUTION (v5.0)

---

## 1. Mission
Build the most trusted Arabic EV platform focused on BYD, delivering practical guides, tools, and solutions that solve real user problems across the MENA region.

---

## 2. Positioning
Innox is not just a website.

It is a structured platform designed to:
- Solve real EV user problems
- Provide practical tools and guidance
- Focus deeply on BYD ecosystem

Innox does NOT focus on:
- Car pricing
- Market comparisons
- Generic automotive news

---

## 3. Target Users

### New EV User
- Needs help understanding how to use the car
- Focus: setup, apps, charging basics

### BYD Owner
- Facing real issues
- Focus: fixes, troubleshooting, solutions

### EV Optimizer
- Wants advanced usage
- Focus: tools, tips, performance

---

## 4. Market Strategy

Innox is a **MENA-focused EV platform**, designed primarily for Arabic-speaking users, with English as a supporting system language.

### Core Approach
- Arabic = primary content (SEO + audience)
- English = system base (structure + development)

### Content Principle
- Content solves real problems relevant to MENA users
- Avoid generic global content
- Focus on real-world usage

### Rule
Build for MENA users → Scale depth before expansion

---

## 5. BYD Focus

### Models (Phase 1)
- BYD Song Plus
- BYD Sealion 06
- BYD Song L

### Content Depth Standard
Each model should include:
- Real usage insights
- Common issues
- Fix guides
- Recommended apps
- Accessories

### Rule
Depth over breadth

---

## 6. Core Pillars

### Education
Guides, fixes, tutorials

### Utility
Apps, tools, real solutions

### Monetization
Affiliate, services, products

---

## 7. Product Roadmap

### Phase 1 (Current - MVP)
- Homepage (EN + AR)
- Apps Page
- Accessories Page

### Phase 2 (Content & SEO Expansion)
- BYD Issues & Fixes
- SEO content (guides & tutorials)

### Phase 3 (Monetization)

Goal:
Introduce revenue streams without breaking user trust

Deliverables:
- Affiliate integration system
- Featured listing system

Exit Criteria:
- At least 1 active affiliate integration
- First successful transaction or conversion

### Phase 4 (Advanced)
- EV Support System
- Direct product selling

---

## 8. SEO Strategy

- Use Modern Standard Arabic (MSA)
- Focus on problem-based keywords
- Target real user search intent
- Use internal linking between related content to improve navigation and SEO

Examples:
- مشاكل BYD
- شحن السيارات الكهربائية
- أفضل تطبيقات EV

### Rule
SEO is a core growth system, not optional

### Technical Rules
- Consistent URL structure
- No duplicate content between EN/AR
- Proper meta tags and structured data

---

## 9. Content Standards

All content must be:
- Clear
- Practical
- Problem-solving

### Rule
If it doesn’t help the user → don’t publish

---

## 10. System Architecture

- `/index.html` → Welcome Page (language selection entry point)
- `/en/` → English system (source structure)
- `/ar/` → Arabic system (localized RTL version)
- `/specs/` → Feature definitions (HOW the product works)
- `/context/` → Strategy & system rules (WHY decisions are made)

### Structure Principles
- Keep reusable components modular
- Avoid duplication between EN and AR
- Maintain consistent folder structure across features

### Entry Flow Rule
- Welcome page is default entry
- Direct page access must still be supported

---

## 11. Development System

Every feature MUST have a spec.

Spec must include:
- Goal
- Structure
- UI behavior
- Acceptance criteria

### Rules
- EN spec = source of truth
- AR = adaptation layer (NOT separate spec)
- All changes must be committed with clear messages describing purpose and scope

---

## 12. Localization Strategy

- English = base system
- Arabic = user-facing layer

### Rules
- Do NOT change structure
- Do NOT redesign layout
- Only adapt language and direction (RTL)

Fallback Rule:
If Arabic content is unavailable, fallback to English without breaking structure

---

## 13. Workflow

1. Select feature  
2. Write spec  
3. Build with Codex  
4. Review UI & functionality    
5. Commit & push  

If a feature fails review, it must return to spec stage before implementation continues

---

## 14. Rules

- No feature without clear value  
- Do not skip phases  
- Do not redesign without reason  
- Keep UI minimal (Apple-style)  
- Focus on execution  
- Avoid "Coming Soon" clutter  
- Avoid quick fixes that introduce long-term complexity

---

## 15. Current Focus

1. Apps Page (priority)  
2. First App Details Page  
3. Arabic UI refinement  

---

## 16. Mindset

This is not a website.  
This is a product system.

Focus on:
- Structure  
- Clarity  
- Execution  

---

## 17. Maintenance Rule
All content must be periodically reviewed and updated to ensure accuracy, especially for evolving models and tools.

---

## 18. Performance Principle
- Pages must be lightweight and fast-loading
- Avoid unnecessary scripts and heavy assets

---

## 19. Reliability Rule
- Avoid broken links or incomplete pages
- Any unavailable content must be clearly indicated

---

## 20. Deployment Principle
- Changes must be tested locally before deployment
- Production should remain stable and user-safe

---

## 21. Definition of Done Principle
A feature is only considered complete when:
- It meets its spec requirements
- It passes UI and functional review
- It provides clear user value