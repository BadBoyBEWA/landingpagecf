import nodemailer from "nodemailer";
import * as dotenv from "dotenv";

// Force load local variables for testing
dotenv.config({ path: '.env.local' });

// Basic in-memory rate limiting map
const rateLimitMap = new Map();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  // Rate Limiting Logic
  const ip = req.headers['x-forwarded-for'] || req.connection?.remoteAddress || 'unknown';
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 3;

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
  } else {
    const rateData = rateLimitMap.get(ip);
    if (now > rateData.resetTime) {
      rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    } else {
      rateData.count++;
      if (rateData.count > maxRequests) {
        return res.status(429).json({ message: "Too many requests. Please try again later." });
      }
    }
  }

  console.log("\n----------------------------------------");
  console.log("-> [Form API] Incoming POST request received");
  try {
    const {
      full_name,
      email,
      address,
      dob,
      phone,
      occupation,
      plan,
      ssn_tax_id
    } = req.body;

    // Basic Validation
    if (!full_name || !email || !address || !dob || !phone || !occupation || !plan || !ssn_tax_id) {
      return res.status(400).json({ message: "All fields are required." });
    }
    console.log("-> [Form API] Validation passed for:", full_name);

    const transporter = nodemailer.createTransport({
      host: "smtppro.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD,
      },
    });

    // 1. Email to Admin
    const adminHtml = `
      <h2>New Enrollment Received</h2>
      <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr><td style="background-color: #f4f4f5;"><strong>Full Name</strong></td><td>${full_name}</td></tr>
        <tr><td style="background-color: #f4f4f5;"><strong>Email</strong></td><td>${email}</td></tr>
        <tr><td style="background-color: #f4f4f5;"><strong>Address</strong></td><td>${address}</td></tr>
        <tr><td style="background-color: #f4f4f5;"><strong>Date of Birth</strong></td><td>${dob}</td></tr>
        <tr><td style="background-color: #f4f4f5;"><strong>Phone</strong></td><td>${phone}</td></tr>
        <tr><td style="background-color: #f4f4f5;"><strong>Occupation</strong></td><td>${occupation}</td></tr>
        <tr><td style="background-color: #f4f4f5;"><strong>Plan</strong></td><td>${plan}</td></tr>
        <tr><td style="background-color: #f4f4f5;"><strong>SSN / Tax ID</strong></td><td>${ssn_tax_id}</td></tr>
      </table>
    `;

    console.log("-> [Form API] Connecting to Zoho SMTP...");
    await transporter.sendMail({
      from: `"Cooper Flagg Team" <${process.env.ZOHO_EMAIL}>`,
      to: "cooperflagg@joinflagg.com",
      subject: `New Enrollment - ${full_name} (${plan})`,
      html: adminHtml,
      replyTo: email,
    });

    console.log("-> [Form API] Admin notification sent to cooperflagg@joinflagg.com successfully!");

    // 2. Auto-reply to User
    const userHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
        <h2 style="color: #000;">Welcome to Elite Access, ${full_name}!</h2>
        <p>Thank you for submitting your enrollment profile. We have successfully received your information.</p>
        <p>Your chosen plan: <strong>${plan}</strong></p>
        <p>Our team is reviewing your application, and you will receive further instructions to proceed with secure payment shortly.</p>
        <br/>
        <p>Best regards,<br/><strong>The Cooper Flagg Team</strong></p>
      </div>
    `;

    console.log(`-> [Form API] Sending auto-reply to user: ${email}...`);
    await transporter.sendMail({
      from: `"Cooper Flagg Team" <${process.env.ZOHO_EMAIL}>`,
      to: email,
      subject: "Enrollment Confirmation - The Cooper Flagg Team",
      html: userHtml,
    });

    console.log("-> [Form API] Auto-reply sent successfully.");
    console.log("-> [Form API] Process completed!");
    console.log("----------------------------------------\n");
    return res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("-> [Form API] ERROR processing form:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
