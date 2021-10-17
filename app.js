const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const soundBtn = document.querySelector('.cta');
let myAudio = document.querySelector('#audio');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

soundBtn.addEventListener('click', () => {
	myAudio.play();
});

function change()
{
    var elem = document.getElementById("bebe");
    if (elem.value=="My Special Everything") elem.value = "My one and only";
	else if (elem.value=="My one and only") elem.value = "My Future";
	else if (elem.value=="My Future") elem.value = "The love of my life";
	else if (elem.value=="The love of my life") elem.value = "My bebekwaaaaa";
    else elem.value = "My Special Everything";
}

