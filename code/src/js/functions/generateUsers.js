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
		html += `
			<div class="card">
				<img class="card-img" src="${user.picture.thumbnail}" />
				<h2 class="card-title">${user.name.first} ${user.name.last}</h2>
				<p class="card-subtitle">${user.location.city}, ${user.location.country}</p>
            </div>`;
	}

	return html;
};
