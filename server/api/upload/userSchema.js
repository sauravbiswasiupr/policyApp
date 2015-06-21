"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var user;

var userSchema = new Schema({
  name: String,
  filename: String,
  question: String,
  tokens: [String],
  section: String,
  description: String
});

user = mongoose.model("User", userSchema);

exports.user = user;
