var express = require('express');
var app = express();
	db = require('./models');
	bodyParser = require('body-parser'),
    controllers = require('./controllers');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.get('/', function(req,res){
	//res.send('Server running!!!')
	// albumcontroller()
	res.sendFile('views/index.html', {root : __dirname});
});

app.get('/api', controllers.api.index); 

app.get('/api/albums', controllers.albums.index);

app.post('/api/albums', controllers.albums.create);

///LISTEN HERE
app.listen(3000);
