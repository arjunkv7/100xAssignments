/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve, reject) => {
        let timeInMill = (n * 1000) + 1 
        // if (!n) reject();
        setTimeout(() => {
            resolve()
        }, timeInMill )
    })
}



module.exports = wait;
