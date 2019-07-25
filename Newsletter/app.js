const express = require("express");
const bodyparser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/",function(req,res){
  var firstName = req.body.fName;
  var lastName = req.body.lName;
  var email = req.body.email;

  var data={
    members:[
      {
        email_address:email,
        status: "subscribed",
        merge_fields:{
          FNAME:firstName,
          LNAME:lastName
        }
      }
    ]
  }

  var jsonData = JSON.stringify(data);

  let listId = "";
  let mailChimpAPIKey = "";

  var options ={
    url: "https://us3.api.mailchimp.com/3.0/lists/listId",
    method: "POST",
    headers: {
      "Authorization": "emma mailchimpAPIKey"
    },
    body: jsonData
  };

  request(options, function(error,response,body){
    if(error){
      console.log(error);
      res.sendFile(__dirname + "/failure.html");
    }
    else{
      if(response.statusCode==200){
        res.sendFile(__dirname + "/success.html");
      }
      else
      {
        console.log(response.statusCode);
        console.log(response);
        res.sendFile(__dirname + "/failure.html");
      }
    }
  });
});

app.post("/failure", function(req,res){
  res.redirect("/");
});

app.listen(3000,function(){
  console.log("le serveur est lancé")
});
