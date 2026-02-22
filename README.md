# PDF Merger - GitHub Pages Edition 🚀

A **client-side** PDF merger that runs entirely in your browser! No servers, no uploads, no data leaving your device. Perfect for GitHub Pages deployment.

## 🌟 Features
- **100% Client-Side**: All processing happens in your browser
- **GitHub Pages Ready**: Deploys automatically when you push to main branch
- **Drag & Drop**: Intuitive file upload interface
- **Fast Processing**: Uses pdf-lib for efficient in-browser PDF manipulation
- **Privacy First**: Your files never leave your device

## 🚀 Live Demo
You can access the service on https://458-nadiraf.github.io/mergepdf/

## 📋 How to Use (After GitHub Deployment)
1. **Visit your GitHub Pages URL** (if you want to try this service https://458-nadiraf.github.io/mergepdf/)
2. **Upload two PDF files** using drag & drop or file picker
3. **Click "Merge PDFs"** 
4. **Download your merged PDF** automatically

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
