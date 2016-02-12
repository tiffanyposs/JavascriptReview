var fruits = ['fruits', 'are' ,'these'];

var fruitString = fruits.reduceRight(function(previous, current){
	return previous + ' ' + current
});

console.log(fruitString)