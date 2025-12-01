# 🚀 Quick Setup Guide

## Step 1: Install Dependencies

Open a terminal in the portfolio directory and run:

```bash
npm install
```

This will install all required packages including:
- React & React DOM
- TypeScript
- TailwindCSS
- Framer Motion
- react-i18next
- Lucide React icons
- Vite

## Step 2: Copy Your Resume

Move your CV PDF file to the `public` folder:

```bash
mv "CV-Adil Ait Elhoucine  .pdf" public/
```

Or create a public folder and copy it:

```bash
mkdir -p public
cp "CV-Adil Ait Elhoucine  .pdf" public/
```

## Step 3: Start Development Server

```bash
npm run dev
```

Your portfolio will be available at: http://localhost:5173

## Step 4: Customize Content

### Update Projects
Edit `src/components/Projects.tsx` to add your projects

### Update Experience
Edit `src/components/Experience.tsx` to add your work experience

### Update Skills
Edit `src/components/Skills.tsx` to update your skill levels

### Update Translations
Edit files in `src/i18n/locales/` for each language:
- `en.json` - English
- `fr.json` - French
- `ar.json` - Arabic

## Step 5: Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Step 6: Deploy

### Option A: Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts and your site will be live!

### Option B: Netlify

1. Go to https://app.netlify.com
2. Drag and drop the `dist` folder
3. Your site is live!

### Option C: GitHub Pages

1. Push your code to GitHub
2. Go to Settings > Pages
3. Select your branch and `/dist` folder
4. Your site will be published!

## 🎨 Customization Tips

### Change Colors
Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#6366F1',    // Your primary color
  secondary: '#10B981',  // Your secondary color
  accent: '#F59E0B',     // Your accent color
}
```

### Change Animations
Edit animation speeds in `tailwind.config.js` under `keyframes` and `animation`

### Add More Sections
Create new components in `src/components/` and import them in `App.tsx`

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Build Errors
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### TypeScript Errors
```bash
npm run lint
```

## 📱 Testing Responsive Design

- Desktop: Default view
- Tablet: Resize browser to 768px
- Mobile: Resize browser to 375px

Or use browser DevTools (F12) > Toggle Device Toolbar

## 🌍 Testing Languages

Click the globe icon (🌍) in the navbar to switch between:
- French (default)
- English
- Arabic (with RTL support)

## 🎉 You're All Set!

Your portfolio is now ready. Feel free to customize it further!

Need help? Check the main README.md or contact me!

