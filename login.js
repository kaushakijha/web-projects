const form = document.getElementById("card");
form.addEventListener("continue", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  alert(`login sucessful`);
});
