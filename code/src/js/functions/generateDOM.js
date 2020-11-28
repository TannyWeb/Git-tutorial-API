export const addUserToDOM = (userString, className) => {
	const el = document.createElement('div');
	el.classList.add(`wrapper`);
	el.classList.add(`wrapper-${className}`);

	el.innerHTML = userString;
	document.querySelector('body').appendChild(el);
};
