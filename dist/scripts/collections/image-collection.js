var ImageCollection = Backbone.Collection.extend ({
	model: image,
	
	url: "http://tiny-pizza-server.herokuapp.com/collections/TacoTown",
	idAtrribute: "_id"
});

//at top, add var Image = require("../models/imagemodel.js")