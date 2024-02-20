console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars = 0) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let i = 1; i <= 5; i++) {
 
    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", filledStars < i ? "./assets/star-empty.svg" : "./assets/star-filled.svg");
    imgElement.addEventListener("click", () => {
        renderStars(i);
    });
    starContainer.appendChild(imgElement);
  
  }
  //--^-- your code here --^--
}

renderStars();
