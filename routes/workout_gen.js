var db = require("../models");

module.exports = function(app) {

  app.post("/api/workoutgen", function(req, res) {
    db.workouts.create(req.body).then(function(dbWorkout) {
      res.json(dbWorkout);
    });
  });

  app.post("/api/schedulegen", function (req, res) {
    db.schedule.create(req.body).then(function(dbSchedule) {
      res.json(dbSchedule);
    })
  });

  app.delete("/api/scheddel/:id" ,function(req,res) {
    db.schedule.destroy({
      where: {day_id: req.params.id}
    })
    .then(function(dbSchedule) {
      res.json(dbSchedule);
    });
  });

  app.delete("/api/workoutdel/:id" ,function(req,res) {
    db.workouts.destroy({
      where: {day_id: req.params.id}
    })
    .then(function(dbSchedule) {
      res.json(dbSchedule);
    });
  });

};


