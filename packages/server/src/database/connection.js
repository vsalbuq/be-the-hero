const knex = require("knex");
const configuration = require("../../knexfile");

const configEnv =
  process.env.NODE_ENV === "test"
    ? configuration.test
    : configuration.development;

const connection = knex(configEnv);

module.exports = connection;
