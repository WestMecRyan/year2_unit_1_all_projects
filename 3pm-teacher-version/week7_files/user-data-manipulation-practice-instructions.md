# User Data Manipulation Practice

## Objective
In this lesson, you will practice manipulating an array of user objects using various JavaScript array methods and functions. You'll implement functions to search, filter, update, and analyze user data.

## Setup
1. Copy the provided user data and function stubs into a new JavaScript file.
2. You can run this file using Node.js or in a browser console.

## Basic Challenges
1. Implement the `findUserById` function to return the user with the given ID.
2. Complete the `filterUsersByCity` function to return an array of users from the specified city.
3. Write the `getUsersOverAge` function to return all users older than the given age.

## Intermediate Challenges
4. Implement the `addMessageToUser` function to add a new message to a user's messages array.
5. Complete the `updateUserEmail` function to change a user's email address.
6. Write the `getUsersWithNoMessages` function to return all users who have an empty messages array.

## Advanced Challenges
7. Implement the `getAverageUserAge` function to calculate and return the average age of all users.
8. Complete the `getUserWithMostMessages` function to find and return the user with the most messages.
9. Write the `removeMessageFromUser` function to remove a specific message from a user's messages array.
10. Implement the `sortUsersByAge` function to return a new array of users sorted by age (youngest to oldest).

## Extra Challenges
11. Create a function that groups users by city and returns an object where keys are city names and values are arrays of users.
12. Implement a search function that can find users based on partial matches of their name or email.
13. Create a function that returns the most common age among users.
14. Implement a function that can "paginate" the users array, returning a specified number of users per page.

## Tips
- Use array methods like `find()`, `filter()`, `map()`, `reduce()`, and `sort()` where appropriate.
- Test each function as you implement it.
- Consider edge cases and error handling.

## Testing
After implementing each function, test it with different inputs to ensure it works correctly. You can use `console.log()` to output the results.

Example:
```javascript
console.log(findUserById(3));
console.log(filterUsersByCity("New York"));
```

## Reflection
After completing the challenges, consider the following questions:
- Which functions were the most challenging to implement? Why?
- How might these functions be useful in a real-world application?
- Are there any optimizations you could make to improve the performance of your functions?

Good luck, and happy coding!