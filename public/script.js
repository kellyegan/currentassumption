$(document).ready(function () {
  $.getJSON('/assumptions', function (assumptions) {
    $(".current-assumption").fadeOut(1);
    nextAssumption(assumptions, 0, $(".current-assumption"));
  });

  $("form").submit(function (e) {
    e.preventDefault();
    $.post("/assumptions", {assumption: $("#assumption").val()}, function () {
      console.log("Posted.");
    });
    this.reset();
  });

});

function nextAssumption(assumptions, index, container) {
  var currentAssumption = assumptions[index];
  setAssumption( currentAssumption, container );

  var wordCount = currentAssumption.content.split(" ").length;
  var readingTime = 500 + wordCount * 60 * 1000 / 180;

  container.fadeIn(1200).delay(readingTime);
  container.fadeOut(1500, function () {
    index = (index + 1) % assumptions.length;
    nextAssumption( assumptions, index, container );
  });
}

//Set assumption text from assumption objects
function setAssumption(assumption, element) {
  var d = new Date(assumption.date);
  element.children(".content").text(assumption.content);
  element.children(".date").text(formatDate( d ));
}

//Format the date
function formatDate( d ) {
  d = new Date();
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return months[d.getMonth()] + " " + d.getFullYear();
}


