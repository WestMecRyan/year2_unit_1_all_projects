// Exercise 4: Use users.find to locate a user by a more complex condition
const users = [
    { name: "Alice", email: "alice@example.com", age: 30, hobbies: ["reading", "hiking"] },
    { name: "Bob", email: "bob@example.com", age: 25, hobbies: ["gaming", "cooking"] },
    { name: "Charlie", email: "charlie@example.com", age: 35, hobbies: ["hiking", "photography"] }
];

function findUserByHobby(hobby) {
    return users.find(user => user.hobbies.includes(hobby));
}

console.log(findUserByHobby("hiking"));
console.log(findUserByHobby("dancing"));

// Question: What will each console.log output?