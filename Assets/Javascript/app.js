var timeleft = 30;

var timer = setInterval(function() {
  document.getElementById("progressBar").value = 30 - timeleft;
  timeleft -= 1;
  if (timeleft <= 0) clearInterval(timer);
}, 3000);

var timeleft = 30;
var timer = setInterval(function() {
  document.getElementById("countdown").innerHTML = timeleft + " seconds left";
  timeleft -= 1;
  if (timeleft <= 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "Finished";
  }
}, 3000);
