# BYD Accessories Page Spec (EN)

## 1. Goal

Create a clean, minimal Accessories page that displays curated BYD-related products organized by category and guides users to individual product pages.

---

## 2. Scope (Phase 1)

- Page path: `/en/accessories.html`
- Categories: 1 (Charging & Power)
- Products: 1 (V2L Adapter - China to EU Plug)
- No pricing
- No affiliate links on this page
- No advanced filtering or search

---

## 3. Out of Scope

- Multiple categories
- Product filters or search
- Cart / checkout
- Reviews or ratings
- Direct purchase buttons
- Affiliate links

---

## 4. Page Structure

### 4.1 Header Section

- Title: BYD Accessories
- Subtitle: Smart tools and accessories to improve your BYD experience

---

### 4.2 Category Section

- Category Name: Charging & Power

Structure:
- Section title
- Product grid (1 product)

---

### 4.3 Product Card

Each product card must include:

- Image
- Title
- One-line benefit
- CTA button

#### Product Details:
 
- Title: V2L Plug Converter (China Socket to EU Plug)
- Benefit: Convert BYD V2L Chinese socket to EU standard for normal device use
- CTA: View Details →
- Link: `/en/accessories/v2l-adapter.html`

---

## 5. UI / Design Rules

- Minimal (Apple-style)
- White or light background
- Rounded cards
- Soft shadows
- Clean spacing
- No clutter
- Mobile-first design

Responsive grid:

- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3–4 columns

---

## 6. Technical Rules

- Use relative paths only
- Store images in:

`/assets/images/accessories/v2l-adapter/`

Example:

`main.jpg`

- Use versioning for assets:

`style.css?v=1`

---

## 7. Localization Rules

- EN is the source
- AR must:
  - Follow same structure
  - Use RTL
  - Translate content only
  - Use same assets

---

## 8. Acceptance Criteria

- Page loads without errors
- Header is visible and correct
- Category section displays correctly
- Product card appears correctly
- "View Details" link works
- Mobile layout works properly
- No console errors
- No broken UI
- No pricing or affiliate links

---

## 9. Future Enhancements (Not Phase 1)

- Add more categories (Interior, Safety, Tech)
- Add more products
- Add filtering system
- Add affiliate links (only in product pages)

---

## 10. Notes

This page is a discovery layer, not a selling page.

The goal is to guide users to product pages where detailed explanations and affiliate links will exist.

---

## 11. AI / PROJECT_CONTEXT.md Rules Integration

All implementation generated from this spec must follow the rules defined in:

`/PROJECT_CONTEXT.md`

### Requirements:

- AI must read and apply PROJECT_CONTEXT.md before generating any code
- Follow naming conventions, structure, and constraints defined in PROJECT_CONTEXT.md
- Do not introduce new patterns that conflict with existing project rules
- Maintain consistency with previously generated pages (homepage, apps page)

### Key Principles:

- Consistency over creativity
- Reuse existing components and structure where possible
- Do not redesign layout unless explicitly required
- Keep UI minimal and aligned with project design system

### Enforcement:

Any output that does not follow PROJECT_CONTEXT.md should be considered invalid and must be corrected before implementation
