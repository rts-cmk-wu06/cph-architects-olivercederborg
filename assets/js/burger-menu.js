const burgerToggle = document.querySelector("#burger-button");
const menu = document.querySelector("#menu");

const menuToggle = () => {
	if (menu.style.display == "block") {
		menu.style.display = "none";
	} else {
		menu.style.display = "block";
	}
};

const menuResize = () => {
	if (window.innerWidth < 769) {
		menu.style.display = "none";
	} else {
		menu.style.display = "block";
	}
};

burgerToggle.addEventListener("click", menuToggle);
window.addEventListener("resize", menuResize);
