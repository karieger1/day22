
var ImageCollection = Backbone.Collection.extend ({
	model: ImageModel,
	
	url: "http://tiny-pizza-server.herokuapp.com/collections/TacoTown2",
	idAtrribute: "_id"
});

