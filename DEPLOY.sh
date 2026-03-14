#!/bin/bash

# Deployment Script for iConstructions
# This script commits only code files (no .md documentation)

echo "🚀 iConstructions - Deployment Script"
echo "======================================"
echo ""

# Check if there are changes
if [[ -z $(git status -s) ]]; then
    echo "✅ No changes to commit. Already up to date!"
    exit 0
fi

echo "📋 Files to be committed:"
echo ""
git status --short
echo ""

# Add all files (.md files will be ignored by .gitignore)
echo "📦 Staging files..."
git add .

echo ""
echo "📝 Files staged for commit:"
git status --short
echo ""

# Commit with a descriptive message
echo "💾 Committing changes..."
git commit -m "Add favicons, update design theme to black & white, enhance SEO meta tags"

echo ""
echo "🚀 Pushing to remote repository..."
git push

echo ""
echo "✅ Deployment complete!"
echo ""
echo "🔍 Next steps:"
echo "1. Wait 2-3 minutes for auto-deployment (Netlify/Vercel)"
echo "2. Visit https://iconstructions.in to verify"
echo "3. Check favicon appears in browser tab"
echo "4. Test on mobile devices"
echo ""
echo "📊 Optional (can do later):"
echo "- Create social share images (og-image.jpg, twitter-image.jpg)"
echo "- Setup Google Analytics (replace G-XXXXXXXXXX in index.html)"
echo "- Setup Google Search Console (replace verification code)"
echo "- Create Google Business Profile"
echo ""
echo "See PRE_DEPLOYMENT_CHECKLIST.md for details"
echo ""

