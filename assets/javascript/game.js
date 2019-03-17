$( document ).ready (function() {

  var Random = Math.floor(Math.random()*(120-19)) + 19;

  var num1 = Math.floor(Math.random()*(12-1)) + 1;
  var num2 = Math.floor(Math.random()*(12-1)) + 1;
  var num3 = Math.floor(Math.random()*(12-1)) + 1;
  var num4 = Math.floor(Math.random()*(12-1)) + 1;

  var total= 0;
  var wins= 0;
  var losses = 0;

  $(".numberToGet").html("<h2>Number to Get: " + Random );

  $("#red").on ("click", function() {
    total = total + num1;
    $(".totalScore").html("<h2>Your total score is: " + total);
    if (total === Random) {
      win();
    }
    else if (total > Random) {
      loss();
    }
  });

  $("#blue").on ("click", function() {
    total = total + num2;
    $(".totalScore").html("<h2>Your total score is: " + total);
    if (total === Random) {
      win();
    }
    else if (total > Random) {
      loss();
    }
  });

  $("#yellow").on ("click", function() {
    total = total + num3;
    $(".totalScore").html("<h2>Your total score is: " + total);
    if (total === Random) {
      win();
    }
    else if (total > Random) {
      loss();
    }
  });

  $("#green").on ("click", function() {
    total = total + num4;
    $(".totalScore").html("<h2>Your total score is: " + total);
    if (total === Random) {
      win();
    }
    else if (total > Random) {
      loss();
    }
  });

  function win() {
    alert("You won!");
    wins++;
    $(".wins").html("<h2>Wins: " + wins);
    newGame();
  }

  function loss() {
    alert ("You lose!");
    losses++;
    $(".losses").html("<h2>Losses: " + losses);
    newGame()
  }

  function newGame() {
    Random = Math.floor(Math.random()*(120-19)) + 19;
    $(".numberToGet").html("<h2>Number to Get: " + Random );
    num1 = Math.floor(Math.random()*(12-1)) + 1;
    num2 = Math.floor(Math.random()*(12-1)) + 1;
    num3 = Math.floor(Math.random()*(12-1)) + 1;
    num4 = Math.floor(Math.random()*(12-1)) + 1;
    total = 0;
    $(".totalScore").html("<h2>Your total score is: " + total);
  }


});
