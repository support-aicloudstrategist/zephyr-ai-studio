# Zephyr AI Studio — Website Strategy & Execution Report

Date: 2026-05-16

## Executive Summary

Zephyr’s website direction is correct: dark luxury, cinematic-first, portfolio-led, and priced for premium creative services. The biggest gap before this pass was that the top hero still depended on a generic stock video, which made the first impression feel less owned. Anushka’s uploaded video is now installed as the hero background and referenced with GitHub Pages-safe base path logic.

## Research Signals Used

- Awwwards agency portfolio collections emphasize typography usage, animation, micro-interactions, and white space as differentiators for top agency sites.
- Current interactive/scrolling website trend coverage highlights motion, scroll storytelling, 3D/visual depth, bold typography, and personality-led experiences.
- Dark-theme website examples are positioned as especially suitable for creative portfolios, tech brands, and luxury industries because they create immersive visual focus.

## Current Website Audit

### Strengths

- Strong premium positioning: “Luxury AI Cinema House” and “Cinematic AI Advertising” are aligned with the brand brief.
- Dark neon palette gives immediate cinematic/AI association.
- Portfolio-first structure supports client confidence better than generic service-page layouts.
- Smooth scrolling, reveal animation, GSAP hero movement, particles, and modal previews create a richer experience than a static landing page.
- Pricing is visible and aligned with the Zephyr business plan.

### Gaps Still Remaining

- Portfolio images are still temporary Unsplash placeholders; before outreach, Zephyr needs original spec visuals.
- Contact form is still a prototype and does not submit to email/CRM.
- Social links are placeholders pointing to contact.
- There are no case-study pages yet, so trust depends mostly on visuals rather than proof.
- Showreel still uses a stock placeholder video until a real Zephyr reel is available.

## Changes Implemented In This Pass

1. Copied Anushka’s uploaded hero video into the website repo:
   - `public/video/zephyr-hero.mp4`
2. Replaced the temporary stock hero video with the uploaded video.
3. Added GitHub Pages-safe base path logic:
   - Hero video now resolves as `${NEXT_PUBLIC_BASE_PATH}/video/zephyr-hero.mp4`.
4. Preserved the existing stock showreel placeholder as requested.
5. Added a compact proof/positioning strip below the hero:
   - Cinematic first frame
   - AI-native art direction
   - Luxury product mood
   - Launch-ready social cuts
6. Added a process section:
   - Discover
   - Design
   - Produce

## Recommended Next Execution

1. Create 6–10 original Zephyr portfolio visuals and replace Unsplash placeholders.
2. Produce one 30–45 second original showreel and replace the remaining stock showreel video.
3. Connect contact form to a real inbox/CRM workflow.
4. Add real Instagram, LinkedIn, and YouTube URLs once channels are created.
5. Add 2–3 campaign case-study pages after first spec work is ready.

## Validation

- Local production build passed with `npm run build`.
- GitHub Pages production build passed with `GITHUB_PAGES=true npm run build`.
- Verified exported site contains the hero video under GitHub Pages base path: `/zephyr-ai-studio/video/zephyr-hero.mp4`.
