var team1Score = 0;
var team2Score = 0;
var team1Ball = true;
var pointsToWin;
var isGameOver = true;
var setScore = function (team, score) {
  if (score < 10) {
    displayScore = "0" + score;
    } else {
    displayScore = score;
    }
  if (team == team1) {
    $("#team1-score").text(displayScore);
    } else {
    $("#team2-score").text(displayScore);
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
        $("#team1-score").text('00');
        $("#team2-score").text('00');
        $(".score").removeClass("win");
        $(".score").removeClass("lose");
        $(".score").addClass("play");
        $("#team1").removeClass("win");
        $("#left").removeClass("win");
        $("#team2").removeClass("win");
        $("#right").removeClass("win");
        $("#team1").addClass("ball");
        $("#left").addClass("ball");
      }
    }
    while (pointsToWin <= 0 || pointsToWin % 1 != 0);
    $("#choose").html(pointsToWin);
    $("#choose").addClass("points-set");
    $(".score").addClass("play");
    $("#team1").addClass("ball");
    $("#left").addClass("ball");

    document.onkeydown = checkKey;
      function checkKey(e) {
        e = e || window.event;
        if (team1Score == pointsToWin) {
          return;
        }
        if (team2Score == pointsToWin) {
          return;
        }
        if (e.keyCode == '37') {
            $("#team1").addClass("ball");
            $("#left").addClass("ball");
            $("#team2").removeClass("ball");
            $("#right").removeClass("ball");
        }
        else if (e.keyCode == '39') {
            $("#team2").addClass("ball");
            $("#right").addClass("ball");
            $("#team1").removeClass("ball");
            $("#left").removeClass("ball");
        }
        if (e.keyCode == '38') {
          if ($("#team1").hasClass("ball")) {
            team1Score += 1;
            setScore(team1, team1Score);
          }
          if ($("#team2").hasClass("ball")) {
            team2Score += 1;
            setScore(team2, team2Score);
          }
        }
        if (e.keyCode == '40') {
          if ($("#team1").hasClass("ball") && team1Score > 0) {
            team1Score -= 1;
            setScore(team1, team1Score);
          }
          if ($("#team2").hasClass("ball") && team2Score > 0) {
            team2Score -= 1;
            setScore(team2, team2Score);
          }
        }
       if (team1Score == pointsToWin) {
          $("#team1-score").addClass("win");
          $("#team2-score").addClass("lose");
          $("#team1").removeClass("ball");
          $("#left").removeClass("ball");
          $("#team1").addClass("win");
          $("#left").addClass("win");
          $("#choose").html('Set Winning Score');
          $("#choose").removeClass("points-set");
          $("#choose").addClass("btn-prim");
        }
        if (team2Score == pointsToWin) {
          $("#team2-score").addClass("win");
          $("#team1-score").addClass("lose");
          $("#team2").removeClass("ball");
          $("#right").removeClass("ball");
          $("#team2").addClass("win");
          $("#right").addClass("win");
          $("#choose").html('Set Winning Score');
          $("#choose").removeClass("points-set");
          $("#choose").addClass("btn-prim");
        }
      }
  });
};
