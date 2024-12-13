/* Promises turn our code from synchronous to asynchronous code
Promises status:
- pending * Promise()
- fulfilled * (when the promise is resolved with error or ok)
- Rejected * (when the promise was not resolved for some reason)

Promises callbacks: [promises handle two types of (callbacks)]:
resolve
reject

Promises methods:
- then() * (when the promise is resolved)
- catch() * (when the promise is not resolved, and we can obtain the error here)
*/

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // code here
        let operationSuccessFul = true;

        if (operationSuccessFul) {
            resolve("The operation was successful.");
        } else {
            reject("The operation failed.");
        }
    }, 2000);
});

promise
    .then(successMessage => {
        console.log(successMessage);
    }) // [.then] method is executed when the promise is resolved.
    .catch(errorMessage => {
        console.log(errorMessage);
    });