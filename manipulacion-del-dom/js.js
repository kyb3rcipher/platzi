const container = document.querySelector('#container');

const button = document.querySelector("button");

button.addEventListener("click", (event) => {
    console.log(event);
    alert("CLICKED!");
});