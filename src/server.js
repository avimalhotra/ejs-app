const express=require("express");
const path=require("path");
const ejs=require("ejs");
const LRU = require('lru-cache');
ejs.cache =new LRU(100);  

const app=express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));

app.use(express.static(path.resolve(__dirname,'public')));

app.get("/",(req,res)=>{
    res.render('index',{ name:"EJS App", author:"Avi", user:{name:"aaa", id:212}});
});
app.get("/about",(req,res)=>{
    res.render('about',{name:"About", month:["jan","feb","mar"]});
});
app.get("/contact",(req,res)=>{
    res.render('contact',{name:"Contact"});
});

app.listen(3000,()=>{
    console.log("express server running on ", 3000)
});