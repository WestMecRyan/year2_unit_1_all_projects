// Dummy user data
const users = [
  { id: 1, name: "Alice Johnson", email: "alice@email.com", age: 28, city: "New York", messages: ["Hello", "How are you?"] },
  { id: 2, name: "Bob Smith", email: "bob@email.com", age: 35, city: "Los Angeles", messages: ["What's up?"] },
  { id: 3, name: "Charlie Brown", email: "charlie@email.com", age: 22, city: "Chicago", messages: [] },
  { id: 4, name: "Diana Ross", email: "diana@email.com", age: 40, city: "New York", messages: ["Nice to meet you", "Goodbye"] },
  { id: 5, name: "Edward Norton", email: "edward@email.com", age: 45, city: "Los Angeles", messages: ["Hello world"] },
  { id: 6, name: "Fiona Apple", email: "fiona@email.com", age: 30, city: "Chicago", messages: [] },
  { id: 7, name: "George Clooney", email: "george@email.com", age: 55, city: "New York", messages: ["How's it going?", "See you soon"] },
];

// Practice Activities

// 1. Find a user by ID
function findUserById(id) {
  return users.find(user => user.id === id);
}
const fifthUser = findUserById(5);
// log the users whose id's are 5 and 7

// 2. Filter users by city
function filterUsersByCity(city) {
  // Your code here
}
// create two arrayy of users whose cities are Chicago and New York

// 3. Get all users over a certain age
function getUsersOverAge(age) {
  // Your code here
}
// save users who are younger than 30 in an array could under30Demo

// 4. Add a new message to a user's messages array
function addMessageToUser(userId, message) {
  // Your code here
}
//

// 5. Update a user's email
function updateUserEmail(userId, newEmail) {
  // Your code here
}

// 6. Get all users with no messages
function getUsersWithNoMessages() {
  // Your code here
}

// 7. Get the average age of all users
function getAverageUserAge() {
  // Your code here
}

// 8. Find the user with the most messages
function getUserWithMostMessages() {
  // Your code here
}

// 9. Remove a specific message from a user
function removeMessageFromUser(userId, message) {
  // Your code here
}

// 10. Sort users by age (youngest to oldest)
function sortUsersByAge() {
  // Your code here
}

// answers for log of first two problems
console.log(findUserById(5));
console.log(filterUsersByCity("Chicago"));