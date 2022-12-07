function register() {
  let username = document.getElementById("exampleInputUsernameR").value;
  let email = document.getElementById("exampleInputEmail1R").value;
  let password = document.getElementById("exampleInputPassword1R").value;
  let info = document.getElementById("information");

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    username: username,
    email: email,
    password: password,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:8080/rest/perdoruesi/register", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      if (result.message == true) {
        localStorage.setItem("auth", JSON.stringify(result));
        window.location = "user.html";
      } else {
        info.innerHTML = "Account already exists!";
      }
    })
    .catch((error) => console.log("error", error));
}










function login() {
  const userName = document.getElementById("exampleInputEmail1").value;
  const password = document.getElementById("exampleInputPassword1").value;
  const info = document.getElementById("information");
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    username: userName,
    password: password,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:8080/rest/login", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      if (result.message == false) {
        info.innerHTML = "Wrong credentials, please try again!";
      } else {
        localStorage.setItem("auth", JSON.stringify(result));
        window.location = "user.html";
      }
    })
    .catch((error) => console.log("error", error));
}









function getProfile() {
  const username = document.getElementById("userName");
  const email = document.getElementById("email");

  const urlParams = new URLSearchParams(window, location.search);
  const object = window.localStorage.getItem("auth");
  const objekti = JSON.parse(object);
  console.log(object);

  const id = objekti.id;

  var requestOptions = {
    method: "GET",

    redirect: "follow",
  };

  fetch("http://localhost:8080/rest/userProfile/" + id, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      username.innerHTML = result.username;
      email.innerHTML = result.email;
    })
    .catch((error) => console.log("error", error));
}








function checkLoginBody() {
  const loginButon = document.getElementById("loginLink");
  const registerButon= document.getElementById('registerLink')
  const logoutButon = document.getElementById('logOutLink')
  const profileLink = document.getElementById('profileLink');
  if (window.localStorage.hasOwnProperty("auth")) {
    loginButon.style.display = "none";
    registerButon.style.display ="none";
    logoutButon.style.display = "inline";
    profileLink.style.display = "inline";
  }
}






function logout() {
  localStorage.removeItem("auth");
  window.location = "index.html";
}








function updateUser() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const urlParams = new URLSearchParams(window, location.search);

  const object = window.localStorage.getItem("auth");
  const objekti = JSON.parse(object);
  console.log(object);
  const id = objekti.id;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    username: username,
    email: email,
    password: password,
  });

  var requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:8080/rest/perdoruesi/update/" + id, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      if (result) {
        window.localStorage.setItem("auth", JSON.stringify(result));
        window.location = "user.html";
      }
    })
    .catch((error) => console.log("error", error));
}
