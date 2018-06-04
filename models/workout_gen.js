module.exports = function(sequelize, DataTypes) {
  var workouts = sequelize.define("workouts", {
    // Giving the workouts model a day of the week of type INT and workout name of type STRING
    day_id: DataTypes.INTEGER,
    workout: DataTypes.STRING
  });

  workouts.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    workouts.belongsTo(models.schedule, {
      foreignKey: {
        name: 'day_id',
        allowNull: false
      }
    });
  };

  return workouts;
};
