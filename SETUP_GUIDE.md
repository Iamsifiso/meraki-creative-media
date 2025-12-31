# Environment Setup Guide

This guide will walk you through setting up the Google Calendar API and Email Service for your Meraki Creative Media website.

## Current Status

Your `.env.local` file needs the following credentials configured:

### ✅ Already Configured
- Site URL (localhost for development)
- Business hours and configuration
- Business location and timezone

### ❌ Needs Configuration
- Google Calendar API credentials
- Email service credentials

---

## Part 1: Google Calendar API Setup

### Step 1: Create Google Cloud Project (5-10 minutes)

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Click "Select a Project" → "New Project"
3. Project name: `Meraki Creative Media Booking`
4. Click "Create"

### Step 2: Enable Google Calendar API

1. In your new project, go to **APIs & Services** → **Library**
2. Search for "Google Calendar API"
3. Click on it and press **Enable**

### Step 3: Configure OAuth Consent Screen

1. Go to **APIs & Services** → **OAuth consent screen**
2. Select **External** user type (unless you have Google Workspace, then use Internal)
3. Fill in the required fields:
   - **App name:** Meraki Creative Media Booking
   - **User support email:** Your email
   - **Developer contact:** Your email
4. Click "Save and Continue"
5. **Scopes:** Click "Add or Remove Scopes"
   - Search for and add: `https://www.googleapis.com/auth/calendar.events`
   - Click "Update" then "Save and Continue"
6. **Test users:** Add your email address
7. Click "Save and Continue" → "Back to Dashboard"

### Step 4: Create OAuth Credentials

1. Go to **APIs & Services** → **Credentials**
2. Click **Create Credentials** → **OAuth client ID**
3. Application type: **Web application**
4. Name: `Meraki Booking Client`
5. **Authorized redirect URIs** - Add both:
   - `http://localhost:3000/api/auth/callback` (for development)
   - `https://merakicreativemedia.co.za/api/auth/callback` (for production)
6. Click **Create**
7. **IMPORTANT:** Copy the **Client ID** and **Client Secret** that appear
   - Save these somewhere safe - you'll need them for `.env.local`

### Step 5: Get Refresh Token

Option A: Using OAuth 2.0 Playground (Recommended)

1. Go to [Google OAuth 2.0 Playground](https://developers.google.com/oauthplayground)
2. Click the gear icon (⚙️) in the top right
3. Check "Use your own OAuth credentials"
4. Enter your **Client ID** and **Client Secret** from Step 4
5. Close the settings
6. In the left panel, find **Calendar API v3**
7. Select: `https://www.googleapis.com/auth/calendar.events`
8. Click "Authorize APIs"
9. Sign in with your Google account and allow access
10. Click "Exchange authorization code for tokens"
11. **IMPORTANT:** Copy the **Refresh token** that appears
    - Save this - you'll need it for `.env.local`

Option B: Using a Custom Script (Advanced)

If you prefer, I can help you create a Node.js script to generate the refresh token.

### Step 6: Get Calendar ID

1. Go to [Google Calendar](https://calendar.google.com)
2. **Recommended:** Create a dedicated calendar for bookings
   - Click the "+" next to "Other calendars"
   - Select "Create new calendar"
   - Name: "Meraki Bookings"
   - Click "Create calendar"
3. Find your calendar in the left sidebar
4. Click the three dots next to it → **Settings and sharing**
5. Scroll down to "Integrate calendar"
6. Copy the **Calendar ID** (format: `xxxxxxxxx@group.calendar.google.com` or `your-email@gmail.com`)
7. Save this - you'll need it for `.env.local`

### Step 7: Update .env.local with Google Calendar Credentials

Add these values to your `.env.local` file:

```env
GOOGLE_CLIENT_ID=your_client_id_from_step_4
GOOGLE_CLIENT_SECRET=your_client_secret_from_step_4
GOOGLE_REDIRECT_URI=http://localhost:3000/api/auth/callback
GOOGLE_CALENDAR_ID=your_calendar_id_from_step_6
GOOGLE_REFRESH_TOKEN=your_refresh_token_from_step_5
```

---

## Part 2: Email Service Setup (Gmail)

### Step 1: Enable 2-Factor Authentication

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Find "2-Step Verification" and enable it if not already enabled

### Step 2: Create App Password

1. Still in [Google Account Security](https://myaccount.google.com/security)
2. Go to "2-Step Verification"
3. Scroll down to "App passwords"
4. Click "App passwords"
5. Select app: **Mail**
6. Select device: **Other (Custom name)**
7. Enter: "Meraki Website"
8. Click "Generate"
9. **IMPORTANT:** Copy the 16-character password that appears
   - Save this - you'll need it for `.env.local`

### Step 3: Update .env.local with Email Credentials

Add these values to your `.env.local` file:

```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_16_character_app_password
```

---

## Part 3: Final .env.local Configuration

Your complete `.env.local` file should look like this:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Meraki Creative Media"

# Email Service
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop  # 16-character app password
BUSINESS_EMAIL=info@merakicreativemedia.co.za

# Business Configuration
BUSINESS_HOURS_START=09:00
BUSINESS_HOURS_END=17:00
BUSINESS_DAYS=Monday,Tuesday,Wednesday,Thursday,Friday,Saturday
TIMEZONE=Africa/Johannesburg
LOCATION="Paarl, Western Cape, South Africa"

# Google Calendar API
GOOGLE_CLIENT_ID=1234567890-abcdefghijklmnop.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-abcdefghijklmnopqrstuvwx
GOOGLE_REDIRECT_URI=http://localhost:3000/api/auth/callback
GOOGLE_CALENDAR_ID=your-calendar-id@group.calendar.google.com
GOOGLE_REFRESH_TOKEN=1//abcdefghijklmnopqrstuvwxyz...
```

---

## Testing Your Setup

Once you've configured everything:

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open http://localhost:3000 in your browser

3. Navigate to the Booking page

4. Try to submit a test booking and verify:
   - A calendar event is created in Google Calendar
   - You receive a confirmation email

---

## Troubleshooting

### "Invalid credentials" error
- Double-check your Client ID and Client Secret
- Ensure you copied them exactly (no extra spaces)

### "Refresh token expired" error
- Generate a new refresh token following Step 5
- Make sure the refresh token is from the same Google account as the calendar

### "Calendar not found" error
- Verify the Calendar ID is correct
- Ensure the calendar exists and is accessible

### Email not sending
- Verify you're using the App Password, not your regular Gmail password
- Check that 2FA is enabled on your account
- Make sure EMAIL_USER matches the account you created the App Password for

---

## Security Notes

- ⚠️ **NEVER commit `.env.local` to Git** (it's already in `.gitignore`)
- Keep your credentials secure
- Use different credentials for development and production
- Regularly rotate your App Passwords

---

## Next Steps

After configuration:
1. Test the booking system (see main README.md)
2. Deploy to Vercel
3. Update production environment variables in Vercel dashboard
4. Switch to client's calendar when ready to go live
