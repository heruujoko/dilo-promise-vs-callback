// how about we want to call waiting 3 times again

function waiting(callback) {
    setTimeout(function () {
        callback();
    }, 1000 * 3);
}

waiting(function () {
    console.log('done... 1');
    waiting(function () {
        console.log('done... 2');
        waiting(function () {
            console.log('done... 3');
        });
    });
});

// satisfied? but imagine if we have 30+ chaining code like this