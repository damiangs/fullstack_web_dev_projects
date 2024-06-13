$(document).ready();

//colors array
let buttonColors = ["red", "blue", "green", "yellow"];

//defining pattern
let gamePattern = [];

//defining user click pattern
let userClickedPattern = [];

//defining game levels
let level = 0;

//create new pattern
const nextSequence = () => {
  //reset user clicked patter
  userClickedPattern = [];

  //increase level
  level++;
  $("#level-title").text("Level " + level);

  //random number between 0-3
  let randomNumber = Math.floor(Math.random() * 4);

  //using random number to choose random color from colors array
  let randomChosenColor = buttonColors[randomNumber];

  //add random color to game patter empy array
  gamePattern.push(randomChosenColor);

  //use jquery to select the button with the same id as randomChosenColor
  let $flashButton = $("#" + randomChosenColor);

  //flash animate button
  const flashAnimation = () => {
    $flashButton.fadeOut(300).fadeIn(300);

    sounds[randomChosenColor].play();
  };

  flashAnimation();
};

//detect buttons clicked
$(".btn").on("click", function () {
  let userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  //sound to button clicks
  const playSound = () => {
    sounds[userChosenColor].play();
  };

  playSound();

  //animate user clicks
  const animatePress = () => {
    $(`#${userChosenColor}`).addClass("pressed");

    setTimeout(() => {
      $(`#${userChosenColor}`).removeClass("pressed");
    }, 100);
  };

  animatePress();

  //check answers
  checkAnswer(userClickedPattern.length - 1);
});

// Sound map
const soundMap = {
  red: "./sounds/red.mp3",
  blue: "./sounds/blue.mp3",
  green: "./sounds/green.mp3",
  yellow: "./sounds/yellow.mp3",
};

// Preload sounds
function preloadSounds() {
  const sounds = {};
  for (const color in soundMap) {
    sounds[color] = new Audio(soundMap[color]);
  }
  return sounds;
}

const sounds = preloadSounds();

//game started
let gameStarted = false;

$(document).on("keydown", function () {
  if (!gameStarted) {
    nextSequence();
    gameStarted = true;
    $("h1").text("Level " + level);
  }
});

//check answers
const checkAnswer = (currentLevel) => {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    //console.log("success");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    const gameOver = () => {
      let wrongSound = new Audio("./sounds/wrong.mp3");
      wrongSound.play();

      $("h1").text("Game Over, Press Any Key to Restart");
      $("body").addClass("game-over");
      setTimeout(() => {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    };

    gameOver();
  }
};

//start over
const startOver = () => {
  level = 0;
  gamePattern = [];
  gameStarted = false;
};
