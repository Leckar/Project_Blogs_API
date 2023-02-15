module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category', {
      id: { autoIncrement: true, allowNull: false, type: DataTypes.INTEGER, primaryKey: true },
      name: DataTypes.STRING,
    },{
      tableName: 'categories',
      underscored: true,
      timestamps: false
    }
  );
  return Category;
};