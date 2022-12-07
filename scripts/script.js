function checkLoginBody() {
  const loginButon = document.getElementById("loginLink");
  const registerButon = document.getElementById("registerLink");
  const logoutButon = document.getElementById("logOutLink");
  const profileLink = document.getElementById("profileLink");
  if (window.localStorage.hasOwnProperty("auth")) {
    loginButon.style.display = "none";
    registerButon.style.display = "none";
    logoutButon.style.display = "inline";
    profileLink.style.display = "inline";
  }
}

function logout() {
  localStorage.removeItem("auth");
  window.location = "index.html";
}
