var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tunely');



module.exports = {
	api: require('./apiController'),
	albums: require('./albumsController')

};