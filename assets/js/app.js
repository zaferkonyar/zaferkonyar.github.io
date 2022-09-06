
window.addEventListener('load', fg_load);

function fg_load() {
    document.getElementById('loading').style.display = 'none'
}

var button = document.getElementById("navbar-toggler");
var carousel = document.getElementById("home-carousel");

function clickEvent(){
	carousel.classList.toggle("d-none");
}

button.addEventListener("click", clickEvent);