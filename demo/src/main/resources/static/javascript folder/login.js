var username=document.getElementById("username");
var password=document.getElementById("password");


username.addEventListener("input", () => {
  if (username.value.length >2) {
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
  if (password.value.length >= 2 ) {
     password.style.cssText =
    "border-color: #34bd34; background-color: #c2ffc2";
    document.getElementById("passwordspan").innerHTML="password strength is good";
    isPasswordValid=true;
   }
   else if(password.value.length==""){
    password.style.cssText="border-color: #fe2e2e; background-color: #ffc2c2";
    document.getElementById("passwordspan").innerHTML="password strength is bad";
    
   }
  else{    
    password.style.cssText="border-color: #fe2e2e; background-color: #ffc2c2";
    document.getElementById("passwordspan").innerHTML="password strength is bad";
    isPasswordValid=false;
    
  
  }
});