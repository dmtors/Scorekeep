var sharksScore = 0;
var jetsScore = 0;
var sharksBall = true;
var pointsToWin;
var isGameOver = true;
var setScore = function (team, score) {
  if (score < 10) {
    displayScore = "0" + score;
    } else {
    displayScore = score;
    }
  if (team == sharks) {
    $("#sharks-score").text(displayScore);
    } else {
    $("#jets-score").text(displayScore);
  }
}

$(document).ready(function() {
  setPointsToWin();
});

var setPointsToWin = function() {
  $("#choose").click(function() {
    do {
      pointsToWin = prompt("What is the winning score? (Positive whole numbers only)");

      if (pointsToWin == null) {
        return;
      }
      else {
        $("#sharks-score").text('00');
        $("#jets-score").text('00');
        $(".score").removeClass("win");
        $(".score").removeClass("lose");
        $(".score").addClass("play");
        $("#sharks").removeClass("win");
        $("#left").removeClass("win");
        $("#jets").removeClass("win");
        $("#right").removeClass("win");
        $("#sharks").addClass("ball");
        $("#left").addClass("ball");
      }
    }
    while (pointsToWin <= 0 || pointsToWin % 1 != 0);
    $("#choose").html(pointsToWin);
    $("#choose").addClass("points-set");
    $(".score").addClass("play");
    $("#sharks").addClass("ball");
    $("#left").addClass("ball");

    document.onkeydown = checkKey;
      function checkKey(e) {
        e = e || window.event;
        if (sharksScore == pointsToWin) {
          return;
        }
        if (jetsScore == pointsToWin) {
          return;
        }
        if (e.keyCode == '37') {
            $("#sharks").addClass("ball");
            $("#left").addClass("ball");
            $("#jets").removeClass("ball");
            $("#right").removeClass("ball");
        }
        else if (e.keyCode == '39') {
            $("#jets").addClass("ball");
            $("#right").addClass("ball");
            $("#sharks").removeClass("ball");
            $("#left").removeClass("ball");
        }
        if (e.keyCode == '38') {
          if ($("#sharks").hasClass("ball")) {
            sharksScore += 1;
            setScore(sharks, sharksScore);
          }
          if ($("#jets").hasClass("ball")) {
            jetsScore += 1;
            setScore(jets, jetsScore);
          }
        }
        if (e.keyCode == '40') {
          if ($("#sharks").hasClass("ball") && sharksScore > 0) {
            sharksScore -= 1;
            setScore(sharks, sharksScore);
          }
          if ($("#jets").hasClass("ball") && jetsScore > 0) {
            jetsScore -= 1;
            setScore(jets, jetsScore);
          }
        }
       if (sharksScore == pointsToWin) {
          $("#sharks-score").addClass("win");
          $("#jets-score").addClass("lose");
          $("#sharks").removeClass("ball");
          $("#left").removeClass("ball");
          $("#sharks").addClass("win");
          $("#left").addClass("win");
          $("#choose").html('Set Winning Score');
          $("#choose").removeClass("points-set");
          $("#choose").addClass("btn-prim");
        }
        if (jetsScore == pointsToWin) {
          $("#jets-score").addClass("win");
          $("#sharks-score").addClass("lose");
          $("#jets").removeClass("ball");
          $("#right").removeClass("ball");
          $("#jets").addClass("win");
          $("#right").addClass("win");
          $("#choose").html('Set Winning Score');
          $("#choose").removeClass("points-set");
          $("#choose").addClass("btn-prim");
        }
      }
  });
};
