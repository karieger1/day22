$(document).ready(function(){

	var imageList = new ImageCollection();

	var imageBuilder = _.template($("#image-template").html());

	$("#imageForm").submit(function(e) {
	        e.preventDefault();
	        console.log('poop');
	});

});