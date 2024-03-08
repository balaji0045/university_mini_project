let username=document.getElementById("name");
let age=document.getElementById("age");
let phonenumber=document.getElementById("phonenumber");
  
// 
username.addEventListener("input",()=>{
  let trimmedname=username.value.trim();
  if (trimmedname.length >2) {
      username.style.cssText =
      "border-color: #34bd34; background-color: #c2ffc2";
  }
  else{
      username.style.cssText="border-color: #fe2e2e; background-color: #ffc2c2";

  }
});
// 
age.addEventListener("click",()=>{
  age.style.cssText =
    "border-color: #34bd34; background-color: #c2ffc2";
});
// 
phonenumber.addEventListener("input",()=>{
  let trimmed = phonenumber.value.trim(); 
  if (trimmed.length > 9) {
    
  phonenumber.style.cssText =
  "border-color: #34bd34; background-color: #c2ffc2";
    
  }
  else{
    phonenumber.style.cssText="border-color: #fe2e2e; background-color: #ffc2c2";
  }
});
//
function bookAppointment() {
    window.location.href = '/appoinment';
}
