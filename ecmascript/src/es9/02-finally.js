// A promise is something that is going to happen: today, tomorrow or never (it was the old way of writing asynchronous code before: async await).
const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Yeah!");
        } else {
            reject("Whooops!");
        }
    });
}

anotherFunction()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log("Finish the promise"));