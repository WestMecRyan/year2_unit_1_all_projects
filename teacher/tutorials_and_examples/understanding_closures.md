```js
let globalCount = 0;

let dogCount = 0;
let birdCount = 0;

function countBirds() {
    globalCount += 1;
    return globalCount + ' birds';
}

function countDogs() {
    globalCount += 1;
    return globalCount + ' dogs';
}
```
If there are thousands of things to count this might not make sense.
```js
var birds = 3;

function dogHouse() {
    var dogs = 8;
    console.log(birds);
    console.log(dogs);
}
```
you can make multiple functions based on an outer variable
but the outer variable will be changed
```js
let count = 0;

function makeBirdCounter() {
    count = 0;
    return function incrementBirds() {
        count+=1;
        return count + ' birds';
    }

}

function makeDogCounter() {
    count = 0;
    return function incrementDogs() {
        count += 1;
        return count + ' dogs';
    }
}
const countBirds1 = makeBirdCounter();
const countDogs1 = makeDogCounter();
console.log(countBirds1()); // 1 bird
console.log(countDogs1()); // 2 dogs
console.log(countBirds1()); // 3 birds
```
to change this behavior make the variable scoped to each function
```js
function makeBirdCounter() {
    let count = 0;
    return function incrementBirds() {
        count+=1;
        return count + ' birds';
    }

}

function makeDogCounter() {
    let count = 0;
    return function incrementDogs() {
        count += 1;
        return count + ' dogs';
    }
}
const countBirds1 = makeBirdCounter();
const countDogs1 = makeDogCounter();
console.log(countBirds1()); // 1 bird
console.log(countDogs1()); // 1 dog
console.log(countBirds1()); // 2 bird
```
Real world examples are the middleware in express like Morgan which abstracts the functions to use with easy methods
-----
You can also set up handlers lixe button clicks
```js
var buttons = document.getElementsByTagName('button');

function createHandler(name) {
    return function() {
        console.log(name);
    }
}
for (var i = 0; i < buttons.length; i+=1) {
    var button = buttons[i];
    let buttonName = button.innerHTML;
    button.addEventListener('click', createHandler(buttonName));
}
```