const express=require("express");
const bodyparser=require("body-parser");
const ejs=require("ejs");
const mongoose=require("mongoose");


const app=express();

app.set('view-engine','ejs');

app.use(bodyparser.urlencoded({
  extended:true
}));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB",
{useNewUrlParser:true}
);

const articleSchema={

title: String,
content: String

}

const Article= mongoose.model("Article", articleSchema);

app.get("/articles", function(req,res)
{
Article.find(function(err,foundData)
{
  if(!err)
  {
console.log(foundData);
res.send(foundData);
}

else {
res.send(err);

}
});


});



app.listen(3000, function()
{
console.log("Server started on port 3000");


})
