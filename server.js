var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8080;
var jsonParser = bodyParser.json();
var urlencodeParser = bodyParser.urlencoded({extended: false});
app.use(bodyParser.json({type: 'application/*+json'}));
app.use(bodyParser.raw({type: 'application/vnd.custom-type'}));
app.use(bodyParser.text({type: 'text/html'}));
require("./app/routing/api-routes.js") (app);
require("./app/routing/html-routes.js")(app);
app.listen(PORT,function() {
	console.log("listening " + PORT);
});