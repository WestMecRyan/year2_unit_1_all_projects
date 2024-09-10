// Function scope
function scopeTest() {
    let functionScoped = "I'm function scoped";
    if (true) {
        let blockScoped = "I'm block scoped";
        const alsoBlockScoped = "I'm also block scoped";
        var notBlockScoped = "I'm not block scoped";

        console.log(blockScoped);  // Works
        console.log(alsoBlockScoped);  // Works
        console.log(notBlockScoped);  // Works
    }
    console.log(functionScoped);  // Works
    // console.log(blockScoped);  // Error: blockScoped is not defined
    // console.log(alsoBlockScoped);  // Error: alsoBlockScoped is not defined
    console.log(notBlockScoped);  // Works, but might be unexpected
}

scopeTest();

// Loop example
for (let i = 0; i < 3; i++) {
    console.log(i);  // 0, 1, 2
}
// console.log(i);  // Error: i is not defined