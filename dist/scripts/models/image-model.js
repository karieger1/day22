var ImageModel = Backbone.Model.extend ({
	defaults: {
		image: null,
		caption: null
	
	},
	urlRoot: "http://tiny-pizza-server.herokuapp.com/collections/TacoTown2"

});


// convert to module
// change var image to module.exports