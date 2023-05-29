const express = require("express");
const path = require("path");
var app = express();

app.use("/roll", function(req, res, next){
    console.log("Middleware ran!")
    req.nevergonnagiveup = "you";
    next();
});

app.use("/static", express.static("./"));

app.get("/", function(req, res){
    res.sendFile(path.join(process.cwd(), "./index.html"));
});

app.get("/plain", function(req, res){
    res.send("Hello World!");
});

app.get("/manualcontent", function(req, res){
    res.set("Content-Type", "text/html")
    res.send("<h1>Hello World!</h1>");
});

app.get("/roll", function(req, res){
    res.send(`Who am I never gonna give up? ${req.nevergonnagiveup}!`)
});

app.get("*", function(req, res){
    res.send("404 error not found!");
});

app.listen(8080);