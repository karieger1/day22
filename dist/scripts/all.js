(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
		// console.log(imageHTML);

		$("#imageAlbum").append(imageHTML);
	});


});

},{}]},{},[1]);
