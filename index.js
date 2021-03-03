var image_num = -1;
var images;
var navigation;

function toggleView() {
	console.log("image_num: ", image_num);
	for (var i = 0; i < images.length; i++) {
		images[i].style.display = 'none';
	}
	images[image_num].style.display = 'block';
	console.log("toggleView complete");
}

function navigate(event) {
	var val = 0;
	for (var j = 0; j < images.length; j++) {
		var image = navigation[j];
		if(this.isSameNode(image)) {
			val = j;
		}
	}
	image_num = val;
	console.log(image_num);
	toggleView();
	event.stopPropagation();

}
window.addEventListener('DOMContentLoaded', function () {
	images = document.getElementsByClassName("slideshow");
	navigation = document.getElementsByClassName("slideshow-navigation");
	for (var i = 0; i < images.length; i++) {
		navigation[i].addEventListener('click', navigate);
		console.log("event listener added");
	}	
})
