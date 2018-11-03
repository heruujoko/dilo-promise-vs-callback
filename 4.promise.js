// promise is same like callback but having cooler syntax

let prm = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done...');
        }, 3000);
    });
}

const setup = async () => {
    let message = await prm();
    let message2 = await prm();
    let message3 = await prm();
    console.log(message);
    console.log(message2);
    console.log(message3);
}

setup();

// now they come together but in 9 seconds??
// also we can assign value from promise