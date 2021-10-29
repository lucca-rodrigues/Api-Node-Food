const variables = {
  Api: {
    port: process.env.PORT || 3000,
  },
  Database: {
    connection: process.env.connection || "mongodb://localhost/apifood",
  },
};

module.exports = variables;
