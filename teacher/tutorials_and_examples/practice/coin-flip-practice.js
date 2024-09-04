// make a function called coinFlip
function coinFlip() {
    return new Promise((resolve, reject) => {
        let randomNum = Math.random();
        if (randomNum < 0.5) {
            resolve(`Hurray, you flipped heads!`);
        } else {
            reject(`BOOO, you flipped tails!`);
        }
     });
}
coinFlip()
    .then((win) => { console.log(win) })
    .catch((fail) => { console.error(fail) });
// return a new promise
// in the arrow function
// make an if else condition
// if Math.random returns less than 0.5
// resolve 'heads'
// otherwise
// reject 'tails'

// call the function
// make the log if resolved
// make sure to have a catch statement
// make a console error if rejected