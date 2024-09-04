const users2 = [
    { name: "Alice", age: 25, favoriteTVShows: ["Friends", "Breaking Bad"] },
    { name: "Bob", age: 35, favoriteTVShows: ["Game of Thrones", "The Office"] },
    { name: "Charlie", age: 40, favoriteTVShows: ["Stranger Things", "The Crown"] },
    { name: "David", age: 30, favoriteTVShows: ["The Office", "Stranger Things"] }
];

function findUserByAgeAndShow(users, minAge, maxAge, show) {
    return users.find(user =>
        user.age >= minAge &&
        user.age <= maxAge &&
        user.favoriteTVShows.includes(show)
    );
}

console.log(findUserByAgeAndShow(users2, 30, 40, "The Office"));