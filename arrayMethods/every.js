function noLimeFruits(element, index, apple){
	return element === 'lime'
}

var fruits = ['apple', 'banana', 'cantalope', 'grapes', 'jack fruit'];

var hasLimes = noLimeFruits(fruits)

console.log(hasLimes)