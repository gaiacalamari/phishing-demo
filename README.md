🎣 phishing-demo (Educational)

⚠️ Disclaimer

Questo progetto è solo a scopo educativo e di sensibilizzazione sulla sicurezza informatica.
Non deve essere usato per attacchi reali di phishing, raccolta di credenziali o attività illegali.

📌 Descrizione

phishing-demo è una demo di test che mostra come una pagina di phishing può presentarsi visivamente per ingannare un utente.
L’obiettivo è aiutare studenti, sviluppatori e team di sicurezza a riconoscere e prevenire attacchi di phishing.

La demo simula:

- una pagina di login falsa
- l’invio di dati a un server mock
- una pagina di “verifica completata”

🗂️ Struttura del progetto
phishing-demo/
├── index.html
├── verifica-completata.html
├── server.js
└── package.json

Flusso dimostrativo
[ HTML / JS ]
      |
      |  POST /collect (mock)
      v
[ Server Node.js ]
      |
      |  Simulazione SMTP (console.log)
      v
[ Inbox simulata ]

⚙️ Installazione
npm init -y
npm install express nodemailer
nodemailer viene usato solo in modalità simulata (nessun invio reale).

Avvio
node server.js


Apri nel browser:
http://localhost:3000
