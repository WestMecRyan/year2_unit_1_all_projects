// Create a resolved promise
const question = Promise.resolve(42);

// Demonstration 1: Non-chained .then() calls
console.log("Demonstration 1: Non-chained .then() calls");
question.then(answer => {
    console.log("First .then():", answer);
    return answer * 2; // This return value is not used in the next .then()
});
question.then(answer => {
    console.log("Second .then():", answer);
});

// Demonstration 2: Chained .then() calls
console.log("\nDemonstration 2: Chained .then() calls");
question
    .then(answer => {
        console.log("First .then() in chain:", answer);
        return answer * 2; // This return value is passed to the next .then()
    })
    .then(answer => {
        console.log("Second .then() in chain:", answer);
    });

// Demonstration 3: Chained .then() calls with no return
console.log("\nDemonstration 3: Chained .then() calls with no return");
question
    .then(answer => {
        console.log("First .then() in chain (no return):", answer);
        // No return statement, implicitly returns undefined
    })
    .then(answer => {
        console.log("Second .then() in chain:", answer);
    });

// Demonstration 4: Multiple .then() calls over time
console.log("\nDemonstration 4: Multiple .then() calls over time");
setTimeout(() => {
    question.then(answer => console.log("Delayed .then():", answer));
}, 1000);

// Output will be:
// Demonstration 1: Non-chained .then() calls
// First .then(): 42
// Second .then(): 42
//
// Demonstration 2: Chained .then() calls
// First .then() in chain: 42
// Second .then() in chain: 84
//
// Demonstration 3: Chained .then() calls with no return
// First .then() in chain (no return): 42
// Second .then() in chain: undefined
//
// Demonstration 4: Multiple .then() calls over time
// Delayed .then(): 42 (after 1 second)