const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.set("view engine","ejs");    //syntex to use ejs
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
var items=[];    //way of declaring array
var day="";
var workitem=[];
app.get("/",function(req,res){
  var today= new Date();
  var option={
    weekday : "long",
    day: "numeric",
    month: "long"
  };
  day=today.toLocaleDateString("en-US",option);    //format of date will be acc. to this englis us language
  res.render("list",{listtitle: day , newitems: items});
});

app.post("/",function(req,res){
  item= req.body.nextitem;
  if(req.body.list==="work"){
    workitem.push(item);
    res.redirect("/work")
  }else
    items.push(item);
    res.redirect("/");
});

app.get("/work",function(req,res){
  res.render("list",{listtitle: "work" , newitems: workitem});
});

app.listen(3000,function(){
  console.log("{running at 3000}");
});
