// how about we want to call waiting 3 times

function waiting(callback) {
    setTimeout(function () {
        callback();
    }, 1000 * 3);
}

waiting(function () {
    console.log('done...');
});
waiting(function () {
    console.log('done...');
});
waiting(function () {
    console.log('done...');
});

// why the function runs together ???
