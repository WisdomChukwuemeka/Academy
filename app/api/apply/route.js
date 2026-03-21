import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, expertise, portfolio, message } = body;

    // Configure the Namecheap (PrivateEmail) Transporter
    const transporter = nodemailer.createTransport({
      host: "mail.privateemail.com",
      port: 465,
      secure: true, // Use SSL
      auth: {
        user: process.env.EMAIL_USER, // your info@scippra.com
        pass: process.env.EMAIL_PASS, // your email password
      },
    });

    // Define the Email Content with enhanced HTML
    const mailOptions = {
      from: `"Scippra Careers" <${process.env.EMAIL_USER}>`, // MUST be your Namecheap email
      to: "info@scippra.com",
      replyTo: email, // This allows you to reply directly to the applicant
      subject: `New Instructor Application: ${name}`,
      html: `
        <div style="font-family: 'Arial', sans-serif; line-height: 1.6; color: #333333; background-color: #f9fafb; padding: 20px;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
            
            <!-- Header Section -->
            <tr>
              <td style="background-color: #dc2626; padding: 25px 30px; text-align: center;">
                <h1 style="margin: 0; font-size: 28px; color: #ffffff; font-weight: bold; letter-spacing: 0.5px;">
                  Scippra Careers
                </h1>
                <p style="margin: 5px 0 0; font-size: 14px; color: rgba(255,255,255,0.8);">New Instructor Application</p>
              </td>
            </tr>

            <!-- Content Section -->
            <tr>
              <td style="padding: 30px;">
                <p style="font-size: 16px; margin-top: 0; margin-bottom: 20px;">
                  Dear Scippra Team,
                </p>
                <p style="font-size: 16px; margin-bottom: 25px;">
                  We have received a new application for an instructor position. Below are the details:
                </p>

                <!-- Applicant Details Card -->
                <div style="background-color: #fef2f2; border: 1px solid #fee2e2; border-radius: 10px; padding: 25px; margin-bottom: 25px;">
                  <h3 style="font-size: 20px; color: #b91c1c; margin-top: 0; margin-bottom: 15px;">Applicant Information</h3>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td style="padding-bottom: 10px; font-size: 15px;"><strong style="color: #4a5568;">Name:</strong></td>
                      <td style="padding-bottom: 10px; font-size: 15px;">${name}</td>
                    </tr>
                    <tr>
                      <td style="padding-bottom: 10px; font-size: 15px;"><strong style="color: #4a5568;">Email:</strong></td>
                      <td style="padding-bottom: 10px; font-size: 15px;"><a href="mailto:${email}" style="color: #dc2626; text-decoration: none;">${email}</a></td>
                    </tr>
                    <tr>
                      <td style="padding-bottom: 10px; font-size: 15px;"><strong style="color: #4a5568;">Expertise:</strong></td>
                      <td style="padding-bottom: 10px; font-size: 15px;">${expertise}</td>
                    </tr>
                    <tr>
                      <td style="padding-bottom: 20px; font-size: 15px;"><strong style="color: #4a5568;">Portfolio:</strong></td>
                      <td style="padding-bottom: 20px; font-size: 15px;"><a href="${portfolio}" style="color: #dc2626; text-decoration: none; word-break: break-all;">${portfolio}</a></td>
                    </tr>
                    <tr>
                      <td colspan="2" style="text-align: center;">
                        <a href="${portfolio}" style="display: inline-block; background-color: #dc2626; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 8px; font-weight: bold; font-size: 14px; margin-top: 10px;">
                          View Portfolio
                        </a>
                      </td>
                    </tr>
                  </table>
                </div>

                <!-- Message/Bio Section -->
                <div style="background-color: #f8f9fa; border: 1px solid #e2e8f0; border-radius: 10px; padding: 25px;">
                  <h3 style="font-size: 20px; color: #333333; margin-top: 0; margin-bottom: 15px;">Professional Bio / Pitch</h3>
                  <p style="font-size: 15px; margin-bottom: 0;">${message}</p>
                </div>

                <p style="font-size: 15px; margin-top: 30px;">
                  Please review the application and follow up with the candidate as appropriate.
                </p>
              </td>
            </tr>

            <!-- Footer Section -->
            <tr>
              <td style="background-color: #eff6ff; padding: 20px 30px; text-align: center; border-top: 1px solid #e0e7ff;">
                <p style="margin: 0; font-size: 12px; color: #6b7280;">
                  &copy; ${new Date().getFullYear()} Scippra. All rights reserved.
                </p>
                <p style="margin: 5px 0 0; font-size: 12px; color: #6b7280;">
                  This email was sent from the Scippra Instructor Application System.
                </p>
              </td>
            </tr>

          </table>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Success" }, { status: 200 });

  } catch (error) {
    console.error("APPLICATION_ERROR:", error);
    return NextResponse.json(
      { message: "Failed to send email", error: error.message },
      { status: 500 }
    );
  }
}