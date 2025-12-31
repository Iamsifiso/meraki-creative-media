# Meraki Creative Media Website - Complete Build Specification

## Project Overview
Build a professional, modern photography and videography website for Meraki Creative Media, a creative media business operating in Paarl, Western Cape, South Africa.

---

## Technical Stack & Infrastructure

### Core Technologies:
- **Framework:** Next.js 14+ with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Image Optimization:** Next.js Image component with lazy loading
- **Video Optimization:** Video.js or React Player with lazy loading
- **Forms:** React Hook Form with Zod validation
- **Calendar Integration:** Google Calendar API with OAuth 2.0
- **Email Service:** Nodemailer or Resend for booking confirmations

### Hosting & Deployment:
- **Platform:** Vercel
- **Domain:** merakicreativemedia.co.za (already owned on AWS Route 53)
- **Version Control:** Git/GitHub
- **Environment Variables:** Secure .env configuration

### Performance Requirements:
- Lighthouse score: 90+ across all metrics
- Image formats: WebP with fallbacks
- Video: Optimized for web, lazy loading, autoplay muted on hero
- Mobile-first responsive design
- Fast page transitions with smooth animations

---

## Website Structure & Pages

### 1. HOMEPAGE
**Hero Section:**
- **Hero Image:** `hero-homepage-photographer-client.jpg` (Image 6 - photographer with client outdoors)
- **Hero Video:** `hero-medical-aesthetics.mov` (Video 5 - autoplay, muted, looping)
- Full-width, full-height hero with overlay text
- Optional: Overlay `logo-full-horizontal-dark.png` on hero image for branding
- CTA buttons: "Book a Session" and "View Portfolio"
- Business tagline/headline emphasizing creativity and professionalism

**Services Preview Section:**
- Grid showcasing 3-4 main services using badge icons:
  - Photography: `badge-photos.png`
  - Videography: `badge-videos.png`
  - Behind-the-Scenes/Content Creation: `badge-bts.png`
- Each badge is clickable and links to relevant service or portfolio
- Brief descriptions with "Learn More" links

**Portfolio Highlights:**
- Masonry or grid layout featuring 4-6 best images/videos
- Link to full portfolio

**Testimonials/Social Proof:**
- Client reviews (if available)
- Instagram feed integration (optional)

**Call-to-Action:**
- Final booking section before footer

---

### 2. ABOUT PAGE
**Hero Section:**
- Brief introduction to Meraki Creative Media
- Location: Paarl, Western Cape, South Africa

**Our Story:**
- Business philosophy and approach
- What makes Meraki unique

**Behind the Scenes:**
- **Image:** `about-client-consultation.jpg` (Image 3 - owner showing client results)
- **Image:** `about-behind-the-scenes-1.jpg` (Image 4)
- **Image:** `about-behind-the-scenes-2.jpg` (Image 5)
- **Image:** `services-client-experience.jpg` (Image 7 - couple reviewing photos)

**Team Section (if applicable):**
- **Image:** `portfolio-glamour-portrait.jpg` (Image 2 - if team member)

**Call-to-Action:**
- "Ready to work together?" → Link to booking

---

### 3. SERVICES PAGE

**Service Categories:**

Each service should include:
- Description of what's included
- Duration estimates
- Price range or "Contact for quote"
- Sample work (images/videos)
- "Book This Service" CTA button

**Suggested Services (Customize based on client's actual offerings):**
1. **Portrait Photography**
   - Lifestyle portraits
   - Professional headshots
   - Personal branding sessions
   
2. **Event Photography & Videography**
   - Weddings
   - Corporate events
   - Celebrations
   
3. **Commercial Photography & Videography**
   - Business content
   - Product photography
   - Promotional videos
   
4. **Content Creation**
   - Social media content
   - Brand storytelling
   - Behind-the-scenes coverage

**Service Showcase Media:**
- **Image:** `hero-videography-equipment.jpg` (Image 8 - phone on gimbal)
- **Image:** `about-client-consultation.jpg` (Image 3 - as alternative for client experience)
- **Videos:** Selected portfolio videos demonstrating each service type

---

### 4. PORTFOLIO PAGE

**Filter/Category System:**
Allow users to filter by: All, Commercial, Lifestyle, Fashion, Medical/Corporate

**Visual Filter Buttons using Badge Icons:**
- All Works (default)
- Photos: `badge-photos.png`
- Videos: `badge-videos.png`
- Behind-the-Scenes: `badge-bts.png`
- Clients/Featured: `badge-clients.png` (optional)

#### **IMAGES SECTION:**

**Lifestyle & Fashion Portfolio:**
- `portfolio-lifestyle-outdoor.jpg` (Image 1 - woman in pink blazer outdoors)
- `portfolio-glamour-portrait.jpg` (Image 2 - woman in white dress)

**Additional Images:**
Can be used across portfolio or other sections as needed:
- `about-client-consultation.jpg` (Image 3)
- `about-behind-the-scenes-1.jpg` (Image 4)
- `about-behind-the-scenes-2.jpg` (Image 5)
- `hero-homepage-photographer-client.jpg` (Image 6)
- `services-client-experience.jpg` (Image 7)
- `hero-videography-equipment.jpg` (Image 8)

#### **VIDEOS SECTION:**

**Commercial Category:**
- `portfolio-commercial-plato-coffee.mov` (Video 2 - Plato Coffee café promotional)
- `portfolio-medical-reskin-full.mov` (Video 3 - Reskin Medical Aesthetics full version)

**Lifestyle Category:**
- `portfolio-lifestyle-pink-blazer.mov` (Video 1 - woman in pink blazer lifestyle)
- `portfolio-fashion-blue-dress.mov` (Video 4 - woman in blue dress fashion)
- `portfolio-lifestyle-cafe-lounge.mov` (Video 6 - woman in red at café)

**Can appear in multiple categories:**
- `hero-medical-aesthetics.mov` (Video 5 - Reskin short version) - use in both hero AND portfolio if desired

**Portfolio Layout:**
- Masonry grid or bento box layout
- Hover effects revealing project titles
- Click to expand/lightbox view
- Video thumbnails with play button overlay
- Smooth transitions and loading states

---

### 5. BOOKING PAGE

**Visual Branding:**
- Use `badge-book-us.png` as a visual element on the page
- Can be positioned near the main CTA button or as a page header icon

**Booking System Requirements:**

#### Google Calendar Integration:
- OAuth 2.0 authentication
- Initially configured for YOUR Google account for testing
- Easy config switch to client's email for production launch
- Automatic calendar event creation upon confirmed booking

#### Booking Flow:
1. **Service Selection:**
   - Dropdown or cards for service types
   - Display brief service description and estimated duration

2. **Date & Time Selection:**
   - Calendar widget showing available dates
   - Time slot picker based on business hours
   - Configure business hours in environment variables
   - Blocked dates/times should be disabled
   - Time zone: South Africa Standard Time (SAST - UTC+2)

3. **Client Information Form:**
   - Full Name (required)
   - Email (required)
   - Phone Number (required)
   - Preferred Location (default: Paarl, Western Cape)
   - Service Details/Special Requests (optional textarea)

4. **Confirmation:**
   - Summary of booking details
   - Terms & conditions checkbox
   - "Confirm Booking" button

5. **Post-Booking:**
   - Success page with booking confirmation
   - Automatic email to client with booking details
   - Automatic email to business owner with new booking alert
   - Event automatically added to Google Calendar

#### Calendar API Setup Instructions (Include in README):
- Step-by-step Google Cloud Console setup
- OAuth 2.0 credentials configuration
- Scope requirements: `https://www.googleapis.com/auth/calendar.events`
- Environment variable setup
- Testing vs Production credential switching guide

#### Business Hours Configuration:
```env
BUSINESS_HOURS_START=09:00
BUSINESS_HOURS_END=17:00
BUSINESS_DAYS=Monday,Tuesday,Wednesday,Thursday,Friday,Saturday
TIMEZONE=Africa/Johannesburg
```

---

### 6. CONTACT PAGE

**Contact Information:**
- Business Name: Meraki Creative Media
- Location: Paarl, Western Cape, South Africa
- Email: [To be provided by client]
- Phone: [To be provided by client]
- Social Media Links: Instagram, Facebook, etc. [To be provided]

**Contact Form:**
- Name (required)
- Email (required)
- Phone (optional)
- Subject (dropdown: General Inquiry, Quote Request, Booking Question, Other)
- Message (required)
- Submit button

**Map Integration (Optional):**
- Google Maps embed showing Paarl, Western Cape location (if specific address provided)

---

## Design Requirements

### Brand Identity:

**Brand Colors (from official logos):**
- **Primary Navy:** #1a1f3a (or similar dark blue - main brand color)
- **Light Blue/Periwibluenkle:** #a8b4d5 (or similar - secondary accent)
- **Peach/Cream:** #f4dcc4 (or similar - warm accent for light backgrounds)
- **Orange:** #e87722 (or similar - call-to-action and highlights)
- **Black:** #000000
- **White:** #ffffff

**Design Aesthetic:**
- Modern, clean, professional
- Emphasize creativity and high-quality work
- Use navy as primary color, light blue for accents
- Orange for CTAs and important highlights
- Peach/cream for soft background sections

**Typography:** 
- Headings: Plus Jakarta Sans, Inter, or similar modern sans-serif
- Body: Open Sans, Inter, or similar readable sans-serif
- Consider using serif fonts (like Playfair Display or Cormorant) for "MERAKI" to match logo elegance

### Logo Usage Guidelines:

**Navigation Header:**
- **Desktop:** Use `logo-full-horizontal-light.png` (full logo with text)
  - Light mode: dark logo on light background
  - Dark mode: switch to `logo-full-horizontal-dark.png`
- **Mobile:** Use `logo-icon-dark.png` (M symbol only) to save space
- Logo should link to homepage
- Sticky header with logo visible on scroll

**Footer:**
- Desktop: `logo-full-horizontal-light.png`
- Mobile: `logo-icon-light.png` or full logo (responsive)

**Favicon & Browser:**
- Generate favicon.ico from logo-icon-light.png
- Include multiple sizes (16x16, 32x32)
- Apple touch icon for iOS devices

**Social Media Sharing (Open Graph):**
- Use `logo-social-circle.png` as og:image
- Appears when website is shared on social platforms

**Functional Badges as Interactive Elements:**

The badge icons should be used throughout the site as visual navigation and section markers:

1. **Homepage Service Preview:**
   - `badge-photos.png` - Links to photography portfolio
   - `badge-videos.png` - Links to videography portfolio
   - `badge-book-us.png` - CTA button to booking page

2. **Portfolio Page:**
   - Use badges as filter/category buttons:
     - `badge-photos.png` - Filter for photos
     - `badge-videos.png` - Filter for videos
     - `badge-bts.png` - Filter for behind-the-scenes content

3. **About Page:**
   - `badge-bts.png` - Section header for behind-the-scenes content
   - `badge-clients.png` - Section header for client testimonials (if applicable)

4. **Booking Page:**
   - `badge-book-us.png` - Visual element on CTA buttons

**Badge Implementation:**
- Badges should be clickable/interactive
- Hover effects: slight scale or glow
- Can be used at various sizes (64px to 120px typically)
- Maintain aspect ratio (they're circular)

### UI/UX Features:
- **Dark/Light Mode Toggle:** User preference saved in localStorage
- **Smooth Animations:**
  - Page transitions
  - Scroll-triggered animations (Intersection Observer)
  - Hover effects on portfolio items
  - Loading states for images/videos
  
- **Navigation:**
  - Sticky header with logo and navigation
  - Mobile: Hamburger menu with smooth slide-in
  - Desktop: Horizontal navigation
  - CTA button in navigation: "Book Now"

- **Footer:**
  - Business info
  - Quick links (Services, Portfolio, About, Contact)
  - Social media icons
  - Copyright notice

### Responsive Design:
- Mobile-first approach
- Breakpoints: 
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px
- Touch-friendly tap targets on mobile
- Optimized media queries for all devices

### Accessibility:
- WCAG 2.1 AA compliance
- Semantic HTML
- Alt text for all images
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators

---

## Brand Assets & Logo Files

### Logo Files Included:

**Primary Brand Logos:**
1. **Full Logo (Horizontal):**
   - Light version: M symbol + "MERAKI CREATIVE MEDIA" text (for light backgrounds)
   - Dark version: Same with white text (for dark backgrounds/dark mode)
   - Use in: Header navigation, footer, about page
   
2. **Icon/Symbol Only:**
   - Light version: Black M symbol on white
   - Dark version: White M symbol on black
   - Use in: Mobile navigation, favicon, loading states

3. **Social Media:**
   - Circular logo with M symbol on navy background
   - Use in: Open Graph images, social media sharing, app icons

**Functional Badge Icons:**

These circular badges serve as visual navigation elements and category markers:

- **badge-photos.png** - Navy circle with "PHOTOS" text
  - Portfolio filter for photography
  - Photography service section
  
- **badge-videos.png** - Peach circle with "VIDEOS" text
  - Portfolio filter for videography
  - Videography service section
  
- **badge-bts.png** - Peach circle with "BTS" (Behind-the-Scenes)
  - BTS content filter
  - About page section marker
  
- **badge-clients.png** - Peach circle with "CLIENTS"
  - Client testimonials section
  - Featured work section
  
- **badge-book-us.png** - Navy circle with "BOOK US"
  - Call-to-action buttons
  - Booking page visual element

### Logo Preparation Notes:

**File Format Requirements:**
- PNG format with transparent backgrounds for all logos
- SVG format recommended for better scalability (if available)
- ICO format for favicons
- Multiple favicon sizes: 16x16, 32x32, 180x180 (Apple touch icon)

**Optimization:**
- Compress PNG files without quality loss
- Remove unnecessary metadata
- WebP versions for modern browsers (with PNG fallbacks)

**Color Specifications:**
- Navy: #1a1f3a (approximate - extract exact hex from logo files)
- Light Blue: #a8b4d5 (approximate)
- Peach/Cream: #f4dcc4 (approximate)
- Orange: #e87722 (approximate)

---

## File Structure & Organization

```
/public
  /logos
    # Primary Brand Logos
    logo-full-horizontal-light.png     (Full logo: M symbol + "MERAKI CREATIVE MEDIA" - for light backgrounds)
    logo-full-horizontal-dark.png      (Full logo with white text - for dark backgrounds/dark mode)
    logo-icon-light.png                (M symbol only - black on white)
    logo-icon-dark.png                 (M symbol only - white on black)
    
    # Social Media & Favicons
    logo-social-circle.png             (Circular M logo for social media sharing)
    favicon.ico                        (Browser tab icon)
    favicon-16x16.png
    favicon-32x32.png
    apple-touch-icon.png               (180x180 for iOS devices)
    
    # Functional Badges/Navigation Icons
    badge-photos.png                   (Navy circle with "PHOTOS" - for portfolio navigation)
    badge-videos.png                   (Peach circle with "VIDEOS" - for portfolio navigation)
    badge-clients.png                  (Peach circle with "CLIENTS" - for testimonials/client section)
    badge-bts.png                      (Peach circle with "BTS" - for behind-the-scenes content)
    badge-book-us.png                  (Navy circle with "BOOK US" - for CTA buttons)
    
  /images
    hero-homepage-photographer-client.jpg
    hero-videography-equipment.jpg
    portfolio-lifestyle-outdoor.jpg
    portfolio-glamour-portrait.jpg
    about-client-consultation.jpg
    about-behind-the-scenes-1.jpg
    about-behind-the-scenes-2.jpg
    services-client-experience.jpg
    
  /videos
    hero-medical-aesthetics.mov
    portfolio-commercial-plato-coffee.mov
    portfolio-medical-reskin-full.mov
    portfolio-lifestyle-pink-blazer.mov
    portfolio-fashion-blue-dress.mov
    portfolio-lifestyle-cafe-lounge.mov

/src
  /app
    /page.tsx (Homepage)
    /about/page.tsx
    /services/page.tsx
    /portfolio/page.tsx
    /booking/page.tsx
    /contact/page.tsx
    /api
      /booking/route.ts (Calendar API integration)
      /contact/route.ts (Contact form handler)
    layout.tsx
    globals.css
    
  /components
    /ui (shadcn/ui components)
    /layout
      Header.tsx
      Footer.tsx
      Navigation.tsx
      Logo.tsx                    (Responsive logo component with light/dark variants)
    /home
      HeroSection.tsx
      ServicesPreview.tsx
      PortfolioHighlights.tsx
      ServiceBadges.tsx           (Interactive badge navigation component)
    /portfolio
      PortfolioGrid.tsx
      PortfolioFilter.tsx         (Filter with badge icons)
      MediaLightbox.tsx
    /booking
      BookingForm.tsx
      CalendarWidget.tsx
      TimeSlotPicker.tsx
    /shared
      Button.tsx
      Card.tsx
      Form.tsx
      Badge.tsx                   (Reusable badge icon component)
      
  /lib
    /api
      googleCalendar.ts
      sendEmail.ts
    /utils
      validation.ts
      dateHelpers.ts
      
  /types
    booking.ts
    portfolio.ts
```

---

## Environment Variables

Create `.env.example` file with:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://merakicreativemedia.co.za
NEXT_PUBLIC_SITE_NAME="Meraki Creative Media"

# Google Calendar API
GOOGLE_CLIENT_ID=your_client_id_here
GOOGLE_CLIENT_SECRET=your_client_secret_here
GOOGLE_REDIRECT_URI=https://merakicreativemedia.co.za/api/auth/callback
GOOGLE_CALENDAR_ID=your_calendar_id_here

# For testing (your email)
TEST_CALENDAR_EMAIL=your_test_email@gmail.com

# For production (client's email) - switch when ready
PRODUCTION_CALENDAR_EMAIL=client_email@gmail.com

# Email Service (Resend or Nodemailer SMTP)
EMAIL_SERVICE_API_KEY=your_email_service_key
BUSINESS_EMAIL=info@merakicreativemedia.co.za
NOTIFICATION_EMAIL=bookings@merakicreativemedia.co.za

# Business Configuration
BUSINESS_HOURS_START=09:00
BUSINESS_HOURS_END=17:00
BUSINESS_DAYS=Monday,Tuesday,Wednesday,Thursday,Friday,Saturday
TIMEZONE=Africa/Johannesburg
LOCATION="Paarl, Western Cape, South Africa"

# Contact Information
BUSINESS_PHONE=+27_phone_number
BUSINESS_ADDRESS="Paarl, Western Cape"
```

---

## Deployment Instructions

### Vercel Deployment:

1. **Initial Setup:**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Login to Vercel
   vercel login
   
   # Deploy
   vercel
   ```

2. **Environment Variables:**
   - Add all environment variables in Vercel dashboard
   - Separate environments for Preview and Production
   - Use test credentials for preview, production credentials for production

3. **Domain Configuration:**
   - In Vercel: Add custom domain `merakicreativemedia.co.za`
   - Vercel will provide DNS records

### Route 53 Configuration:

1. **In AWS Route 53:**
   - Navigate to Hosted Zone for `merakicreativemedia.co.za`
   - Delete any existing A/CNAME records for root domain and www
   
2. **Add Vercel DNS Records:**
   - Add A record: `@` → `76.76.21.21` (Vercel's IP)
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   
3. **Verify Domain:**
   - Wait for DNS propagation (up to 48 hours, usually faster)
   - Verify SSL certificate is issued automatically by Vercel

### Git Workflow:

```bash
# Initial commit
git init
git add .
git commit -m "Initial commit: Meraki Creative Media website"

# Connect to GitHub
git remote add origin [your-repo-url]
git push -u origin main

# Future updates
git add .
git commit -m "Description of changes"
git push
```

Vercel will automatically deploy on every push to main branch.

---

## Google Calendar API Setup Guide

### Step 1: Google Cloud Console Setup

1. Go to https://console.cloud.google.com
2. Create a new project: "Meraki Creative Media Booking"
3. Enable Google Calendar API:
   - Navigate to "APIs & Services" → "Library"
   - Search "Google Calendar API"
   - Click "Enable"

### Step 2: OAuth 2.0 Credentials

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "OAuth client ID"
3. Configure OAuth consent screen:
   - User Type: External (for testing) or Internal (if G Suite)
   - Add app name, support email, developer contact
   - Scopes: Add `https://www.googleapis.com/auth/calendar.events`
   
4. Create OAuth Client ID:
   - Application type: Web application
   - Authorized redirect URIs: 
     - `http://localhost:3000/api/auth/callback` (for local testing)
     - `https://merakicreativemedia.co.za/api/auth/callback` (for production)
   
5. Download JSON credentials
6. Copy Client ID and Client Secret to `.env`

### Step 3: Calendar Configuration

1. In Google Calendar, create a dedicated calendar for bookings (recommended)
2. Copy the Calendar ID:
   - Calendar Settings → Integrate calendar → Calendar ID
   - Format: `xxxxxx@group.calendar.google.com`
3. Add to `.env` as `GOOGLE_CALENDAR_ID`

### Step 4: Testing vs Production

**For Testing (Your Email):**
```env
GOOGLE_CALENDAR_ID=your_test_calendar_id
TEST_MODE=true
```

**For Production (Client's Email):**
```env
GOOGLE_CALENDAR_ID=client_calendar_id
TEST_MODE=false
```

Include a toggle in the code to switch between test and production modes easily.

---

## Additional Features to Implement

### Optional Enhancements:
1. **Blog/News Section:** Share photography tips, behind-the-scenes, recent work
2. **Client Portal:** Secure gallery delivery for completed projects
3. **Pricing Packages:** If client wants transparent pricing displayed
4. **Instagram Integration:** Embed recent posts or feed
5. **FAQ Section:** Common questions about services, booking, etc.
6. **Gift Vouchers:** Purchase photography/videography session vouchers
7. **Review/Testimonials System:** Collect and display client reviews
8. **Multi-language Support:** English and Afrikaans (relevant for Western Cape)

### SEO Optimization:
- Next.js metadata API for all pages
- Structured data (JSON-LD) for LocalBusiness
- Sitemap.xml generation
- robots.txt configuration
- Open Graph tags for social sharing:
  - og:image should use `logo-social-circle.png`
  - og:title, og:description for each page
  - Twitter card metadata
- Favicon configuration (multiple sizes)
- Performance optimization (Core Web Vitals)

### Analytics:
- Google Analytics 4
- Vercel Analytics
- Conversion tracking for booking submissions

---

## README Requirements

The generated README should include:

1. **Project Overview**
2. **Tech Stack**
3. **Installation Instructions:**
   ```bash
   git clone [repo-url]
   cd meraki-creative-media
   npm install
   cp .env.example .env.local
   # Configure environment variables
   npm run dev
   ```
4. **Environment Variables Setup** (detailed guide)
5. **Google Calendar API Setup** (step-by-step)
6. **Deployment Guide** (Vercel + Route 53)
7. **Switching from Test to Production** (calendar email change process)
8. **Project Structure**
9. **Development Commands**
10. **Troubleshooting Common Issues**

---

## Testing Checklist

Before launching, verify:
- [ ] All images load properly and are optimized
- [ ] All videos play correctly and are optimized for web
- [ ] Responsive design works on mobile, tablet, desktop
- [ ] Booking form validates correctly
- [ ] Google Calendar integration creates events successfully
- [ ] Email confirmations send to both client and business owner
- [ ] Contact form submits successfully
- [ ] Navigation works on all pages
- [ ] Dark/light mode toggle functions correctly
- [ ] All external links open in new tabs
- [ ] SSL certificate is active
- [ ] Domain redirects properly (www → non-www or vice versa)
- [ ] 404 page exists and is styled
- [ ] Loading states display correctly
- [ ] Accessibility audit passes (Lighthouse)
- [ ] Performance metrics are optimal (Lighthouse)
- [ ] SEO meta tags are correct on all pages
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)

---

## Success Criteria

The website is complete when:
1. All pages are built and functional
2. All 8 images and 6 videos are properly integrated
3. Booking system successfully creates Google Calendar events
4. Email confirmations work reliably
5. Site is live at merakicreativemedia.co.za
6. Mobile experience is excellent
7. Page load times are under 3 seconds
8. Client can easily update content in the future (provide documentation)
9. Analytics are tracking correctly
10. Git repository is properly documented

---

## Notes for Claude Code

- Focus on clean, maintainable code with TypeScript
- Use modern React patterns (Server Components where appropriate)
- Implement proper error handling and loading states
- Add helpful comments for complex logic
- Follow Next.js 14+ best practices
- Ensure all components are reusable
- Write clear commit messages
- Provide comprehensive documentation in README
- Include instructions for switching from test to production calendar
- Make the booking system intuitive and user-friendly
- Prioritize performance and accessibility throughout

---

## Client Information Needed

Before final launch, obtain from client:
- [ ] Business phone number
- [ ] Business email address
- [ ] Social media handles (Instagram, Facebook, etc.)
- [ ] Specific services offered with descriptions
- [ ] Pricing structure (if to be displayed)
- [ ] Operating hours and days
- [ ] Any specific brand colors or fonts
- [ ] Terms & conditions for bookings
- [ ] Privacy policy
- [ ] Client's Google account email for calendar integration
- [ ] Any additional content for About page
- [ ] Testimonials (if available)

---

## Timeline Estimate

- **Setup & Configuration:** 2-3 hours
- **Homepage Development:** 4-6 hours
- **Portfolio Page:** 3-4 hours
- **Services Page:** 2-3 hours
- **About Page:** 2-3 hours
- **Booking System:** 6-8 hours
- **Contact Page:** 2-3 hours
- **Google Calendar Integration:** 4-6 hours
- **Testing & Refinement:** 4-6 hours
- **Deployment & DNS Setup:** 2-3 hours
- **Documentation:** 2-3 hours

**Total Estimated Development Time:** 33-48 hours

---

**END OF SPECIFICATION**

This prompt provides everything needed to build a complete, professional photography/videography website with booking functionality. Follow this specification to create a polished, production-ready website for Meraki Creative Media.
