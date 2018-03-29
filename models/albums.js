var mongoose = require('mongoose');

var AlbumSchema = new Schema ({
	albumName: String, 
	artistName: String,
	releaseDate: String,
});
