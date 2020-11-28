export const addUserToDOM = (htmlSting, className) => {
	const el = document.createElement('div');
	el.classList.add(`wrapper`);
	el.classList.add(`wrapper-${className}`);

	el.innerHTML = htmlSting;

	document.querySelector('body').appendChild(el);
};
