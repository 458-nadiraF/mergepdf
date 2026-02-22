# GitHub Pages Setup Guide 🚀

## Quick Setup Steps

### 1. **MANUALLY ENABLE GITHUB PAGES** (CRITICAL STEP)

Since GitHub Actions can't automatically enable Pages due to permission restrictions, you **MUST** do this manually:

1. **Go to your GitHub repository**
2. **Click on "Settings"** (top right of your repo)
3. **Scroll down to "Pages"** in the left sidebar
4. **Under "Source", select "GitHub Actions"**
5. **Click "Save"**

### 2. **Push Your Code**
```bash
git push origin main
```

### 3. **Monitor Deployment**
- Go to the **Actions** tab in your repository
- You should see the workflow running
- Wait for it to complete (usually 1-2 minutes)

### 4. **Access Your Live Site**
Once deployed, your PDF merger will be available at:
```
https://[your-github-username].github.io/[your-repo-name]/
```

## Troubleshooting

### If Deployment Still Fails

1. **Check Repository Settings:**
   - Ensure your repository is **public** (private repos need GitHub Pro for Pages)
   - Verify you're on the `main` branch

2. **Check Workflow Permissions:**
   - Go to Settings → Actions → General
   - Ensure "Workflow permissions" allows writing to Pages

3. **Manual Workflow Trigger:**
   - Go to Actions tab
   - Select "Deploy to GitHub Pages"
   - Click "Run workflow" → "Run workflow"

### Common Issues

- **"Resource not accessible"**: This is normal - just manually enable Pages as shown above
- **404 Error**: Wait 5-10 minutes after deployment for DNS propagation
- **Build fails**: Check the Actions tab for specific error messages

## Success Indicators

✅ **Pages enabled** in repository settings  
✅ **Workflow runs successfully** (green checkmark)  
✅ **URL accessible** in browser  

## Need Help?

If you're still having issues:
1. Check the **Actions** tab for detailed error logs
2. Ensure you followed the manual Pages enablement step
3. Try triggering the workflow manually from the Actions tab

---

**Remember**: The key step is **manually enabling GitHub Pages** in your repository settings. Once that's done, the deployment should work automatically on every push! 🎉