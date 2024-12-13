const usernameField = document.getElementById('username'), timelineField = document.getElementById('timeline');

// DB
const userDatabase = [
    { username: "tolvards", password: "password" },
    { username: "freddier", password: "password"},
    { username: "kyb3rcipher", password: "password" }
];
const usersTimeline = [
    { username: "tolvards", timeline: "Linux" },
    { username: "freddier", timeline: "Platzi" },
    { username: "kyb3rcipher", timeline: "STAR" }
];

// Input credentials
const username = prompt("Username:");
const password = prompt("Password:");

// Find user in db
const user = userDatabase.findIndex(user => username === user.username && password === user.password); // Return -1 if is not found

if (user !== -1) {
    alert("Logged!");
    // Add username text in page
    usernameField.innerText += username;

    for (timeline of usersTimeline) {
        if (timeline.username === username) {
            // Add user timeline in page
            timelineField.innerText = timeline.timeline;
        }
    }
} else {
    alert("Incorrect credentials.");
}

/*
With for instead of the find() method:

for (let user of userDatabase) {
    if (username === user.username && password === user.password) {
        alert("Logged!");
        // Add username text in page
        usernameField.innerText += username;

        for (timeline of usersTimeline) {
            if (timeline.username === username) {
                // Add user timeline in page
                timelineField.innerText = timeline.timeline;
                break;  // Exit of loop when user timeline is found.
            }
        }
        break;
    }
}
*/