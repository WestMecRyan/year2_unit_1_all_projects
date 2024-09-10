// Using Promises with .then().catch().finally()
function promiseExample(shouldFail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error('Something went wrong'));
            } else {
                resolve('Operation successful');
            }
        }, 1000);
    });
}

promiseExample(false)
    .then(result => console.log(result))
    .catch(error => console.error(error.message))
    .finally(() => console.log('Promise example completed'));

// Using async/await with try...catch...finally
async function asyncAwaitExample(shouldFail = false) {
    try {
        const result = await promiseExample(shouldFail);
        console.log(result);
    } catch (error) {
        console.error(error.message);
    } finally {
        console.log('Async/await example completed');
    }
}

asyncAwaitExample(true);