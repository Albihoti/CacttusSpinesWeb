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

function logout() {
  localStorage.removeItem("auth");
  window.location = "index.html";
}
