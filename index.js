var arr = [];
function signup(e) {
  event.preventDefault();
  console.log("inside")
  var user = {
    name: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: document.getElementById("pass").value,
   
  };
  arr.push(user);

  localStorage.setItem("user", JSON.stringify(arr));
  alert("SignUp Succesfully")
  window.location.href = "./signIn.html";
}



var arr = JSON.parse(localStorage.getItem("user")) || [];
function login(e) {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("pass").value;
 
  
  

  var flag = false;
  for (var i = 0; i < arr.length; i++) {
    if ( arr[i].email === email && arr[i].password === password) {
      flag = true;
      break;
    }
  }
  if (flag) {
    alert("Login Successfull");
    window.location.href = "";
  } else {
    alert("Please Enter Correct Email and Password");
  }
}