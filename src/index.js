const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const dogContainer = document.getElementById("dog-image-container");
const dogBreedContainer = document.getElementById("dog-breeds");
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
const dogFilter = document.getElementById("breed-dropdown");
let dogBreeds = ""


fetch(imgUrl)
  .then(response => response.json())
  .then(dogData => appendDogs(dogData.message));

fetch(breedUrl)
  .then(response => response.json())
  .then(dogData => dogBreeds = Object.keys(dogData.message))
  .then(dogData => appendBreeds(dogBreeds));


function appendDogs(dogData) {
  for (dogURL of dogData) {
    const dogPic = document.createElement("img");
    dogPic.src = dogURL;
    dogPic.style = "width: 300px; display: block"
    dogContainer.appendChild(dogPic);
  }
};

function appendBreeds(dogData) {
  dogBreedContainer.innerHTML = ""
  for (dogURL of dogData) {
    const dogBreed = document.createElement("li");
    dogBreed.textContent = dogURL
    dogBreedContainer.appendChild(dogBreed);
  }
};

function changeDogBreedColor() {
  if (event.target.tagName === "LI") {
    event.target.style.color = "blue";
  }
}

function filterDropDown() {
  const startingLetter = event.target.value
  const filteredDogsBreeds = dogBreeds.filter(breed => breed[0] === startingLetter)
  appendBreeds(filteredDogsBreeds)
}



//EVENT LISTENERS
dogBreedContainer.addEventListener("click", changeDogBreedColor);
dogFilter.addEventListener("change", filterDropDown);
