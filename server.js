var express = require('express');
var app = express();
	db = require('./models');
var controllers = require('./controllers');

app.use(express.static('public'));

app.get('/api', controllers.api.index); 

app.get('/', function(req,res){
	//res.send('Server running!!!')
	res.sendFile('views/index.html', {root : __dirname});
});


///LISTEN HERE
app.listen(3000);
