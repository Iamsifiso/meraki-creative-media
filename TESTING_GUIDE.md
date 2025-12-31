# Testing Guide

This guide will help you test all features of your Meraki Creative Media website.

## Quick Start

```bash
# Start the development server
npm run dev
```

Then open http://localhost:3000 in your browser.

---

## Testing Checklist

### ✅ Can Test Now (No API Credentials Required)

These features work immediately without any environment configuration:

#### 1. Homepage
- [ ] Page loads correctly
- [ ] Hero section displays with proper images
- [ ] Services preview section shows all services
- [ ] Portfolio highlights load
- [ ] Navigation menu works
- [ ] Footer displays contact information
- [ ] All internal links work

#### 2. About Page
- [ ] Page loads with company information
- [ ] Behind-the-scenes images display
- [ ] Content is formatted correctly
- [ ] Responsive design works (mobile, tablet, desktop)

#### 3. Services Page
- [ ] All services are listed
- [ ] Service descriptions display
- [ ] Images load correctly
- [ ] "Book Now" buttons link to booking page

#### 4. Portfolio Page
- [ ] Portfolio items display in grid
- [ ] Filtering works (Photos, Videos, All)
- [ ] Category filters work (Commercial, Fashion, Medical, Lifestyle)
- [ ] Lightbox opens when clicking items
- [ ] Videos play in lightbox
- [ ] Images display in full size
- [ ] Navigation arrows work in lightbox
- [ ] Close button works

#### 5. Contact Form (Basic UI Testing)
- [ ] Form displays correctly
- [ ] All fields are present (Name, Email, Phone, Service, Message)
- [ ] Form validation works (try submitting empty form)
- [ ] Email validation works (try invalid email)
- [ ] Phone validation works
- [ ] Service dropdown has all options

#### 6. Booking Form (Basic UI Testing)
- [ ] Form displays correctly
- [ ] Calendar widget shows current month
- [ ] Date selection works
- [ ] Time slot picker displays available times
- [ ] Service type dropdown works
- [ ] Location options display
- [ ] Special requests textarea works
- [ ] Form validation works

#### 7. Responsive Design
- [ ] Test on mobile (375px width)
- [ ] Test on tablet (768px width)
- [ ] Test on desktop (1920px width)
- [ ] Navigation menu adapts to mobile
- [ ] Images scale properly
- [ ] Text is readable on all devices

#### 8. Performance
- [ ] Pages load quickly
- [ ] Images are optimized
- [ ] No console errors in browser
- [ ] Smooth animations

---

### ⏳ Requires Configuration (API Credentials Needed)

These features require you to complete the environment setup from SETUP_GUIDE.md:

#### 9. Contact Form (Full Functionality)
**Requires:** Email service configured in `.env.local`

- [ ] Form submission succeeds
- [ ] Confirmation message displays
- [ ] Client receives confirmation email
- [ ] Business owner receives notification email
- [ ] Email content is formatted correctly

#### 10. Booking System (Full Functionality)
**Requires:** Google Calendar API + Email service configured

- [ ] Booking submission succeeds
- [ ] Success message displays
- [ ] Calendar event created in Google Calendar
- [ ] Event has correct details (date, time, location, description)
- [ ] Client receives booking confirmation email
- [ ] Business owner receives booking notification
- [ ] Calendar invite sent to client

---

## How to Test Each Feature

### Testing the Booking System (Step-by-Step)

1. **Start the dev server:**
   ```bash
   npm run dev
   ```

2. **Navigate to Booking page:**
   - Go to http://localhost:3000/booking
   - Or click "Book Now" from the navigation or homepage

3. **Fill out the form:**
   - Service Type: Select any service (e.g., "Portrait Photography")
   - Date: Click on a future date in the calendar
   - Time: Select an available time slot
   - Full Name: Enter a test name
   - Email: Use your email for testing
   - Phone: Enter a valid phone number
   - Location: Select or enter a location
   - Special Requests: (Optional) Add any notes

4. **Submit the form:**
   - Click "Confirm Booking"
   - Watch the browser console for any errors

5. **Verify results:**

   **Without API credentials configured:**
   - You'll see a success message
   - The form will be submitted but won't create calendar events or send emails
   - Check browser console for warnings like:
     ```
     Google Calendar not configured, skipping calendar event creation
     Email service not configured, skipping email notifications
     ```

   **With API credentials configured:**
   - You'll see a success message
   - Check your Google Calendar for the new event
   - Check your email inbox for confirmation
   - Check business email for notification
   - Verify all details are correct in both calendar and email

### Testing the Contact Form

1. **Navigate to Contact page:**
   - Go to http://localhost:3000/contact

2. **Fill out the form:**
   - Full Name: Test User
   - Email: your-email@example.com
   - Phone: +27 123 456 789
   - Service Interested In: Select a service
   - Message: Enter a test message

3. **Submit and verify:**
   - Click "Send Message"
   - Check for success message
   - If email is configured, check your inbox

### Testing Portfolio Filtering

1. **Go to Portfolio page:**
   - http://localhost:3000/portfolio

2. **Test media type filters:**
   - Click "All" - should show all items
   - Click "Photos" - should show only photos
   - Click "Videos" - should show only videos

3. **Test category filters:**
   - Try "Commercial"
   - Try "Fashion"
   - Try "Medical/Aesthetics"
   - Try "Lifestyle"
   - Try "All"

4. **Test lightbox:**
   - Click any portfolio item
   - Verify image/video displays in full screen
   - Click navigation arrows to browse
   - Press ESC or click X to close

---

## Common Issues and Solutions

### Form Submits But No Emails Sent
**Problem:** Email service not configured
**Solution:** Complete Part 2 of SETUP_GUIDE.md

### Calendar Events Not Created
**Problem:** Google Calendar API not configured
**Solution:** Complete Part 1 of SETUP_GUIDE.md

### Images Not Loading
**Check:**
- Are files in the `public/` directory?
- Is the file path correct in the code?
- Check browser console for 404 errors

### Videos Not Playing
**Check:**
- Are video files in the correct format (MP4, MOV)?
- Are files in `public/videos/` directory?
- Check browser console for errors

### Build Fails
**Try:**
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Development Server Issues
**Try:**
```bash
# Kill any running processes
pkill -f "next dev"

# Restart
npm run dev
```

---

## Testing in Different Browsers

Test in all major browsers:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## Performance Testing

### Using Chrome DevTools

1. Open DevTools (F12)
2. Go to "Lighthouse" tab
3. Click "Analyze page load"
4. Check scores for:
   - Performance (should be 90+)
   - Accessibility (should be 90+)
   - Best Practices (should be 90+)
   - SEO (should be 90+)

### Using PageSpeed Insights

1. Build for production: `npm run build`
2. Start production server: `npm start`
3. Go to [PageSpeed Insights](https://pagespeed.web.dev/)
4. Test with: http://localhost:3000

---

## Deployment Testing

After deploying to Vercel:

### Pre-Deployment Checklist
- [ ] All environment variables added to Vercel
- [ ] Google Calendar redirect URI updated for production domain
- [ ] NEXT_PUBLIC_SITE_URL updated to production domain
- [ ] Custom domain configured
- [ ] SSL certificate active

### Post-Deployment Testing
- [ ] Test all features from checklist above on live site
- [ ] Verify emails send from production
- [ ] Verify calendar events created from production
- [ ] Test contact form on live site
- [ ] Test booking form on live site
- [ ] Check all images load
- [ ] Check all videos play
- [ ] Test on mobile devices
- [ ] Verify SSL certificate (https://)
- [ ] Test custom domain works

---

## Automated Testing (Optional)

If you want to add automated tests later, consider:
- Jest for unit tests
- Cypress for E2E tests
- React Testing Library for component tests

---

## Getting Help

If you encounter issues:
1. Check the browser console for errors (F12)
2. Check the terminal/server logs
3. Review the SETUP_GUIDE.md
4. Review the main README.md troubleshooting section

---

## Test Data Examples

### Sample Booking Data
```
Service: Portrait Photography
Date: Tomorrow's date
Time: 10:00
Name: Test Client
Email: test@example.com
Phone: +27 82 123 4567
Location: Paarl, Western Cape
Special Requests: Outdoor setting preferred
```

### Sample Contact Form Data
```
Name: John Doe
Email: john@example.com
Phone: +27 82 987 6543
Service: Wedding Photography
Message: I'm interested in booking a photographer for my wedding in June 2025.
```

---

## Next Steps After Testing

1. ✅ Complete all items in the "Can Test Now" section
2. ⚙️ Set up API credentials following SETUP_GUIDE.md
3. ✅ Complete all items in the "Requires Configuration" section
4. 🚀 Deploy to Vercel
5. ✅ Test everything again on production
6. 🎉 Go live!
