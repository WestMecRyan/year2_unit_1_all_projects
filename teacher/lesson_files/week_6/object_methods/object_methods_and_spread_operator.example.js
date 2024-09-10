// Create an object to work with
const person = {
  name: 'Reggie',
  role: 'Software developer',
  skills: ['JavaScript', 'HTML', 'CSS'],
  isTeacher: true
};

// Demonstrate Object.keys()
console.log("Object.keys() example:");
const personKeys = Object.keys(person);
console.log(personKeys);
console.log("Number of properties:", personKeys.length);

// Demonstrate Object.values()
console.log("\nObject.values() example:");
const personValues = Object.values(person);
console.log(personValues);

// Demonstrate spread operator
console.log("\nSpread operator example:");
const personalInfo = {
  firstName: 'Reggie',
  lastName: 'Williams',
};
const professionalInfo = {
  title: 'Software developer',
  company: 'Tech Corp',
};

const completePerson = {
  ...personalInfo,
  ...professionalInfo,
  skills: ['JavaScript', 'HTML', 'CSS'],
};

console.log(completePerson);

// Practical example: Filtering object properties
console.log("\nFiltering object properties example:");
const getDisplayName = (obj) => {
  const { firstName, lastName } = obj;
  return Object.keys(obj)
    .filter(key => ['firstName', 'lastName'].includes(key))
    .reduce((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {});
};

console.log(getDisplayName(completePerson));

// Output will be:
// Object.keys() example:
// [ 'name', 'role', 'skills', 'isTeacher' ]
// Number of properties: 4

// Object.values() example:
// [ 'Reggie', 'Software developer', [ 'JavaScript', 'HTML', 'CSS' ], true ]

// Spread operator example:
// {
//   firstName: 'Reggie',
//   lastName: 'Williams',
//   title: 'Software developer',
//   company: 'Tech Corp',
//   skills: [ 'JavaScript', 'HTML', 'CSS' ]
// }

// Filtering object properties example:
// { firstName: 'Reggie', lastName: 'Williams' }