function logindata() {
    var uname = document.querySelector('#uname').value;
    var password = document.querySelector('#password').value;
    var existusername = "admin";
    var existpassword = "1234";
  
    if (uname != "" && password != "") {
      if (uname == existusername && password == existpassword) {
        alert("Login successfully");
      } else {
        alert("Incorrect username or password");
      }
    } else {
      alert("Please enter the username and password");
    }
  
    window.location.reload()
  }