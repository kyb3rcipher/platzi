const button = document.querySelector("button");

// Better perfomance import eh module when the button is clicked.
button.addEventListener("click", async () => {
    const module = await import("./module.js");
    console.log(module);
    module.hello();
});