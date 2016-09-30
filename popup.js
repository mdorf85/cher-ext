console.log("Cherifying!");

var shareLinks = document.getElementsByClassName("share_action_link");

document.addEventListener("load", cherify, true);
document.addEventListener("scroll", cherify, true);
document.addEventListener("click", clickTrick, true);

window.scrollBy(0,2)

function cherify() {
	console.log("cherifying!");
    for (i = 0; i < shareLinks.length; i++) {
    	shareLinks[i].text = "Cher";
    	shareLinks[i].addEventListener("click", addCher);
    }
}

function clickTrick() {
	cherify();
};

function addCher() {
	var elem = document.createElement("img");
	elem.width = "485.008";
	elem.setAttribute("src", chooseACher());
	this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.appendChild(elem);
}

function chooseACher() {
	var i = Math.floor((Math.random() * 10));
	var imgSrcs = ["beadycher.jpg", "cluelesscher.png", "snlcher.jpg", "cherangel.jpg", "confidentcher.jpg", "oldcher.jpg",
"cherfro.jpg", "piratecher.jpg", "smcher.jpg", "tonguecher.jpg"];
	var imgURL = chrome.extension.getURL("images/" + imgSrcs[i]);
	return imgURL;
}
