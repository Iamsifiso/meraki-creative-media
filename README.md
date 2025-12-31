# Meraki Creative Media Website

Professional photography and videography website built with Next.js 14, TypeScript, and Tailwind CSS.

## Overview

This is a modern, responsive website for Meraki Creative Media, a photography and videography business based in Paarl, Western Cape, South Africa. The site features a portfolio showcase, online booking system with Google Calendar integration, and contact forms.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form with Zod validation
- **Calendar:** Google Calendar API
- **Email:** Nodemailer
- **Deployment:** Vercel

## Features

- 🎨 Modern, responsive design with dark/light mode support
- 📸 Portfolio page with filtering (photos, videos, categories)
- 📅 Online booking system with calendar integration
- 📧 Automated email confirmations
- 🔍 SEO optimized with metadata and sitemap
- ⚡ Optimized images and videos with Next.js Image component
- 📱 Mobile-first responsive design
- ♿ Accessibility (WCAG 2.1 AA compliant)

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Google Cloud account (for Calendar API)
- Email account with SMTP access (Gmail recommended)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd "Meraki Creative Media"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and configure all required variables (see Environment Variables section below).

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

### Required Variables

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000  # Change to your domain in production
NEXT_PUBLIC_SITE_NAME="Meraki Creative Media"

# Email Service (Required for contact form and booking notifications)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password  # Use Gmail App Password, not regular password
BUSINESS_EMAIL=info@merakicreativemedia.co.za

# Business Configuration
BUSINESS_HOURS_START=09:00
BUSINESS_HOURS_END=17:00
BUSINESS_DAYS=Monday,Tuesday,Wednesday,Thursday,Friday,Saturday
TIMEZONE=Africa/Johannesburg
LOCATION="Paarl, Western Cape, South Africa"
```

### Optional Variables (Google Calendar Integration)

```env
# Google Calendar API
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
GOOGLE_REDIRECT_URI=http://localhost:3000/api/auth/callback
GOOGLE_CALENDAR_ID=your_calendar_id
GOOGLE_REFRESH_TOKEN=your_refresh_token
```

## Google Calendar API Setup

### Step 1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project named "Meraki Creative Media Booking"
3. Enable the Google Calendar API:
   - Navigate to **APIs & Services** → **Library**
   - Search for "Google Calendar API"
   - Click **Enable**

### Step 2: Configure OAuth Consent Screen

1. Go to **APIs & Services** → **OAuth consent screen**
2. Choose **External** user type (or Internal if using Google Workspace)
3. Fill in the required information:
   - App name: "Meraki Creative Media Booking"
   - User support email: your email
   - Developer contact: your email
4. Add scopes:
   - `https://www.googleapis.com/auth/calendar.events`
5. Save and continue

### Step 3: Create OAuth Credentials

1. Go to **APIs & Services** → **Credentials**
2. Click **Create Credentials** → **OAuth client ID**
3. Application type: **Web application**
4. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback` (for development)
   - `https://merakicreativemedia.co.za/api/auth/callback` (for production)
5. Click **Create**
6. Download the JSON credentials
7. Copy **Client ID** and **Client Secret** to your `.env.local`

### Step 4: Get Refresh Token

You'll need to obtain a refresh token through OAuth flow. This is a one-time setup:

1. Use a tool like [OAuth 2.0 Playground](https://developers.google.com/oauthplayground)
2. Select **Google Calendar API v3** → `https://www.googleapis.com/auth/calendar.events`
3. Authorize and get your refresh token
4. Add it to `.env.local` as `GOOGLE_REFRESH_TOKEN`

### Step 5: Get Calendar ID

1. Open [Google Calendar](https://calendar.google.com)
2. Create a dedicated calendar for bookings (recommended)
3. Go to Calendar Settings → Integrate calendar
4. Copy the **Calendar ID** (format: `xxxxx@group.calendar.google.com`)
5. Add it to `.env.local` as `GOOGLE_CALENDAR_ID`

## Email Service Setup (Gmail)

### Using Gmail SMTP

1. **Enable 2-Factor Authentication** on your Google account
2. **Create an App Password:**
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Navigate to "2-Step Verification" → "App passwords"
   - Select "Mail" and your device
   - Copy the generated 16-character password
3. Add to `.env.local`:
   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASSWORD=your_16_character_app_password
   ```

### Alternative: Using Other Email Services

For services like SendGrid, Resend, or Mailgun, update the email configuration in:
- `src/app/api/contact/route.ts`
- `src/app/api/booking/route.ts`

## Project Structure

```
/
├── public/
│   ├── images/          # Image assets
│   ├── videos/          # Video assets
│   └── logos/           # Logo files and badges
├── src/
│   ├── app/
│   │   ├── (pages)/     # Route pages
│   │   │   ├── about/
│   │   │   ├── booking/
│   │   │   ├── contact/
│   │   │   ├── portfolio/
│   │   │   └── services/
│   │   ├── api/         # API routes
│   │   │   ├── booking/
│   │   │   └── contact/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── booking/     # Booking form components
│   │   ├── contact/     # Contact form
│   │   ├── home/        # Homepage sections
│   │   ├── layout/      # Header, Footer, Navigation
│   │   ├── portfolio/   # Portfolio grid and filters
│   │   └── shared/      # Reusable UI components
│   ├── lib/
│   │   └── utils/       # Helper functions
│   └── types/           # TypeScript type definitions
├── .env.example         # Environment variables template
├── .env.local           # Your local environment (not in git)
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Deployment

### Vercel Deployment (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Configure Environment Variables:**
   - Go to Vercel Dashboard → Project Settings → Environment Variables
   - Add all variables from `.env.local`
   - Separate configurations for Preview and Production environments

5. **Set up Custom Domain:**
   - In Vercel Dashboard, go to Domains
   - Add `merakicreativemedia.co.za`
   - Vercel will provide DNS records

### AWS Route 53 Configuration

1. **Go to AWS Route 53:**
   - Navigate to Hosted Zone for `merakicreativemedia.co.za`

2. **Add DNS Records:**
   - Delete any existing A/CNAME records for root and www
   - Add A record: `@` → `76.76.21.21` (Vercel's IP)
   - Add CNAME record: `www` → `cname.vercel-dns.com`

3. **Wait for DNS Propagation:**
   - Usually takes 5-10 minutes, can take up to 48 hours
   - Vercel will automatically issue an SSL certificate

### Switching from Test to Production

When ready to go live with the client's calendar:

1. Update `.env.local` (or Vercel environment variables):
   ```env
   GOOGLE_CALENDAR_ID=client_calendar_id
   TEST_MODE=false
   ```

2. Redeploy the application

## Testing Checklist

Before launching, verify:

- [ ] All images load and are optimized
- [ ] Videos play correctly
- [ ] Responsive design works (mobile, tablet, desktop)
- [ ] Booking form validates and submits
- [ ] Google Calendar events are created
- [ ] Email confirmations send successfully
- [ ] Contact form works
- [ ] All navigation links work
- [ ] SEO metadata is correct
- [ ] SSL certificate is active
- [ ] Performance score is 90+ (Lighthouse)
- [ ] Accessibility audit passes

## Troubleshooting

### Google Calendar Not Creating Events

- Verify `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, and `GOOGLE_REFRESH_TOKEN` are correct
- Check that Calendar API is enabled in Google Cloud Console
- Ensure the refresh token hasn't expired
- Check browser console and server logs for error messages

### Emails Not Sending

- Verify email credentials are correct
- For Gmail, ensure you're using an App Password, not your regular password
- Check that 2FA is enabled on your Google account
- Verify `EMAIL_HOST` and `EMAIL_PORT` are correct
- Check server logs for SMTP errors

### Images/Videos Not Loading

- Verify files are in the correct `public/` directories
- Check file extensions match (case-sensitive)
- Ensure Next.js Image domains are configured if using external images

### Build Errors

- Run `npm run lint` to check for TypeScript/ESLint errors
- Verify all dependencies are installed: `npm install`
- Clear Next.js cache: `rm -rf .next` and rebuild

## Performance Optimization

- Images are automatically optimized by Next.js
- Videos should be optimized externally before upload
- Use WebP format for images when possible
- Lazy loading is enabled for images and videos
- Metadata is cached for faster subsequent loads

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2025 Meraki Creative Media. All rights reserved.

## Support

For questions or issues, contact:
- Email: info@merakicreativemedia.co.za
- Location: Paarl, Western Cape, South Africa

---

Built with ❤️ using Next.js and deployed on Vercel
