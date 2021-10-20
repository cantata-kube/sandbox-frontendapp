const express = require('express');
const app = express();
const dir = __dirname + '/public'

app.listen(3000, function () {
    console.log('Listening at 3000');
});

app.use(express.static('public'))
  
app.get('/', function (req, res) {
    res.sendFile(dir + '/index.html');
});