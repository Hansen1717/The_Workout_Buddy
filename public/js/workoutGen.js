$(document).ready(function () {
    var scheduleParams = {
        dow: "",
        muscleGroup: "",
        dayOfTheWeek: ""
    };

    var workouts = {
        abs: ["Sit-Ups", "Leg Raises, StandingCrunches", "Crunches", "Leg Raises, Lying", "Side Plank", "Plank"],
        arms: ["Biceps Curls With Barbell", "French Press (skullcrusher) SZ-bar", "Hammercurls", "Triceps Extensions on Cable", "Dumbbell Incline Curl", "Dips"],
        back: ["Deadlifts", "Bent Over Barbell Row", "Lat Pull Down (Straight Back)", "Rowing, T-bar", "Hyperextensions", "Pull-ups"],
        chest: ["Bench Press", "Incline Dumbbell Press", "Decline Bench Press Barbell", "Incline Dumbbell Flye", "Butterfly", "Push Ups"],
        legs: ["Squats", "Front Squats", "Dumbbell Lunges Walking", "Leg Presses (wide)", "Leg Extension", "Leg Curls (laying)", "Standing Calf Raises"],
        shoulders: ["Military Press", "Shoulder Press, on Machine", "Lateral Raises", "Shrugs, Dumbbells", "Front Raises", "Shrugs, Barbells"]
    }

    function insertWorkout(workoutData) {
        $.post("/api/workoutgen", workoutData)
            .then(
                console.log('workout inserted')
            );
    };

    function insertSchedule(scheduleData) {
        $.post("/api/schedulegen", scheduleData)
            .then(
                console.log("schedule inserted")
            );
    };

    function deleteBeforeInsert(dayId) {
        $.ajax({
            method: "DELETE",
            url: "/api/scheddel/" + dayId
        })
            .then(
                console.log("Workouts for dayId " + dayId + " have been deleted")
            )
    }

    function deleteWOBeforeInsert(dayId) {
        $.ajax({
            method: "DELETE",
            url: "/api/workoutdel/" + dayId
        })
            .then(
                console.log("Workouts for dayId " + dayId + " have been deleted")
            )
    }


    $("a").on("click", function () {
        if ($(this).attr("id") === "DOW") {
            scheduleParams.dow = $(this).attr("value");
            scheduleParams.dayOfTheWeek = $(this).text();
            console.log(scheduleParams);
            $("#dowButton").text($(this).text());
        }
        else if ($(this).attr("id") === "muscleGroup") {
            scheduleParams.muscleGroup = $(this).text();
            console.log(scheduleParams);
            $("#mgButton").text($(this).text());
        }
    });

    $("#create-workout").on("click", function () {
        $("#validation-label").attr("hidden", true);
        if (scheduleParams.dow === "") {
            $("#validation-label").text("Please select a day of the week to workout");
            $("#validation-label").attr("hidden", false);
            return;
        }
        else if (scheduleParams.muscleGroup === "") {
            $("#validation-label").text("Please select a muscle group to workout");
            $("#validation-label").attr("hidden", false);
            return;
        };
        var dayId = scheduleParams.dow;
        var day = scheduleParams.dayOfTheWeek;
        var workout = "workouts." + scheduleParams.muscleGroup.toLowerCase();
        var newScheduleDay = {
            day_id: dayId,
            day_of_week: day
        }
        deleteBeforeInsert(dayId)
        deleteWOBeforeInsert(dayId);
        console.log(newScheduleDay);
        insertSchedule(newScheduleDay);
        console.log(eval(workout).length);
        for (var i = 0; i < eval(workout).length; i++) {
            var newWorkout = {
                day_id: dayId,
                workout: eval(workout)[i]
            }
            insertWorkout(newWorkout);
        }
        scheduleParams.dow = "";
        scheduleParams.dayOfTheWeek = "";
        $("#dowButton").text("Select a Day of the Week");
        $("#mgButton").text("Choose A Muscle Group");

    })
})