# CRT Interview Questions

## Description
A clean, responsive web application designed to help students practice CRT (Campus Recruitment Training) interview questions. The app provides an intuitive interface to browse, track progress, and navigate through coding problems from a JSON file. Features include a questions sidebar, progress tracking via localStorage, a creator info modal accessible via a floating action button (FAB), and a prominent WhatsApp channel call-to-action.

## Hosted Link
🌐 **Live Website**: [https://crt-interview-questions.vercel.app](https://crt-interview-questions.vercel.app)

## Features
- **Question Navigation**: Browse through problems with Previous/Next buttons
- **Problem Details**: View title, description, input/output formats, and examples
- **Progress Tracking**: Mark questions as "Done" with localStorage persistence
- **Smart Sidebar**: Quick question list with completion status indicators
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Creator Modal**: Access creator information and social links via FAB button
- **WhatsApp Channel**: Prominent call-to-action to join the creator's channel
- **Self-Contained**: Pure HTML/CSS/JavaScript - no external dependencies

## Tech Stack
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: Responsive design with mobile-first approach
- **Storage**: LocalStorage for progress persistence
- **Icons**: Inline SVG for crisp, lightweight graphics
- **Hosting**: Vercel for deployment and CDN

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Local development server (for development)

### Local Development
1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd CodingQuestions
   ```

2. **Run locally** (required due to fetch restrictions)
   ```bash
   # Using Node.js
   npx serve .
   
   # Using Python
   python -m http.server 8000
   
   # Using VS Code Live Server extension
   ```

3. **Open in browser**
   - Navigate to the URL shown by your local server
   - Start practicing CRT interview questions!

## Project Structure
```
CodingQuestions/
├── index.html          # Main application markup and creator modal
├── style.css           # Responsive styling and animations
├── script.js           # Application logic and question management
├── questions.json      # CRT interview questions data
├── robots.txt          # Search engine indexing instructions
├── sitemap.xml         # Site structure for search engines
├── README.md           # Project documentation
└── assets/
    └── Creator.png     # Creator avatar image
```

## Data Format
The application expects a structured JSON format for questions:

```json
{
  "problems": [
    {
      "id": 1,
      "title": "Two Sum Problem",
      "description": "Given an array of integers...",
      "input_format": "n, nums[], target",
      "output_format": "i, j",
      "example": {
        "input": "[2,7,11,15], target=9",
        "output": "0 1"
      }
    }
  ]
}
```

## Customization

### Creator Information
Update the creator details in `index.html`:
- Name and handle
- Social media links (GitHub, LinkedIn, LeetCode, Portfolio)
- WhatsApp channel link
- Instagram handle

### Styling
Modify `style.css` to customize:
- Color scheme and typography
- WhatsApp CTA appearance
- Modal and sidebar styling
- Responsive breakpoints

### Questions Data
Edit `questions.json` to:
- Add new CRT interview questions
- Modify existing problem details
- Update examples and formats

## SEO & Discoverability
- **Meta Tags**: Optimized for search engines
- **Open Graph**: Enhanced social media sharing
- **Schema Markup**: FAQ structured data for rich results
- **Sitemap**: XML sitemap for search engine indexing
- **Robots.txt**: Proper crawling instructions

## Browser Support
- ✅ Chrome (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ✅ Edge (latest 2 versions)
- ✅ Mobile browsers (iOS/Android)

## Deployment
The application is currently deployed on Vercel. To deploy elsewhere:

1. **GitHub Pages**
   - Push to GitHub repository
   - Enable Pages in repository settings
   - Select source branch and folder

2. **Netlify**
   - Drag and drop project folder
   - Configure build settings if needed

3. **Custom Domain**
   - Update `robots.txt` and `sitemap.xml` URLs
   - Modify canonical links in `index.html`

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Roadmap
- [ ] Keyboard shortcuts for navigation
- [ ] Search and filter functionality
- [ ] Question difficulty ratings
- [ ] Progress analytics and statistics
- [ ] Dark/Light theme toggle
- [ ] Export progress functionality
- [ ] Question categories and tags

## FAQ

**Q: Why can't I open the HTML file directly?**
A: Browsers block `fetch` requests to local files. Use a local server as described in Getting Started.

**Q: How is my progress saved?**
A: Progress is stored in your browser's localStorage under the key `completedQuestions`.

**Q: Can I add my own questions?**
A: Yes! Edit `questions.json` to add, modify, or remove CRT interview questions.

**Q: Is this mobile-friendly?**
A: Absolutely! The design is responsive and optimized for all device sizes.

## Troubleshooting

### Common Issues
- **Questions not loading**: Ensure you're running a local server
- **Avatar not showing**: Check that `assets/Creator.png` exists
- **Progress not saving**: Verify localStorage is enabled in your browser

### Performance Tips
- Keep `questions.json` reasonably sized
- Use compressed images for avatars
- Consider pagination for large question sets

## Credits
- **Created by**: [Shivam Bansal](https://www.instagram.com/shine_beyond_syntax)
- **GitHub**: [@Shivambansal96](https://github.com/Shivambansal96)
- **LinkedIn**: [Shivam Bansal](https://www.linkedin.com/in/shivam-bansal-a99269275/)
- **LeetCode**: [@Shivambansa96](https://leetcode.com/u/Shivambansa96/)
- **Portfolio**: [Personal Website](https://sb-personal-portfolio.vercel.app/)
- **WhatsApp Channel**: [Join Here](https://whatsapp.com/channel/0029Vb74kBaL2ATzZBnRka19)

## License
© 2025 Shivam Bansal. This project is licensed for personal and educational use. For commercial use or redistribution, please contact the author.

---

**Star this repository if you find it helpful! ⭐**
