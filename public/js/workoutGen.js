$(document).ready(function () {
    var scheduleParams = {
        dow: "",
        muscleGroup: ""
    };

    var workouts = {
        abs: ["Sit-Ups","Reverse Crunches","Sitting Twists","High Crunches","Knee To Elbow Crunches","Plank"],
        arms: ["Barbell Curls","French Press SZ-Bar","Hammer Curls","Tricep Cable Extensions","Dumbbell Incline Curl","Dips"],
        back: ["Deadlifts","Bent Over Barbell Row","Lat Pull Down","Cable Row","Hyperextensions","Pullups"],
        chest:["Bench Press","Incline Dumbell Press","Decline Bench Press Barbell","Incline Dumbbell Flye","Fly with Cable","Pushups"],
        legs: ["Squats","Front Squats","Dumbbell Lunges Walking","Leg Presses","Leg Extension","Leg Curls","Calf Raises"],
        shoulders:["Military Press","Shoulder Press, on Machine","Lateral Raises","Front Raises","Shrugs"]
    }

    function upsertWorkout(workoutData) {
        $.post("/api/workoutgen", workoutData)
          .then(
            console.log('workout inserted')
          );
      }


    $("a").on("click", function () {
        if ($(this).attr("id") === "DOW") {
            scheduleParams.dow = $(this).attr("value");
            console.log(scheduleParams);
            $("#dowButton").text($(this).text());
        }
        else if ($(this).attr("id") === "muscleGroup") {
            scheduleParams.muscleGroup = $(this).text();
            console.log(scheduleParams);
            $("#mgButton").text($(this).text());
        }
    });
    
    $("#create-workout").on("click", function() {
        $("#validation-label").attr("hidden", true);
        if (scheduleParams.dow ===""){
            $("#validation-label").text("Please select a day of the week to workout");
            $("#validation-label").attr("hidden", false);
            return;
        }
        else if (scheduleParams.muscleGroup ===""){
            $("#validation-label").text("Please select a muscle group to workout");
            $("#validation-label").attr("hidden", false);
            return;
        };
        var day = scheduleParams.dow;
        var workout = "workouts." + scheduleParams.muscleGroup.toLowerCase();
        console.log(eval(workout).length);
        for (var i = 0; i < eval(workout).length; i++) {
            var newWorkout = {
                dow: day,
                workout: eval(workout)[i]
            }
            upsertWorkout(newWorkout);
}
    })
})