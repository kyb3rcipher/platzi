// Async and await

/*
function fetchData() {
    fetch("https://swapi.dev/api/people/3/")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}
*/

async function fetchData() {
    try {
        let response = await fetch("https://swapi.dev/api/people/3/");
        let data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.log("ERROR: " + error);
    }
}

async function main() {
    const anakin = await fetchData();
    console.log(anakin);
}
main();

const urls = [
    "https://swapi.dev/api/people/",
    "https://swapi.dev/api/planets/",
    "https://swapi.dev/api/starships/",
];

async function fetchNewData() {
    try {
        for await (url of urls) {
            let response = await fetch(url);
            let data = await response.json();
            console.log(data);
        }
    } catch (error) { console.log("ERROR: " + error); }
}