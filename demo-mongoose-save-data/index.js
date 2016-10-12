var express = require("express")
var app = express()
var mongoose = require("mongoose")
var bodyParser = require("body-parser")
app.use(bodyParser.json());



mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/demo-data")
//调用模块
var Post = require ("./models/post")

var cors = require("cors");
app.use(cors())

// var data = {
//   title:"my title",
//   content:"my content"
// }
app.post("/posts",function(req,res){
	console.log(req.body)
	var posts = new Post({
		title:req.body.title,
		content:req.body.content
	})
	posts.save(function(err){
		if(err)console.log(err)
		console.log("OK 了!")
	})
	res.json({message:"success!"})

})

app.get("/posts",function(req,res){
	Post.find().exec(function(err,posts){
		res.json({ posts:posts })
	})
	console.log("有了！")
})

app.listen(5000,function(){
	console.log("跑起来～～")
})
