var db = require("../models");

module.exports = function(app) {

  app.post("/api/workoutgen", function(req, res) {
    db.workouts.create(req.body).then(function(dbWorkout) {
      res.json(dbWorkout);
    });
  });

};
