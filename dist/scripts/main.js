$(document).ready(function(){



	$("#plusButton").on("click", function(){
		$("#addImage").toggle();
	});
	$("#cancel").on("click", function() {
		$("#addImage").toggle();
	});



	var imageList = new ImageCollection();
		imageList.fetch();

	var imageBuilder = _.template($("#image-template").html());

	$("#addImage").on("submit", function(e) {
		e.preventDefault();
		console.log("image submitted");
	


	var newImage = new image({
		image: $('#imageURL').val(),
        caption: $('#imageCaption').val()
    });


	if(newImage.isValid()) {
		console.log("this is a valid image");
			imageList.add(newImage);
			newImage.save();
	}
	else {

		console.log('error');
		console.log("newImage.validationError");
		}

			console.log(newImage);
	});
		
	
	

	imageList.on("add", function(model) {
		var imageHTML = imageBuilder(model.attributes);
		console.log(imageHTML);

		$("#imageAlbum").append(imageHTML);
	});


});
