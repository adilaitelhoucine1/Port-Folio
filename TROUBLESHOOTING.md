# 🔧 Troubleshooting Guide

## Common Issues and Solutions

### ✅ Issue: CSS Error - `border-border` class does not exist
**Status:** FIXED ✓

**Solution:** Updated `src/index.css` to remove the invalid Tailwind class.

---

## Quick Fixes

### 1. Port Already in Use
If port 5173 is busy:
```bash
npm run dev -- --port 3000
```

### 2. Module Not Found Errors
Clean install:
```bash
rm -rf node_modules package-lock.json
npm install
```

### 3. TypeScript Errors
```bash
npm run lint
```

### 4. Build Errors
Clear cache and rebuild:
```bash
rm -rf dist node_modules .vite
npm install
npm run build
```

### 5. Path Alias Issues
Make sure `vite.config.ts` has:
```typescript
resolve: {
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
}
```

---

## Testing Your Portfolio

### ✅ Development Server
```bash
npm run dev
```
Should open at: http://localhost:5173

### ✅ Build Test
```bash
npm run build
npm run preview
```
Preview at: http://localhost:4173

### ✅ All Features to Test

**Navigation:**
- [ ] Navbar appears and is sticky
- [ ] Mobile menu works
- [ ] All links scroll to sections
- [ ] Language switcher works (FR/EN/AR)

**Theme:**
- [ ] Dark/Light toggle works
- [ ] Theme persists on reload
- [ ] All sections look good in both themes

**Sections:**
- [ ] Hero section loads with animation
- [ ] Tech Stack shows all technologies
- [ ] Projects filter works correctly
- [ ] Experience timeline displays properly
- [ ] Skills bars animate on scroll
- [ ] Contact form opens mailto
- [ ] Footer displays correctly

**Responsive:**
- [ ] Desktop view (1920px+)
- [ ] Tablet view (768px)
- [ ] Mobile view (375px)

**Languages:**
- [ ] French displays correctly (default)
- [ ] English switches properly
- [ ] Arabic shows with RTL layout

**Performance:**
- [ ] Page loads in < 3 seconds
- [ ] Animations are smooth
- [ ] No console errors

---

## Browser Compatibility

✅ **Tested & Supported:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

⚠️ **Limited Support:**
- IE 11 (not recommended)

---

## Development Tips

### Hot Module Replacement (HMR)
Changes should reflect instantly. If not:
```bash
# Restart dev server
Ctrl+C
npm run dev
```

### Clear Browser Cache
- Chrome: Ctrl+Shift+R
- Firefox: Ctrl+Shift+R
- Safari: Cmd+Shift+R

### Check Console
- Open DevTools (F12)
- Look for errors in Console tab
- Check Network tab for failed requests

---

## Production Checklist

Before deploying, verify:

- [ ] All content is updated
- [ ] CV PDF is in `public/` folder
- [ ] All links work correctly
- [ ] Images load properly
- [ ] No console errors
- [ ] Tested on mobile
- [ ] All languages work
- [ ] Build completes successfully
- [ ] Preview looks correct

```bash
npm run build
npm run preview
```

---

## Deployment Issues

### Vercel

**Issue:** Build fails
```bash
# Make sure vercel.json is correct
# Check build command in package.json
npm run build  # Test locally first
```

**Issue:** 404 on routes
- Vercel should auto-detect SPA
- Check vercel.json has rewrites configured

### Netlify

**Issue:** Build fails
```bash
# Check build settings:
Build command: npm run build
Publish directory: dist
```

**Issue:** Redirects not working
Create `public/_redirects`:
```
/* /index.html 200
```

---

## Getting Help

### Check Logs
```bash
# Development logs
npm run dev

# Build logs
npm run build

# Lint errors
npm run lint
```

### Common Error Messages

**"Cannot find module"**
```bash
npm install
```

**"Port 5173 already in use"**
```bash
npm run dev -- --port 3000
```

**"TypeScript error"**
```bash
npm run lint
```

**"PostCSS error"**
- Check `tailwind.config.js`
- Check `postcss.config.js`
- Verify `src/index.css` imports

---

## Performance Optimization

### Check Bundle Size
```bash
npm run build
# Check dist/ folder size
```

### Optimize Images
- Use WebP format
- Compress images
- Use lazy loading

### Code Splitting
Already configured with Vite!

---

## Still Having Issues?

1. **Check the documentation:**
   - README.md
   - SETUP.md

2. **Verify Node version:**
   ```bash
   node --version  # Should be 18+
   ```

3. **Clean reinstall:**
   ```bash
   rm -rf node_modules package-lock.json dist .vite
   npm install
   npm run dev
   ```

4. **Check for updates:**
   ```bash
   npm outdated
   ```

---

## Contact for Support

If you're still stuck, reach out:
- Create an issue on GitHub
- Check Stack Overflow
- Review Vite documentation: https://vitejs.dev
- Review React documentation: https://react.dev

---

**Happy Coding! 🚀**

