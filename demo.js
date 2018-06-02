#!/usr/bin/env node

var fs = require('fs')
var dirName = process.argv[2] 

fs.exists(dirName,function(exists){

if(exists){
console.log("error: dir exists")
process.exit(1)  
}

else{
fs.mkdirSync("./" + dirName) 
process.chdir("./" + dirName) 
fs.mkdirSync('css') 
fs.mkdirSync('js') 

fs.writeFileSync("./index.html", " <!DOCTYPE html>\n<head>\n<title>Hello</title>\n<link rel='stylesheet' href='css/style.css'>\n<script src='js/main.js'></script>\n</head>\n<body>\n<h1>Hi</h1>\n</body>")   //echo "" > index.html
fs.writeFileSync("./css/style.css", "h1{color: red;}")
fs.writeFileSync("./js/main.js", "var string = Hello World;\nalert(srting);")
console.log("success")
process.exit(0)  
}

})




