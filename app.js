var express = require('express');
var path = require('path');

var indexRouter = require('./routes/index');
var catsRouter = require('./routes/cats');
var settingsRouter = require('./routes/settings');
var messagesRouter = require('./routes/messages');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/messages',messagesRouter);
app.use('/', indexRouter);
app.use('/cats', catsRouter);
app.use('/settings', settingsRouter);

module.exports = app;
