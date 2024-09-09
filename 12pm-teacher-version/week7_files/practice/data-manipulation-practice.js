// the FIND method returns the FIRST item
// in an array that satisfies the condition

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
const firstEvenNumber = numbers.find(
    num => num % 2 === 0
);
console.log(firstEvenNumber);
//write a function to log the first odd number
// and log that number
const firstOddNumber = numbers.find(num =>num % 2 !== 0);
console.log(firstOddNumber);

// if you want to return all items that meet a condition as a new array
// use the FILTER method
// make a function to return all even numbers and
// consolelog the function to view the array.
const allEvenNumbers = numbers.filter(num => num % 2 === 0);
console.log(allEvenNumbers);