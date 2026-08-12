# E-Cell Website Design Direction

## Reference Ground Truth

The linked EBC 2.0 site is the visual reference for this project. Its strongest patterns are an immersive hero with a clear program promise, a restrained editorial layout, event/program storytelling, numbered journey sections, image-led proof, strong calls to action, and navigation that stays present without dominating the page. E-Cell will borrow this confidence and clarity without copying its content or brand identity.

## Chosen Approach: Bennett Signal / Editorial Momentum

### Design Movement
Contemporary editorial web design fused with institutional Swiss modernism and the visual energy of a campus event poster. The site should feel like a living noticeboard for ambitious student founders: structured, typographic, image-led, and always moving forward.

### Core Principles
1. **Signal over clutter:** every section has one clear message and a deliberate hierarchy.
2. **Editorial pacing:** large type, sharp captions, numbering, and generous whitespace make the page read like a magazine feature.
3. **Campus energy:** photography, event dates, and kinetic marquee bands provide momentum without neon or gimmicky effects.
4. **Proof through participation:** events, people, mentors, cohorts, and newsletters show what E-Cell actually does.

### Color Philosophy
The foundation is warm paper, ink black, and deep Bennett maroon. A bright acid-lime signal color is used sparingly for dates, active states, and calls to action, making important information feel like a highlighted annotation on a printed program. The palette is energetic but credible: institutional enough for a university, distinctive enough for a student-led entrepreneurship cell.

### Layout Paradigm
Use an asymmetric, editorial page with an oversized left rail for section labels, a wide content canvas, and occasional full-bleed photographic interruptions. Avoid repeating centered cards. Content should enter from edges, overlap lightly, and use horizontal rails for image stories and events.

### Signature Elements
- A floating, pill-like navigation that becomes translucent and prism-like after scrolling.
- A small lime index marker and oversized section numbers for editorial orientation.
- Continuous event-photo marquee bands with alternating direction and subtle hover pause.

### Interaction Philosophy
Interactions should feel like handling a well-designed printed program: direct, tactile, and legible. Hover states reveal context, links slide or underline with intent, and event cards expand through visual emphasis rather than busy overlays. All movement must respect reduced-motion preferences.

### Animation
Use quick ease-out transitions for links, buttons, and navigation changes. Hero elements reveal in a staggered sequence. Marquee rails move continuously but pause on hover and focus. Scroll state changes the nav from quiet over the hero to a blurred paper-glass surface over content. Avoid perpetual motion except for the image rails.

### Typography System
Use **Space Grotesk** for headlines, dates, and navigation: geometric, contemporary, and assertive. Use **DM Sans** for body copy and metadata: clear at small sizes and neutral enough for a university context. Headlines are tight and oversized; body copy is relaxed and capped at readable widths. Use uppercase micro-labels with generous tracking for metadata.

### Brand Essence
E-Cell is Bennett University's student-powered launchpad for people who turn questions into ventures, communities, and measurable action.

Personality: **restless, generous, exacting**.

### Brand Voice
Headlines are short, active, and slightly provocative. CTAs invite participation rather than passive browsing. Microcopy is specific and warm, never corporate filler.

Example lines:
- “Ideas are common. Momentum is not.”
- “Find the next room where your idea gets sharper.”

### Wordmark & Logo
Use a compact typographic E-Cell wordmark paired with a custom four-line “signal gate” mark: four vertical bars with one offset to suggest a spark moving through a system. The mark should work in maroon, black, or lime and remain legible at favicon size.

### Signature Brand Color
**E-Cell Signal Lime — #D9F04A.** It is bright, ownable, and functions as a visual signal for what is current, active, or worth joining.

## Page Architecture

The homepage will include: hero and current campaign, event-photo marquee, E-Cell introduction, upcoming events, impact/program pillars, presidents and vice presidents, mentors, a React Bits gallery insertion point, newsletter preview, and a footer CTA.

Supporting routes will include `/events` for upcoming and past events, `/team` for the complete team with presidents and VPs featured first, `/mentors` for the mentor network, `/about` for what E-Cell has built and its mission, and `/newsletter` for publishing-ready editorial posts.

## Content Model

All initial content is represented as typed static arrays so the interface can later be wired to a CMS or backend without changing component contracts. Images are treated as replaceable content fields. The initial build will use high-quality generated visual assets for the hero and editorial feature areas, with the same fields ready for E-Cell's real event photography.

## Style Decisions

- Italic serif is an editorial annotation reserved for one key word or phrase per major headline; Space Grotesk remains the dominant display voice.
- E-Cell Signal Lime #D9F04A appears on CTAs, active/date/index markers, marquee bands, and designed editorial artifacts rather than generic placeholder surfaces.
- People, teams, events, mentors, and cohorts should use documentary-style participation imagery whenever available; abstract graphics remain reserved for newsletters, React Bits insertion points, or intentionally designed poster moments.
- Supporting pages should retain the homepage's kinetic noticeboard energy through poster-like crops, date artifacts, and branded image fragments rather than flat lists.
