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
