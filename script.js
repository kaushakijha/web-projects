const form = document.getElementById("accountForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const repass = document.getElementById("repass").value;

    alert(`Account created successfully!\nName: ${name}\nEmail: ${email}`);
});
