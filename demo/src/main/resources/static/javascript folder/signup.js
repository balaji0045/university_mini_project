var username=document.getElementById("username");
var password=document.getElementById("password");
var confirmpassword=document.getElementById("confirmpassword");
var email=document.getElementById('Email');
var submit=document.getElementById('submit');
var messageref=document.getElementById("message-ref");

var isUsernameValid = false;
var isPasswordValid = false;





username.addEventListener("input", () => {
  if (username.value.length >5) {
    username.style.cssText =
    "border-color: #34bd34; background-color: #c2ffc2";
    isUsernameValid =true;
    
  }
  else{
    username.style.cssText="border-color: #fe2e2e; background-color: #ffc2c2"; 
    isUsernameValid=false;
  }
});
password.addEventListener('input',()=>{
  if (password.value.length >= 5) {
     password.style.cssText =
    "border-color: #34bd34; background-color: #c2ffc2";
    document.getElementById("passwordspan").innerHTML="password strength is good";
    isPasswordValid=true;
  
    
  }
  else{    
    password.style.cssText="border-color: #fe2e2e; background-color: #ffc2c2";
    document.getElementById("passwordspan").innerHTML="password strength is bad";
    isPasswordValid=false;
    
  
  }
});

//   for confirm  password 
confirmpassword.addEventListener('input',()=>{
     if (confirmpassword.value===password.value) 
     {
      confirmpassword.style.cssText =
      "border-color: #34bd34; background-color: #c2ffc2";
      document.getElementById("confirmpasswordspan").innerHTML="both passwrod is is same";
       }
       else
       {
        confirmpassword.style.cssText="border-color: #fe2e2e; background-color: #ffc2c2";
    document.getElementById("confirmpasswordspan").innerHTML="Both password is not matched";
    return false;
    
       }
       
      
});


