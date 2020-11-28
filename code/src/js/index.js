import '../scss/main.scss';
import { greeting } from './functions/menu';
import { getUsers, filterUserByGender, createProfile } from './functions/generateUsers';
import { addUserToDOM } from './functions/generateDOM';

console.log('index loaded');
// menu();
greeting();
getUsers();

let testObj = [
	{
		name: 'tanny',
		gender: 'male'
	},
	{
		name: 'tunny',
		gender: 'female'
	},
	{
		name: 'mum',
		gender: 'female'
	}
];

const init = async () => {
	// filterWomen(testObj);
	const users = await getUsers();
	// console.log(users);
	const filteredWomen = filterUserByGender(users, 'female');
	console.log(filteredWomen);
	const filteredMen = filterUserByGender(users, 'male');
	console.log(filteredMen);
	// console.log(filterWomen());

	const females = createProfile(filteredWomen);
	const males = createProfile(filteredMen);
	// console.log(cp);
	// cp;

	// add user to dom

	addUserToDOM(males, 'men');
	addUserToDOM(females, 'women');
};

init();

// showWomenOnly(getUsers);
