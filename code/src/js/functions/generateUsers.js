export const getUsers = async () => {
	try {
		const data = await (await fetch('https://randomuser.me/api/?results=100')).json();

		const userDetails = data.results;
		return userDetails;
	} catch (error) {
		console.log(error);
	}
};

export const filterWomen = (users) => {
	return users.filter((user) => user.gender === 'female');
};

export const createProfile = (users) => {
	let htmlString = '';
	const el = document.createElement('div');
	el.classList.add('wrapper');
	// 	.map(
	// 		(user) =>
	// 			`
	// 		<div class="card">
	// 			<img class="card-img" src="${user.picture.thumbnail}" />
	// 			<h2 class="card-title">${user.name.first} ${user.name.last}</h2>
	// 			<p class="card-subtitle">${user.location.city}, ${user.location.country}</p>
	//         </div>
	// 		`
	// 	)
	// 	.join(' ');

	let html = '';

	for (let user of users) {
		// console.log(user);
		htmlString += `
		<div class="user-profile">
			<div class="name"> My name is ${user.name.first} ${user.name.last}</div>
		</div>
		`;
	}
	el.innerHTML = html;
	document.querySelector('body').appendChild(el);
};
