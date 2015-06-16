'use strict';

var _ = require('lodash');
var user = require("../upload/userSchema").user;

function findTasks(name, cb) {
  user.find({ 'name': name }, function(err, result) {
    if (err)
      throw err;
    
    if (result == null)
      throw new Error("No records exist for this user");
    
    for (var i = 0; i  < result.length; i++) {
      result[i].filename = "file:///" + result[i].filename;
    }
    cb(err, result);
  })
}

function getData() {
  var pdfs = [{
    id: 1,
    pdf: "War and Peace",
    url: "http://en.wikipedia.org/wiki/War_and_Peace"
  }, {
    id: 2,
    pdf: "The Master and Margarita",
    url: "http://en.wikipedia.org/wiki/The_Master_and_Margarita"
  }, {
    id: 3,
    pdf: "Metamorphosis",
    url: "http://en.wikipedia.org/wiki/The_Metamorphosis"
  }, {
    id: 4,
    pdf: "The Brothers Karamazov",
    url: "http://en.wikipedia.org/wiki/The_Brothers_Karamazov"
  }, {
    id: 5,
    pdf: "Mother",
    url: "https://reddiarypk.wordpress.com/2008/11/25/maxim-gorky-mother/"
  }];

  return pdfs;
}

// Get list of pdfs
exports.index = function(req, res) {
  //var data = getData();
  var name = "dip";
  findTasks(name, function(err, result) {
    res.json({
      pdfs: result
    });
  });
};