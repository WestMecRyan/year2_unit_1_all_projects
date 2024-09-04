Instruction
Useful JavaScript Object Methods
You've learned that with for...in, you're able to loop (or iterate) over the properties of an object literal and access each property's value. For example:
```js
const person = {
  name: 'Reggie',
  role: 'Software developer',
  skills: ['JavaScript', 'HTML', 'CSS'],
  isTeacher: true
};

for ( let prop in person ) {
  console.log(prop);
}
```
The for...in loop above calls the console.log() method four times, returning the name of each property in the person object.

Similar to arrays, JavaScript objects have useful built-in methods for retrieving data from an object. In this step, we'll review the methods Object.keys() and Object.values(), both return an array containing an object's properties and values, respectively.

Object.keys()
The Object.keys() method returns an array containing the property names (or keys) of an object. Consider the following code:
```js
const person = {
  name: 'Reggie',
  role: 'Software developer',
  skills: ['JavaScript', 'HTML', 'CSS'],
  isTeacher: true
};

// Store the keys of the `person` object in `personProps`
const personProps = Object.keys(person); 
console.log(personProps);
> (4) ["name", "role", "skills", "isTeacher"]
```
Notice how the array returned by Object.keys(person) lists the property names in the order they appear inside the person object.

Check the length of an object
You learned that you use the length property to get the number of characters inside a string and return the number of elements inside an array. Object literals, however, do not have a length property. So if you wanted to check the length of an object (the number of properties inside it), calling person.length, for example, would return undefined.

Since Object.keys() stores an object's keys inside a new array, you can use it for checking the length of an object. For example:
```js
const person = {
  name: 'Reggie',
  role: 'Software developer',
  skills: ['JavaScript', 'HTML', 'CSS'],
  isTeacher: true
};

console.log( Object.keys(person).length );  // 4
Object.values()
```
The Object.values() method returns an array of a given object's property values, in the same order as provided by a for...in loop. For example:
```js
const person = {
  name: 'Reggie',
  role: 'Software developer',
  skills: ['JavaScript', 'HTML', 'CSS'],
  isTeacher: true
};

// Store the `person` object's property values in `personVals`
const personVals = Object.values(person); 
console.log(personVals);
> (4)
[
  "Reggie",
  "Software developer",
  ["JavaScript","HTML","CSS"],
  true
]
```
The array returned by Object.values(person) lists the property values of the person object.

The handy spread operator
In a previous course on JavaScript arrays, you learned how to copy and combine arrays with the spread operator (...).

You can use the spread operator to copy key/value pairs from one object to another. Evaluate the following objects:
```js
const name = {
  firstName: 'Reggie',
  lastName: 'Williams',
};

const role = {
  title: 'Software developer',
  skills: ['JavaScript', 'HTML', 'CSS'],
  isTeacher: true
};

// merge `name` and `role` into a `person` object
const person = {  
  ...name,
  ...role
};
console.log(person);
{
  firstName: "Reggie",
  lastName: "Williams",
  title: "Software developer",
  skills: ["JavaScript", "HTML", "CSS"],
  isTeacher: true
}
```
In this case, the spread operator produces the same results as with arrays -- it merges the name and role objects into one person object.