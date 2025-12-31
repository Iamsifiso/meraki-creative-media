# Quick Start Guide

Welcome to your Meraki Creative Media website! Here's everything you need to know to get started.

---

## Current Status ✅

Your project is ready for:
- ✅ Local development
- ✅ Testing
- ✅ Deployment to Vercel

---

## What's Already Done

1. **Git Repository** - Initialized with your first commit
2. **Project Structure** - Complete Next.js application
3. **Build Verification** - Successfully builds with no errors
4. **Development Server** - Running and tested

---

## Next Steps (In Order)

### 1. Configure API Credentials (Optional but Recommended)

**Time Required:** 30-45 minutes

Follow **SETUP_GUIDE.md** to configure:
- Google Calendar API (for booking system)
- Gmail SMTP (for email notifications)

**Can skip if:** You want to test the UI first without functional booking/email

---

### 2. Test Locally

**Time Required:** 15-30 minutes

```bash
# Start the development server
npm run dev
```

Then follow **TESTING_GUIDE.md** to test all features.

**Open:** http://localhost:3000

---

### 3. Deploy to Vercel

**Time Required:** 20-30 minutes

Follow **DEPLOYMENT_GUIDE.md** for step-by-step deployment instructions.

**Two options:**
- Via Vercel Dashboard (easier, recommended)
- Via Vercel CLI (faster if you know what you're doing)

---

## File Guide

### 📚 Documentation Files

| File | Purpose | When to Use |
|------|---------|-------------|
| `README.md` | Complete project documentation | Reference for all features and tech stack |
| `SETUP_GUIDE.md` | Environment variable configuration | When setting up Google Calendar & Email |
| `TESTING_GUIDE.md` | Testing checklist and instructions | Before and after deployment |
| `DEPLOYMENT_GUIDE.md` | Vercel deployment walkthrough | When ready to deploy to production |
| `QUICK_START.md` | This file - getting started | Your starting point |

### ⚙️ Configuration Files

| File | Purpose |
|------|---------|
| `.env.local` | Development environment variables |
| `.env.example` | Template for local development |
| `.env.production.example` | Template for Vercel production variables |
| `.gitignore` | Files excluded from Git (includes .env.local) |
| `package.json` | Dependencies and scripts |
| `next.config.ts` | Next.js configuration |
| `tailwind.config.ts` | Tailwind CSS configuration |
| `tsconfig.json` | TypeScript configuration |

### 📁 Key Directories

| Directory | Contents |
|-----------|----------|
| `src/app/` | Pages and API routes |
| `src/components/` | React components |
| `src/lib/` | Utility functions and helpers |
| `src/types/` | TypeScript type definitions |
| `public/` | Static assets (images, videos, logos) |

---

## Development Commands

```bash
# Install dependencies (already done)
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Run linter
npm run lint
```

---

## Common Tasks

### Adding New Portfolio Items

1. Add image/video files to `public/images/` or `public/videos/`
2. Edit `src/lib/utils/portfolio-data.ts`
3. Add new item to the portfolio array

### Updating Services

1. Edit `src/app/services/page.tsx`
2. Update service descriptions and pricing

### Changing Contact Information

1. Update in `.env.local` (development)
2. Update in Vercel dashboard (production)
3. Update in `src/components/layout/Footer.tsx` if needed

### Adding New Pages

1. Create new file in `src/app/pagename/page.tsx`
2. Add navigation link in `src/components/layout/Navigation.tsx`
3. Update sitemap in `src/app/sitemap.ts`

---

## Recommended Workflow

### For Local Development:

1. **Make changes** to your code
2. **Test locally** with `npm run dev`
3. **Build** to verify: `npm run build`
4. **Commit** changes: `git add . && git commit -m "Description"`

### For Deployment:

1. **Push to Git:** `git push origin main`
2. **Vercel automatically deploys** (after first setup)
3. **Verify** the production deployment
4. **Test** on live site

---

## Important Notes

### Environment Variables

- ⚠️ **Never commit `.env.local`** to Git (it's in `.gitignore`)
- Use `.env.example` as a template
- Add production variables to Vercel dashboard, not to code

### Google Calendar OAuth

- Redirect URI must match exactly:
  - Development: `http://localhost:3000/api/auth/callback`
  - Production: `https://merakicreativemedia.co.za/api/auth/callback`
- Update in Google Cloud Console when deploying

### Email Service

- Use Gmail App Password, not regular password
- Requires 2-Factor Authentication enabled
- Keep credentials secure

---

## Troubleshooting

### Port 3000 Already in Use

```bash
# Kill the process
pkill -f "next dev"

# Or use different port
npm run dev -- -p 3001
```

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

### Images Not Loading

- Check file paths are correct
- Ensure files are in `public/` directory
- Check file extensions match (case-sensitive)

---

## Getting Help

### Documentation Priority

1. **Error in development?** → Check browser console and terminal
2. **Setup questions?** → See `SETUP_GUIDE.md`
3. **Testing questions?** → See `TESTING_GUIDE.md`
4. **Deployment questions?** → See `DEPLOYMENT_GUIDE.md`
5. **General questions?** → See `README.md`

### External Resources

- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Tailwind CSS: [tailwindcss.com/docs](https://tailwindcss.com/docs)

---

## Success Checklist

### Before Deploying:
- [ ] Project builds successfully: `npm run build`
- [ ] Tested locally: `npm run dev`
- [ ] Git repository initialized
- [ ] Environment variables configured (or plan to add them)

### Before Going Live:
- [ ] Deployed to Vercel
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Google Calendar integration tested
- [ ] Email notifications tested
- [ ] All pages tested on production
- [ ] Mobile responsiveness verified
- [ ] Performance scores 90+ (Lighthouse)

---

## Timeline Estimate

### Minimal Setup (Just Deploy)
- Time: 1-2 hours
- Includes: Deploy to Vercel, test basic functionality

### Full Setup (Everything)
- Time: 3-4 hours
- Includes: API setup, testing, deployment, custom domain

### Development Ready
- Time: 30 minutes
- Includes: Configure environment, test locally

---

## What to Do Right Now

### Option A: Test First (No API Setup)
```bash
npm run dev
```
Then open http://localhost:3000 and explore the site

### Option B: Full Setup
1. Open `SETUP_GUIDE.md`
2. Configure Google Calendar API (30 min)
3. Configure Email Service (10 min)
4. Test locally (15 min)
5. Deploy to Vercel (30 min)

### Option C: Quick Deploy
1. Push to GitHub
2. Connect to Vercel
3. Deploy
4. Add environment variables later

---

## Final Notes

- **Your site is ready to deploy** as-is
- **API credentials are optional** for initial testing
- **No code changes needed** unless you want to customize
- **All features are production-ready**

---

**Ready to start? Run `npm run dev` and open http://localhost:3000!**
