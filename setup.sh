#!/bin/bash

# Portfolio Setup Script
# This script will set up your portfolio automatically

echo "🚀 Setting up your portfolio..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ npm version: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully!"
echo ""

# Create public folder if it doesn't exist
echo "📁 Setting up public folder..."
mkdir -p public

# Copy CV if it exists
if [ -f "CV-Adil Ait Elhoucine  .pdf" ]; then
    cp "CV-Adil Ait Elhoucine  .pdf" public/
    echo "✅ CV copied to public folder"
else
    echo "⚠️  CV PDF not found. Please add it to the public folder manually."
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "📝 Next steps:"
echo "   1. Review and customize content in src/components/"
echo "   2. Update translations in src/i18n/locales/"
echo "   3. Run 'npm run dev' to start development server"
echo "   4. Run 'npm run build' to create production build"
echo ""
echo "🌐 Development server will run at: http://localhost:5173"
echo ""
echo "Happy coding! 🚀"

