# Understanding the Modulo Operation

## What is Modulo?

The modulo operation finds the remainder after division of one number by another. It's represented by the `%` symbol in many programming languages, including JavaScript.

## How Does it Work?

When you perform a modulo operation `a % b`, it gives you the remainder when `a` is divided by `b`.

## Examples

1. `10 % 3 = 1` (10 divided by 3 is 3 remainder 1)
2. `17 % 5 = 2` (17 divided by 5 is 3 remainder 2)
3. `8 % 4 = 0` (8 divided by 4 is 2 with no remainder)

## Uses in Programming

1. **Checking for even/odd numbers:**
   ```javascript
   function isEven(number) {
     return number % 2 === 0;
   }
   console.log(isEven(4)); // true
   console.log(isEven(7)); // false
   ```

2. **Cycling through arrays:**
   ```javascript
   const colors = ['red', 'green', 'blue'];
   for (let i = 0; i < 10; i++) {
     console.log(colors[i % colors.length]);
   }
   // Outputs: red, green, blue, red, green, blue, red, green, blue, red
   ```

3. **Creating patterns:**
   ```javascript
   for (let i = 1; i <= 10; i++) {
     if (i % 3 === 0 && i % 5 === 0) {
       console.log("FizzBuzz");
     } else if (i % 3 === 0) {
       console.log("Fizz");
     } else if (i % 5 === 0) {
       console.log("Buzz");
     } else {
       console.log(i);
     }
   }
   // Outputs: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz
   ```

Understanding modulo is crucial for many programming tasks, especially those involving cycles, patterns, or divisions where you're interested in the remainder.