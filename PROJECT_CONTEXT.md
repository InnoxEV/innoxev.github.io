# Innox Website - Product Context

## Mission
Build the #1 Arabic/English EV platform focused on BYD, tools, and real solutions.

## Current Phase
Phase 1 (MVP)

## Current Features (PHASE 1 ONLY)
- Welcome page
- Homepage
- Apps Page (APK Section)
- BYD Accessories

## Planned (DO NOT BUILD NOW)
- BYD Issues Section
- Support System
- Selling Products

## Rules
- Do not modify existing structure unless specified in specs
- Do NOT add features outside Phase 1
- Keep UI minimal, clean, and Apple-style
- Mobile-first design
- Fast loading pages
- Every feature MUST follow a spec from /specs
- English version is the source of truth
- Arabic version follows the same structure with RTL adaptation
- Do NOT create or rename files unless defined in specs
- Any structural change must be driven by a spec
- Maintain visual consistency between pages
- Focus on problem-solving content (NOT pricing, comparisons, or generic car content)
- Keep pages lightweight and fast (avoid heavy assets and unnecessary scripts)
- Avoid broken links or incomplete features

## Structure
- index.html → Welcome page (language selection)
- /en/index.html → English homepage
- /ar/index.html → Arabic homepage
- /specs → Feature definitions (source of implementation)

## Asset Loading & Caching Rules

1. Always use RELATIVE paths for all assets (CSS, JS, images, videos)
   - Never use absolute paths starting with "/"
   - Paths must be correct based on file location

2. All static assets MUST support cache-busting when updated
   - CSS/JS MUST use versioning (?v=)
   - Images/videos should be versioned or renamed when changed
   - All <script> files MUST include versioning (?v=)
   - Use consistent version format:
    - Either incremental (?v=1,2,3)
    - OR date-based (?v=YYYYMMDD)
   - Do not mix formats

3. All assets must match exact case-sensitive file names
   - GitHub Pages is case-sensitive

4. Video implementation rules:
   - Use <video> with controls
   - Use MP4 format (H.264)
   - Always include proper <source> tag
   - Avoid autoplay unless using muted + playsinline

5. Before committing:
   - Ensure no .DS_Store files are included
   - Ensure .gitignore includes .DS_Store

6. All new files and updates MUST follow these rules
   - No exceptions
   - Any violation is considered a bug

7. Deployment consistency is mandatory:
   - Code must work identically in local and production environments

8. Validation before commit is mandatory:
   - Open DevTools → Network tab
   - Ensure NO 404 errors for:
     - CSS
     - JS
     - Images
     - Videos
   - Any 404 = blocker bug

9. Mobile validation is required:
   - Test using Chrome DevTools mobile view
   - Ensure layout, media, and interactions work correctly

10. EN and AR pages must use identical asset structure and paths
   - Any fix in EN must be mirrored in AR

11. All HTML pages must include:
   - Proper <meta viewport>
   - Linked CSS with versioning
   - Consistent base structure

12. No silent failures allowed:
   - Any missing asset, broken UI, or console error must be treated as a bug
   - The UI must never appear partially broken

13. Do not rely on local environment behavior
   - Code must not depend on local paths, caching, or browser-specific behavior
   - Always validate in production-like conditions

14. All assets must be stored under /assets
   - No scattered CSS, images, or videos outside this folder

## Pre-Commit Checklist

Before every commit and push:

1. Paths & Assets
   - All assets use relative paths (NO "/")
   - All CSS/JS include versioning (?v=)
   - No missing or incorrect paths

2. DevTools Check (MANDATORY)
   - Open Chrome DevTools → Network tab
   - Reload page
   - Ensure ZERO 404 errors

3. UI Validation
   - Pages load correctly (no broken layout)
   - Images and videos display properly
   - No partially loaded sections

4. Mobile Check
   - Test using Chrome mobile view
   - Ensure responsive layout and working media

5. Console Check
   - Open Console tab
   - Ensure no JavaScript errors

6. EN / AR Consistency
   - Any fix applied to EN is also applied to AR
   - Structure and paths are identical

7. Clean Repo
   - No .DS_Store files
   - No unnecessary or temporary files

8. Final Sanity Check
   - Hard refresh (Cmd/Ctrl + Shift + R)
   - Verify changes appear correctly