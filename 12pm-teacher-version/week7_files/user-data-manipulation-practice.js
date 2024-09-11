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
  // Your code here
  return users.find(user => user.id === id);
}
// log user whose id is 7 and user whose id is 5
// console.log(findUserById(5));
// 2. Filter users by city
function filterUsersByCity(city) {
  return users.filter(user => user.city === city);
}
const NewYorkers = filterUsersByCity("New York");
const Chicagoans = filterUsersByCity("Chicago");
// console.log(Chicagoans);
// make array of users who live in chicago

// 3. Get all users over a certain age
// function getUsersOverAge(age) {
//   return users.filter((user) => { return user.age > age });
// }
const getUsersOverAge = age => users.filter(user => user.age > age);




// const getUsersOverAge = (age) => {
//   return users.filter((user) => { return user.age > age });
// }
// const getUsersOverAge = age => users.filter(user => user.age > age);


const usersOver30 = getUsersOverAge(30);
console.log("users over 30", usersOver30);
// cache and log an array of all users over the age of 30

// 4. Add a new message to a user's messages array
function addMessageToUser(userId, message) {
  // use an existing function
  const user = findUserById(userId);
  // to find a user by some id
  // cache that user
  user.messages.push(message);
  // and append a message
  // to their messages array
}

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

// Test your functions here
// // console.log(findUserById(3));
// console.log(filterUsersByCity("New York"));
// ... add more test calls for other functions