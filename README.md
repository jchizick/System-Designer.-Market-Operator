<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/50583585-6404-4829-9b9b-7f0cb4ec6c9e

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Global Atmosphere Layers

The site has a small global atmosphere system for viewport-locked visual texture. `AtmosphereOverlay` is mounted once at the app root in `src/App.tsx`, outside the route pages, so its layers apply across the portfolio without being tied to a hero, card, or section.

Current layers live in `src/components/atmosphere/`:

- `GlobalNoise` adds the subtle fixed texture layer beneath the scanlines.
- `GlobalScanlines` adds the subtle fixed display scanlines, but is currently disabled in `AtmosphereOverlay` because it reduced readability and interfered with case study imagery.

Tuning variables live in `src/index.css` under `:root`. The main knobs are `--scanline-opacity`, `--scanline-spacing`, `--scanline-thickness`, `--scanline-color`, `--scanline-z-index`, `--noise-opacity`, `--noise-z-index`, `--noise-blend-mode`, and `--noise-size`.

To disable a layer quickly, remove or comment out that component in `AtmosphereOverlay`. To re-enable scanlines, uncomment `<GlobalScanlines />` in `src/components/atmosphere/AtmosphereOverlay.tsx`. To remove the system entirely, remove `<AtmosphereOverlay />` from `src/App.tsx` and delete the matching atmosphere CSS.
