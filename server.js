var webpack = require('webpack');
var config = require('./webpack.config');
var express = require('express');

var app = new (express)();
var port = 3000;

var compiler = webpack(config);

app.use('/dist', express.static(__dirname + '/dist'));
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/index.html')
});

app.get('/admin', function(req, res) {
  res.sendFile(__dirname + '/admin/index.html')
});

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
});
