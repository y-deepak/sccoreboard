let team1Score = 0;
let team2Score = 0;
let team1Name = "Team 1";
let team2Name = "Team 2";
let timer;

function addScore(teamNum, points) {
  if (teamNum === 1) {
    team1Score += points;
    document.getElementById("score1").innerHTML = team1Score;
  } else {
    team2Score += points;
    document.getElementById("score2").innerHTML = team2Score;
  }
}

function addCustomScore(teamNum) {
  let customPoints = prompt("Enter custom points:");
  customPoints = parseInt(customPoints);
  if (isNaN(customPoints)) {
    alert("Invalid input. Please enter a number.");
  } else if (customPoints < 0) {
    alert("Invalid input. Please enter a positive number.");
  } else {
    if (teamNum === 1) {
      team1Score += customPoints;
      document.getElementById("score1").innerHTML = team1Score;
    } else {
      team2Score += customPoints;
      document.getElementById("score2").innerHTML = team2Score;
    }
  }
}

function startTimer() {
  let startTime = new Date().getTime();
  timer = setInterval(function() {
    let now = new Date().getTime();
let elapsedTime = now - startTime;
let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
minutes = String(minutes).padStart(2, "0");
seconds = String(seconds).padStart(2, "0");
document.getElementById("timer").innerHTML = minutes + ":" + seconds;
}, 1000);
}

function stopTimer() {
clearInterval(timer);
}

function resetTimer() {
document.getElementById("timer").innerHTML = "00:00";
}

function setTeamNames() {
team1Name = document.getElementById("team1").value;
team2Name = document.getElementById("team2").value;
document.getElementById("team1name").innerHTML = team1Name;
document.getElementById("team2name").innerHTML = team2Name;
}
