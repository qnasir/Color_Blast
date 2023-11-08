document.addEventListener("DOMContentLoaded", function () {

  //Background Audio
  let bgAudio = new Audio ("../assets/backgroundMusic.mp3")
  bgAudio.play();

  var playbtn = document.getElementById("play-again");
  var menubtn = document.getElementById("main-menu");
  var tweetLink = document.getElementById("tweet-link");

  playbtn.addEventListener("click", function() {
    var audio = new Audio("../assets/click.mp3");
    audio.play();
    audio.addEventListener("ended", function() {
      location.href = "../Game/game.html";
    });
  });

  menubtn.addEventListener("click", function() {
    var audio = new Audio("../assets/click.mp3");
    audio.play();
    audio.addEventListener("ended", function() {
      location.href = "../Homepage/homepage.html";
    });
  });

  // Handle the Tweet button click
  tweetLink.addEventListener("click", function () {
    // Set the score you want to share

    //trying 
    var audio = new Audio("../assets/click.mp3");
    audio.play();
    audio.addEventListener("ended", function() {
      
      // Create the tweet URL with the score
    var tweetText = encodeURIComponent(
      "I scored " +
        scoreBox +
        " points in Color Blast! Try to beat me! #ColorBlastGame"
    );
    var tweetURL = "https://twitter.com/intent/tweet?text=" + tweetText;

    // Open the tweet URL in a new window
    window.open(tweetURL, "_blank");
    });

    
  });
});

var scoreBox = localStorage.getItem("score");
console.log("score: ", scoreBox);
const final = document.getElementById("final-score");
final.innerText = scoreBox + "!";

// Giving Feedback
var result = document.getElementById("result");
if (0 <= scoreBox && scoreBox < 5) {
  result.innerText = "Poor";
} else if (5 <= scoreBox && scoreBox < 10) {
  result.innerText = "Good";
} else if (10 <= scoreBox && scoreBox < 15) {
  result.innerText = "Great";
} else if (20 <= scoreBox && scoreBox < 25) {
  result.innerText = "Excellent";
} else {
  result.innerText = "Brilliant";
}