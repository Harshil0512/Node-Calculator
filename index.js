const express=require("express");
const bodyParser=require("body-parser");
const n=express();
n.use(bodyParser.urlencoded({extended:true}));

n.listen(3000,function(){
	console.log("Server is Started At Port 3000");
});
n.get("/",function(req,res){
	res.sendFile(__dirname+"/index.html");
});
n.post("/",function(req,res){
	var n1=Number(req.body.num1);
	var n2=Number(req.body.num2);
	var n=n1+n2;
	res.send("<h1>"+"Sum of "+n1+" And "+n2+" is "+n+"</h1>");
});