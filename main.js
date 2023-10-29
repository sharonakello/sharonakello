var loginForm = document.querrySelector("#login-html");
window.location.href="login.html";
loginForm.addEventListener("Log in Here",function(e) {
  e.preventDefault();
})

function validateLogin() {
  var unameField = document.querySelector("#Uname");
  var pwdField = document.querySelector("#pwd");

  if (uname.value!="Admin"||pwdField.value="12345") {
    modal.style.display="block";
  }
  else if (uname.value=="Admin"||pwdField.value=="12345") {
   {
     alert("You are now logged in!");
  window.location.href="index.html.html";
  }
}
