console.log('this is the menus code');

// mobile menu

export function menu() {
	const body = document.querySelector('body');
	const mobileMenu = document.querySelector('.header__toggle');
	const header = document.querySelector('.header');
	const overlay = document.querySelector('.overlay');
	const fadeElems = document.querySelectorAll('.has-fade');

	mobileMenu.addEventListener('click', (e) => {
		console.log('its clicked');
		if (header.classList.contains('open')) {
			// Close Menu
			header.classList.remove('open');
			body.classList.remove('no-scroll');
			fadeElems.forEach((el) => {
				el.classList.remove('fade-in');
				el.classList.add('fade-out');
			});
		} else {
			// Open Menu
			header.classList.add('open');
			body.classList.add('no-scroll');
			fadeElems.forEach((el) => {
				el.classList.remove('fade-out');
				el.classList.add('fade-in');
			});
		}
	});
}
