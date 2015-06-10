$(document).ready(function(){



	$("#plusButton").click(function(){
		$("#imageForm").toggle();
	});



	var imageList = new ImageCollection();
		imageList.fetch();

	var imageBuilder = _.template($("#image-template").html());

	$("#imageForm").on("submit", function(e) {
		e.preventDefault();
		console.log("submitted");
	});


	var newImage = new image({
			pic: $('#imageURL').val(),
            caption: $('#imageCaption').val()
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
	

	imageList.on("add", function(model) {
		var imageHTML = image(model.attributes);

		$("image-template").append(imageHTML);
	});

});

		
	

	

