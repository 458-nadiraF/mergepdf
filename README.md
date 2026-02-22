# PDF Merger - GitHub Pages Edition 🚀

A **client-side** PDF merger that runs entirely in your browser! No servers, no uploads, no data leaving your device. Perfect for GitHub Pages deployment.

## 🌟 Features
- **100% Client-Side**: All processing happens in your browser
- **GitHub Pages Ready**: Deploys automatically when you push to main branch
- **Drag & Drop**: Intuitive file upload interface
- **Fast Processing**: Uses pdf-lib for efficient in-browser PDF manipulation
- **Privacy First**: Your files never leave your device

## 🚀 Live Demo
Once deployed, your PDF merger will be available at:
```
https://[your-github-username].github.io/[your-repo-name]/
```

## 📋 How to Use (After GitHub Deployment)
1. **Visit your GitHub Pages URL** (see above)
2. **Upload two PDF files** using drag & drop or file picker
3. **Click "Merge PDFs"** 
4. **Download your merged PDF** automatically

## 🛠️ Local Development (Optional)
If you want to test locally before deploying:

1. **Clone your repository**
2. **Open `index.html` directly in your browser** - no server needed!
3. **Or use a simple HTTP server**:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (install http-server globally first)
   npx http-server
   ```

## 🚀 Deployment Instructions

### 1. Push to GitHub
```bash
git add .
git commit -m "Initial PDF merger for GitHub Pages"
git push origin main
```

### 2. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically run and deploy your site

### 3. Wait for Deployment
- Check the **Actions** tab to monitor deployment progress
- Your site will be live at `https://[username].github.io/[repo-name]/`

## 🎯 Project Structure
```
├── index.html          # Main application (client-side)
├── .github/
│   └── workflows/
│       ├── ci.yml      # CI/CD for testing
│       └── pages.yml   # GitHub Pages deployment
├── server.js           # Legacy server version (not used for Pages)
├── public/             # Legacy server assets
├── index.js            # Legacy CLI version
├── create_dummy.js     # Test PDF generator
└── package.json        # Dependencies for development
```

## 🔧 Technical Details
- **Frontend**: Pure HTML, CSS, and JavaScript
- **PDF Processing**: pdf-lib loaded via CDN (https://cdn.skypack.dev/pdf-lib)
- **Deployment**: GitHub Actions automatically deploys to Pages
- **Browser Support**: Modern browsers with ES6+ support

## 🎨 Customization
Want to customize the look? Edit the CSS in `index.html`:
- Change colors in the `<style>` section
- Modify layout and spacing
- Add your branding or logo

## 🐛 Troubleshooting

### Deployment Issues
- Check the **Actions** tab for build errors
- Ensure your repository is public (GitHub Pages works with private repos too, but requires different settings)
- Verify the workflow file is in `.github/workflows/pages.yml`

### Browser Issues
- Ensure you're using a modern browser (Chrome, Firefox, Safari, Edge)
- Check browser console for JavaScript errors
- Large PDFs (>50MB) might be slow due to browser memory limits

## 📄 License
This project is open source and available under the MIT License.

---

**Ready to deploy?** Just push to GitHub and GitHub Pages will handle the rest! 🎉