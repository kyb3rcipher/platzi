const url = "https://jsonplaceholder.typicode.com";

const buttonGetPosts = document.getElementById("buttonGetPosts");
const postContainer = document.getElementById("post-container");
const postForm = document.getElementById("post-form");

async function sendHTTPRequest(method, url, data) {
    const reponse = await fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json", }
    });
    return await reponse.json();
}

// Form buttons events
postForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Remove default action redirect form.

    const title = event.currentTarget.querySelector("#postTitle").value;
    const content = event.currentTarget.querySelector("#postBody").value;
    createPost(title, content); // (simulate, API not support method).
});
buttonGetPosts.addEventListener("click", getPosts);

// Articles delete button (simulate API not support method).
postContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const postId = event.target.closest("article").id;
        console.log(postId);
        sendHTTPRequest("DELETE", url + "/posts/" + postId);
    }
});

async function createPost(title, content) {
    const userId = Math.random();
    const post = {
        title: title,
        body: content,
        userId: userId,
    };
  
    sendHTTPRequest("POST", url + "/posts", post);
}

async function getPosts() {
    const responseData = await sendHTTPRequest("GET", url + "/posts");
    console.log(responseData);

    for (const post of responseData) {
        const newPost = document.createElement("article");
        newPost.id = post.id;
        newPost.classList.add("card", "mt-3");
        newPost.style.width = "18rem";

        const newPostBody = document.createElement("div");
        newPostBody.classList.add("card-body");

        const newPostTitle = document.createElement("h5");
        newPostTitle.classList.add("card-title");
        newPostTitle.textContent = post.title;
        newPostBody.append(newPostTitle);

        const newPostSubtitle = document.createElement("h6");
        newPostSubtitle.classList.add("card-subtitle", "mb-2", "text-body-secondary");
        newPostSubtitle.textContent = "#" + post.id;
        newPostBody.append(newPostSubtitle);

        const newPostText = document.createElement("p");
        newPostText.classList.add("card-text");
        newPostText.textContent = post.body;
        newPostBody.append(newPostText);

        const newPostButtonDelete = document.createElement("button");
        newPostButtonDelete.classList.add("btn", "btn-danger", "w-100");
        newPostButtonDelete.innerText = "DELETE";
        newPostBody.append(newPostButtonDelete);
        
        newPost.append(newPostBody);
        postContainer.append(newPost);
    }
}