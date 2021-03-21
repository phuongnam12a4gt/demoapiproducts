let express = require('express');
let app = express();
let bodyParser = require('body-parser')
const  port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
let routes = require('./api/routes.js') //importing route
routes(app)
app.listen(port);

console.log('RESTful API server started on: ' + port);