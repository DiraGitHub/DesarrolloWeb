
const path = require('path');
const express = require('express');

const server = express();
server.use(express.urlencoded({extended:false}));
server.use(express.json());
server.use(express.static(path.join(__dirname,"")));

server.get('/',(req,res)=>{
    res.redirect("./public/index.html");
});

const PORT = "8080";

server.listen(PORT,()=>{

});
