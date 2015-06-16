/**
 * Main application file
 */

'use strict';

var mongoose = require("mongoose");

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var bodyParser = require("body-parser");
var config = require('./config/environment');

// Setup server
var app = express();
mongoose.connect("mongodb://localhost/policyAppDb");
app.use(bodyParser());

var server = require('http').createServer(app);
require('./config/express')(app);
require('./routes')(app);

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;