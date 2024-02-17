console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const body = document.querySelector("body");
const newPost = document.createElement("section");
const paragraph = document.createElement("p");
const footer = document.createElement("footer");
const username = document.createElement("span");
const button = document.createElement("button");

body.append (newPost);
newPost.append (paragraph);
newPost.append (footer);
footer.append (username);
footer.append (button);

paragraph.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
username.textContent = "@username";
button.textContent = "♥ Like";

newPost.classList.add("post");
paragraph.classList.add("post__content");
footer.classList.add("post__footer");
username.classList.add("post__username");
button.classList.add("post__button");

button.addEventListener("click", handleLikeButtonClick);
