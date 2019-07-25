const express = require("express");
const bodyparser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyparser.urlencoded({extended:true}));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
  //console.log(req.body.crypto);
  let string1 = req.body.crypto;
  let string2 = req.body.fiat;
  let conversionString = string1+string2;
  let completedUrl = "https://apiv2.bitcoinaverage.com/indices/global/ticker/"+conversionString;
  console.log(completedUrl);
  request(completedUrl, function(error,response,body){
    console.log(body);
    var data = JSON.parse(body);
    var price = data.last;
    var currentDate= data.display_timestamp;

    res.write("<p>The current date is "+currentDate+"</p>");
    res.write("<h1>The current price of 1 "+string1+" is "+price+" "+string2);
    res.send();
  });

})

app.listen(3000,function(){
  console.log("le serveur est lancé!");
})
