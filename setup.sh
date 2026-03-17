#!/bin/bash
# Portfolio Website - Installation & Setup Script
# Run this script to quickly set up your portfolio

echo "🚀 AI Engineer Portfolio - Quick Setup"
echo "======================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js is installed: $(node --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🚀 Next steps:"
    echo "   1. Start development server: npm run dev"
    echo "   2. Open your browser to:    http://localhost:3000"
    echo "   3. Read SETUP.md for customization guide"
    echo ""
    echo "Happy coding! 🎉"
else
    echo "❌ Installation failed. Please try again."
    exit 1
fi
