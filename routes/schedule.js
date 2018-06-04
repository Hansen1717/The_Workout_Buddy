var db = require("../models");

module.exports = function(app) {

  app.get("/api/schedule", function(req, res) {

    db.schedule.findAll({
    }).then(function(dbschedule) {
      res.json(dbschedule);
    });

  });

};