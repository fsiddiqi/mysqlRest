var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var routes = require('./routes/index');
var Tasks = require('./routes/Tasks');
var Articles = require('./routes/Articles');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Configure CORS
var corsOptions = {
  exposedHeaders: 'x-total-count'
}
app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(bodyParser.json({
  limit: '50mb'
}));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: false
}));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Add route to ngadmin in node_modules - we'll use it for the client app
app.use('/ngadmin', express.static(__dirname + '/node_modules/ng-admin/build/'));

app.use('/', routes);

/** Add API individual routes here */
app.use('/Tasks', Tasks);
app.use('/Articles', Articles);
// app.use('/stations', Stations);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;