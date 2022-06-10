// Feito com Maps \/

// function getAdmins(map) {
//     let admins = [];

//     for([key, value] of map) {
//         if(value === 'Admin') {
//             admins.push(key);
//         }
//     }

//     return admins;
// }

// const usuarios = new Map();

// usuarios.set('Luiz', 'Admin');
// usuarios.set('Jorge', 'User');
// usuarios.set('Natália', 'Admin');
// usuarios.set('Stephany', 'Admin');

// console.log(getAdmins(usuarios));

function uniqueElements(array) {
	let unique = new Set(array);
	return [...unique];
}

const arr = [30, 30, 40, 5, 223, 2049, 3034, 5];

console.log(uniqueElements(arr));