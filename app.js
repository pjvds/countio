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

// Configure schema's
var Schema = mongoose.Schema;

var Track = new Schema({  
  title: { type: String, required: true },  
  description: { type: String, required: true },
  modified: { type: Date, default: Date.now }
});

var TrackModel = mongoose.model('Track', Track);

// Config
app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(application_root, "public")));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  //app.use(express.session({secret: "HumansAreNotBrokenByDefault" }));
});

app.get('/api/v1/', function(req, res) {
  res.send('count.io API is running');
});

app.post('/api/v1/track', function (req, res) {
	var track;
	console.log("POST: ");
	console.log(req.body);

	track = new TrackModel({
    title: req.body.title,
    description: req.body.description,
    style: req.body.style,
  });
});

app.get('/api/v1/tracks', function(req, res) {
	return TrackModel.find(function(err, tracks) {
		if (!err) {
      return res.send(tracks);
    } else {
      return console.log(err);
    }
	});
});

app.get('/track', function (req, res) {
  res.send('count.io API is running');
});

// Launch server
app.listen(port, host);
console.log('Server running at http://'+host+':' + port);