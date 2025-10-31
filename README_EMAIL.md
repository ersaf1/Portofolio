Email sending setup (Vercel + Nodemailer)

1) Deploy on Vercel. In your Vercel Project Settings → Environment Variables, add:
- SMTP_HOST = your.smtp.host
- SMTP_PORT = 587 (or 465 if using SSL)
- SMTP_USER = your_username_or_email
- SMTP_PASS = your_password_or_app_password
- TO_EMAIL = destination@example.com (optional; defaults to SMTP_USER)

2) Local development
Create a .env.local (not committed) and run via `vercel dev` or set the env in your shell. The Vite dev server will proxy /api calls when using `vercel dev`.

3) How it works
- Client: `src/pages/Contact.tsx` submits to `/api/send-email` with JSON { name, email, message }.
- Serverless: `api/send-email.js` uses Nodemailer with SMTP credentials and sends the mail.

Troubleshooting
- If you see 500 SMTP not configured: set the environment variables.
- For Gmail, enable App Passwords and use it as SMTP_PASS.
- Check Vercel Functions logs for errors.
