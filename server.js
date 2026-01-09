<script>
function maskEmail(email) {
  const [u, d] = email.split("@");
  return u[0] + "****@" + d;
}

function maskPassword(password) {
  return "*".repeat(password.length);
}

function fakeLogin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const payload = {
    email: maskEmail(email),
    password: maskPassword(password),
    passwordLength: password.length,
    timestamp: new Date().toISOString()
  };

  fetch("http://localhost:3000/collect", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  alert(
    "SIMULAZIONE DIDATTICA\n\n" +
    "I dati sono stati inviati via email in forma MASCHERATA."
  );

  return false;
}
</script>
