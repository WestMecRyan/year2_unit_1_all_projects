const users = [
    { id: 1, name: "Alice", email: "alice@example.com", password: "secret123" },
    { id: 2, name: "Bob", email: "bob@example.com", password: "password456" }
];

function replacer(key, value) {
    // Exclude password fields
    if (key === "password") {
        return undefined;
    }
    // Uppercase all name values
    if (key === "name") {
        return value.toUpperCase();
    }
    // For everything else, return the value as-is
    return value;
}

const jsonString = JSON.stringify(users, replacer, 2);
console.log(jsonString);

// Output:
// [
//   {
//     "id": 1,
//     "name": "ALICE",
//     "email": "alice@example.com"
//   },
//   {
//     "id": 2,
//     "name": "BOB",
//     "email": "bob@example.com"
//   }
// ]