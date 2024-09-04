// Exercise 1: Create a promise that resolves after a random time between 1-3 seconds
function randomDelay() {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 2000) + 1000; // Random delay between 1-3 seconds
    setTimeout(() => {
      resolve(`Resolved after ${delay/1000} seconds`);
    }, delay);
  });
}

// Usage
console.log("Starting...");
randomDelay()
  .then(result => console.log(result))
  .catch(error => console.error(error));
console.log("This will print before the promise resolves");

// Question: What order will the console.log statements execute in, and why?