# Vercel Deployment Guide

This guide will walk you through deploying your Meraki Creative Media website to Vercel.

---

## Prerequisites

- [x] Git repository initialized (✅ Complete)
- [x] Project builds successfully (✅ Complete)
- [ ] Vercel account (free tier is sufficient)
- [ ] Domain access for merakicreativemedia.co.za (if using custom domain)

---

## Option 1: Deploy via Vercel Dashboard (Recommended for First Deployment)

### Step 1: Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Sign up with your GitHub, GitLab, or Bitbucket account (recommended)

### Step 2: Push to Git Remote

First, push your local repository to GitHub/GitLab/Bitbucket:

#### Using GitHub (Recommended):

```bash
# Create a new repository on github.com (don't initialize with README)
# Then run these commands:

git remote add origin https://github.com/YOUR_USERNAME/meraki-creative-media.git
git push -u origin main
```

#### Using GitLab:

```bash
git remote add origin https://gitlab.com/YOUR_USERNAME/meraki-creative-media.git
git push -u origin main
```

### Step 3: Import Project to Vercel

1. Log in to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Import your Git repository
4. Select the repository you just created
5. Configure your project:
   - **Framework Preset:** Next.js (should auto-detect)
   - **Root Directory:** ./ (default)
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** .next (default)
6. Click "Deploy"

### Step 4: Configure Environment Variables

**IMPORTANT:** Add all environment variables before the first deployment or immediately after.

1. In your Vercel project dashboard, go to **Settings** → **Environment Variables**
2. Add each variable from your `.env.local` file:

#### Required for Production:

```
NEXT_PUBLIC_SITE_URL
  Value: https://merakicreativemedia.co.za
  Environment: Production

NEXT_PUBLIC_SITE_NAME
  Value: Meraki Creative Media
  Environment: Production, Preview, Development

EMAIL_HOST
  Value: smtp.gmail.com
  Environment: Production, Preview

EMAIL_PORT
  Value: 587
  Environment: Production, Preview

EMAIL_USER
  Value: your_email@gmail.com
  Environment: Production, Preview

EMAIL_PASSWORD
  Value: your_app_password
  Environment: Production, Preview

BUSINESS_EMAIL
  Value: info@merakicreativemedia.co.za
  Environment: Production, Preview

BUSINESS_HOURS_START
  Value: 09:00
  Environment: Production, Preview

BUSINESS_HOURS_END
  Value: 17:00
  Environment: Production, Preview

BUSINESS_DAYS
  Value: Monday,Tuesday,Wednesday,Thursday,Friday,Saturday
  Environment: Production, Preview

TIMEZONE
  Value: Africa/Johannesburg
  Environment: Production, Preview

LOCATION
  Value: Paarl, Western Cape, South Africa
  Environment: Production, Preview

GOOGLE_CLIENT_ID
  Value: your_google_client_id
  Environment: Production, Preview

GOOGLE_CLIENT_SECRET
  Value: your_google_client_secret
  Environment: Production, Preview

GOOGLE_REDIRECT_URI
  Value: https://merakicreativemedia.co.za/api/auth/callback
  Environment: Production

  Value: https://YOUR-PREVIEW-URL.vercel.app/api/auth/callback
  Environment: Preview

GOOGLE_CALENDAR_ID
  Value: your_calendar_id@group.calendar.google.com
  Environment: Production, Preview

GOOGLE_REFRESH_TOKEN
  Value: your_refresh_token
  Environment: Production, Preview
```

3. Click "Save" after adding each variable
4. Redeploy the project to apply environment variables

### Step 5: Set Up Custom Domain

1. In your Vercel project dashboard, go to **Settings** → **Domains**
2. Click "Add Domain"
3. Enter: `merakicreativemedia.co.za`
4. Click "Add"
5. Vercel will provide DNS records to configure

#### Configure DNS (AWS Route 53):

1. Log in to your AWS Console
2. Go to **Route 53** → **Hosted Zones**
3. Select `merakicreativemedia.co.za`
4. Delete any existing A or CNAME records for root (@) and www
5. Add new records as provided by Vercel:

**For root domain (@):**
- Type: A
- Name: @ (or leave blank)
- Value: 76.76.21.21 (Vercel's IP)
- TTL: 300

**For www subdomain:**
- Type: CNAME
- Name: www
- Value: cname.vercel-dns.com
- TTL: 300

6. Save changes
7. Wait for DNS propagation (5-60 minutes, sometimes up to 48 hours)
8. Vercel will automatically issue an SSL certificate when DNS is verified

---

## Option 2: Deploy via Vercel CLI (Advanced)

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login

```bash
vercel login
```

### Step 3: Deploy

From your project directory:

```bash
# Deploy to preview (test deployment)
vercel

# Deploy to production
vercel --prod
```

### Step 4: Set Environment Variables via CLI

```bash
# Add a variable
vercel env add NEXT_PUBLIC_SITE_URL

# Pull environment variables to local
vercel env pull .env.local
```

---

## Post-Deployment Checklist

After your first deployment:

### 1. Verify Deployment
- [ ] Visit your Vercel deployment URL (e.g., `https://meraki-creative-media.vercel.app`)
- [ ] Check that the homepage loads
- [ ] Test navigation to all pages
- [ ] Verify images and videos load
- [ ] Check mobile responsiveness

### 2. Update Google Calendar OAuth
- [ ] Go to [Google Cloud Console](https://console.cloud.google.com)
- [ ] Navigate to **APIs & Services** → **Credentials**
- [ ] Edit your OAuth 2.0 Client ID
- [ ] Add production redirect URI: `https://merakicreativemedia.co.za/api/auth/callback`
- [ ] Save changes

### 3. Test Functionality
- [ ] Submit a test booking
- [ ] Verify calendar event is created
- [ ] Check that confirmation emails are sent
- [ ] Submit contact form
- [ ] Verify contact emails are sent
- [ ] Test all portfolio filters
- [ ] Test lightbox functionality

### 4. Performance & SEO
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Check PageSpeed Insights
- [ ] Verify sitemap.xml is accessible: `/sitemap.xml`
- [ ] Verify robots.txt is accessible: `/robots.txt`
- [ ] Check Open Graph tags (share link on social media)
- [ ] Test on multiple devices and browsers

### 5. Security
- [ ] Verify SSL certificate is active (https://)
- [ ] Check that all API routes require authentication/validation
- [ ] Ensure `.env.local` is not committed to Git
- [ ] Verify environment variables are correctly scoped

---

## Continuous Deployment

Vercel automatically deploys when you push to your Git repository:

- **Push to `main` branch** → Deploys to production
- **Push to other branches** → Creates preview deployments
- **Pull requests** → Automatic preview deployments

### Making Updates:

```bash
# Make changes to your code
git add .
git commit -m "Update homepage hero section"
git push origin main
```

Vercel will automatically build and deploy your changes.

---

## Environment-Specific Configuration

### Development (Local)
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
GOOGLE_REDIRECT_URI=http://localhost:3000/api/auth/callback
```

### Preview (Vercel Previews)
```env
NEXT_PUBLIC_SITE_URL=https://your-preview.vercel.app
GOOGLE_REDIRECT_URI=https://your-preview.vercel.app/api/auth/callback
```

### Production (Live Site)
```env
NEXT_PUBLIC_SITE_URL=https://merakicreativemedia.co.za
GOOGLE_REDIRECT_URI=https://merakicreativemedia.co.za/api/auth/callback
```

---

## Monitoring & Analytics

### Vercel Analytics (Recommended)

1. In your Vercel dashboard, go to **Analytics**
2. Click "Enable Analytics"
3. Choose plan (free tier available)
4. Vercel will automatically track:
   - Page views
   - Performance metrics
   - Real user monitoring

### Vercel Logs

View deployment and runtime logs:
- **Deployment logs:** Vercel Dashboard → Deployments → Select deployment
- **Runtime logs:** Vercel Dashboard → Project → Logs

---

## Troubleshooting

### Build Fails on Vercel

**Check:**
1. Does it build locally? (`npm run build`)
2. Are all dependencies in `package.json`?
3. Check Vercel build logs for specific errors

**Common fixes:**
```bash
# Clear cache and redeploy
# In Vercel dashboard: Deployments → ⋮ → Redeploy
```

### Environment Variables Not Working

**Check:**
1. Are variables saved in Vercel dashboard?
2. Did you redeploy after adding variables?
3. Are you using the correct environment scope?
4. For `NEXT_PUBLIC_*` variables, did you redeploy?

**Fix:**
- Redeploy: Vercel Dashboard → Deployments → Latest → ⋮ → Redeploy

### Custom Domain Not Working

**Check:**
1. DNS records configured correctly?
2. DNS propagated? (Use [dnschecker.org](https://dnschecker.org))
3. SSL certificate issued? (Vercel handles automatically)

**Wait time:** DNS can take up to 48 hours

### API Routes Returning 500 Errors

**Check:**
1. Server logs in Vercel Dashboard
2. Are environment variables set correctly?
3. Test locally first: `npm run build && npm start`

---

## Advanced Configuration

### Custom Headers (Optional)

Create `vercel.json` in your project root:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### Redirects (Optional)

Add to `vercel.json`:

```json
{
  "redirects": [
    {
      "source": "/old-path",
      "destination": "/new-path",
      "permanent": true
    }
  ]
}
```

---

## Performance Optimization

### Image Optimization
- ✅ Next.js automatically optimizes images
- Uses Vercel's Image Optimization (free on all plans)

### Caching
- ✅ Static pages cached at edge (CDN)
- ✅ API routes can use `Cache-Control` headers

### Bundle Size
Check bundle size:
```bash
npm run build
```

Look for large dependencies and consider:
- Code splitting
- Dynamic imports
- Removing unused dependencies

---

## Scaling Considerations

Vercel free tier includes:
- Unlimited deployments
- 100 GB bandwidth/month
- Automatic SSL
- Global CDN
- Image optimization

For high traffic, consider:
- Vercel Pro plan ($20/month)
- Database for storing bookings (Vercel Postgres, Supabase, etc.)
- Rate limiting for API routes

---

## Backup Strategy

### Code
- ✅ Git repository (already set up)
- Push to GitHub/GitLab regularly

### Database (Future)
If you add a database later:
- Set up automated backups
- Use Vercel Postgres backups or your database provider's backup solution

### Environment Variables
- Keep a secure backup of `.env.local` (encrypted)
- Store in a password manager
- Document in team wiki (without actual values)

---

## Going Live Checklist

Before announcing to the public:

- [ ] All tests pass (see TESTING_GUIDE.md)
- [ ] Custom domain configured and working
- [ ] SSL certificate active
- [ ] Google Calendar integration working
- [ ] Email notifications working
- [ ] Contact form working
- [ ] All content reviewed and finalized
- [ ] Performance scores 90+ (Lighthouse)
- [ ] Tested on all major browsers
- [ ] Tested on mobile devices
- [ ] Analytics set up (optional)
- [ ] Social media metadata tested
- [ ] 404 page tested
- [ ] Sitemap accessible
- [ ] Robots.txt accessible

---

## Post-Launch

### 1. Monitor Performance
- Check Vercel Analytics daily for first week
- Review error logs regularly
- Monitor booking submissions

### 2. SEO
- Submit sitemap to Google Search Console
- Submit to Bing Webmaster Tools
- Monitor search rankings

### 3. Maintenance
- Review and respond to bookings promptly
- Keep dependencies updated: `npm outdated`
- Update content regularly (portfolio, services)

---

## Support & Resources

- **Vercel Documentation:** [vercel.com/docs](https://vercel.com/docs)
- **Next.js Documentation:** [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Support:** [vercel.com/support](https://vercel.com/support)
- **Community:** [github.com/vercel/next.js/discussions](https://github.com/vercel/next.js/discussions)

---

## Quick Reference Commands

```bash
# Local development
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Deploy to Vercel (preview)
vercel

# Deploy to production
vercel --prod

# View logs
vercel logs

# List deployments
vercel ls

# Pull environment variables
vercel env pull
```

---

## Cost Estimate

### Vercel (Free Tier)
- Cost: **$0/month**
- Includes: Hosting, SSL, CDN, 100GB bandwidth

### Google Workspace (If needed for business email)
- Cost: ~$6/month per user
- Includes: Professional email, storage

### Domain Registration (merakicreativemedia.co.za)
- Cost: ~$10-20/year
- Provider: AWS Route 53 or your domain registrar

**Total Monthly Cost:** $0-6/month (depending on email solution)

---

**Ready to deploy? Start with Option 1 above!**
