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

};