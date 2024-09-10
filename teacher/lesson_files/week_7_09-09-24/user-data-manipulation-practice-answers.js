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

// 1. Find a user by ID
function findUserById(id) {
  return users.find(user => user.id === id);
}

console.log(findUserById(3));
// 2. Filter users by city
function filterUsersByCity(city) {
  return users.filter(user => user.city === city);
}

console.log(filterUsersByCity("New York"));

// 3. Get all users over a certain age
function getUsersOverAge(age) {
  return users.filter(user => user.age > age);
}

console.log(getUsersOverAge(30));

// 4. Add a new message to a user's messages array
function addMessageToUser(userId, message) {
  const user = findUserById(userId);
  if (user) {
    user.messages.push(message);
    return true;
  }
  return false;
}

console.log(addMessageToUser(1, "New message"));

// 5. Update a user's email
function updateUserEmail(userId, newEmail) {
  const user = findUserById(userId);
  if (user) {
    user.email = newEmail;
    return true;
  }
  return false;
}

console.log(updateUserEmail(2, "newbob@email.com"));

// 6. Get all users with no messages
function getUsersWithNoMessages() {
  return users.filter(user => user.messages.length === 0);
}

console.log(getUsersWithNoMessages());

// 7. Get the average age of all users
function getAverageUserAge() {
  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  return totalAge / users.length;
}

console.log(getAverageUserAge());

// 8. Find the user with the most messages
function getUserWithMostMessages() {
  return users.reduce((maxUser, currentUser) =>
    currentUser.messages.length > maxUser.messages.length ? currentUser : maxUser
  );
}

console.log(getUserWithMostMessages());

// 9. Remove a specific message from a user
function removeMessageFromUser(userId, message) {
  const user = findUserById(userId);
  if (user) {
    const index = user.messages.indexOf(message);
    if (index !== -1) {
      user.messages.splice(index, 1);
      return true;
    }
  }
  return false;
}

console.log(removeMessageFromUser(1, "Hello"));

// 10. Sort users by age (youngest to oldest)
function sortUsersByAge() {
  return [...users].sort((a, b) => a.age - b.age);
}

console.log(sortUsersByAge());

// Extra Challenges

// 11. Group users by city
function groupUsersByCity() {
  return users.reduce((grouped, user) => {
    (grouped[user.city] = grouped[user.city] || []).push(user);
    return grouped;
  }, {});
}

// 12. Search users by partial name or email
function searchUsers(query) {
  query = query.toLowerCase();
  return users.filter(user =>
    user.name.toLowerCase().includes(query) ||
    user.email.toLowerCase().includes(query)
  );
}

// 13. Find the most common age
function getMostCommonAge() {
  const ageCounts = users.reduce((counts, user) => {
    counts[user.age] = (counts[user.age] || 0) + 1;
    return counts;
  }, {});
  return Object.entries(ageCounts).reduce((a, b) => a[1] > b[1] ? a : b)[0];
}

// 14. Paginate users
function paginateUsers(page, pageSize) {
  const start = (page - 1) * pageSize;
  return users.slice(start, start + pageSize);
}

// Test your functions here
console.log(groupUsersByCity());
console.log(searchUsers("ali"));
console.log(getMostCommonAge());
console.log(paginateUsers(2, 3));