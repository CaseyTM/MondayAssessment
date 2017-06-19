const express = require('express');
const app = express();
const loremIpsum = require('lorem-ipsum');





app.get('/lorem',function(req,res){
res.send(loremIpsum());
});
app.listen(3000,function(){
	console.log("Herro, this server is running and listening on port 3000");
})