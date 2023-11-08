document.addEventListener("DOMContentLoaded", function() {

    //Background Audio
    let bgAudio = new Audio ("../assets/backgroundMusic.mp3")
    bgAudio.play();

    //Play Button Audio
    let audio = new Audio ("../assets/click.mp3");

    var playBtn = document.getElementById("play_btn");
    playBtn.addEventListener("click", function() {
    audio.play(); // Play the audio when the button is clicked
      
        // Add an event listener to wait for the audio to finish playing
        audio.addEventListener("ended", function() {
            location.href = "../Sign Up Page/SignUp.html";
        });// Then, navigate to the next page
});

});

