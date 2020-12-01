const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// connects api routes to the server
var routes = require("./controllers/burgers_controller");

app.use(routes);

app.listen(PORT, function() {
    
    console.log("Server listening on: http://localhost:" + PORT);
  });