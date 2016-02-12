var fruits = ['apple', 'banana', 'cantalope', 'grapes', 'jack fruit', 'lemon', 'lime'];


var newFruits = fruits.map(function(fruit){
	return fruit.toUpperCase();
});

console.log(newFruits)