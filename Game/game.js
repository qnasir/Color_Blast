let score = 0; // Initialize the score
localStorage.clear()
localStorage.setItem('score',score); 

// Function to check collision between the ball and a bar
function isColliding(ball, bar) {
    const ballRect = ball.getBoundingClientRect();
    const barRect = bar.getBoundingClientRect();

    return (
        ballRect.right > barRect.left &&
        ballRect.left < barRect.right &&
        ballRect.bottom > barRect.top &&
        ballRect.top < barRect.bottom
    );
}

// Function to increase the score and update the displayed score
function increaseScore() {
    score++;
    document.getElementById('score_box').innerText =  score;
    localStorage.clear()
    localStorage.setItem('score',score);
}

// Bar Animation
function createBar() {
    const bar = document.createElement('div');
    bar.className = 'bar';
    document.getElementById('bars-container').appendChild(bar);

    let position = 0; // Start from the right side of the container
    const speed = 2; // Adjust the speed as needed

    const moveBar = () => {
        position -= speed;
        if (position < -1900) {
            // Remove the bar when it's out of the container
            document.getElementById('bars-container').removeChild(bar);
        } else {
            bar.style.transform = `translateX(${position}px)`;
            requestAnimationFrame(moveBar);
        }
    }

    requestAnimationFrame(moveBar);

    // Add a click event listener to change the color of this specific bar
    bar.addEventListener('click', () => {
        changeColor(bar);
    });
}

// Create a new bar every 2 seconds
setInterval(createBar, 2000);

const colors = ['red', 'blue', 'green']; // Define different colors

let currentColorIndex = 0;

function changeColor(bar) {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    bar.style.backgroundColor = colors[currentColorIndex];
}

// Ball Animation
document.addEventListener("DOMContentLoaded", function() {
    const ball = document.getElementById('ball');
    const windowHeight = window.innerHeight;
    const bounceRangeTop = 150; // Maximum distance from the top
    const bounceRangeBottom = 312; // Maximum distance from the bottom
    let positionY = bounceRangeTop; // Initial position, starting from the top
    let velocityY = 5.63; // Adjust the speed as needed
    const gravity = 0; // Adjust gravity as needed

    function changeColor() {
        // Generate a random index for colors
        const randomIndex = Math.floor(Math.random() * colors.length);
        ball.style.backgroundColor = colors[randomIndex];
    }

    function moveBall() {
        positionY += velocityY;
        velocityY += gravity;

        // Bounce when reaching the top or bottom of the bounce range
        if (positionY > windowHeight - bounceRangeBottom || positionY < bounceRangeTop) {
            velocityY = -velocityY;
        }

        ball.style.top = positionY + 'px';

        // Check for collision with bars
        const bars = document.querySelectorAll('.bar');
        bars.forEach((bar) => {
            if (isColliding(ball, bar)) {
                if (ball.style.backgroundColor === bar.style.backgroundColor) {

                    var audio = new Audio("../assets/ball1.mp3");
                    audio.play();

                    increaseScore();
                }
                else{
                    var goa = new Audio("../assets/gameoverSound1.mp3");
                    goa.play();
                    goa.addEventListener("ended", function() {
                    window.location.href="../Gameover/gameover.html"
                    });
                    
                }
                changeColor();
            }
        });

        requestAnimationFrame(moveBall); // Ensure the animation continues
    }

    // Delay the start of the animation for ball and changeColor
    setTimeout(() => {
        moveBall();
    }, 9300); // 9300 milliseconds (9.3 seconds)

    // Start changeColor after 4 seconds
    setTimeout(() => {
        setInterval(changeColor, 2000); // 2000 milliseconds (2 seconds)
    }, 6500); // 6500 milliseconds (6.5 seconds)
});

//Background Audio
let bgAudio = new Audio ("../assets/backgroundMusic.mp3")
bgAudio.play();