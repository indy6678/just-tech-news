const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection"); // import connection to Sequelize

const app = express();
const PORT = process.env.PORT || 3001;

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
// force true declares that the database connection must sync with the model definitions and association,
// dropping and recreating all database tables on startup
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}!`));
});
