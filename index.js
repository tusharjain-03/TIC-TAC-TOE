/* Variables */
var player1;
var player2;
var started = false;
var i;
var flag = true;

$(".start-game").click(function() {

  if (!started) {
    i = 0;
    player1 = prompt("Enter your Name-:");
    player2 = prompt("Enter your Opponent's Name-:");
    if ((player1 === "" && player2 === "") || (player1 === null && player2 === null)) {
      player1 = "Player1";
      player2 = "Player2";
    }
    $("p").text(player1 + "'s" + " Turn " + ("(✔)"));
    started = true;
  }
});

$(".col button").click(function() {
  if (started && flag) {
    if (i % 2 === 0 && document.querySelector("." + $(this).attr("class")).innerHTML != "✔" && document.querySelector("." + $(this).attr("class")).innerHTML != "✖") {

      $(this).html("✔");
      var audio = new Audio('sounds/correct.mp3');
      audio.play();
      if (i >= 4) {
        checkAnswer();
      }

      i++;

      if (flag && i < 9) {
        setTimeout(function() {
          $("p").html(player2 + "'s" + " Turn " + ("(✖)"));
        }, 1250);
      }
    } else if (document.querySelector("." + $(this).attr("class")).innerHTML != "✔" && document.querySelector("." + $(this).attr("class")).innerHTML != "✖") {

      $(this).html("✖");
      var audio = new Audio('sounds/wrong.mp3');
      audio.play();
      if (i >= 5) {
        checkAnswer();
      }

      i++;

      if (flag) {
        setTimeout(function() {
          $("p").text(player1 + "'s" + " Turn " + ("(✔)"));
        }, 1250);
      }
    } else {
      alert("Invalid Move!!!");
    }
  }
});

function checkAnswer() {
  if ((document.querySelector(".button-0").innerHTML === "✔" && document.querySelector(".button-1").innerHTML === "✔" && document.querySelector(".button-2").innerHTML === "✔") || document.querySelector(".button-0").innerHTML === "✖" && document.querySelector(".button-1").innerHTML === "✖" && document.querySelector(".button-2").innerHTML === "✖") {
    flag = false;
      $(".button-0").css("color", "blue");
      $(".button-1").css("color", "blue");
      $(".button-2").css("color", "blue");
    checkWinner();

  } else if ((document.querySelector(".button-3").innerHTML === "✔" && document.querySelector(".button-4").innerHTML === "✔" && document.querySelector(".button-5").innerHTML === "✔") || (document.querySelector(".button-3").innerHTML === "✖" && document.querySelector(".button-4").innerHTML === "✖" && document.querySelector(".button-5").innerHTML === "✖")) {
    flag = false;
    $(".button-3").css("color", "blue");
    $(".button-4").css("color", "blue");
    $(".button-5").css("color", "blue");

    checkWinner();

  } else if ((document.querySelector(".button-6").innerHTML === "✔" && document.querySelector(".button-7").innerHTML === "✔" && document.querySelector(".button-8").innerHTML === "✔") || (document.querySelector(".button-6").innerHTML === "✖" && document.querySelector(".button-7").innerHTML === "✖" && document.querySelector(".button-8").innerHTML === "✖")) {
    flag = false;
    $(".button-6").css("color", "blue");
    $(".button-7").css("color", "blue");
    $(".button-8").css("color", "blue");

    checkWinner();

  } else if ((document.querySelector(".button-0").innerHTML === "✔" && document.querySelector(".button-4").innerHTML === "✔" && document.querySelector(".button-8").innerHTML === "✔") || (document.querySelector(".button-0").innerHTML === "✖" && document.querySelector(".button-4").innerHTML === "✖" && document.querySelector(".button-8").innerHTML === "✖")) {
    flag = false;
    $(".button-0").css("color", "blue");
    $(".button-4").css("color", "blue");
    $(".button-8").css("color", "blue");

    checkWinner();

  } else if ((document.querySelector(".button-0").innerHTML === "✔" && document.querySelector(".button-3").innerHTML === "✔" && document.querySelector(".button-6").innerHTML === "✔") || (document.querySelector(".button-0").innerHTML === "✖" && document.querySelector(".button-3").innerHTML === "✖" && document.querySelector(".button-6").innerHTML === "✖")) {
    flag = false;
    $(".button-0").css("color", "blue");
    $(".button-3").css("color", "blue");
    $(".button-6").css("color", "blue");

    checkWinner();

  } else if ((document.querySelector(".button-1").innerHTML === "✔" && document.querySelector(".button-4").innerHTML === "✔" && document.querySelector(".button-7").innerHTML === "✔") || (document.querySelector(".button-1").innerHTML === "✖" && document.querySelector(".button-4").innerHTML === "✖" && document.querySelector(".button-7").innerHTML === "✖")) {
    flag = false;
    $(".button-1").css("color", "blue");
    $(".button-4").css("color", "blue");
    $(".button-7").css("color", "blue");

    checkWinner();

  } else if ((document.querySelector(".button-2").innerHTML === "✔" && document.querySelector(".button-5").innerHTML === "✔" && document.querySelector(".button-8").innerHTML === "✔") || (document.querySelector(".button-2").innerHTML === "✖" && document.querySelector(".button-5").innerHTML === "✖" && document.querySelector(".button-8").innerHTML === "✖")) {
    flag = false;
    $(".button-2").css("color", "blue");
    $(".button-5").css("color", "blue");
    $(".button-8").css("color", "blue");

    checkWinner();

  } else if ((document.querySelector(".button-2").innerHTML === "✔" && document.querySelector(".button-4").innerHTML === "✔" && document.querySelector(".button-6").innerHTML === "✔") || (document.querySelector(".button-2").innerHTML === "✖" && document.querySelector(".button-4").innerHTML === "✖" && document.querySelector(".button-6").innerHTML === "✖")) {
    flag = false;
    $(".button-2").css("color", "blue");
    $(".button-4").css("color", "blue");
    $(".button-6").css("color", "blue");

    checkWinner();

  }

  if (i === 8 && flag === true) {
    setTimeout(function (){
    $("p").text(" Draw!!! ");
    $("p").css("font-size","1.5rem");
    var audio=new Audio('sounds/draw.mp3');
    audio.play();
  },1000);
  }
}

function checkWinner() {
  if (i % 2 === 0) {
    $("p").text("🏅 " + player1 + " Wins!!! " + "🏅 ");
    $("p").css("font-size","1.5rem");
  } else {
    $("p").text( "🏅 " + player2 + " Wins!!! " + "🏅 ");
    $("p").css("font-size","1.5rem");
  }
}

$(".reset-game").click(function() {
  flag = true;
  started = false;

  $("p").text("Press Start to Enter Your Names");

  for (var i = 0; i < 9; i++) {
    document.querySelector(".button-" + i).innerHTML = "<img>";
    document.querySelector(".button-" + i).style.color = "black";
  }
});
