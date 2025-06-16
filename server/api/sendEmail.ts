import nodemailer from 'nodemailer'
import type { H3Event } from 'h3'
import type { ContactEmail } from '~~/types/ContactEmail'

export default defineEventHandler(async (event: H3Event) => {
  try {
    const body = (await readBody(event)) as ContactEmail
    const { email, subject, message, phone, fullname } = body

    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.brevo.com',
      port: 587,
      secure: false,
      auth: {
        user: '7de74a003@smtp-brevo.com',
        pass: process.env.smtpKey,
      },
    })

    const mailOptions = {
      from: `"${fullname}" <taimurkhan122.tk1@gmail.com>`,
      to: 'taimurkhan122.tk1@gmail.com',
      subject: subject || 'New Contact Form Submission',
      html: `
        <p>New contact form submission:</p>
        <ul>
          <li><strong>Name:</strong> ${fullname}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Subject:</strong> ${subject}</li>
          <li><strong>Message:</strong> ${message}</li>
        </ul>
      `,
    }

    const info = await transporter.sendMail(mailOptions)

    console.log('Message sent: %s', info.messageId)
    return { success: true, messageId: info.messageId }
  }
  catch (error) {
    console.error('Error sending email:', error)
    return { error: error }
  }
})
