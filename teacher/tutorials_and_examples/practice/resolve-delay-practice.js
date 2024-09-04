function randomDelay() {
    return new Promise((resolve, reject) => {
        // change the 1000 to  a Math function that randomly
        // is set between 1 and 3 seconds (not 0 at all)
        const delay = (Math.floor(Math.random()*2000))+1000; // in milliseconds (ms)
        setTimeout(() => {
            // resolve(`Resolved after ${delay}ms`);
            reject(`Rejected after ${delay}ms`);
        }, delay);// a function and a wait time
    });
}
console.log('beginning promise');
randomDelay()
    .then((result) => {
    console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });
console.log('do other stuff in the code');