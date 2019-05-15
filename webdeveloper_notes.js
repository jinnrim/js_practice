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

////ADVANCED OBJECT CONTENT////
//reference type
var object1 = {value :10};
var object2= object1;
var object3 = { value: 10 };

object1 === object2 (true)
object1 === object3 (false)

/*
NOTES

object2 is referencing object1 therefore the value is always equal to object 1 when it changes. 
However, object 3 eventhough it is set as a same value, it is known as different object. 
evertime you create an array, it is different data structure.(ex. different object boxes)
*/

//context vs. scope 
function () {
	let a = 4; 
	//everything inside the {} is called scope.
}

"this"
const object4 = {
	a: function() {
		console.log(this);
	}
}

//object4.a() => {a: f}

//instatiation
//make a copy of an object and reuse the code / limiting repeted code 
//capitalize "class"
class Player {
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}
	introduce() {
		console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
	}
}

class Wizard extends Player {
	constructor(name, type) {
		super(name, type)
	}
	play() {
		console.log (`WEEEEEEEEE I'm a ${this.type}`);
	}
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');
//every time new player is created, the constructor is run.



//PASS BY REFERENCE VS. PASS BY VALUE


//pass by value
var a = 5;
var b = a;

b++;

a= 5, b= 6
// the value of a does not change even though b has been added. 


//reference
objects, array change in value because they share same object

var c= [1,2,3,4,5];
var d = c;

d.push(123048)
console.log(d) = [1,2,3,4,5,123048]
console.log(c) = [1,2,3,4,5,123048]

//if you dont want to change the values in array C then you can concat c do empty d array.

let obj = {a: 'a', b: 'b', c: 'c'};
let clone = Object.assign({}, obj);
let clone2={...obj}; - new feature

obj.c = 5;
console.log(clone) = clone object is not affected. (pass by reference)
consloe.log(clone2) = pass by reference 


ex.2

let obj = {a: 'a', b: 'b', c: {deep: 'try and copy me'}};
let clone = Object.assign({}, obj);
let clone2={...obj}; - new feature

obj.c.deep = 'hahaha';
console.log(obj)
//all the clone has also changed due to shallow cloning - it only clones the first layer of obj
console.log(clone)
console.log(clone2)
//deep cloning - JSON - doenst affect
let superClone = JSON.parse(JSON.stringify())

//TYPE Coercion 

1 == '1'  comes out as true 
//one of them will convert into same type
//all languages have type coercion
//type coercion happens when '==' is used , type coercion '===' doesnt happen 

//Section 11: ES7

includes method 
'hello'.includes('o');
=> true 

const pets = ['cat',  'dog', 'bat'];
pets.includes('dog')
=>true 
pets.includes('bird')
=>false

const square = (x) => x**2 

square(2) = 4 
sqaure(5) = 25

const cube = (x) => x**3

//ES8
String padding 
.padStart()
.padEnd()

'Turtle'.padStart(10); => "          Turtle" (padding in front of turtle)
'Turtle'.padEnd(10); => "Turtle          " (padding in end of turtle)


const fun = (a,b,c,d,) => {
	console.log(a);
}

//comma - for syntax reason and extra comma won't give you error

Object.values 
Object.entries 
Object.keys

let obj = {
	username0: 'Santa',
	username1: 'Rudolf',
	username2: 'Mr.Grinch'
}

//works like an array and goes one by one
Object.keys(obj).forEach((key, index)=> {
	console.log(key,obj[key]);
})
answer 
	username0 'Santa',
	username1 'Rudolf',
	username2 'Mr.Grinch'


Object.values(obj).forEach(value => {
	console.log(value);
})
=> 
Santa
Rudolf
Mr.Grinch


Object.entries(obj).forEach(value => {
	console.log(value);
})
=> (2)[username0: 'Santa']


Object.entries(obj).map(value=> {
	return value[1] + value[0].replace('username', "");
})



Async Await 



