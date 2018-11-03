// callback is a function that will be called back in a specific time

function waiting(callback) {
    setTimeout(function () {
        callback();
    }, 1000 * 3);
}

waiting(function () {
    console.log('done...');
});

// the callback only calledback when it was needed in the parent function