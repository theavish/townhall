(function() {
  'use strict';
  
  var express = require('express');
  var root = __dirname + '/..';
  var app = express();
  var port = process.env.PORT || 1337;

  app.use('/', express.static(root + '/client'));

  app.listen(port, function() {
    console.log('running');
  });

})();
