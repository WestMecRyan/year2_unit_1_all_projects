const prompt = require('prompt-sync')();

const validWords = ["one", "two", "three"];
while (true) {
    console.log("enter 'one' or 'two' or 'three'");
    const input = prompt(">> ").trim().toLowerCase();
    let isMatch = false;
    validWords.forEach(word => {
        if (input === word) {
            isMatch = true;
        }
     });
    if (match) {
        break;
    } else {
        console.error('silly goose that"s not what i said to enter');
    }
}