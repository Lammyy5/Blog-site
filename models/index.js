const User = require('./User');

User.hasMany(Post, {
	foreignKey: 'user_id', // Set up the foreign key relationship
})

Post.belongsTo(User, {
	foreignKey: 'user_id', // Set up the foreign key relationship
})

module.exports = { User };
