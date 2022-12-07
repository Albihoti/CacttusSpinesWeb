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
