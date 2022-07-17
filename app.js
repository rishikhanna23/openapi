const express=require("express");
const bodyparser=require("body-parser");
const ejs=require("ejs");
const mongoose=require("mongoose");

// git commands
// git add .
// git status
// git rm --cached -r .
// search git for github/gitignore
// git init
// git commit  -m   "Initial Commit"
//git log
// git remote add origin https://github.com/rishikhanna23/openapi.git
// git push -u  origin master
//ec2-user@3.83.80.122
//load ppk key
//  sudo su
//yum update -y
//yum  install httpd -y
//sudo yum install -y gcc-c++ make
//curl -sL https://rpm.nodesource.com/setup_14.x | sudo -E bash -
//sudo yum install -y nodejs
//node -v
//sudo iptables -t nat -A PREROUTING -p tcp --dport  80 -j REDIRECT  --to-ports 3000





//cd /etc/yum.repos.d
//sudo touch mongo-org-5.0.repo
//sudo su
//[mongodb-org-5.0]
//name=MongoDB Repository
//baseurl=https://repo.mongodb.org/yum/amazon/2/mongodb-org/5.0/x86_64/
//gpgcheck=1
//enabled=1
//gpgkey=https://www.mongodb.org/static/pgp/server-5.0.asc
// cat mongo-org-5.0.repo

//yum install -y mongodb-org
//cd /
//mkdir data
// cd data
//mkdir db
//cd /home/ec2-user/
//service mongod start
// nmp install mongoose ejs
//mongo

//db.createUser({user:"my_user", pwd:"my_pwd", roles:["dbOwner"]})
//exit
//node mongo
const app=express();

app.set('view-engine','ejs');

app.use(bodyparser.urlencoded({
  extended:true
}));

app.use(express.static("public"));

//mongoose.connect("mongodb://localhost:27017/openAPI",
//{useNewUrlParser:true}
//);

//mongoose.connect("mongodb://my_user:my_pwd@localhost:27017/openAPI",
//{useNewUrlParser:true}
//);

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


app.get("/openapi/:openApiParameter", function(req,res)
{
Entity.findOne({field1:req.params.openApiParameter},function(err,foundData)
{
  if(foundData)
  {
console.log(foundData);
res.send(foundData);
}

else {
res.send("No record found");

}
});


});



app.put("/openapi/:openApiParameter", function(req,res)
{console.log(req.params.openApiParameter);
  console.log(req.body.field1);
Entity.updateMany(
  {field1:req.params.openApiParameter},
  {field1:req.body.field1, field2:req.body.field2,
   field3:req.body.field3,field4:req.body.field4,
   field5:req.body.field5,
   field6:req.body.field6,
   field7:req.body.field7,
  field8:req.body.field8,
  field9:req.body.field9,
    field10:req.body.field10,
     field11:req.body.field11
  },
{overwrite:true},


  function(err){

   if(!err)
   {

   res.send("successfully updated");
   console.log(field1);

   }


else
  {
res.send("successfully not updated");

  }

  }




);
});



app.patch("/openapi/:openApiParameter", function(req,res)
{console.log(req.params.openApiParameter);
  console.log(req.body.field1);
Entity.updateOne(
  {field1:req.params.openApiParameter},
  {$set:req.body},



  function(err){

   if(!err)
   {

   res.send("successfully updated");
   //console.log(field1);

   }


else
  {
res.send("successfully not updated");

  }

  }




);
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
       field2 : req.body.field2,
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
