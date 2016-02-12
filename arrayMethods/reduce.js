var fruits = ['apple', 'banana', 'cantalope', 'grapes', 'jack fruit', 'lemon', 'lime'];

var fruitAmounts = [3, 5, 2, 3, 2, 4, 9]; 

var fruitString = fruits.reduce(function(previousVal, currentVal, currentIndex, array){
	return previousVal + ' ' + currentVal
})

var fruitTotal = fruitAmounts.reduce(function(previous, current){
	return previous + current
})

console.log(fruitString);
console.log(fruitTotal);