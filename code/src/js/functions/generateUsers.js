export const getUsers = async () => {
	try {
		const data = await (await fetch('https://randomuser.me/api/?results=25')).json();

		const userDetails = data.results;
		return userDetails;
	} catch (error) {
		console.log(error);
	}
};

export const filterUserByGender = (users, gender) => {
	return users.filter((user) => user.gender === gender);
};

export const createProfile = (users) => {
	let html = '';

	for (let user of users) {
		console.log(user);
		html += `
		<div class="user-profile">
		<img src="${user.picture.thumbnail}">
			<div class="name">  ${user.name.first} ${user.name.last}</div>
			<div class="location">  ${user.location.city} ${user.location.country}</div>
		</div>
		`;
	}

	return html;
};
