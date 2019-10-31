// dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var port = process.env.PORT || 3000;

var app = express();

// serves static content from the public directory
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

// override with POST
app.use(methodOverride('_method'));

// set handlebars as the view
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// import routes and give server access
var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

app.listen(port);