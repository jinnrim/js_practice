/*Scope - variable access
Root scope - main page(not inside the function)

Even though there is a set variable in the route scope, 
If the variable is rewritten in the function, the variable is reset


var** 
effects function 
let** 
Allows scope to be changed only in the “if” statement 
-probably would use when the if variable/let needs be to change in the if statement and outside function should not be affected.


Const
Can not be updated 
Anything that shouldn’t be changed. 
*/




const name = "Jinny ";
const age = 16;


const obj = {
	[name]: 'hello',
	[1+2] : 'hihi'
}

// Template String 

const name = "sally";
const age = 34;
const pet = "horse";
${}

// use backticks for template strings.
const greetingBest = `Hello ${name}`

// Symbol
var sym1 = Symbol();
var sym2= Symbol('foo');

/*symbol is used because it is specific unique type 
Isn't used often 
*/

// Arrow Function
function add (a+b) {
	return a+b;
}

const add = (a, b) => a+b;

// 2
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

const whereAmI = (username, location) => {
  if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

// advanced functions

/*// closure - a function ran, the function exectued. It's never going to execute again but remembers the reference. 
Therefore the child scope always have the access to the parent scope */
const first = () => {
	const greet = 'Hi';
	const second = () => {
		aleart (greet);
	}
	return second;
}

const newFunc = first ();
newFunc();

//Currying - 
const multiply = (a,b) => a * b;
multiply(3,4);

const curriedMultiply = (a) => (b) => a * b
curriedMultiply(3)(4);

const multiplyBy5 = curriedMultiply(5);
//multiplyBy5(3); = 15

// Compose
const compose = (f,g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum,sum)(3);

f(g(3)) = f(3+1) = 1+3+1 = 5

// want to avoide side effect and always return something 

//Determinstic - no matter we put input through function, the function has to return same value 
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
// accumulator - something we can store the information that happens in the body
const reduceArray =array.reduce((accumulator, num) => {
	return accumulator + num;
})