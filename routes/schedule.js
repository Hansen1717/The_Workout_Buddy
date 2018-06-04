var db = require("../models");

module.exports = function(app) {

  app.get("/api/schedule", function(req, res) {

    db.schedule.findAll({
      order: [
        ['day_id', 'DESC']
      ]
    }).then(function(dbschedule) {
      res.json(dbschedule);
    });

  });

  app.get("/api/workouts/:id", function(req, res) {

    db.workouts.findAll({
      where: {
        day_id: req.params.id
      },
      order: [
        ['id', 'DESC']
      ]
    }).then(function(dbschedule) {
      res.json(dbschedule);
    });

  });


};