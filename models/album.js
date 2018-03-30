var mongoose = require('mongoose');
var Schema = mongoose.Schema; 
module.exports.Song = require('./song.js');


var AlbumSchema = new Schema ({
	name: String, 
	artistName: String,
	releaseDate: String,
	songs: [Song.Schema],
	genres: [ String]
});

var Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;
