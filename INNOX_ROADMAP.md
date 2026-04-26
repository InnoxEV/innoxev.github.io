# INNOX Roadmap (v1.0 - System Evolution Plan)

## 1. Current State (Phase 1 - Static Platform)

### Architecture
- Frontend: HTML + CSS (Static)
- Backend: None
- Database: None
- Hosting: Static (GitHub Pages / Netlify)

### What is Built

#### Pages
- Welcome Page (/index.html)
- EN Homepage (/en/index.html)
- AR Homepage (/ar/index.html)
- Apps Page (/en/apps.html)
- App Details:
  - MicroG
  - Google Maps
- Accessories Page (/en/accessories.html)
- Product Details:
  - V2L Adapter

#### System Type
- Static Content Platform
- Spec-driven architecture
- No dynamic data

### Strengths
- Fast
- Simple
- SEO-friendly
- Zero cost

### Limitations
- Manual updates (HTML edits)
- No scalability for large content
- No user system
- No analytics tracking
- No monetization system yet

---

## 2. Phase 2 — Content & SEO Engine

### Goal
Turn Innox into a high-value content platform that attracts traffic.

### New Features

#### 2.1 BYD Issues & Fixes Section
- Pages:
  - /en/issues/battery-drain.html
  - /en/issues/charging-problem.html
- Structure:
  Problem → Cause → Fix → CTA

#### 2.2 SEO Content System
- Guides:
  - "How to use V2L"
  - "Best apps for BYD"
- Blog-style pages (still static)

#### 2.3 Internal Linking System
- Apps ↔ Guides ↔ Accessories
- Build SEO authority

#### 2.4 Analytics (FIRST BACKEND TOUCHPOINT)
- Add:
  - Google Analytics
  - Click tracking (basic)

### Tech (Still Static)
- No database yet
- No backend yet

---

## 3. Phase 3 — Monetization & Data Layer (START BACKEND)

### Goal
Introduce dynamic data + monetization system

---

## 3.1 Backend Introduction

### Stack
- Backend: Supabase (FREE PLAN)
- Database: PostgreSQL (Supabase)
- API: Auto-generated (Supabase REST)

### Why Supabase
- Free tier is enough for MVP:
  - 500MB database
  - 50,000 users
  - 1GB storage  [oai_citation:0‡UI Bakery](https://uibakery.io/blog/supabase-pricing?utm_source=chatgpt.com)  
- Built-in:
  - Auth
  - Storage
  - APIs

---

## 3.2 Database Design (FIRST VERSION)

### Tables

#### apps
- id
- name
- description
- problem
- solution
- category
- slug

#### accessories
- id
- name
- benefit
- slug
- image

#### guides
- id
- title
- content
- category
- slug

#### clicks (IMPORTANT)
- id
- item_id
- type (app / product)
- timestamp

---

## 3.3 What Becomes Dynamic

Instead of HTML-only:

### Before
- Hardcoded apps

### After
- Fetch from database:
```js
GET /apps
```

---

## 3.4 Monetization Layer

### Affiliate System

- Add links inside:
  - Product pages
  - App pages

### Tracking

- Track clicks in database

---

## 3.5 Hybrid Architecture (IMPORTANT)

DO NOT rebuild everything.

### Keep:

- Static pages (SEO)

### Add:

- Dynamic components:
  - Apps list
  - Products list

---

## 3.6 Frontend Integration

- Use fetch API to call Supabase REST endpoints
- Example:
  GET /rest/v1/apps

- Render data into existing UI components

Rule:
Do NOT rebuild UI — inject data only

---

## 4. Phase 4 — Platform & Services

### Goal

Turn Innox into a real EV platform

---

### 4.1 User System

- Login (Supabase Auth)
- Save tools / apps
- Personalized experience

---

### 4.2 Admin Dashboard (VERY IMPORTANT)

Instead of editing HTML:

- Add new app from dashboard
- Add product
- Add guide

---

### 4.3 EV Support System

- User submits issue
- System suggests:
  - Apps
  - Guides
  - Accessories

---

### 4.4 Direct Selling (Optional)

- Product listings
- Checkout (Stripe later)

---

## 5. Migration Strategy (CRITICAL)

### Step 1

Keep all current static pages

### Step 2

Introduce Supabase in parallel

### Step 3

Convert Apps page:

- Replace static cards with dynamic fetch
- Keep same UI design
- Add fallback if API fails

### Step 4

Convert Accessories page (same approach)

### Step 5

Add admin panel

---

## 6. System Architecture (Final Vision)

User → Frontend → API (Supabase) → Database

### Hybrid:

- Static SEO pages
- Dynamic data-driven components

---

## 7. Key Principle

DO NOT:

- Overbuild early

DO:

- Evolve step by step

---

## 8. Phase 2 Execution Targets

- Publish 10–20 issue pages
- Publish 5–10 guides
- Each page must link to:
  - 1 app
  - 1 accessory

Goal:
Build initial SEO traffic foundation

---

## 9. Priority Order

1. Apps ecosystem (MicroG + Maps)
2. Issues & Fixes pages
3. Guides
4. Accessories expansion

---

## 10. Success Metrics

### Phase 2:
- 100+ monthly users
- 5+ indexed pages on Google

### Phase 3:
- First affiliate click tracked
- First conversion

### Phase 4:
- Active user interaction

---

## 11. Roadmap Principle

- Focus on outcomes, not features
- Each phase must deliver measurable value
- Do not start next phase before validating current phase