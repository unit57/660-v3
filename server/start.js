
var express = require('express');
var path = require('path');

var app = express();

var PORT = process.env.PORT || 3000;

/* This is how you server static files */
app.use('/public', express.static('./public'));

app.listen(PORT);

console.log('Server listening on port.. ' + PORT);

console.log('This ish works yay!!!');

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname + '/../public/index.html'))
});