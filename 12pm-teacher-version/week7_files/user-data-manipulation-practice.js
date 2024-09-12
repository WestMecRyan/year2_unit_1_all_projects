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
  try {
    const user = findUserById(userId);
    if (user) {
      user.messages.push(message);
      console.log(user.messages);
      return true; // res.status(204).json({message: "Message was added successfully."})
    } else {
      throw new Error("User does not exist (404)");
    }
  } catch (error) {
    console.error("There was a problem" + error.message);

    return false; // res.status(404).json({message: "There was a problem, user not found"})
  }
}
try {
  const response = addMessageToUser(5, "Wassup chummmmmmmm...p");
  if (response) {
    console.log("update was successful");
  } else {
    throw new Error("Problem adding message");
  }
} catch (error) {
  console.error("There was a problem" + error.message);
}
// 5. Update a user's email
function updateUserEmail(userId, newEmail) {
  try {
    const user = findUserById(userId);
    if (user) {
      user.email = newEmail;
      console.log(user.email);
      return true;
    } else {
      throw new Error("User does not exist 404");
    }
  } catch (error) {
    console.error("Something went wrong" + error.message);
    return false;
  }
}
// handle the response on the client side
try {
  const response = updateUserEmail(3, "newtest@email.com");
  if (response) {
    console.log("Email was updated successfully.");
  } else {
    throw new Error("Failed to update email.");
  }
} catch (error) {
  console.error("There was a problem" + error.message)
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
function removeMessageFromUser(userId = 3, message = "Nonsense") {
  try {
    const user = findUserById(userId);
    if (user) {
      // get the index of the specific message we want to delete
      const messageIndex = user.messages.indexOf(message);
      console.log("the message index was", messageIndex);
      return true;
    } else {
      throw new Error("Failed to remove message")
    }
  } catch (error) {
    console.error("Something went wrong" + error.message);
    return false;
  }
}
removeMessageFromUser();
// 10. Sort users by age (youngest to oldest)
function sortUsersByAge() {
  // Your code here
}

// Test your functions here
// // console.log(findUserById(3));
// console.log(filterUsersByCity("New York"));
// ... add more test calls for other functions