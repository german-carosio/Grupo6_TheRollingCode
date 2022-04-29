const express = require('express')
const path = require("path")
const app = express();
const port = 3000;

app.use(express.static("public"));

app.listen(process.env.PORT || port, () => {
  console.log("Levantando un servidor con Express")
});

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/views/index.html")
})

app.get("/productDetail", (req,res)=>{
  res.sendFile(__dirname + "/views/productDetail.html")
})

app.get("/login", (req,res)=>{
  res.sendFile(__dirname + "/views/login.html")
})

app.get("/register", (req,res)=>{
  res.sendFile(__dirname + "/views/register.html")
})

app.get("/productCart", (req,res)=>{
  res.sendFile(__dirname + "/views/productCart.html")
})