var ImageCollection = Backbone.Collection.extend ({
	model: image,
	//i know i'm supposed to have my own url here, but i don't know how 
	//to do this on tiny pizza server
	url: "http://tiy-fee-rest.herokuapp.com/collections/here-you-go-aaron",
	idAtrribute: "_id"
});