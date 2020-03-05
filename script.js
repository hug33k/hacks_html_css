var step = 1;
var max_steps = step;

document.addEventListener('DOMContentLoaded', () => {
	hljs.initHighlightingOnLoad();
	const body = document.getElementsByTagName("body")[0];
	const btn_prev = document.getElementById("btn_prev");
	const btn_next = document.getElementById("btn_next");
	const slides = document.getElementsByClassName("slide");
	max_steps = slides.length;
	const indicator_currrent = document.getElementById("nav_indicator_current");
	const indicator_max = document.getElementById("nav_indicator_max");
	indicator_max.innerHTML = max_steps;

	const decrementStep = () => {step--;updateState();}
	const incrementStep = () => {step++;updateState();}
	const updateState = () => {
		if (step == 1)
			btn_prev.setAttribute("disabled", "");
		else if (btn_prev.hasAttribute("disabled"))
			btn_prev.removeAttribute("disabled", "");
		if (step == max_steps)
			btn_next.setAttribute("disabled", "");
		else if (btn_next.hasAttribute("disabled"))
			btn_next.removeAttribute("disabled", "");
		body.setAttribute("step", step);
		for (var i = 0; i < slides.length; i++)
			slides[i].classList.remove("active");
		slides[step-1].classList.add("active");
		indicator_currrent.innerHTML = step;
	}

	btn_prev.addEventListener("click", decrementStep);
	btn_next.addEventListener("click", incrementStep);
	updateState();

	document.onkeydown = (e) => {
		e = e || window.event;

		if (e.keyCode == '37' && step > 1) {
			decrementStep();
		}
		else if ((e.keyCode == '39' || e.keyCode == '13' || e.keyCode == '32') && step < max_steps) {
			incrementStep();
		}
	};
}, false);
