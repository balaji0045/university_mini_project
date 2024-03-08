let name=document.getElementById("name");
let email=document.getElementById("email");
let mobilenumber=document.getElementById("mobilenumber");




 // JavaScript to remove default text when user focuses on the textarea
 document.addEventListener('DOMContentLoaded', function() {
  var textarea = document.querySelector('textarea.default-text');
  textarea.addEventListener('focus', function() {
    this.classList.remove('default-text');
    if (this.value === 'Enter your comments here...') {
      this.value = '';
    }
  });
  textarea.addEventListener('blur', function() {
    if (this.value === '') {
      this.classList.add('default-text');
      this.value = 'Enter your comments here...';
    }
  });
});


// 
name.addEventListener("input", () => {
  let trimmedValue1 = name.value.trim(); 
  if (trimmedValue1.length >2) {
    name.style.cssText =
    "border-color: #34bd34; background-color: #c2ffc2";
    
    
  }
  else{
    name.style.cssText="border-color: #fe2e2e; background-color: #ffc2c2"; 
    
  }
});



//
mobilenumber.addEventListener('input', () => {
  let trimmedValue = mobilenumber.value.trim(); 
  if (trimmedValue.length > 9) {
      mobilenumber.style.cssText = "border-color: #34bd34; background-color: #c2ffc2";
  } else {
      mobilenumber.style.cssText = "border-color: #fe2e2e; background-color: #ffc2c2";
  }
});
// 
email.addEventListener('click',()=>{
     email.style.cssText="border-color: #34bd34; background-color: #c2ffc2";

});
//  right click disable
// document.addEventListener('contextmenu', function(event) {
//   event.preventDefault(); // Prevent the default right-click menu
// });


function alertload(){
    alert("right Click disable on this Page....");
}
//

function contactus() {
    window.location.href = '/contactus';
}
