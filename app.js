const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");
const https = require("https");
const { Console } = require("console");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
console.log(req.body);
var percentage = calculator();
console.log(percentage);
})


app.listen(3000,()=>{console.log("Server running at 3000")})

function calculator(){
    var result = Math.floor(Math.random() * 100)
    if (result < 50) {
        console.log("You are Not lucky!!");
        
    }
    else
        return result;
        
    
}