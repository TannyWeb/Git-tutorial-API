import '../scss/main.scss';
import { greeting } from './functions/menu';
import { getUsers, filterWomen, createProfile } from './functions/generateUsers';

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
	const filtered = filterWomen(users);
	console.log(filtered);
	// console.log(filterWomen());

	const cp = createProfile(filtered);
	// console.log(cp);
	// cp;
};

init();

// showWomenOnly(getUsers);
