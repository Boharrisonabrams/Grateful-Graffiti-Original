# Grateful Graffiti - Static Website

A standalone static version of the Grateful Graffiti website, converted from the original WordPress site. This version requires no server-side processing, database, or WordPress installation.

## 🚀 Quick Start

1. **Download/Clone this project**
2. **Open a terminal** and navigate to the `site/` directory:
   ```powershell
   cd site
   ```
3. **Start a local web server**:
   ```powershell
   # Option 1: Python (recommended)
   python -m http.server 8080
   
   # Option 2: Node.js (if you have npx installed)
   npx serve . -p 8080
   ```
4. **Open your browser** and visit: `http://localhost:8080`

That's it! The website should be fully functional.

## 📁 Project Structure

```
grateful-graffiti/
├── README.md              ← This file
├── site/                  ← The complete static website
│   ├── index.html         ← Main homepage
│   ├── images/            ← Custom images (52.jpg, 53.jpg placeholders)
│   └── wp-content/        ← Theme assets, plugins, uploads
│       ├── themes/gratefulgraffiti/  ← Main theme files
│       │   ├── style.css       ← Main stylesheet
│       │   ├── images/         ← Theme images
│       │   ├── fonts/          ← Web fonts
│       │   └── js/             ← JavaScript files
│       ├── plugins/        ← Plugin assets (CSS/JS only)
│       └── uploads/        ← Uploaded content
└── source_wp/             ← Original WordPress files (reference only)
```

## ✨ Features

- **📱 Fully Responsive** - Works on desktop, tablet, and mobile
- **🎨 Original Design** - Preserves the complete visual design and layout
- **⚡ Fast Loading** - Only 0.55 MB total size with 26 files
- **🔧 No Dependencies** - No server, database, or CMS required
- **🌐 Cross-Browser** - Works in all modern browsers
- **📦 Self-Contained** - All assets are local (except jQuery from CDN)

## 🔧 Technical Details

### Converted Elements
- ✅ **HTML Structure** - Clean, semantic markup
- ✅ **CSS Styling** - All original styles preserved
- ✅ **JavaScript** - jQuery, Fancybox, and custom scripts
- ✅ **Images** - Logo, backgrounds, social icons, artist photos
- ✅ **Fonts** - Web fonts (Montserrat, Muli) via WOFF format
- ✅ **Navigation** - Menu links converted to anchor fragments

### WordPress Cleanup
- ❌ **Removed**: WordPress-specific PHP code, admin functions, database calls
- ❌ **Removed**: SEO plugins, emoji scripts, WordPress JSON API links
- ❌ **Removed**: Dynamic content loading, WordPress hooks, PHP includes
- ✅ **Kept**: Essential CSS/JS, theme assets, uploaded content

### Missing Images Replaced
- `52` → `images/52.jpg` (using magnets.jpg as background)
- `53` → `images/53.jpg` (using logo.jpg as placeholder)

## 🛠️ Customization

### To modify content:
1. Edit `site/index.html` directly
2. Main content is in the `<div id="content">` section
3. Navigation links point to `#anchor` fragments

### To modify styles:
1. Edit `site/wp-content/themes/gratefulgraffiti/style.css`
2. Images are referenced relative to the CSS file: `url(images/filename.jpg)`

### To add pages:
1. Create new HTML files in the `site/` directory (e.g., `about.html`)
2. Update navigation links in `index.html` to point to the new files
3. Copy the same header/footer structure from `index.html`

## 🌐 Deployment Options

### Local Development
```powershell
cd site
python -m http.server 8080
```

### Static Hosting Services
Upload the `site/` directory to:
- **Netlify** - Drag & drop the `site` folder
- **Vercel** - Connect to Git repository
- **GitHub Pages** - Push to `gh-pages` branch
- **AWS S3** - Static website hosting
- **Any web host** - Upload via FTP to public_html

### Docker (Optional)
```dockerfile
FROM nginx:alpine
COPY site/ /usr/share/nginx/html/
EXPOSE 80
```

## 🎯 Browser Support

- ✅ Chrome/Chromium 60+
- ✅ Firefox 55+
- ✅ Safari 11+
- ✅ Edge 79+
- ⚠️ Internet Explorer 11 (limited CSS3 features)

## 📝 Notes

- **jQuery** loads from Google CDN for better performance
- **Social media links** point to actual Facebook, Twitter, Pinterest profiles
- **Menu links** currently point to `#anchors` - replace with actual page URLs when those pages are created
- **Contact forms** will need server-side processing if re-enabled
- **SEO metadata** is preserved but may need updates for static hosting

## 🔧 Troubleshooting

**Website not loading?**
- Ensure you're running a web server (not opening `file://` directly)
- Check that Python/Node.js is installed
- Try a different port: `python -m http.server 3000`

**Images not showing?**
- Verify all files copied correctly
- Check browser developer tools for 404 errors
- Ensure case-sensitive file paths match

**Fonts not loading?**
- Check if `.woff` files exist in `wp-content/themes/gratefulgraffiti/fonts/`
- Browser fallbacks will use system fonts if web fonts fail

## 📄 License

This static conversion maintains the original design and content. Please respect the original Grateful Graffiti branding and design credits.

**Original Design:** MILLER™ (http://www.wearemiller.com)

---

*Converted from WordPress to static HTML - $(Get-Date -Format "yyyy-MM-dd")*
