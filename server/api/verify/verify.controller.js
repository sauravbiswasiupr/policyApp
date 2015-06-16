'use strict';

var _ = require('lodash');
var natural = require("natural");

var tokenizer = new natural.WordTokenizer();

function createTokenHash(tokens) {
  var hash = {}
  for (var i = 0; i < tokens.length; i++) {
    hash[tokens[i]] = true;
  }
  
  return hash;
}

function verify(text, hash, length) {
  var tokenized = tokenizer.tokenize(text);
  var matched = 0;
  var idealLength = length;
  
  for (var i = 0; i < tokenized.length; i++) {
    if (hash[tokenized[i]] === true) {
      matched += 1;
      delete hash[tokenized[i]];
    }
  }
  
  if (matched/idealLength >= 0.5)
    return true;
  else
    return false;
}

// Get list of verifys
exports.index = function(req, res) {
  var tokens = req.body.form.tokens;
  var answer = req.body.form.answer;
  
  tokens = JSON.parse(tokens);
  var hash = createTokenHash(tokens);

  var result = verify(answer, hash, tokens.length);
  
  res.json({
    success: result
  });
};