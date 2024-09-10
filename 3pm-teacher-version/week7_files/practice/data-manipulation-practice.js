// the FIND method returns the FIRST item of an array
// which meets the condition or criteria
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbersB = [10, 11, 12, 13, 14, 15];
// function findEven() {
//     return numbers.find(
//         (num) => { return num % 2 === 0 }
//     );
// }
function findEven() {
    return numbers.find(
        num => num % 2 === 0
    );
}
// const firstEvenNumber = findEven();
const firstEvenNumber = numbers.find(num => num % 2 === 0);
console.log(firstEvenNumber);
// create a function to find the first odd number
// cache and log the first odd number
// function findOdd() {
//     return numbers.find((num) => { return num % 2 !== 0 });
// }
function findOdd() {
    return numbers.find(num => num % 2 !== 0);
}
// const firstOddNumber = findOdd();
const firstOddNumber = numbers.find(num => num % 2 !== 0);
console.log(firstOddNumber);

// the FILTER method returns an ARRAY of ALL items
// which match the condition
function findAllEvens() {
    return numbers.filter(num => num % 2 === 0);
}
const allEvens = findAllEvens();
console.log(allEvens);

// cache and log an array of all odds using the filter method
const allOdds = numbers.filter(num => num % 2 !== 0);
console.log(allOdds);

// the MAP method creates a new array in which each item
// of the passed in array is modified
// const numsTimes3 = numbers.map(num => num * 3);
// console.log(numsTimes3);
function numsTimes3(arr) {
    return arr.map(num => num * 3);
 }
const arrBtimes3 = numsTimes3(numbersB);

// create a function called multiplyArr
function multiplyArr(arr, x) {
    return arr.map(num => num * x);
}
const arrBtimes100 = multiplyArr(numbersB, 100);
console.log(arrBtimes100);
// in which any passed array's items
// will be multiplied by any passed number
