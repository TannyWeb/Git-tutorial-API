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
	el.classList.add('main-wrapper');
	const name = document.createElement('div');
	name.classList.add('user-name');

	for (let user of users) {
		// console.log(user);
		htmlString += `
		<div class="user-profile">
			<div class="name"> My name is ${user.name.first} ${user.name.last}</div>
		</div>
		`;
	}

	// return htmlString;
	// el.appendChild(htmlString);
	el.append(htmlString);
	console.log(el);
};
