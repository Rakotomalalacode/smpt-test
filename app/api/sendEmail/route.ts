// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";
// import { render } from "@react-email/render";
// import { ReactElement } from "react";
// import EmailTemplate from "@/components/EmailTemplate";

// export async function POST(request: Request) {
//   try {
//     const { email } = await request.json();

//     // Configuration du transporteur
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true,
//       auth: {
//         user: process.env.GMAIL_USER,
//         pass: process.env.GMAIL_PASS,
//       },
//     });

//     // Génération du HTML depuis ton template React
//     const emailHtml = render(EmailTemplate({ email }) as ReactElement);

//     // Envoi du mail
//     await transporter.sendMail({
//       from: `"Falarohy" <${process.env.GMAIL_USER}>`,
//       to: email,
//       subject: "Confirmer votre inscription",
//       html: emailHtml,
//     });

//     return NextResponse.json(
//       { message: "Email sent successfully" },
//       { status: 200 }
//     );
//   } catch (error: any) {
//     console.error("Error sending email:", error);
//     return NextResponse.json(
//       { message: "Error sending email", error: error.message },
//       { status: 500 }
//     );
//   }
// }



import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { render } from '@react-email/render';

import { ReactElement } from 'react';
import EmailTemplate from '@/components/EmailTemplate'; // Assure-toi que le chemin est correct

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Configuration de Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Résolution de la promesse retournée par `render`
    const emailHtml = await render(EmailTemplate({ email }) as ReactElement);

    // Envoi du mail
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Confirmer votre inscription',
      html: emailHtml, // Utilisation du template généré
    });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
  }
}