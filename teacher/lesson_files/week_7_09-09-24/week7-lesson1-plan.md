# Express.js Lesson Plan: User Management and API Interactions

## 1. Understanding the User Data Structure (15 minutes)

### Objective:

Students will understand the structure of the user data stored in the JSON file.

### Code Example:

```javascript
const userData = [
  {
    name: "default",
    email: "default@email.com",
    messages: [],
  },
  {
    name: "Jim",
    email: "j@jim.com",
    messages: ["hello"],
  },
];
```

### Practice Activity:

1. Create a function that adds a new message to a user's messages array.

## 2. Completing the PUT Endpoint (30 minutes)

### Objective:

Students will learn how to implement a PUT endpoint to update user data, including modifying messages in the messages array.

### Code Example:

```javascript
const fs = require("fs").promises;
const dataPath = path.join(__dirname, "data", "users.json");

app.put("/update-user/:currentName/:currentEmail", async (req, res) => {
  try {
    const { currentName, currentEmail } = req.params;
    const { newName, newEmail, newMessage } = req.body;

    let users = JSON.parse(await fs.readFile(dataPath, "utf8"));

    const userIndex = users.findIndex(
      (u) => u.name === currentName && u.email === currentEmail
    );

    if (userIndex === -1) {
      return res.status(404).json({ message: "User not found" });
    }

    if (newName) users[userIndex].name = newName;
    if (newEmail) users[userIndex].email = newEmail;
    if (newMessage) users[userIndex].messages.push(newMessage);

    await fs.writeFile(dataPath, JSON.stringify(users, null, 2));

    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
```

### Practice Activities:

1. Modify the PUT endpoint to allow updating only specific fields (name, email, or add a message).
2. Implement a new endpoint to remove a specific message from a user's messages array.

## 3. Using cURL and REST Client (20 minutes)

### Objective:

Students will learn how to interact with their API using cURL in PowerShell and the VS Code REST Client extension.

### cURL Example (PowerShell):

```powershell
# GET all users
curl -X GET http://localhost:3000/users

# PUT to update a user and add a message
curl -X PUT -H "Content-Type: application/json" -d "{\"newName\":\"Updated Name\",\"newEmail\":\"updated@email.com\",\"newMessage\":\"New message\"}" http://localhost:3000/update-user/John/john@email.com
```

### REST Client Example:

Create a file named `api.http` in your project:

```http
### Get all users
GET http://localhost:3000/users

### Update a user and add a message
PUT http://localhost:3000/update-user/John/john@email.com
Content-Type: application/json

{
    "newName": "Updated Name",
    "newEmail": "updated@email.com",
    "newMessage": "New message"
}
```

### Practice Activities:

1. Use cURL to add a new user to the system with an initial message.
2. Create a REST Client request to retrieve all messages for a specific user.

## 4. Form Validation (Client-side and Server-side) (30 minutes)

### Objective:

Students will implement basic form validation on both client and server sides, including validation for the messages.

### Client-side Validation Example:

```javascript
function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name.length < 2) {
    alert("Name must be at least 2 characters long");
    return false;
  }

  if (!email.includes("@")) {
    alert("Please enter a valid email address");
    return false;
  }

  if (message.length > 200) {
    alert("Message must not exceed 200 characters");
    return false;
  }

  return true;
}

document.querySelector("form").onsubmit = validateForm;
```

### Server-side Validation Example:

```javascript
app.post("/submit-form", (req, res) => {
  const { name, email, message } = req.body;

  if (name.length < 2) {
    return res
      .status(400)
      .json({ message: "Name must be at least 2 characters long" });
  }

  if (!email.includes("@")) {
    return res
      .status(400)
      .json({ message: "Please enter a valid email address" });
  }

  if (message && message.length > 200) {
    return res
      .status(400)
      .json({ message: "Message must not exceed 200 characters" });
  }

  // Process the form submission
  // ...
});
```

### Practice Activities:

1. Add client-side validation to ensure a user can't submit an empty message.
2. Implement server-side validation to check if a user has reached a maximum number of messages (e.g., 10).

## 5. Understanding HTTP Status Codes (20 minutes)

Objective:
Students will learn about common HTTP status codes and how to use them in their Express.js application.

```js
// 200 OK
res.status(200).json({ message: "Request successful" });

// 201 Created
res.status(201).json({ message: "New resource created" });

// 204 No Content
res.status(204).send();

// 400 Bad Request
res.status(400).json({ message: "Invalid input" });

// 404 Not Found
res.status(404).json({ message: "Resource not found" });

// 500 Internal Server Error
res.status(500).json({ message: "Internal server error" });
```

## 6. Error Handling (20 minutes)

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

app.get("/users/:id", async (req, res, next) => {
  try {
    const user = await findUser(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
});
```
