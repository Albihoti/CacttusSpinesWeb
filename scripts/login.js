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
