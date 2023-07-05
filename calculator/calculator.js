const express = require("Express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({extended: true}));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/index.html");
});


app.get("/bmicalculator", function(request, response) {
  response.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/", function(req, res) {

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("the answer is " + result)
});

app.post("/bmicalculator", function(req, res) {

  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var result = weight / (height * height);

  res.send("your BMI is " + result)
});


app.listen(3000, function(){
  console.log("server is running at port 3000");
});
