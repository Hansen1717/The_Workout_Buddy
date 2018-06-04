$(document).ready(function () {

  var panelDays = $('#panelDays');

  var day_id = [];

  var dayOfWeek = [];

  function getDayButton() {
    $.get("/api/schedule", function (data) {
      console.log(data)
      for (var i = 0; i < data.length; i++) {
        day_id.push(data[i].day_id);
        dayOfWeek.push(data[i].day_of_week);
      }
      createDayButton();
    });
  }

  function createDayButton() {
    for (var i = 0; i < dayOfWeek.length; i++) {
      var newButton = $("<button class='btn-primary btn-lg btn-block'>" + dayOfWeek[i] + "</button><br>");
      newButton.attr("value", day_id[i]);
      panelDays.prepend(newButton);

    };
}

  getDayButton();
});