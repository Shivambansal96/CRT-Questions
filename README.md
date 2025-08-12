# Coding Questions Viewer

A clean, responsive web app to browse, track, and navigate coding problems from a JSON file. Includes a questions sidebar, progress tracking, mobile-friendly layout, and a creator info modal accessible via a floating action button (FAB) — plus a prominent WhatsApp channel call‑to‑action.

## Features
- Question browsing with Previous/Next navigation
- Problem details: title, description, input/output formats, examples
- Mark as Done with persistence in `localStorage`
- Sidebar with quick question list and completion state
- Responsive design for desktop and mobile
- Creator modal (via FAB) with social links
- Prominent WhatsApp channel CTA above social links
- Simple, self‑contained static site (just HTML/CSS/JS)

## Getting Started

### 1) Run locally (recommended)
Some browsers block `fetch` from `file://` URLs. Use a local server.

- Using Node (npx):
```bash
npx serve .
# then open the printed URL (e.g., http://localhost:3000)
```

- Using Python 3:
```bash
python -m http.server 8000
# then open http://localhost:8000
```

- VS Code Live Server extension also works well.

### 2) Open directly
If your browser allows local `fetch` to JSON, you can open `index.html` directly. If questions don’t load, use a local server as above.

## Project Structure
```
CodingQuestions/
  ├─ index.html        # App markup and creator modal + social links
  ├─ style.css         # Layout, theming, responsive styles
  ├─ script.js         # App logic (load/render questions, navigation, done state)
  ├─ questions.json    # Your problems data
  └─ assets/
      └─ Creator.png   # Creator avatar used in the modal (ensure this file exists)
```

## Data Format (`questions.json`)
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
      // alternatively you can use "examples": [ ... ]
    }
  ]
}
```
Notes:
- `id` should be unique and numeric; it’s used for navigation and progress.
- Use either `example` (single) or `examples` (array). The renderer supports both.

## Customization
- Creator details and social links: edit anchors in `index.html` (GitHub, LinkedIn, LeetCode, Portfolio, WhatsApp channel, Instagram handle).
- Creator avatar: replace `assets/Creator.png` or update the `src` path in `index.html`.
- WhatsApp CTA: tweak styles in `.whatsapp-channel`, `.whatsapp-cta`, and `.whatsapp-icon` in `style.css`.
- Typography, colors, spacing: adjust in `style.css` while keeping responsiveness.

## Usage Tips
- Keyboard nav: use on-screen Previous/Next. (Add key bindings in `script.js` if desired.)
- Progress: “Done” state is saved in your browser `localStorage`.
- Sidebar: Toggle with the button at top-right; click a question to jump.

## Deployment
- Any static host works (GitHub Pages, Vercel, Netlify, etc.).
- GitHub Pages quick start:
  1. Push this folder to a GitHub repo
  2. In repo Settings → Pages → Source: select the `main` branch `/ (root)`
  3. Save and open the published URL

## Troubleshooting
- Questions don’t load locally: run a local server (see Getting Started) due to `fetch` restrictions on `file://`.
- Blank avatar: ensure `assets/Creator.png` exists or update the path.

## Credits
- Created by Shivam Bansal (Instagram: `@ShinE_BeyonD_SyntaX`)
- Socials in the modal: GitHub, LinkedIn, LeetCode, Portfolio, WhatsApp Channel

## License
© 2025 Shivam Bansal. Personal/portfolio use. Contact the author for reuse or redistribution permissions.
