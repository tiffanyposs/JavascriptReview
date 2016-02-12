var fruits = ['apple', 'banana', 'cantalope', 'grapes', 'jack fruit', 'lemon', 'lime'];

function areApples(fruit){
	return fruit.toLowerCase() === 'apple'
}

function areOranges(fruit){
	return fruit.toLowerCase() === 'orange'
}

var apples = fruits.some(areApples)
var oranges = fruits.some(areOranges)

console.log(apples, oranges)