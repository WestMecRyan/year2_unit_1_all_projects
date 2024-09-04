// Exercise 3: Use users.find to locate a user by email
const users = [
  { name: "Alice", email: "alice@example.com", age: 30 },
  { name: "Bob", email: "bob@example.com", age: 25 },
  { name: "Charlie", email: "charlie@example.com", age: 35 }
];

function findUserByEmail(email) {
  return users.find(user => user.email === email);
}

console.log(findUserByEmail("bob@example.com"));
console.log(findUserByEmail("david@example.com"));

// Question: What will each console.log output, and why?