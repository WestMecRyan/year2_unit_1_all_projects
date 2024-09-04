const prompt = require('prompt-sync')();

let validWords = ["one", "two", "three"];

while (true) {
    console.log("enter 'one' or 'two' or 'three'");
    const input = prompt(">> ").trim().toLowerCase();
    let match = false;
    for (let i = 0; i < validWords.length - 1; i++) {
        if (input === validWords[i]) {
            match = true;
            break;
        }
    }
    if (match) {
        console.log("congrats you entered correctly.")
        break;
    } else {
        console.error("you did not enter the prompt correctly");
    }

}