var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//关闭同源策略，开放CORS
var cors = require("cors");
app.use(cors())


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/express-api")
//调用模块
var Post = require ("./models/post")

var routes = require ("./routes")

routes(app)

app.listen(3000,function(){
	console.log("running on port 3000...")
})