import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    // Setup Namecheap Private Email SMTP with Port 465 (More reliable on Vercel)
    const transporter = nodemailer.createTransport({
      host: "mail.privateemail.com",
      port: 465, 
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // e.g., info@scippra.com
        pass: process.env.EMAIL_PASS, // Your Namecheap email password
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `"Scippra Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Sends the message to yourself
      replyTo: email,             // When you hit "reply", it goes to the user
      subject: `New Contact Message: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #1e1b4b;">New Message From Website</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Subject:</b> ${subject}</p>
          <p><b>Message:</b></p>
          <p style="background: #f9fafb; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `,
    });

    return Response.json({ success: true, message: "Email sent successfully" }, { status: 200 });

  } catch (error) {
    // CRITICAL: Log the actual error to the Vercel console for debugging
    console.error("Nodemailer Error:", error);
    
    return Response.json(
      { success: false, message: "Failed to send email. Check Vercel logs." }, 
      { status: 500 }
    );
  }
}