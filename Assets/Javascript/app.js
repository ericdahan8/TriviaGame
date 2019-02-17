var time = 60;

var timer = setInterval(function() {
  document.getElementById("progressBar").value = 60 - time;
  time -= 1;
  document.getElementById("countdown").innerHTML = time + " seconds left";
  if (time <= 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "Finished";
  }
  if (time <= 0) {
    clearInterval(timer);
    $(".row").hide();
    $("#submit").hide();
    $("#results").show();
    $("#reset").show();

    $("#results").text("Time is up! " + "Results:  " + correct + "/9 Correct");
    $("#results2").text(incorrect + "/9 incorrect");
  }
}, 1000);

// if correct ischecked then correct ++

var correct = 0;
var incorrect = 0;
var unanswered = 0;
$(".results").hide();
$("#reset").hide();

//if statements indicating to fill the variable with correct or incorrect
$(".question1").click(function() {
  if ($("#correct1").is(":checked")) {
    correct++;
  } else {
    incorrect++;
  }
});

$(".question2").click(function() {
  if ($("#correct2").is(":checked")) {
    correct++;
  } else {
    incorrect++;
  }
});

$(".question3").click(function() {
  if ($("#correct3").is(":checked")) {
    correct++;
  } else {
    incorrect++;
  }
});

$(".question4").click(function() {
  if ($("#correct4").is(":checked")) {
    correct++;
  } else {
    incorrect++;
  }
});

$(".question5").click(function() {
  if ($("#correct5").is(":checked")) {
    correct++;
  } else {
    incorrect++;
  }
});

$(".question6").click(function() {
  if ($("#correct6").is(":checked")) {
    correct++;
  } else {
    incorrect++;
  }
});

$(".question7").click(function() {
  if ($("#correct7").is(":checked")) {
    correct++;
  } else {
    incorrect++;
  }
});

$(".question8").click(function() {
  if ($("#correct8").is(":checked")) {
    correct++;
  } else {
    incorrect++;
  }
});

$(".question9").click(function() {
  if ($("#correct9").is(":checked")) {
    correct++;
  } else {
    incorrect++;
  }

  console.log(correct);
});

$("#submit").on("click", function() {
  $(".row").hide();
  $("#submit").hide();
  $("#results").show();
  $("#results2").show();
  $("#reset").show();

  $("#results").text("Time is up! " + "Results:  " + correct + "/9 Correct");
  $("#results2").text(incorrect + "/9 incorrect");
});

//RESET FUNCTION
$("#reset").on("click", function() {
  clearInterval(timer);
  var correct = 0;
  var incorrect = 0;
  var unanswered = 0;

  $(".row").show();
  $("#reset").hide();
  $("#submit").show();
  $("#results").hide();
  $("#results2").hide();

  time = 60;

  timer = setInterval(function() {
    document.getElementById("progressBar").value = 60 - time;
    time -= 1;
    document.getElementById("countdown").innerHTML = time + " seconds left";
    if (time <= 0) {
      clearInterval(timer);
      document.getElementById("countdown").innerHTML = "Finished";
    }
    if (time <= 0) {
      clearInterval(timer);
      $(".row").hide();
      $("#submit").hide();
      $("#results").show();
      $("#reset").show();

      $("#results").text(
        "Time is up! " + "Results:  " + correct + "/9 Correct"
      );
      $("#results2").text(incorrect + "/9 incorrect");
    }
  }, 1000);
});
