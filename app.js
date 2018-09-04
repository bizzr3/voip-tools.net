'use strict';
const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send('voip-tools.net domain is up and running.');
});

app.listen(8090);
