# 🚀 Deployment Guide

## Quick Deploy to Vercel (Recommended)

### **Method 1: One-Command Deploy**

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from project root)
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? Port-Folio (or your choice)
# - Directory? ./
# - Override settings? No

# Production deployment
vercel --prod
```

Your portfolio will be live at: `https://your-project.vercel.app`

---

### **Method 2: GitHub Integration** (Automatic Deployments)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "feat: ultra-scaled portfolio with hexagonal tech stack"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/Port-Folio.git
git push -u origin main
```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Configure:
     - Framework Preset: **Vite**
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Click "Deploy"

3. **Automatic Updates:**
   - Every push to `main` = Auto-deploy
   - Preview deployments for PRs
   - Instant rollbacks if needed

---

## Deploy to Netlify

### **Method 1: Netlify CLI**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize and deploy
netlify init

# Follow prompts, then:
netlify deploy --prod
```

### **Method 2: Drag & Drop**

```bash
# Build the project
npm run build

# Go to netlify.com/drop
# Drag the 'dist' folder
# Done!
```

### **Method 3: GitHub Integration**

1. Push to GitHub (same as above)
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect GitHub
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy!

---

## Custom Domain Setup

### **Vercel:**

1. Go to project settings
2. Domains tab
3. Add your domain
4. Update DNS records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### **Netlify:**

1. Domain settings
2. Add custom domain
3. Update DNS records:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```

---

## Environment Variables

If you add API keys later:

### **Vercel:**
```bash
vercel env add
```

Or in dashboard: Settings → Environment Variables

### **Netlify:**
Site settings → Build & deploy → Environment

---

## Build Optimization

Already configured in `vite.config.ts`:
- ✅ Code splitting
- ✅ Tree shaking
- ✅ Minification
- ✅ Asset optimization
- ✅ Gzip compression

Expected build size: **< 500KB** (gzipped)

---

## Pre-Deployment Checklist

```bash
# 1. Test production build locally
npm run build
npm run preview

# 2. Check for errors
npm run lint

# 3. Test all features:
- [ ] Choose Your Path screen works
- [ ] Tech/Business mode routing works
- [ ] Hexagonal tech stack clickable
- [ ] Mouse trail visible
- [ ] Magnetic buttons working
- [ ] 3D cards tilt
- [ ] Typewriter effect typing
- [ ] Stats counter animates
- [ ] Scroll progress bar moves
- [ ] Floating icons present
- [ ] All links work
- [ ] Language switcher works
- [ ] Mobile responsive
- [ ] Dark mode toggle works
- [ ] Reset choice button works

# 4. Verify external link
Update VSCode portfolio URL in ChooseYourPath.tsx if needed:
window.location.href = 'YOUR_VSCODE_PORTFOLIO_URL'

# 5. Update meta tags in index.html
- Title
- Description
- Keywords
- OG tags
- Twitter cards

# 6. Add analytics (optional)
- Google Analytics
- Vercel Analytics
- Plausible
```

---

## Analytics Setup (Optional)

### **Vercel Analytics:**

```bash
npm install @vercel/analytics
```

```typescript
// src/main.tsx
import { Analytics } from '@vercel/analytics/react'

<>
  <App />
  <Analytics />
</>
```

### **Google Analytics:**

```html
<!-- index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## Performance Tips

### **Lighthouse Score Goals:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### **Already Optimized:**
- ✅ Lazy loading components
- ✅ Image optimization
- ✅ Code splitting
- ✅ Minimal dependencies
- ✅ Tree shaking
- ✅ Efficient animations
- ✅ No blocking resources

---

## Monitoring

### **Vercel:**
- Built-in analytics
- Performance insights
- Error tracking
- Usage metrics

### **Netlify:**
- Analytics (paid)
- Form submissions
- Function logs
- Build logs

---

## Rollback (if needed)

### **Vercel:**
```bash
# List deployments
vercel ls

# Rollback to previous
vercel rollback [deployment-url]
```

Or in dashboard: Deployments → Click three dots → Promote to Production

### **Netlify:**
Deploys → Click old deploy → "Publish deploy"

---

## CI/CD (Advanced)

Already set up with GitHub integration!

Every push triggers:
1. Install dependencies
2. Run linters
3. Build project
4. Run tests (if any)
5. Deploy to preview
6. Main branch → Production

---

## Troubleshooting

### **Build fails:**
```bash
# Clear cache
rm -rf node_modules package-lock.json
npm install

# Try build locally
npm run build
```

### **Blank page after deploy:**
- Check browser console
- Verify base URL in vite.config.ts
- Check 404 errors
- Verify dist folder contents

### **Animations not working:**
- Check Framer Motion loaded
- Verify CSS compiled
- Check browser compatibility

### **Choose Path not showing:**
- Clear localStorage
- Hard refresh (Ctrl+Shift+R)
- Check console errors

---

## Update VSCode Portfolio URL

In `src/components/ChooseYourPath.tsx`:

```typescript
window.location.href = 'http://adilaitelhoucine.me/My-Portfolio-/'
```

Change to your actual VSCode portfolio URL!

---

## Post-Deployment

### **Share it:**
- LinkedIn
- Twitter
- GitHub README
- Portfolio platforms
- Job applications

### **Monitor:**
- Check analytics
- Watch error logs
- Get feedback
- Iterate and improve

### **SEO:**
- Submit to Google Search Console
- Generate sitemap
- Add robots.txt
- Get indexed

---

## Domain Recommendations

Good domains for your portfolio:
- `adilaitelhoucine.dev`
- `adil-dev.com`
- `adilait.pro`
- `portfolio.adil.tech`

Check availability: [namecheap.com](https://namecheap.com) or [domains.google](https://domains.google)

---

## SSL Certificate

Both Vercel and Netlify provide:
- ✅ Free SSL certificates
- ✅ Auto-renewal
- ✅ HTTPS by default
- ✅ HTTP → HTTPS redirect

No configuration needed!

---

## Cost

### **Vercel (Hobby Plan):**
- Price: **FREE**
- Includes:
  - Unlimited deployments
  - 100GB bandwidth
  - Automatic HTTPS
  - Preview deployments
  - Analytics (paid add-on)

### **Netlify (Starter Plan):**
- Price: **FREE**
- Includes:
  - Unlimited deployments
  - 100GB bandwidth
  - Automatic HTTPS
  - Form handling
  - Serverless functions

Both are **perfect for portfolios**!

---

## Deployment Commands Reference

```bash
# Vercel
vercel                    # Deploy to preview
vercel --prod            # Deploy to production
vercel ls                # List deployments
vercel rm [deployment]   # Remove deployment
vercel domains           # Manage domains
vercel env               # Manage environment variables
vercel logs              # View logs

# Netlify
netlify deploy           # Deploy to preview
netlify deploy --prod    # Deploy to production
netlify status           # Check site status
netlify open             # Open site in browser
netlify open:admin       # Open admin dashboard
netlify sites:list       # List all sites
```

---

## 🎉 You're Ready!

Choose your method and deploy:

**Fastest:** Vercel CLI (`vercel --prod`)
**Easiest:** GitHub + Vercel/Netlify integration
**Most Control:** Manual CLI deployment

Your ultra-scaled portfolio will be live in minutes! 🚀

---

## Need Help?

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Netlify Docs: [docs.netlify.com](https://docs.netlify.com)
- Vite Docs: [vitejs.dev/guide/static-deploy](https://vitejs.dev/guide/static-deploy.html)

---

**Let's get you deployed!** 🚀✨

