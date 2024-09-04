const users = [
    { name: "Alice", age: 25, favoriteFood: "sushi" },
    { name: "Bob", age: 35, favoriteFood: "pizza" },
    { name: "Charlie", age: 40, favoriteFood: "pizza" },
    { name: "David", age: 30, favoriteFood: "burger" }
];

function findPizzaLoverOver30(users) {
    return users.find(user => user.age > 30 && user.favoriteFood === "pizza");
}

console.log(findPizzaLoverOver30(users));
