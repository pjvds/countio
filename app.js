var application_root = __dirname,
    express = require("express"),
    path = require("path"),
    mongoose = require('mongoose');

var app = express();

// Configuration
var port = process.env.PORT || 3000;
var host = process.env.IP || 'localhost';

// Database
mongoose.connect('mongodb://countio:CountioDatabasePassword@linus.mongohq.com:10025/countio');

// Config
app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(application_root, "public")));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.get('/status', function (req, res) {
  res.send('count.io API is running');
});

// Launch server
app.listen(port, host);
console.log('Server running at http://'+host+':' + port);