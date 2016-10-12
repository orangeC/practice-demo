var Post = require ("./models/post")

module.exports = function(app){


// app.get ( "/",function (req,res){
// 	var page = "<html>" + "<body>" + "<h1>index.html</h1>" +"</body>" +"</html>"
// 	res.send(page)
// })

app.get ( "/",function (req,res){//读取所有
	var page = "<form action='/posts' method='post'>"+
	"<input type='text' name='title' />"+
	"<input type='submit' />"+
	"</form>"
	res.send(page)
})
app.get("/posts",function(req,res){
	Post.find().exec(function(err,posts){
		res.json({ posts:posts })
	})
})

app.get("/post/:id",function(req,res){
	Post.findOne({_id:req.params.id},function(err,doc){
		res.json({ post:doc })
	})
})


app.post ( "/posts/",function (req,res){
	// res.send("The Blog is "+ req.body.title)//req.body 
	console.log(req.body)
	var posts = new Post({
		title:req.body.title,
		category:req.body.category,
		content:req.body.content
	})
	posts.save(function(err){
		if(err)console.log(err)
		console.log("OK 了!")
	})
	res.json({message:"success!"})
	// res.redirect("/posts")//重定向选择网址
})


app.put ( "/posts/:id",function (req,res){
	Post.findOne({_id:req.params.id},function(err,doc){
		if(err)console.log(err)
			for(prop in req.body){
				doc[prop] = req.body[prop]
			}
		doc.save(function(err){
			if(err)console.log(err)
				res.json({ message:"ooookkkk!" })
		})
	})
	
})


app.delete ( "/posts/:id",function (req,res){
	Post.findOne({_id:req.params.id},function(err,doc){
		if(err)console.log(err)
		doc.remove(function(err){
			if(err)console.log(err)
				res.json({ message:"ooookkkk!" })
		})
	})
})


app.get ( "/posts/:id",function (req,res){
	res.send("GET / posts /:id")
	console.log("GET / posts /:id")
})




app.get ( "/about",function (req,res){
	var page = "<html>" + "<body>" + "<h1>about.html</h1>" +"</body>" +"</html>"
	res.send(page)
})

// app.get ( "/:name",function (req,res){
// 	var username = req.params.name
// 	var page = "<html>" + "<body>" + "<h1>你好" +username+ "，欢迎进入！</h1>" +"</body>" +"</html>"
// 	res.send(page)
// })


// app.post ( "/:name",function (req,res){
// 	res.send( "a POST " )
// })

}