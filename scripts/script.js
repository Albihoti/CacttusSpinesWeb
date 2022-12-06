


function register(){

  let username = document.getElementById("exampleInputUsernameR").value;
  let email = document.getElementById("exampleInputEmail1R").value;
  let password = document.getElementById("exampleInputPassword1R").value;

  


 
     console.log("akjdkajlsjdjsa")

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "id":2323221,
  "username": username,
  "email": email,
  "password": password
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:8080/rest/perdoruesi/register", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}





function login(){
    const userName = document.getElementById("exampleInputEmail1").value
    const password = document.getElementById("exampleInputPassword1").value
    var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
  "username": userName,
  "password": password
  });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

fetch("http://localhost:8080/rest/login", requestOptions)
  .then(response => response.json())
  .then(result => 
    {
    
      if(result){
        localStorage.setItem("auth",JSON.stringify(result)) 
          
          window.location='user.html'
         
      }
      else {
        alert("Gabim kredencialet!!")
      }
    })
  .catch(error => console.log('error', error));
}








function getProfile(){

  const username = document.getElementById("userName");
  const email = document.getElementById("email");


  const urlParams = new URLSearchParams(window, location.search)
  const object = window.localStorage.getItem('auth')
  const objekti = JSON.parse(object)
  console.log(object)

const id = objekti.id;

var requestOptions = {
  method: 'GET',
 
  redirect: 'follow'
};

fetch("http://localhost:8080/rest/userProfile/"+id, requestOptions)
  .then(response => response.json())
  .then(result => {

 
    console.log(result)
    username.innerHTML = result.username;
    email.innerHTML = result.email;
  }
    )
  .catch(error => console.log('error', error));





}


function checkLogin(){
  if(window.localStorage.hasOwnProperty("auth")){
    window.location = "user.html"
  }
  else{
    window.location="#login"
  }
}

function logout(){
  localStorage.removeItem("auth")
  window.location ="index.html"
}

function checkLoginR(){
  if(!window.localStorage.hasOwnProperty("auth")){
    window.location = "register.html"
  }
  else{
    window.location = "#login"
  }
}