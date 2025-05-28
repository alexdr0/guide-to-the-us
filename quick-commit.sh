#!/bin/bash

# Quick commit script for Guide to the US app
# Usage: ./quick-commit.sh "Your commit message"

set -e

# Get commit message from command line argument or use default
COMMIT_MSG="${1:-Update app content}"

echo "📝 Quick commit: $COMMIT_MSG"

# Add all changes
git add .

# Check if there are changes to commit
if git diff --cached --quiet; then
    echo "ℹ️  No changes to commit."
    exit 0
fi

# Commit and push
git commit -m "$COMMIT_MSG"
git push origin main

echo "✅ Changes committed and pushed to GitHub!"
