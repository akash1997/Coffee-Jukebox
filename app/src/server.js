var express = require('express');
var app = express();
var root = process.cwd();

app.get('/songs/:name', function (req, res) {
	var name = req.params.name;
	var loc = "/songs/"+name;
	console.log(loc);
    res.sendFile(loc, {root});
});

app.get('/', function (req, res) {
    res.sendFile('myown1.html', {root});
});

app.get('/songList', function (req, res) {
    res.sendFile('myown2.html', {root});
});

app.get('/adminlogin', function (req, res) {
    res.sendFile('login_page.html', {root});
});

app.get('/adminconsole', function (req, res) {
    res.sendFile('myown3.html', {root});
});

app.get('/songrequest', function (req, res) {
    res.sendFile('songRequest.html', {root});
});

app.get('/player', function (req, res) {
    res.sendFile('songPlay.html', {root});
});

app.get('/js.cookie.js', function (req, res) {
    res.sendFile('js.cookie.js', {root});
});

app.listen(8080, function () {
  console.log('Coffee-Jukebox app listening on port 8080!');
});