
console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"

document.addEventListener('DOMContentLoaded', function(){
  const drop = document.getElementById("breed-dropdown")
  const breedContainer = document.getElementById("dog-breeds")
  
  addMenuItems()

  breedContainer.addEventListener("click", function(event) {
    event.target.style.color = "green"
  })

  fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => addImages(json.message))

  let breeds
  
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => {
    breeds = Object.keys(json.message)
    addBreeds(breeds)
  })

  drop.addEventListener("change", function(event){
    let newBreeds;
    if (event.target.value === 'all') { 
      newBreeds = breeds
    }
    else {
      newBreeds = breeds.filter(breed => breed[0] === event.target.value)
    }

    addBreeds(newBreeds)
  })
})

function addImages(json) {
  json.forEach(imageURL => addImage(imageURL))
}

function addImage(imageURL) {
  const imageContainer = document.getElementById("dog-image-container")
  const imageTag = document.createElement('img')
  imageTag.src = imageURL
  imageContainer.appendChild(imageTag)
}

function addBreeds(json) {
  document.getElementById("dog-breeds").innerHTML = ""
  json.forEach(dogBreed => addBreed(dogBreed))
}

function addBreed(dogBreed) {
  const breedContainer = document.getElementById("dog-breeds")
  const li = document.createElement('li')
  li.innerText = dogBreed
  breedContainer.appendChild(li)
}

function addMenuItems(){
  "abcdefghijklmnopqrstuvwxyz".split('').forEach(letter => addMenuItem(letter))
}

function addMenuItem(item){
  const drop = document.getElementById("breed-dropdown")
  const option = document.createElement('option')
  option.value = item
  option.innerText = item
  drop.appendChild(option)
}