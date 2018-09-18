const path = require('path');
var express = require('express');
var app = express();
const publicPath = path.join(__dirname,'../Public');
const port = process.env.PORT || 3000;

app.use('/static', express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'Index.html'));
});

app.listen(port, () => {
  console.log('Server is up!');
  console.log(path.join(publicPath, 'Index.html'));
  console.log(port);
});
