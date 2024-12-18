const listParent = document.querySelector("ul");
const listItems = document.getElementsByTagName("li");

/*for (let li of listItems) {   // Add let or var for change [li] per iteration.
    li.addEventListener("click", () => {
        li.classList.toggle("highlight");
    });
}*/

listParent.addEventListener("click", (event) => {
    const li = event.target.closest("li");
    if (li) { li.classList.toggle("highlight"); }
});