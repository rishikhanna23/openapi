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

mongoose.connect("mongodb://localhost:27017/openAPI",
{useNewUrlParser:true}
);

const openApiSchema={

field1: String,
field2: String,
field3: String,
field4: String,
field5: String,
field6: String,
field7: String,
field8: String,
field9: String,
field10: String,
field11: String

}

const Entity= mongoose.model("Entity", openApiSchema);

app.get("/openapi", function(req,res)
{
Entity.find(function(err,foundData)
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



app.post("/openapi", function(req,res)
{
console.log(req.body.field1);
console.log(req.body.field2);
console.log(req.body.field3);
console.log(req.body.field4);
console.log(req.body.field5);
console.log(req.body.field6);
console.log(req.body.field7);
console.log(req.body.field8);
console.log(req.body.field9);
console.log(req.body.field10);
console.log(req.body.field11);

const newEntity= new Entity(
  {

      field1 : req.body.field1,
       field2 : req.body.field12,
       field3 : req.body.field3,
       field4 : req.body.field4,
       field5 : req.body.field5,
       field6 : req.body.field6,
       field7 : req.body.field7,
       field8 : req.body.field8,
       field9 : req.body.field9,
       field10 : req.body.field10,
       field11 : req.body.field11



  }
);

newEntity.save();

});


app.delete("/openapi", function (req,res)
{

Entity.deleteMany(function (err){

  if(!err)
  {
console.log("successfully deleted all articles");
res.send("successfully deleted all articles");
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
