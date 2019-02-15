var timeleft = 30;

var timer = setInterval(function() {
  document.getElementById("progressBar").value = 30 - timeleft;
  timeleft -= 1;
  document.getElementById("countdown").innerHTML = timeleft + " seconds left";
  if (timeleft <= 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "Finished";
  }
  if (timeleft <= 0) clearInterval(timer);
}, 1000);
