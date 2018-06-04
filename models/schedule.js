module.exports = function(sequelize, DataTypes) {
    var schedule = sequelize.define("schedule", {
      // Giving the workouts model a day of the week of type INT and workout name of type STRING
      day_id: DataTypes.INTEGER,
      day_of_week: DataTypes.STRING
    });

    schedule.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        schedule.hasMany(models.workouts, {
          onDelete: "cascade"
        });
      };
    
  
    return schedule;
  };
  