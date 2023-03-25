const { connect } = require('./client');
const { setupInput } = require('./input.js');
const { IP, PORT} = require("./constants.js")

const connection = connect();

console.log('Connecting ...');

setupInput(connection);

module.exports = { connect };