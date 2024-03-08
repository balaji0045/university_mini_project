// //  Banner Scroll Script Is Start
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 3000); // Change image every 2 seconds
// }
// //Banner scrool script is end.............................
// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }



//  this is for counting in About us Page......................


  
  const counters = document.querySelectorAll('.counter');
  const speed = 100; // Adjust this value for slower animation
  
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
    let count = +counter.innerText;
    
    const inc = target / speed;
    
    if (count < target) {
      count = Math.ceil(count + inc);
      counter.innerText = count <= target ? count : target; // Ensure count doesn't exceed target
      setTimeout(updateCount, 10); // Adjust this value for smoother animation
    } else {
      counter.innerText = target;
    }
  };
  
  updateCount();
});

function toggleOptions(id) {
  const options = document.getElementById(id + '-options');
  options.classList.toggle('show-options');
}
//  This is redirect to another page

// document.getElementById("redirect").addEventListener("click", function() {
//     var correctNumber = 123; // Change this to your correct number
    
//    // Prompt the user to enter a number
//     var userInput = prompt("Please enter the correct number:");
    
//     // Check if the entered number is correct
//     if (userInput !== null && parseInt(userInput) === correctNumber) {
//         // If correct, redirect to the personal page
//         console.log("Redirecting...");

//         window.location.href = "login.html"; // Change the URL to your personal page
//     } else {
//         // If incorrect or canceled, do something else (e.g., display an error message)
//         alert("Incorrect number entered. Please try again.");
//     }
// });