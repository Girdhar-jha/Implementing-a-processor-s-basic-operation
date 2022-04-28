const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.get("/" , (req,res)=>{
  res.sendFile(__dirname+'/index.html');
})
app.post("/", (req,res)=>{
  var value1 = parseInt(req.body.number1);
  var value2 = parseInt(req.body.number2);
  var count =0;
  let binary1;
  let binary11=0;
  let binary = value1;
  while(binary>0)
  {
  binary1 = parseInt(binary%2);
  binary11+=parseInt(Math.pow(10,count)*binary1);
  count++;
    binary=parseInt(binary/2);

  }
  var operation = req.body.operation;
  console.log(value1,value2,operation);
  if(operation == '+')
  {
  let result = parseInt(value1)+parseInt(value2);
  res.write("<br><h3>The value obtained after operation is: "+result+"<br>"+binary11+"<br>")
}
else if(operation == '-')
{
let result = parseInt(value1)-parseInt(value2);
res.write("<br><h3>The value obtained after operation is: "+result+"<h3>"+"<form action = "+"__dirname/index.html"+" method ="+"post"+"> <input type="+"submit" +"value="+"calculate more"+"></form>"+"<form action = "+"__dirname/index.html"+" method ="+"post"+"> <input type="+"submit" +"value="+"calculate more"+"></form>")
}
else if(operation == '/')
{
let result = parseInt(value1)/parseInt(value2);
res.write("<br><h3>The value obtained after operation is: "+result+"</h3><br>")
}
else if(operation == '*')
{
let result = parseInt(value1)*parseInt(value2);
res.write("<br><h3>The value obtained after operation is: "+result+"<h3>"+"<form action = "+"__dirname/index.html"+" method ="+"post"+"> <input type="+"submit" +"value="+"calculate more"+"></form>");
}
res.write("<form action = "+"__dirname/index.html"+" method ="+"post"+"><input type="+"submit" +"value="+"calculate more"+"></form>");
res.send();

})
app.post("/eqn", (req,res)=>{
  var eqn = req.body.eqn;
  var img1 = "https://upload.wikimedia.org/wikipedia/commons/1/1a/Elephant_Diversity.jpg";
  if(eqn == "x.y+y'")
  res.send("<img src="+img1+">");
})
// alert("welcome to the site made by Girdhar Jha");
// alert("enter the no for the operation purpose");
// var a = parseInt(prompt("ENTER THE FIRST NUMBER"));
// var b = parseInt(prompt ("ENTER THE SECOND NUMBER"));
// var c,d=0,k,e=0,z=0;
// var i=0;
// var j=0;
// k=a;
// while(k>0)
// {
//   c = parseInt(k%2);
//   d+=c*(Math.pow(10,i));
//   k=parseInt(k/2);
//   i++;
// }
// k=b;
// while(k>0)
// {
//   c = parseInt(k%2);
//   e+=c*(Math.pow(10,j));
//   k=parseInt(k/2);
//   j++;
// }
// var result = parseInt(a+b);
// k = result;
// j=0;
// while(k>0)
// {
//   c = parseInt(k%2);
//   z+=c*(Math.pow(10,j));
//   k=parseInt(k/2);
//   j++;
// }
// alert(d+"+"+e+"="+z);
app.listen(3000, ()=>
{
  console.log("server started at port 3000");
})
