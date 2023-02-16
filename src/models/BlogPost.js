module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    'BlogPost', {
      id: { autoIncrement: true, allowNull: false, type: DataTypes.INTEGER, primaryKey: true },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: { defaultValue: DataTypes.NOW, type: DataTypes.DATE},
      updated: { defaultValue: DataTypes.NOW, type: DataTypes.DATE}
    },{
      tableName: 'blog_posts',
      underscored: true,
      timestamps: false
    }
  );
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
        { foreignKey: 'userId', as: 'users' });
    };
  return BlogPost;
};