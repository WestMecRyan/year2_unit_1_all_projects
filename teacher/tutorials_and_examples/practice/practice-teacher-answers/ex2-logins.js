function loginAttempt(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        resolve("Login successful");
      } else {
        reject("Login failed");
      }
    }, 1000);
  });
}


// Usage
loginAttempt("admin", "1234")
  .then(message => console.log(message))
  .catch(error => console.error(error));

loginAttempt("user", "password")
  .then(message => console.log(message))
  .catch(error => console.error(error));
