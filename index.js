var image_num = -1;
var images = document.getElementsByClassName("slideshow");
var navigation = document.getElementsByClassName("slideshow-navigation");

function toggleView() {
	console.log("image_num: ", image_num);
	for (var i = 0; i < images.length; i++) {
		images[i].style.display = 'none';
	}
	images[image_num].style.display = 'block';
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
	toggleView();
	event.stopPropagation();

}

for (var i = 0; i < images.length; i++) {
	navigation[i].addEventListener('click', navigate);
}
