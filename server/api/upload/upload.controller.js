'use strict';

var _ = require('lodash');

var user = require("./userSchema").user;

// Get list of uploads
exports.index = function(req, res) {
  console.log("Req body upload: ", req.body.form);
  // logic for uploading pdf to mongodb database
  var form = req.body.form;

  var fileUploadPath = form.filename;
  console.log("File upload path: ", fileUploadPath);
  var tokens = form.tags;
  var question = form.question;
  var users = form.users;
  var section = form.section;

  var userArray = [];
  for (var i = 0; i < users.length; i++) {
    userArray.push({
      name: users[i],
      filename: fileUploadPath,
      question: question,
      tokens: tokens,
      section: section
    });
  }

  user.collection.insert(userArray, function(err, result) {
    if (err)
      throw err;

    console.log("Saved successfully");
    res.json({
      success: true
    });
  });
};