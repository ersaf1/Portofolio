const nodemailer = require('nodemailer')

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' })
    return
  }

  try {
    const { name, email, message } = req.body || {}
    if (!name || !email || !message) {
      res.status(400).json({ error: 'Missing fields' })
      return
    }

    const host = process.env.SMTP_HOST
    const port = parseInt(process.env.SMTP_PORT || '587', 10)
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    const to = process.env.TO_EMAIL || user

    if (!host || !user || !pass) {
      res.status(500).json({ error: 'SMTP not configured' })
      return
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    })

    const info = await transporter.sendMail({
      from: `Portfolio <${user}>`,
      to,
      replyTo: email,
      subject: `New message from ${name}`,
      text: message,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p>${message.replace(/\n/g, '<br/>')}</p>`,
    })

    res.status(200).json({ ok: true, id: info.messageId })
  } catch (err) {
    console.error('send-email error', err)
    res.status(500).json({ error: 'Failed to send email' })
  }
}
