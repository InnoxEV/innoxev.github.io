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

### Phase 3 (Monetization & Data Layer)

Goal:
Introduce revenue streams AND a structured data system without breaking performance or SEO.

Deliverables:
- Affiliate integration system
- Featured listing system
- Supabase backend integration
- Dynamic content system (apps & accessories)
- Click tracking system

System Changes:
- Introduce database (Supabase PostgreSQL)
- Introduce API layer (Supabase REST)

What becomes dynamic:
- Apps list
- Accessories list
- Click tracking

What remains static:
- Homepage
- Guides
- SEO pages

Exit Criteria:
- At least 1 active affiliate integration
- First tracked user interaction (click stored in DB)
- At least 1 dynamic page powered by database

### Phase 4 (Platform & System Expansion)

Goal:
Transform Innox into a full EV platform

Includes:

- User system (authentication via Supabase)
- Admin dashboard (content management)
- EV Support System:
  - User submits issue
  - System suggests solutions (apps, guides, accessories)

- Optional:
  - Direct product selling
  - Payment integration (future)

Exit Criteria:
- Admin can add content without editing code
- At least 1 user interaction flow implemented

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

### Analytics System

- Use Google Analytics (Phase 2)
- Track:
  - Page views
  - User navigation paths
  - CTA clicks

Goal:
Understand user behavior before monetization

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

## 11. Backend & Data Strategy

### Phase 1–2 (Current)

- Static architecture only

- No backend

- No database

### Phase 3 (Introduction of Backend)

- Use Supabase as backend platform

- Use PostgreSQL database (via Supabase)

- Use auto-generated APIs (REST)

### Rules

1. Do NOT introduce backend before Phase 3

2. Do NOT replace static pages entirely

3. Use hybrid architecture:

   - Static pages for SEO

   - Dynamic data for lists and systems

### Database Usage Rules

- Database is used ONLY for:

  - Apps

  - Accessories

  - Guides

  - Click tracking

- Do NOT store UI structure in database

- Do NOT generate full pages from database (Phase 3)

## 11.1 Initial Database Schema (Phase 3)

Tables:

apps
- id
- name
- slug
- description
- problem
- solution
- category

accessories
- id
- name
- slug
- benefit
- image

guides
- id
- title
- slug
- content
- category

clicks
- id
- item_id
- type (app/product)
- timestamp

## 11.2 Hybrid Architecture Rules

- Static pages MUST remain for:
  - Homepage
  - Guides
  - SEO content

- Dynamic data ONLY used for:
  - Apps list
  - Accessories list
  - Tracking systems

- Do NOT generate full pages dynamically in Phase 3

- Do NOT convert entire site to SPA

Rule:
SEO pages must remain static-first

## 11.3 Migration Strategy

Step 1:
Keep all current static pages

Step 2:
Introduce Supabase in parallel (no breaking changes)

Step 3:
Convert:
- Apps page → dynamic data
- Accessories page → dynamic data

Step 4:
Keep:
- App detail pages static
- Guides static

Step 5 (Phase 4):
Introduce admin dashboard

Rule:
Migration must be incremental, never full rewrite

## 11.4 API Usage Rules

- All data access must go through Supabase API
- No direct database access from frontend

- Use:
  - GET for fetching data
  - INSERT for tracking clicks

- Keep API calls minimal and structured

Rule:
Frontend must remain clean and simple

---

## 12. AI Implementation Rules (CRITICAL)

All AI tools MUST follow:

1. Respect current phase:
   - Phase 1–2 → Static only
   - Phase 3 → Supabase allowed (limited scope)
   - Phase 4 → Full system allowed

2. Strict Restrictions:

- NEVER introduce backend before Phase 3
- NEVER introduce authentication before Phase 4
- NEVER convert full pages to dynamic rendering in Phase 3
- NEVER redesign structure without spec

3. Database Rules:

- MUST use Supabase
- MUST follow defined schema
- MUST NOT invent new schema without updating constitution

### Slug Rules

- Slug must be:
  - lowercase
  - hyphen-separated
  - no spaces or special characters

Example:
- google-maps
- byd-v2l-adapter

Rule:
Slug is the single source of truth for URLs

4. UI Rules:

- Maintain minimal design system
- Follow existing layout patterns
- Do not introduce new UI systems

5. System Rule:

Consistency > Creativity

---

## 13. Development System

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

## 14. Localization Strategy

- English = base system
- Arabic = user-facing layer

### Rules
- Do NOT change structure
- Do NOT redesign layout
- Only adapt language and direction (RTL)

Fallback Rule:
If Arabic content is unavailable, fallback to English without breaking structure

---

## 15. Workflow

1. Select feature  
2. Write spec  
3. Build with Codex  
4. Review UI & functionality    
5. Commit & push  

If a feature fails review, it must return to spec stage before implementation continues

---

## 16. Rules

- No feature without clear value  
- Do not skip phases  
- Do not redesign without reason  
- Keep UI minimal (Apple-style)  
- Focus on execution  
- Avoid "Coming Soon" clutter  
- Avoid quick fixes that introduce long-term complexity

---

## 17. Current Focus

1. Apps Page (priority)  
2. First App Details Page  
3. Arabic UI refinement  

---

## 18. Mindset

This is not a website.  
This is a product system.

Focus on:
- Structure  
- Clarity  
- Execution  

---

## 19. Maintenance Rule
All content must be periodically reviewed and updated to ensure accuracy, especially for evolving models and tools.

---

## 20. Performance Principle
- Pages must be lightweight and fast-loading
- Avoid unnecessary scripts and heavy assets

---

## 21. Reliability Rule
- Avoid broken links or incomplete pages
- Any unavailable content must be clearly indicated

---

## 22. Deployment Principle
- Changes must be tested locally before deployment
- Production should remain stable and user-safe

---

## 23. Definition of Done Principle
A feature is only considered complete when:
- It meets its spec requirements
- It passes UI and functional review
- It provides clear user value

## 24. Performance Rules

- Pages must load fast (<2s target)
- Minimize API calls
- Use indexed fields in database (id, slug)
- Avoid unnecessary scripts

Rule:
Performance is part of user experience, not optional

## 25. Error Handling Rules

- If API fails:
  - Show fallback UI (not blank screen)

- If data is missing:
  - Show "Content not available"

- Never break layout due to data failure

Rule:
User experience must remain stable even on failure.

## 26. Security Rules

- Never expose private API keys in frontend
- Use Supabase public anon key only
- Enable Row Level Security (RLS) when needed

- Validate all data before inserting into database

Rule:
Security must be considered from Phase 3

## 27. Naming Rules

- File names, slugs, and DB entries must match
- Avoid different naming for same item

Example:
- google-maps.html
- slug: google-maps

Rule:
Consistency reduces bugs and confusion

## 28. Data Ownership Rules

- Each table has a clear ownership:

  - apps → managed via admin system
  - accessories → managed via admin system
  - guides → managed via content system
  - clicks → system-generated only

- Frontend MUST NOT directly modify core data

Rule:
Only controlled systems can modify database content

## 29. Content vs Data Rule

- Static content:
  - Guides
  - SEO pages
  - App details (Phase 3)

- Dynamic data:
  - Lists (apps, accessories)
  - Tracking data

Rule:
Content = controlled, high-quality, SEO-focused  
Data = flexible, scalable, system-driven 

## 30. Frontend Evolution Strategy

- Phase 1–3:
  - Use static HTML + minimal JS

- Phase 4:
  - Optional transition to framework (Next.js or similar)

Rule:
Do NOT introduce frontend frameworks before clear need

## 31. Environment Rules

- Use environment variables for:
  - Supabase URL
  - Supabase API keys

- Do NOT hardcode credentials in code

Rule:
All sensitive data must be externalized