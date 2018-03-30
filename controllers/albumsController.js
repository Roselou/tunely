//HARD-CODED DATA

var db = require('../models');

//FUNCTIONS
function index(req, res){
 db.Album.find({}, function(err, foundAlbums){
 	if(err) {
 		console.log(err)
 	} 
 	res.json(foundAlbums);
  })
}

function create(req, res){
 // create an album based on request body and send it back as JSON
 db.Album.create(req.body, function(err, album){
 	if (err){
 		console.log('error', err);
 	}
 	res.json(album);
 }); 
}


function show(req, res){
// find one album by id and send it back as JSON
}

function destroy(req, res){
// find one album by id, delete it, and send it back as JSON

}


function update(req, res){
// find one album by id, update it based on request body,
  // and send it back as JSON
}

module.exports = {
	index: index, 
	create: create, 
	show: show, 
	destroy: destroy, 
	update: update
};



