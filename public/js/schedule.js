$(document).ready(function () {

    // Get runs a push to arrays, 

var panelDays = $('#panelDays');

    var day_id = [];

    //Get has to push values into array using AJAX calls
    var dayOfWeek = [];
    //Need to add code to push new days in array

 // Function for creating a new list row for authors
  function createDayButton() {
    console.log('Is running');
    var newButton = $("<button>");

    for (var i = 0; i < dayOfWeek.length; i++) {

    panelDays.prepend("<button class='dropdown btn-primary btn-lg btn-block'>" + dayOfWeek[i] + "</button><br>");
    newButton.attr("value", day_id[i]);

    }
  }

 function getDayButton() {
        $.get("/api/schedule", function(data) {
            console.log(data);
      for (var i = 0; i < data.length; i++) {
        day_id.push((data[i].day_id));
        dayOfWeek.push((data[i].dayOfWeek));
      }
    });
 }

getDayButton();
createDayButton();

});