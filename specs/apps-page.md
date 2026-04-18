# Apps Page Spec

## Goal
Provide a curated list of EV-related apps that solve real problems for BYD users in MENA.

---

## Page Structure

### 1. Page Header
- Title: "EV Apps & Tools"
- Subtitle: "Apps that make your EV experience easier"

---

### 2. App List Section

Display apps in a clean card layout.

Each app card must include:

- App Name
- Short Description (1 line)
- Problem it solves
- Button: "View App Details"

---

### 3. App Card Structure

Each card includes:

- App Icon
- App Name
- Problem Tag (e.g. Charging, Navigation, Monitoring)
- Problem it solves (clear user pain)
- Short description (solution)
- CTA button
- Link type (APK download or external source)
- Source / trust note (e.g. official, GitHub, verified)

---

## UI Behavior

- Clean grid layout (2–3 columns desktop, 1 column mobile)
- Minimal design (Apple-style)
- Consistent spacing
- Click on card OR button → opens App Details Page
- Cards should be easily scannable (clear hierarchy)
- Categories may be introduced later without redesign

---

## Content Rules

Each app must:
- Solve a real EV-related problem
- Be relevant to MENA users
- Be useful for BYD owners

Avoid:
- Random apps
- Low-value tools
- Duplicate functionality

---

## Categories (Optional Phase 1)

Start simple, but structure for future:

- Charging
- Navigation
- Monitoring
- Utilities

---

## Initial Apps (Phase 1)

Start with a focused setup:

### 1. MicroG
- Role: Enables Google services without full Google Play Services
- Core Use: Allows apps like Google Maps to function properly

### 2. Google Maps (with MicroG)
- Role: Navigation and location services
- Core Use: EV navigation, route planning, and finding locations

### Rule
Start with a connected ecosystem, not random apps.

### Dependency Note
Some apps depend on others to function properly.
This relationship must be explained clearly in the UI.

## Acceptance Criteria

The page is complete when:

- At least 2 real apps are listed (initial version)
- Apps included:
  - MicroG (Google services alternative)
  - Google Maps (working with MicroG)
- Each app clearly states the problem it solves
- Relationship between apps must be clearly explained (e.g. Google Maps depends on MicroG)
- Layout is clean and responsive
- Navigation to App Details works

## Empty State Behavior
If no apps are available, display a clear message:
"No apps available yet"