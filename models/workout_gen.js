module.exports = function(sequelize, DataTypes) {
  var workouts = sequelize.define("workouts", {
    // Giving the workouts model a day of the week of type INT and workout name of type STRING
    day_id: DataTypes.INTEGER,
    workout: DataTypes.STRING
  });

  return workouts;

  var schedule = sequelize.define("schedule", {
    // Giving the workouts model a day of the week of type INT and workout name of type STRING
    day_id: DataTypes.INTEGER,
    day_of_week: DataTypes.STRING
  });

  return schedule;
};
