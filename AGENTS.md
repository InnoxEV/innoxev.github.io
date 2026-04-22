# AGENTS.md

## Development Constraints
- **Phase 1 Only**: Do not add features outside Phase 1 (Welcome, Homepage, Apps, Accessories).
- **Style**: Minimal, clean, Apple-style, mobile-first design.
- **Source of Truth**: English version first; Arabic version must mirror EN with RTL adaptation.
- **Spec-Driven**: Any structural change MUST be driven by a spec in `/specs`. Do not create or rename files without a spec.

## Asset & Path Rules
- **Relative Paths Only**: Never use absolute paths (starting with "/").
- **Cache Busting**: CSS, JS, and media MUST use query strings (e.g., `?v=20260422`).
- **Location**: Store all assets under `/assets`. Do not scatter files.
- **Case Sensitivity**: GitHub Pages is case-sensitive; match filenames exactly.
- **Videos**: Use `<video>` with controls; H.264 MP4.

## Mandatory Pre-Commit Checklist
1. **Network Tab**: Zero 404 errors in Chrome DevTools (mandatory blocker).
2. **Console**: Zero JavaScript errors.
3. **Consistency**: Apply all fixes to both EN and AR versions.
4. **Mobile**: Test responsive layout using Chrome mobile view.
5. **Cleanliness**: Ensure no `.DS_Store` or temp files are included.
