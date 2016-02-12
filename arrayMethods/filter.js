var fruits = ['apple', 'banana', 'cantalope', 'grapes', 'jack fruit', 'lemon', 'lime'];

function beginsWithL(value){
	return value[0].toLowerCase() === 'l'
}

var l_fruits = fruits.filter(beginsWithL);

console.log(l_fruits)