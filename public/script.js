$(document).ready(function () {
  $.getJSON('/assumptions', function (assumptions) {
    nextAssumption(assumptions, 0);
  });

  $("form").submit(function (e) {
    e.preventDefault();
    $.post("/assumptions", {assumption: $("#assumption").val()}, function () {
      console.log("Posted.");
    });
    this.reset();
  });

});

//Increment assumptions array and show next assumption
function nextAssumption(assumptions, index) {
  index = (index + 1) % assumptions.length;
  $(".current-assumption").fadeOut(1500, function (){
    setAssumption( assumptions[index], $(this) );

    $(this).fadeIn(1200).delay(6000);
    nextAssumption( assumptions, index );
  });
}

//Set assumption text from assumption objects
function setAssumption(assumption, element) {
  var d = new Date(assumption.date);
  element.children(".content").text(assumption.assumption);
  element.children(".date").text(formatDate( d ));
}

//Format the date
function formatDate( d ) {
  d = new Date();
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return months[d.getMonth()] + " " + d.getFullYear();
}


