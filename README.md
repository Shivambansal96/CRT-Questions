# Coding Questions Viewer

A clean, responsive web app to browse, track, and navigate coding problems from a JSON file. Includes a questions sidebar, progress tracking via localStorage, a creator info modal (via FAB), and a prominent WhatsApp channel CTA.

## Table of Contents
- [Features](#features)
- [Live Preview](#live-preview)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Data Format](#data-format)
- [Customization](#customization)
- [Screenshots](#screenshots)
- [Accessibility](#accessibility)
- [Performance Tips](#performance-tips)
- [SEO Tips](#seo-tips)
- [Browser Support](#browser-support)
- [Roadmap](#roadmap)
- [FAQ](#faq)
- [Contributing](#contributing)
- [License](#license)

## Features
- Question browsing with Previous/Next navigation
- Problem details: title, description, input/output formats, example(s)
- Mark-as-Done with persistence in `localStorage`
- Sidebar with quick question list and completion state
- Responsive design for desktop and mobile
- Creator modal (via FAB) with social links + Instagram handle link
- Prominent WhatsApp channel call‑to‑action
- Simple, self‑contained static site (just HTML/CSS/JS)

## Live Preview
Most browsers restrict `fetch` from `file://` to local JSON. Run a local server:

- Using Node (npx):
```bash
npx serve .
# open the URL that prints (e.g., http://localhost:3000)
```

- Using Python 3:
```bash
python -m http.server 8000
# open http://localhost:8000
```

- VS Code: use the Live Server extension.

## Tech Stack
- HTML5, CSS3 (responsive, mobile-first)
- Vanilla JavaScript (no frameworks)
- LocalStorage for progress persistence
- Inline SVG icons for crisp, lightweight graphics

## Architecture
- `script.js` loads `questions.json` with `fetch`, renders the current problem, and manages navigation/completion state.
- A right-side overlay/slide-in panel lists all questions with completion marks.
- A FAB opens a creator modal with social links and a WhatsApp CTA (rendered in `index.html`, styled via `style.css`).

## Project Structure
```
CodingQuestions/
  ├─ index.html        # App markup, creator modal, social links, WhatsApp CTA
  ├─ style.css         # Layout, theming, responsive styles
  ├─ script.js         # Logic (load/render questions, nav, done state)
  ├─ questions.json    # Problems data
  └─ assets/
      └─ Creator.png   # Creator avatar in the modal (ensure this file exists)
```

## Data Format
The app expects a root `problems` array. Each problem supports these fields:
```json
{
  "problems": [
    {
      "id": 1,
      "title": "Two Sum",
      "description": "Given an array...",
      "input_format": "n, nums[], target",
      "output_format": "i, j",
      "example": { "input": "[2,7,11,15], target=9", "output": "0 1" }
      // alternatively, you can use "examples": [ ... ]
    }
  ]
}
```
Notes:
- `id` should be unique and numeric; it powers navigation and completion storage.
- Provide either `example` (single object) or `examples` (array). The renderer supports both.

## Customization
- **Creator details & links**: In `index.html`, edit the anchors for GitHub, LinkedIn, LeetCode, Portfolio, WhatsApp channel, and the Instagram handle link.
- **Avatar**: Replace `assets/Creator.png` or update its `src` path in `index.html`.
- **WhatsApp CTA**: Tweak styles in `.whatsapp-channel`, `.whatsapp-cta`, `.whatsapp-icon` in `style.css`.
- **Colors/typography**: Adjust in `style.css`. Example small tweaks:
```css
/* Button brand color */
#nav-buttons button { background: #1976d2; }
#nav-buttons button:active { background: #0d47a1; }

/* Title weight/size */
#question-title { font-size: 2.6rem; font-weight: 800; }
```
- **Sidebar behavior**: The open/close logic lives in `script.js` (`showSidebar`, `hideSidebar`).
- **Done state**: Stored in `localStorage` under `completedQuestions` (array of `id`s).

## Screenshots
Add your own screenshots or GIFs here to showcase the UI.

- Questions view (desktop)
- Sidebar open (desktop/mobile)
- Creator modal + WhatsApp CTA

You can capture with your OS tools, then place files under `assets/` and reference them here:
```markdown
![Questions View](assets/screenshot-questions.png)
![Creator Modal](assets/screenshot-modal.png)
```

## Accessibility
- Focus-visible outline on key interactive elements (e.g., WhatsApp CTA)
- Sufficient color contrast for primary actions
- Consider adding ARIA labels or roles if you expand the UI

## Performance Tips
- Keep `questions.json` reasonably sized; paginate or lazy-load if it grows large.
- Prefer SVGs (already used) over heavy images for icons.
- Compress images in `assets/` (e.g., `Creator.png`).
- Host on a static CDN (Vercel/Netlify/GitHub Pages) for better caching and latency.

## SEO Tips
- Add a meta description in `index.html`:
```html
<meta name="description" content="Browse and track coding problems with a clean, responsive viewer." />
```
- Add Open Graph tags for social sharing (title, description, preview image).

## Browser Support
- Chrome, Edge, Safari, Firefox (latest 2 versions)
- Mobile browsers on iOS/Android

## Roadmap
- Optional keyboard shortcuts for prev/next
- Search/filter in the sidebar
- Tags/difficulty display and filtering
- Export/Import progress (JSON)
- Theme toggle (light/dark)

## FAQ
- "The questions don’t load when I open `index.html` directly."
  - Run a local server (see Live Preview). Browsers block `fetch` to local files.
- "My avatar doesn’t show up."
  - Ensure `assets/Creator.png` exists or update the path.
- "Where is the done state saved?"
  - In `localStorage` as `completedQuestions` (array of problem IDs).

## Contributing
PRs and suggestions are welcome! For larger changes, please open an issue describing the enhancement first.

1. Fork and clone the repo
2. Create a feature branch
3. Make your changes (keep code style consistent)
4. Open a Pull Request with a clear description and screenshots if UI changes

## License
© 2025 Shivam Bansal. Personal/portfolio use permitted. Contact the author for reuse or redistribution permissions.
