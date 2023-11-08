var signupForm = document.getElementById("signupForm");
var returnHomepageLink = document.getElementById("returnHomepage");
var submitBtn = document.getElementById("submit");

//Function to play click audio
function playClickAudio() {
  let formAudio = new Audio("../assets/click.mp3");
  formAudio.play();
  return formAudio; // Return the audio element to check when it ends
}

signupForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get form data
  var name = signupForm.querySelector('input[name="name"]').value;
  var password = signupForm.querySelector('input[name="password"]').value;

  // Create an object to store the form data
  var formData = {
    name: name,
    password: password,
  };

  // Store the form data in local storage
  localStorage.setItem("formData", JSON.stringify(formData));

  // Play the audio and then redirect
  let audio = new Audio("../assets/click.mp3");
  audio.play();
  audio.addEventListener("ended", function() {
    location.href = "../Gamepage/gamepage.html";
  });
});

returnHomepageLink.addEventListener("click", function () {
  // Play the audio and then redirect
  let audio = new Audio("../assets/click.mp3");
  audio.play();
  audio.addEventListener("ended", function() {
    location.href = "../Homepage/Homepage.html";
  });
});

submitBtn.addEventListener("click", function() {
  let audio = new Audio("../assets/click.mp3");
  audio.play();
});

// Add click audio for form inputs
var inputElements = signupForm.querySelectorAll("input");
inputElements.forEach(function (input) {
  input.addEventListener("click", playClickAudio);
});