var gamepattern = [];
var userClickedPattern = [];
var random_colors = ["red", "blue", "green", "yellow"];
var gameStarted = false;
var level = 0;

function playSound(name) {
  var audio = new Audio(`./sounds/${name}.mp3`);
  audio.play().catch((err) => {
    console.warn("Audio play failed:", err);
  });
}

function animatePress(currentColour) {
  var activeButton = document.getElementById(currentColour);
  activeButton.classList.add("pressed");
  setTimeout(() => activeButton.classList.remove("pressed"), 100);
}

function nextsequence() {
  userClickedPattern = []; // Reset user input each level

  level++;
  document.querySelector("h1").textContent = "Level " + level;

  var randomnumber = Math.floor(Math.random() * 4);
  var random_chosen_color = random_colors[randomnumber];
  gamepattern.push(random_chosen_color);

  var button = document.getElementById(random_chosen_color);
  button.classList.add("flash");
  setTimeout(() => button.classList.remove("flash"), 200);

  playSound(random_chosen_color);
}

function startOver() {
  level = 0;
  gamepattern = [];
  gameStarted = false;
}

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamepattern[currentLevel]) {
    console.log("success");

    if (userClickedPattern.length === gamepattern.length) {
      setTimeout(() => {
        nextsequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    playSound("wrong");

    document.body.classList.add("game-over");
    setTimeout(() => {
      document.body.classList.remove("game-over");
    }, 200);

    document.querySelector("h1").textContent =
      "Game Over, Press Any Key to Restart";

    startOver();
  }
}

// Detect button clicks
var allButtons = document.querySelectorAll(".btn");
allButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
  });
});

// Start game on first keypress
document.addEventListener("keydown", function () {
  if (!gameStarted) {
    document.querySelector("h1").textContent = "Level " + level;
    nextsequence();
    gameStarted = true;
  }
});
