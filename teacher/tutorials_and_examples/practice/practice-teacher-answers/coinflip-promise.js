// Exercise 2: Create a promise that simulates a coin flip (50% chance of resolving or rejecting)
function coinFlip() {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.5) {
      resolve("Heads");
    } else {
      reject("Tails");
    }
  });
}

// Usage
console.log("Flipping a coin...");
coinFlip()
  .then(result => console.log(`You got ${result}`))
  .catch(error => console.log(`You got ${error}`));

// Question: How would you modify this to flip the coin multiple times?