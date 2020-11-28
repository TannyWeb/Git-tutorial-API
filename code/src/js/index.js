import '../scss/main.scss';
import { greeting } from './functions/menu';
import { getUsers, filterUserByGender, createProfile } from './functions/generateUsers';
import { addUserToDOM } from './functions/generateDOM';

console.log('index loaded');
// menu();
greeting();

const init = async () => {
	// grab users into a variable
	const users = await getUsers();

	// filter women by female gender
	const filteredWomen = filterUserByGender(users, 'female');
	// console.log(filteredWomen);

	// filter users by male gender
	const filteredMen = filterUserByGender(users, 'male');
	// console.log(filteredMen);

	// create a profile with the array of data
	const females = createProfile(filteredWomen);
	const males = createProfile(filteredMen);

	addUserToDOM(males, 'men');
	addUserToDOM(females, 'women');
};

init();
