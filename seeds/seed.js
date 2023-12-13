
const seedUsers = require("./userData");
const seedPosts = require("./postData");


const sequelize = require("../config/connection");

// Function to seed all data by calling the three seed functions in sequence
const seedAll = async () => {

  await sequelize.sync({ force: true });
  /
  await seedUsers();
  await seedPosts();

  process.exit(0);
};
// Calling the seedAll function to seed the database
seedAll();
