#!/bin/bash

# Guide to the US - Web Deployment Script
# This script deploys the web version to GitHub Pages

echo "🚀 Deploying Guide to the US to GitHub Pages..."

# Make sure we're in the right directory
cd /Users/alexanderbobo/Documents/GitHub/guide-to-the-us

# Export for web
echo "📦 Building web version..."
npx expo export --platform web

# Check if dist directory exists
if [ ! -d "dist" ]; then
    echo "❌ Error: dist directory not found"
    exit 1
fi

echo "✅ Web build complete!"
echo "📁 Files are ready in the dist/ directory"
echo ""
echo "To deploy to GitHub Pages:"
echo "1. Push your code to GitHub"
echo "2. Go to your repository settings"
echo "3. Enable GitHub Pages and set source to 'Deploy from a branch'"
echo "4. Select 'gh-pages' branch or upload dist/ contents"
echo ""
echo "Or deploy to Netlify:"
echo "1. Go to https://netlify.com"
echo "2. Drag and drop the dist/ folder"
echo "3. Your app will be live instantly!"
