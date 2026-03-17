# Abdullah - AI Engineer Portfolio

A modern, animated portfolio website built with React, Vite, and Framer Motion. Features smooth animations, a stunning color scheme, and is fully optimized for GitHub Pages deployment.

## 🎨 Features

✨ **Smooth Animations** - Framer Motion animations throughout  
🎯 **Modern Design** - Gradient UI with cyan/purple color scheme  
📱 **Fully Responsive** - Works perfectly on all devices  
⚡ **Fast Performance** - Built with Vite for instant load times  
🔍 **SEO Ready** - Optimized for search engines  
📦 **GitHub Pages Ready** - One command deployment

## 🏗️ Project Structure

```
portfolio-website/
├── public/
│   ├── images/         # Project screenshots and images
│   └── index.html
├── src/
│   ├── pages/
│   │   ├── Home.jsx    # Main landing page
│   │   ├── Home.css
│   │   ├── Services.jsx # Experience, skills, education
│   │   ├── Services.css
│   │   ├── Contact.jsx  # Contact form & links
│   │   └── Contact.css
│   ├── components/
│   │   ├── Navbar.jsx   # Navigation bar
│   │   ├── Navbar.css
│   │   ├── Hero.jsx     # Hero section with animation
│   │   └── Hero.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── .gitignore
```

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

This will open the portfolio at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

## 📝 Customization Guide

### Update Your Information

1. **Home Page** (`src/pages/Home.jsx`)
   - Update the hero title and subtitle
   - Modify the services list
   - Update project details and descriptions
   - Change the stats numbers

2. **Services/Experience** (`src/pages/Services.jsx`)
   - Update experience entries with your actual work history
   - Update skills in each category
   - Update education information
   - Modify testimonials

3. **Contact** (`src/pages/Contact.jsx`)
   - Replace email address in the contact links
   - Update LinkedIn URL
   - Update GitHub URL
   - Update Upwork URL (or other platforms)

4. **Navigation** (`src/components/Navbar.jsx`)
   - Update the logo text
   - Update GitHub link URL

### Update Color Scheme

Edit the CSS variables in `src/App.css`:

```css
:root {
  --primary-dark: #0a0e27;      /* Main background */
  --secondary-dark: #1a1f3a;    /* Secondary background */
  --accent-cyan: #00d9ff;       /* Primary accent */
  --accent-purple: #7c3aed;     /* Secondary accent */
  --accent-gold: #fbbf24;       /* CTA accent */
  --text-light: #f0f0f0;        /* Main text */
  --text-muted: #a0a0a0;        /* Secondary text */
  --border-color: #1e2749;      /* Borders */
}
```

### Add Projects

In `src/pages/Home.jsx`, add new projects to the `projects` array:

```javascript
const projects = [
  {
    id: 5,
    title: 'Your Project Title',
    subtitle: 'Subtitle',
    description: 'Project description...',
    features: ['Feature 1', 'Feature 2'],
    stack: ['Tech 1', 'Tech 2'],
    color: '#00d9ff',
  },
  // ... more projects
];
```

### Add Project Images

1. Place images in `public/images/`
2. Update project cards to display images

## 🌐 Deploy to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com)
2. Create a new repository named `portfolio-website`
3. Clone it to your local machine

### Step 2: Update Configuration

1. In `package.json`, update the homepage:

```json
"homepage": "https://your-username.github.io/portfolio-website"
```

2. In `vite.config.js`, the base is already set to `/portfolio-website/`

### Step 3: Deploy

```bash
npm run build
npm run deploy
```

Or manually push the `dist` folder to GitHub:

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

Then push the dist folder as the gh-pages branch.

### Step 4: Enable GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "gh-pages" branch
4. Your site will be live at `https://your-username.github.io/portfolio-website`

## 📧 Email Integration

The contact form is currently set up for client-side submission. To make it functional, integrate one of these services:

### Option 1: Formspree (Easiest)

```javascript
// In Contact.jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  // Handle response
};
```

### Option 2: EmailJS

```bash
npm install @emailjs/browser
```

Then use EmailJS in your contact form.

### Option 3: Nodemailer (Backend Required)

Create an Express backend for secure email sending.

## 🎯 SEO Optimization

- Update meta tags in `public/index.html`
- Add Open Graph tags for social sharing
- Submit sitemap to Google Search Console
- Use keywords naturally in content

## 📊 Performance Tips

- Images should be optimized (use WebP format)
- Limit animations on mobile devices
- Use lazy loading for heavy sections
- Test with Lighthouse DevTools

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **React Router** - Navigation
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **CSS3** - Styling with animations

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio!

## 📞 Support

For issues or questions, open an issue in the GitHub repository.

---

**Made with ❤️ for AI Engineers everywhere**
