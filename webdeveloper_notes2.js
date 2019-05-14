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


