#!/bin/bash

# Guide to the US - Complete Deployment Script
# This script handles git commits, pushes, and Expo deployment

set -e  # Exit on any error

echo "🚀 Starting deployment process..."

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Not a git repository. Please run 'git init' first."
    exit 1
fi

# Get commit message from command line argument or use default
COMMIT_MSG="${1:-Update app content and features}"

echo "📝 Adding all changes to git..."
git add .

# Check if there are any changes to commit
if git diff --cached --quiet; then
    echo "ℹ️  No changes to commit."
else
    echo "💾 Committing changes with message: '$COMMIT_MSG'"
    git commit -m "$COMMIT_MSG"
    
    echo "📤 Pushing to GitHub..."
    git push origin main
fi

echo "🔄 Publishing update to Expo..."
npx eas update --auto

echo "🌐 Building web version..."
npx expo export --platform web

echo "✅ Deployment complete!"
echo ""
echo "📱 Your app update is now live on Expo!"
echo "🌍 Web version is built in the 'dist' folder"
echo ""
echo "Next steps:"
echo "- Test your app in Expo Go"
echo "- Deploy web version to hosting service"
echo "- Build native apps with 'npm run build:all'"
