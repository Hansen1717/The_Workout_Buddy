$(document).ready(function () {

  var panelDays = $('#panelDays');

  var day_id = [];

  var dayOfWeek = [];

  sessionStorage.setItem('workouts', '');

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
      var newButton = $("<a id='scheduled-day' href='/workouts'><button class='btn-primary btn-lg btn-block'>" + dayOfWeek[i] + "</button><br>");
      newButton.attr("value", day_id[i]);
      panelDays.prepend(newButton);

    };
}

  function getScheduledWorkouts(dayId) {
    $.get("/api/workouts/" + dayId, function (data) {
      for(var i = 0; i < data.length; i++) {
        if (i ===0) {
          sessionStorage.setItem('workouts', data[i].workout);
        }
        else {
          sessionStorage.setItem('workouts', sessionStorage.getItem('workouts') + '|' + data[i].workout) 
        }
      }
    });
    
  }

  getDayButton();
  $(document).on("click", "#scheduled-day", function() {
    var id = $(this).attr("value");
    console.log(id)
    getScheduledWorkouts(id);
  })
});