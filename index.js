const express = require('express');
const app = express();
const loremIpsum = require('lorem-ipsum');





app.get('/lorem/:limit',function(req,res){
res.send(loremIpsum({count:req.params.limit}));
console.log(req);
});
app.listen(3000,function(){
	console.log("Herro, this server is running and listening on port 3000");
})