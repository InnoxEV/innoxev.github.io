## Target File
index.html

# Welcome Page Spec - Innox

## Goal
Create a premium, minimal welcome screen that allows users to select their language before entering the website.

The design should feel modern, clean, and similar to Apple-style landing pages.

---

## Structure

### 1. Layout
- Full screen height (100vh)
- Content centered vertically and horizontally
- Single panel layout (no scrolling)

---

### 2. Logo Section
- Positioned at the top of the panel
- Clickable → reloads index.html
- Medium size (not dominant)

---

### 3. Header Content

#### Eyebrow Text
- "Welcome to Innox"
- Small, subtle text

#### Main Title (H1)
- "Select Your Experience"
- Large, bold, center-aligned

#### Subtitle
- "Choose your preferred language to enter Innox EV"
- Smaller, muted text

---

### 4. Language Selection

Two selectable cards:

#### English Card
- Title: English
- Subtitle: Continue in English
- Link: /en/index.html

#### Arabic Card
- Title: العربية
- Subtitle: المتابعة باللغة العربية
- Link: /ar/index.html

---

## UI Behavior

## Implementation Scope
- Update index.html
- Update style.css only
- Do not create new files

### Cards Layout
- Desktop: 2 cards side by side
- Mobile: stacked vertically

### Hover Effects
- Scale: 1.03
- Smooth transition (0.2s ease)
- Add soft shadow
- Cursor: pointer

### Visual State
- Cards look clickable (button-like)
- Clear separation between cards

---

## Design Style

- Minimal (Apple-inspired)
- Clean spacing (generous padding)
- Rounded corners (modern feel)
- Subtle shadows (not heavy)
- Typography:
  - Inter (English)
  - Tajawal (Arabic)

---

## Accessibility

- All links have aria-label
- Text is readable (good contrast)
- Buttons are large enough for mobile tapping

---

## Performance

- Fast loading
- No heavy animations
- Lightweight assets

---

## Acceptance Criteria

- Fully responsive (mobile + desktop)
- Centered layout always
- Smooth hover animations
- Navigation works correctly (/en, /ar)
- No extra elements added
- Clean and premium appearance

---

## Constraints
- Do not change page structure
- Only enhance UI and styling