const express = require('express');
const app = express();
const dir = __dirname + '/public'

app.listen(80, function () {
    console.log('Listening at 80');
});

app.use(express.static('public'))
  
app.get('/', function (req, res) {
    res.sendFile(dir + '/index.html');
});