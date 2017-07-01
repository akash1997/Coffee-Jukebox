var express = require('express');
var app = express();
var root = process.cwd();

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

app.get('/scripts/:resoursename', function (req, res) {
	var name = req.params.resourcename;
	var loc = "/scripts/"+name;
    res.sendFile(loc, {root});
});

app.get('/stylesheets/:resoursename', function (req, res) {
	var name = req.params.resourcename;
	var loc = "/stylesheets/"+name;
    res.sendFile(loc, {root});
});

app.get('/images/:resoursename', function (req, res) {
	var name = req.params.resourcename;
	var loc = "/images/"+name;
    res.sendFile(loc, {root});
});

app.get('/songs/:name', function (req, res) {
	var name = req.params.name;
	var loc = "/songs/"+name;
    res.sendFile(loc, {root});
});

app.listen(8080, function () {
  console.log('Coffee-Jukebox is running!');
});