export const prerender = false; // <-- Esto permite que este endpoint funcione en modo server

// src/pages/api/send-email.ts
import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import dotenv from 'dotenv';
dotenv.config(); // muy importante

export const POST: APIRoute = async ({ request }) => {
  const { name, email, telefono, message } = await request.json();
  console.log(process.env.EMAIL_USER);
  console.log(process.env.EMAIL_PASS);
  const transporter = nodemailer.createTransport({
    service: "gmail", // O usa SMTP si prefieres
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Mejor usar variables de entorno
    },
  });

  const mailOptions = {
    from: email,
    to: "tulio.silvamartinez@gmail.com",
    subject: "Interesado en EmpastesChile",
    text: `Nombre: ${name}\nCorreo: ${email}\nTelefono: ${telefono}\nMensaje:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return new Response(JSON.stringify({ success: false, error }), { status: 500 });
  }
};
