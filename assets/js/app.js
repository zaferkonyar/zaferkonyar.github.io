var button = document.getElementById("navbar-toggler");
var carousel = document.getElementById("home-carousel");

function clickEvent(){
	carousel.classList.toggle("d-none");
}

button.addEventListener("click", clickEvent);