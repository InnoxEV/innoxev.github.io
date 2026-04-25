# Homepage Spec - Innox

## Target File
/en/index.html

---
## Structure
- /en/index.html → Homepage
- /en/apps.html → Apps page
- /en/accessories.html → Accessories page

---

## Goal
Create a clean, modern homepage that introduces Innox and directs users to the main sections:
- Apps
- Accessories

The design should match the Apple-style minimal UI used in the welcome page.

---

## Structure

### 1. Hero Section

#### Layout
- Full width
- Centered content
- Large vertical spacing

#### Content
- Eyebrow: "INNOX EV"
- Title (H1): "Everything You Need for Your EV"
- Subtitle:
  "Apps, accessories, and real solutions for BYD owners"

#### Buttons:
- Primary: Explore Apps → /en/apps.html
- Secondary: View Accessories → /en/pages/accessories.html

---

### 2. Sections Preview (Core Features)

#### Layout
- Grid (2 columns desktop, 1 column mobile)
- Large cards (same style as welcome page)

---

#### A. Apps Section

- Title: "APK Apps"
- Description:
  "Discover useful applications to enhance your EV experience"
- Button: Browse Apps → /en/apps.html

---

#### B. Accessories Section

- Title: "BYD Accessories"
- Description:
  "Explore tools and accessories for your vehicle"
- Button: View Accessories → /en/pages/accessories.html

---

### 3. Featured Section (Top Picks)

#### Layout
- Horizontal cards or 2-column grid

#### Content
- 1 Featured App
- 1 Featured Accessory

---

### 4. Coming Soon Section

#### Purpose
Show future direction without clutter

#### Items (MAX 2):
- BYD Issues & Fixes
- EV Support Service

#### Style:
- Slightly faded cards
- Label: "Coming Soon"
- Not clickable

---

### 5. Footer

- Short description:
  "Innox is your smart guide for electric vehicles"
- Links:
  - Apps
  - Accessories
- YouTube link

---

## UI Behavior

- Cards hover:
  - scale(1.02)
  - shadow increase
- Smooth transitions (0.2s)

---

## Design Style

- Minimal (Apple-inspired)
- Same spacing system as welcome page
- Rounded cards
- Soft shadows
- Clean typography (Inter)

---

## Implementation Scope

- Create /en/index.html
- Use existing style.css
- Do not create new CSS files

---

## Acceptance Criteria

- Fully responsive
- Clean and minimal layout
- Clear navigation to Apps & Accessories
- No clutter or extra sections
- Matches welcome page design language

---

## Constraints

- Do not add extra features
- Keep layout simple
- Maintain visual consistency with welcome page
- Do not modify layout structure unless defined in spec