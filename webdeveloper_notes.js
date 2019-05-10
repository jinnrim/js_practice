//advabced array

const array = [1, ,2, 10, 16];

const double = []
const newArray = array.forEach ((num) => {
	double.push(num*2);
})

console.log('forEach', double);
//you need to create another array const for the new array to be pushed.
//forEach there is no limit in the action/function. 
//but does not neccessarily update the array unless user pushes 

//map, filter, reduce 

const mapArray = array.map((num) =>{
	return num*2;
})l=;
console.log('map', mapArray);

//map - loop over each numbers in the array and add to te new array
// have the restriction with "return" and restore back into the array. 

/*Arrow Function 
when there is only one parameter,following bottom is short version
*/

const mapArray = array.map(num => num*2);

//filter 
const filterArray - array.filter(num => {
	return num > 5
})

const filterArray = array.filter(num => num > 5);

//reduce
const reduceArray