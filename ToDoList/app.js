const express = require("express");
const bodyparser = require("body-parser");

const Intl = require("intl");

const app = express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));

app.set('view-engine', 'ejs');

var items = [];
var workItems = [];

app.get("/", function(req,res){
  let today = new Date();

  /*let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("fr-FR", options);*/

  const df = new Intl.DateTimeFormat('fr', {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'});
  var day = df.format(today);

  res.render("list.ejs", {listTitle: day, newListItems:items});
});

app.get("/work", function(req,res){

  res.render("list.ejs", {listTitle: "Travail", newListItems:workItems});

});

app.get("/about", function(req,res){

  res.render("about.ejs");

});

app.post("/", function(req,res){
  var item = req.body.newItem;

  if(req.body.list==="Travail"){
    workItems.push(item);
    res.redirect("/work");
  }
  else{
    items.push(item);
    res.redirect("/");
  }

});

app.listen(3000, function(){
  console.log("le serveur a démarré");
});
