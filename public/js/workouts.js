$(document).ready(function () {
    var str = sessionStorage.getItem('workouts');
    var workouts = str.split('|');
    var workoutDescriptions = [];
    var workoutPanel = $("#panelWorkouts");

    function createWorkoutPanels(workoutName, descriptions, panelId) {
        var newWorkoutPanel = $('<div class="panel-group" id="accordion">');
        newWorkoutPanel = newWorkoutPanel.append($('<div class="panel">'));
        newWorkoutPanel = newWorkoutPanel.append($(
            '<div class="blue-heading text-center panel-heading">' +
                '<h1 class="panel-title header-text">' +
                    '<a data-toggle="collapse" data-parent="#accordion" href="#collapse' + panelId + '">' + workoutName + '</a>' +
                '</h1>' + 
            '</div>'
        ));
        newWorkoutPanel = newWorkoutPanel.append($(

            '<div id="collapse' + panelId + '" class="panel-collapse collapse">' +
            '<div class="panel-body">' +
                '<p>' + descriptions + '</p>' +
            '</div>' +
        '</div>'

        ))
        workoutPanel.prepend(newWorkoutPanel);
    };

    function callToPanelGeneration(response) {
        result = response.results[0].description;
        name =  response.results[0].name;
        id = response.results[0].id
        createWorkoutPanels(name, result, id);
    }

    for (var i=0; i<workouts.length; i++) {
        var queryURL = "https://wger.de/api/v2/exercise/?name=" + workouts[i] + " &language=2"
        $.ajax({
            type: "GET",
            url: queryURL,
            datatype: "json",
            success: callToPanelGeneration,
          });
    }

})