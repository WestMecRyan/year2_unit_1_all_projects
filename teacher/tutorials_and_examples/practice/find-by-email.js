const users = [
    {"name": "Ryan", "email": "ryan@email.com", age: 31},
    {"name": "Sal", "email": "sal@email.com", age: 45},
    {"name": "Sherri", "email": "sherri@email.com", age: 27}
];
// add an age for each user
// log any user that has a certian age (that you put in the object)
console.log(users.filter(user =>  user.age > 30 ));