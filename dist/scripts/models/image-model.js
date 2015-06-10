var image = Backbone.Model.extend ({
	defaults: {
		item: null,
	
	},
	// validate: function(attrs, options) {
	// 	//attr is the object that contains all attributes of this model
	// 	if(attr.item.length === 0) {
	// 		return "you must enter to do item";
	// 	} else {
	// 	return false; 
	// },
	urlRoot: "http://tiy-fee-rest.herokuapp.com/collections/here-you-go-aaron"

});