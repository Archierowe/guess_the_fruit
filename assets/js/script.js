"use strict";
// New Game button
const btnNew = document.querySelector(".new");
const btnNew2 = document.querySelector(".new-1");

// About Modal (about the game - details for parents)
$("#opBtn").click(function () {
  $("#myModal").modal("show");
});
$("#clBtn").click(function () {
  $("#myModal").modal("hide");
});

// Start game modal
$(document).ready(function () {
  $("#startModal").modal("show");
});

// Animate CSS on start game modal close
$("#playNow").click(function (e) {
  $(".animate").toggleClass("animate-active");
});

// Animate css when new game button clicked
$("#newGame").click(function (e) {
  $(".animate").toggleClass("animate-active");
});

// Result window output
const resultMessage = function (message) {
  document.querySelector(".result").textContent = message;
};

// Modified code from Saeed Salam - video mute/unmute button - (https://codepen.io/saeedsalam/pen/WNerqrY)
// Mute button control showing mute and unmute funtions
$("#mute-button").click(function () {
  if ($("#myAudio").prop("muted")) {
    $("#myAudio").prop("muted", false);
    $(this).removeClass("fas fa-volume-mute");
    $(this).addClass("fas fa-volume-up");
  } else {
    $("#myAudio").prop("muted", true);
    $(this).removeClass("fas fa-volume-up");
    $(this).addClass("fas fa-volume-mute");
  }
});

// Modal WIN video
$("#winnerModal").on("shown.bs.modal", function () {
  $("#myAudio").prop("muted", true);
  $("#winVideo")[0].play();
});
$("#winnerModal").on("hidden.bs.modal", function () {
  $("#winVideo")[0].pause();
  $("#myAudio").prop("muted", false);
});

// Game logic and reset button
let fruits, result, highscore, score;

let reset = function (event, scoreToKeep) {
  fruits = [];
  result = document.querySelector(".result");
  score = 8;
  highscore = scoreToKeep ? scoreToKeep : 0;

  // 'Random' fruit generator
  document.querySelectorAll("input.items").forEach(function (el) {
    fruits.push(el.getAttribute("data-fruit"));
  });

  function getRandomFruit() {
    return fruits[
      Math.floor(
        Math.random() * (0 - (fruits.length - 1)) + (fruits.length - 1)
      )
    ];
  }
  function assignWinningFruit(fruit) {
    result.setAttribute("data-fruit", fruit);
  }
  assignWinningFruit(getRandomFruit());
  document.querySelector(".score").textContent = score;
  resultMessage("Select a fruit");
};
reset();

// Game parameters

document.querySelectorAll("input.items").forEach(function (fruit) {
  fruit.addEventListener("click", function () {
    // When the player wins
    if (
      fruit.getAttribute("data-fruit") === result.getAttribute("data-fruit")
    ) {
      resultMessage("");
      $("#\\winnerModal").modal("show");

      // The Highscore function below was inspired by studies from this page [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#the_event_listener_callback)
      // Adjusts highscore
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      } else {
        reset(null, highscore);
      }

      // Parent function info was inspired by code from these posts (https://stackoverflow.com/questions/10960162/javascript-call-parent-function)

      // if player guesses incorrectly
    } else if (
      fruit.getAttribute("data-fruit") !== result.getAttribute("data-fruit")
    ) {
      if (score > 1) {
        function parent() {
          function func1() {
            resultMessage("Try again");
            setTimeout(func2, 1000);
          }
          func1();
          function func2() {
            resultMessage("Select a fruit");
          }
        }
        parent();
        score--;
        document.querySelector(".score").textContent = score;

        // When the player loses
      } else if (
        fruit.getAttribute("data-fruit") !== result.getAttribute("data-fruit")
      ) {
        resultMessage("");
        document.querySelector(".score").textContent = 0;
        $("#\\losingModal").modal("show");

        if (score > highscore) {
          highscore = score;
          document.querySelector(".highscore").textContent = highscore;
        }
        reset();
      }
    }
  });
});

// Reset starting conditions
btnNew.addEventListener("click", reset);
btnNew2.addEventListener("click", reset);
