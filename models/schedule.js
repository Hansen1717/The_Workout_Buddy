module.exports = function(sequelize, DataTypes) {
    var schedule = sequelize.define("schedule", {
      // Giving the workouts model a day of the week of type INT and workout name of type STRING
      day_id: DataTypes.INTEGER,
      day_of_week: DataTypes.STRING
    });
  
    return schedule;
  };
  