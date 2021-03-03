var image_num = -1;

function toggleBackView() {
	console.log("image_num: ", image_num);
	document.getElementsByClassName("post-front")[image_num].style.display = 'none';
	document.getElementsByClassName("post-back")[image_num].style.display = 'block';
}

function itemInfoRequest(event) {
	var val = 0;
	for (var j = 0; j < images.length; j++) {
		var image = images[j];
		if(this.isSameNode(image)) {
			val = j;
		}
	}
	image_num = val;
	toggleBackView();
	event.stopPropagation();

}

var images = document.getElementsByClassName("post-front");
for (var i = 0; i < images.length; i++) {
	images[i].addEventListener('click', itemInfoRequest);
}
