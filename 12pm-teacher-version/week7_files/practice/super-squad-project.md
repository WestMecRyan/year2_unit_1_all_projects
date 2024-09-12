# Superhero Data Management Project

## Objective

Create a simple web application that allows users to add, view, and update superhero data stored in a JSON file.

## Features

1. View the list of superheroes (GET)
2. Add a new superhero (POST)
3. Update a superhero's details (PUT)

## Project Structure

```
super-squad/
│
├── server.js
├── data/
│   └── superheroes.json
└── public/
    └── index.html
```

## Step-by-Step Guide

### 1. Set up the server (server.js)

- Use Express.js to create a server
- Set up routes for GET, POST, and PUT requests
- Use fs.promises for file operations

### 2. Create the data file (superheroes.json)

- Initialize with an empty array or some sample data:
  ```json
  [
    {
      "name": "Superman",
      "power": "Flight, Super Strength",
      "universe": "DC"
    }
  ]
  ```

### 3. Create a simple client-side (public/index.html)

- Create a form to add new superheroes
- Create a form to update superhero details
- Add a section to display the current list of superheroes

### 4. Implement GET request

- Server: Create a route to send all superheroes
- Client: Fetch and display superheroes on page load

### 5. Implement POST request

- Server: Create a route to add a new superhero
- Client: Send form data to add a new superhero

### 6. Implement PUT request

- Server: Create a route to update a superhero
- Client: Send form data to update a superhero's details

## Bonus Challenges

- Implement basic error handling
- Add simple CSS to style the forms and superhero list
