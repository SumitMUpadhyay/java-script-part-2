// // Strings properties and methods
// // wrapper string object , don't memorize methods
// let text = 'Sumit Joe';
// let result = text.length;
// console.log(result);

// console.log(text.length);
// console.log(text.toLowerCase());
// console.log(text.toUpperCase());
// console.log(text.charAt(0));
// console.log(text.charAt(8));
// console.log(text.charAt(text.length - 1));
// console.log(text.indexOf('s'));
// console.log(text.indexOf('S'));
// console.log(text.trim());
// console.log(text.startsWith('Sumit'));
// console.log(text.trim().toLowerCase().startsWith('sumit'));
// console.log(text.includes('umit'));
// console.log(text.slice(0, 2));
// console.log(text.slice(-4));

// let text = 'Sumit Joe';

// const person = {
//   name: 'sumit', //property
//   greeting() {
//     //method
//     console.log('Hey, I am Sumit');
//   },
// };

// console.log(person);
// console.log(person.name);
// person.greeting();

// Template Literals - ES6+
// Backtick characters `` - above tab (left from one)
// Interpolation ${} - insert expression(value)

// const name = 'sumit';
// const age = 25;
// const sentence = "Hey it's " + name + ' and he is ' + age + ' years old';

// const value = `Hey it's ${name} and he is ${age} years old.And here is some simple math${
//   4 + 4
// }`;
// console.log(value);

// console.log(sentence);

// Array Properties and Methods

// let names = ['john', 'bobo', 'barry', 'olega', 'ben'];

// length
// console.log(names.length);
// console.log(names[4]);
// console.log(names[names.length - 1]);

//concat
// const lastNames = ['pepper', 'onion', 'banana'];

// const allNames = names.concat(lastNames);
// console.log(allNames);

//reverse
// console.log(allNames.reverse());

//unshift
// allNames.unshift('susy');
// allNames.unshift('anna');
// console.log(allNames);

// shift

// allNames.shift('susy');
// allNames.shift('anna');
// console.log(allNames);
// push
// allNames.push('susy');
// allNames.push('anna');
// console.log(allNames);

//pop
// allNames.pop();
// allNames.pop();
// allNames.pop();
// allNames.pop();
// console.log(allNames);

// splice - mutates original array

// const specificNames = allNames.splice(2, 1);
// console.log(specificNames);
// console.log(allNames);

// Arrays and for loop

// const names = ['anna', 'susy', 'bob', 'john', 'susan'];

// const lastName = 'shakeandbake';
// let newArray = [];

// // for loop

// for (let i = 0; i < names.length; i++) {
//   console.log(i);
//   console.log(names[i]);
//   const fullName = `${names[i]} ${lastName}`;
// newArray.push(names[i]);
//   newArray.push(fullName);
// }

// console.log(names);
// console.log(newArray);

// Functions , return ,if ,arrays, for loop

// const gas = [20, 40, 100, 30];
// const food = [10, 40, 50];

// function calculateTotal(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // console.log(arr[i]);
//     total += arr[i];
//   }
//   if (total > 100) {
//     console.log(`Whoa! You are spending way too much`);
//   }
//   console.log(`You are good total is less than 100`);
//   // console.log(total);
//   return total;
// }

// calculateTotal(gas);
// calculateTotal(food);
// calculateTotal('Hello World');

// const gasTotal = calculateTotal(gas);
// const foodTotal = calculateTotal(food);
// const randomTotal = calculateTotal([200, 4000, 500, 1]);
// console.log({
//   gas: gasTotal,
//   food: foodTotal,
//   random: randomTotal,
// });

// Reference vs Value
// Primitive Data Types
// String, Number, Symbol, Boolean,Undefined, Null,
// Arrays ,Functions, Objects = object
// typeof

// When assigning primitive data type value to a variable any changes are made directly to that value, without affecting original value

// when assigning non-primitive data type value to a variable is done by reference so any changes will affect all the references.

// const number = 1;
// let number2 = number;
// number2 = 7;
// console.log(`the first value is ${number}`);
// console.log(`the second value is ${number2}`);

// let person = { name: 'bob' };
// // let person2 = person;
// let person2 = { ...person };
// person2.name = 'Susy';

// console.log(`The name of the first person is ${person.name}`);
// console.log(`The name of the second person is ${person2.name}`);

//Null and Undefined
//both represent "no value"

//undefined - "javascript can not find value for this"

// variable without value
// missing function arguments
// missing object properties
//null -"developer sets the value"

// let number = 20 + null; //20+0;
// console.log(number);
// let number2 = 20 + undefined; //20+0;
// console.log(number2);

// Truthy and Falsy
// "",'',``, 0,-0,, NaN, false, null, undefined

// const bool1 = true;
// const bool2 = 2 > 1;

// // if (true) {
// if (bool1) {
//   console.log(`Hey it works!`);
// }
// // if (2 > 1) {
// if (bool2) {
//   console.log(`Hey it also works!`);
// }

// const bool1 = true;
// const bool2 = 2 > 1;

// const text = 'sumit';

// if (text) {
//   console.log('Hey the value Truthy');
// } else {
//   console.log('Hey the value Falsy');
// }

// unary operator- typeof
// let text = 'some text';
// console.log(typeof text); // operand
// binary operator - assignment
// let number = 3;
// let number2 = 2 + 5;
// ternary operator
// condition ? (runs if true ): (runs if false)

// const value = 2 > 1;

// if (value) {
//   console.log('value is true');
// } else {
//   console.log('value is false');
// }

// const value = 1 < 0;

// value ? console.log('value is true') : console.log('value is false');

// Global Scope vs Local Scope
// any variable outside code block {} is said to be in Global Scope
// can be accesss anywhere in the program
// Gotchas : name collisions, modify by mistake

// let name = 'bobo';
// name = 'peter';

// function calculate() {
//   // some other code
//   console.log(name);
//   name = 'orange';
//   function inner() {
//     name = 'inner name value';
//     console.log(`This is from inner function ${name}`);
//   }
//   inner();
// }
// calculate();

// if (true) {
//   // some other code
//   console.log(name);
//   name = 'pants';
// }
// console.log(`my name is ${name} and I am awesome`);

// Local Scope
// can not be access from outside code blocks
// if - NOT VAR

// let name = 'bobo';

// function calculate() {
//   const name = 'john';
//   const age = 25;
//   //code goes here
//   becomesGlobal = 'global variable';
// }
// console.log(age);
// calculate();
// console.log(becomesGlobal);

// if (true) {
//   const name = 'john';
// }
// const name = 'john';
// const special = 'special';
// console.log(special);

// console.log(`my name is ${name} and I am awesome`);

// Variable Lookup
// {} - code block

// const globalNumber = 5;

// function add(num1, num2) {
//   const globalNumber = 20;
//   const result = num1 + num2 + globalNumber;
//   function multiply() {
//     const multiplyResult = result * globalNumber;
//     console.log(multiplyResult);
//   }
//   return result;
// }

// console.log(add(3, 4));

// function morning(name) {
//   // console.log('Good morning Bob');
//   return `Good morning ${name.toUpperCase()}`;
// }
// function afternoon(name) {
//   // console.log('Good morning Bob');
//   return `Good afternoon ${name.repeat(3)}`;
// }

// function greet(name, cb) {
//   const myName = 'john';
//   console.log(` ${cb(name)}, my name is ${myName}`);
//   // cb();
// }

// greet('bobo', morning);
// greet('peter', afternoon);

// Callback Functions, Higher Order Functions, Function as First Class Objects/Citizens
// Functions are the first class objects - stored in a variable (expression), passed as an argument to another function , return from the function (closure)

// Higher order function - accepts another function as an arguments or return another function as a result

// Callback Function - passed to a another function as an argument and executed inside the function

// function greetMorning(name) {
//   const myName = 'john';
//   console.log(`Good morning ${name}, my name is ${myName}`);
// }
// function greetAfternoon(name) {
//   const myName = 'john';
//   console.log(`Good afternoon ${name}, my name is ${myName}`);
// }

// Powerfull Array Methods
// forEach , map, filter, find, reduce
// Iterate over array - no for loop required
// Accept CALLBack function as an argument, calls callback against each item in an array.Reference Item in the call back Paramater.

// const numbers = [0, 12, 3, 4];

// show all numbers

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

//forEach
// does not return new array

// const people = [
//   { name: 'bob', age: 20, position: 'developer' },
//   { name: 'peter', age: 25, position: 'designer' },
//   { name: 'susy', age: 30, position: 'the boss' },
// ];

// function showPerson(person) {
//   console.log(person.position.toUpperCase());
// }

// people.forEach(showPerson);

// people.forEach(function (item) {
//   console.log(item.position.toUpperCase());
// });

// map
// does return a new array
// does not change size of original array
// use values from original array when making new one

// const people = [
//   { name: 'bob', age: 20, position: 'developer' },
//   { name: 'peter', age: 25, position: 'designer' },
//   { name: 'susy', age: 30, position: 'the boss' },
//   { name: 'anna', age: 35, position: 'the boss' },
// ];

// const ages = people.map(function (person) {
//   return person.age + 20;
//   // console.log(person);
//   // return 'hello world';
// });

// const newPeople = people.map(function (person) {
//   return {
//     firstName: person.name.toUpperCase(),
//     oldAge: person.age + 20,
//   };
// });

// const names = people.map(function (person) {
//   return `<h1>${person.name}</h1>`;
// });

// document.body.innerHTML = names.join('');
// console.log(names);

// filter
// does not return a new array
// can manipulate the size of new array
// returns based on condition

// const people = [
//   { name: 'bob', age: 20, position: 'developer' },
//   { name: 'peter', age: 25, position: 'designer' },
//   { name: 'susy', age: 30, position: 'the boss' },
//   { name: 'anna', age: 35, position: 'the boss' },
// ];

// const youngPeople = people.filter(function (person) {
//   return person.age <= 25;
// });

// const developers = people.filter(function (person) {
//   return person.position === 'developer';
// });

// const developers1 = people.filter(function (person) {
//   return person.position === 'senior developer';
// });

// console.log(developers1);
// console.log(youngPeople);

// find
// returns single instance - (in this case object)
// returns first match, if not match undefined
// great for getting unique value

// const people = [
//   { name: 'bob', age: 20, position: 'developer', id: 1 },
//   { name: 'peter', age: 25, position: 'designer', id: 2 },
//   { name: 'susy', age: 30, position: 'the boss', id: 3 },
//   { name: 'anna', age: 35, position: 'the boss', id: 4 },
// ];

// const names = ['bob', 'peter', 'susy'];
// console.log(
//   names.find(function (name) {
//     return name === 'bob';
//   })
// );

// const person = people.find(function (person) {
//   return person.id === 3;
// });

// console.log(person.name);

// const person2 = people.filter(function (person) {
//   return person.id === 3;
// });

// console.log(person2[0].name);

// reduce
// iterates, callback function
// reduces to a single value - number, array, object
//1 parameter ('acc') - total of all calculations
//2 parameter ('curr') - current iteration/value

// const people = [
//   { name: 'bob', age: 20, position: 'developer', id: 1, salary: 200 },
//   { name: 'peter', age: 25, position: 'designer', id: 2, salary: 300 },
//   { name: 'susy', age: 30, position: 'the boss', id: 3, salary: 500 },
//   { name: 'anna', age: 35, position: 'the boss', id: 4, salary: 500 },
// ];

// const total = people.reduce(function (acc, currItem) {
//   console.log(`total ${acc}`);
//   console.log(`current money: ${currItem.salary}`);
//   acc += currItem.salary;
//   console.log(acc);
//   console.log(currItem);

//   return acc;
// }, 500);

// console.log(total);

// Math
// Standard built-in  objects - always avaliable

// const number = 4.56789;
// const result = Math.floor(number);
// const number = 4.56789;
// const result = Math.ceil(8.99999);
// console.log(result);

// const number = 4.12222;
// const result = Math.ceil(number);
// console.log(result);

// const number = 89;

// const result = Math.sqrt(number);
// console.log(result);

// const result = Math.PI;
// console.log(result);

// const result = Math.min(4, 5, 6, 7, 8, 9);
// console.log(result);

// const result = Math.max(4, 5, 6, 7, 100, 200, 1000);
// console.log(result);

// const result = Math.random();
// console.log(result);

// const result = Math.random() * 10;
// console.log(result);

// const result = Math.floor(Math.random() * 10);
// console.log(result);

// const result = Math.ceil(Math.random() * 10);
// console.log(result);

// const result = Math.floor(Math.random() * 10 + 1);
// console.log(result);

// Date
// const date = new Date();
// console.log(date);

const months = [
  'january',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thrusday',
  'Friday',
  'Saturday',
];

const date = new Date();
const month = date.getMonth();
console.log(months[month]);

const day = date.getDay();
console.log(days[day]);
