```js
const fs = require("fs").promises;

async function appendUser(user) {
  const userString = JSON.stringify(user) + "\n";
  await fs.appendFile("users.jsonl", userString);
}

async function readUsers() {
  const fileContent = await fs.readFile("users.jsonl", "utf8");
  return fileContent
    .split("\n")
    .filter((line) => line.trim() !== "")
    .map((line) => JSON.parse(line));
}

// Usage
appendUser({ name: "John", email: "john@example.com", message: "Hello" });
```
