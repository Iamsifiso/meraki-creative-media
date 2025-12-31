import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import { format } from 'date-fns';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { serviceType, date, time, fullName, email, phone, location, specialRequests } = body;

    // Validate required fields
    if (!serviceType || !date || !time || !fullName || !email || !phone || !location) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create calendar event
    const calendarEventId = await createCalendarEvent({
      serviceType,
      date,
      time,
      fullName,
      email,
      phone,
      location,
      specialRequests,
    });

    // Send confirmation emails
    await sendBookingEmails({
      serviceType,
      date,
      time,
      fullName,
      email,
      phone,
      location,
      specialRequests,
    });

    return NextResponse.json(
      {
        message: 'Booking created successfully',
        calendarEventId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    );
  }
}

async function createCalendarEvent(bookingData: any): Promise<string | null> {
  try {
    // Check if Google Calendar credentials are configured
    if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
      console.warn('Google Calendar not configured, skipping calendar event creation');
      return null;
    }

    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );

    // Note: In production, you'll need to implement proper OAuth flow
    // For now, this is a placeholder that requires refresh token
    if (process.env.GOOGLE_REFRESH_TOKEN) {
      oauth2Client.setCredentials({
        refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
      });
    }

    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

    const [hours, minutes] = bookingData.time.split(':');
    const startDateTime = new Date(bookingData.date);
    startDateTime.setHours(parseInt(hours), parseInt(minutes), 0);

    const endDateTime = new Date(startDateTime);
    endDateTime.setHours(startDateTime.getHours() + 2); // Default 2-hour session

    const event = {
      summary: `${bookingData.serviceType} - ${bookingData.fullName}`,
      description: `
Service: ${bookingData.serviceType}
Client: ${bookingData.fullName}
Email: ${bookingData.email}
Phone: ${bookingData.phone}
Location: ${bookingData.location}
${bookingData.specialRequests ? `\nSpecial Requests:\n${bookingData.specialRequests}` : ''}
      `,
      location: bookingData.location,
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: 'Africa/Johannesburg',
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: 'Africa/Johannesburg',
      },
      attendees: [
        { email: bookingData.email },
      ],
    };

    const response = await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID || 'primary',
      requestBody: event,
    });

    return response.data.id || null;
  } catch (error) {
    console.error('Calendar event creation error:', error);
    return null;
  }
}

async function sendBookingEmails(bookingData: any): Promise<void> {
  try {
    // Check if email service is configured
    if (!process.env.EMAIL_USER) {
      console.warn('Email service not configured, skipping email notifications');
      return;
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email to client
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: bookingData.email,
      subject: 'Booking Confirmation - Meraki Creative Media',
      html: `
        <h2>Thank you for booking with Meraki Creative Media!</h2>
        <p>Dear ${bookingData.fullName},</p>
        <p>Your booking has been confirmed. Here are the details:</p>
        <ul>
          <li><strong>Service:</strong> ${bookingData.serviceType}</li>
          <li><strong>Date:</strong> ${format(new Date(bookingData.date), 'EEEE, MMMM d, yyyy')}</li>
          <li><strong>Time:</strong> ${bookingData.time} SAST</li>
          <li><strong>Location:</strong> ${bookingData.location}</li>
        </ul>
        ${bookingData.specialRequests ? `<p><strong>Your Special Requests:</strong><br>${bookingData.specialRequests}</p>` : ''}
        <p>We'll contact you soon to discuss the details of your session.</p>
        <p>Looking forward to working with you!</p>
        <p>Best regards,<br>Meraki Creative Media</p>
      `,
    });

    // Email to business owner
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.BUSINESS_EMAIL || process.env.EMAIL_USER,
      subject: `New Booking: ${bookingData.serviceType} - ${bookingData.fullName}`,
      html: `
        <h2>New Booking Received</h2>
        <ul>
          <li><strong>Service:</strong> ${bookingData.serviceType}</li>
          <li><strong>Client Name:</strong> ${bookingData.fullName}</li>
          <li><strong>Email:</strong> ${bookingData.email}</li>
          <li><strong>Phone:</strong> ${bookingData.phone}</li>
          <li><strong>Date:</strong> ${format(new Date(bookingData.date), 'EEEE, MMMM d, yyyy')}</li>
          <li><strong>Time:</strong> ${bookingData.time} SAST</li>
          <li><strong>Location:</strong> ${bookingData.location}</li>
        </ul>
        ${bookingData.specialRequests ? `<p><strong>Special Requests:</strong><br>${bookingData.specialRequests}</p>` : ''}
      `,
    });
  } catch (error) {
    console.error('Email sending error:', error);
  }
}
