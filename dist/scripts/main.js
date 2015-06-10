$(document).ready(function(){

	var imageList = new ImageCollection();
		imageList.fetch();

	var imageBuilder = _.template($("#image-template").html());

	$("#imageForm").submit(function(e) {
	        e.preventDefault();
	        console.log("poop");
	        e.preventDefault();
	});

	var newImage = new image({
			imageUrl: $("#imageURL").val(),
			caption: $("#imageCaption").val()
		});

	if(newImage.isValid()) {
			imageList.add(newImage);
			newImage.save();
			$("#imageURL").val("");
			$("#imageCaption").val("");
		
		} else {

			console.log(newImage.validationError);
		}
			console.log(newImage);

		
	// });

});