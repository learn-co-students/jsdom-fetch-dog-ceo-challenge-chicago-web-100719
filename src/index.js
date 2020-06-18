console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"
const breedList = document.getElementById("dog-breeds")
const breedFilter = document.getElementById("breed-dropdown")

document.addEventListener("DOMContentLoaded", function() {
  renderImages()
  renderBreeds()
})

function renderImages() {
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(obj => addImages(obj.message))
}

function renderBreeds() {
  let breeds

  fetch(breedUrl)
  .then(resp => resp.json())
  .then(obj => { breeds = Object.keys(obj.message)
                  addBreeds(breeds) 
                })

  breedList.addEventListener("click", function(event) {
    event.target.style.color = "blue"
  })

  breedFilter.addEventListener("change", function(event){
    let newBreeds

    if (event.target.value === 'all') { 
      newBreeds = breeds
    }
    else {
      newBreeds = breeds.filter(breed => breed[0] === event.target.value)
    }

    addBreeds(newBreeds)
  })
    
}

function addImages(imgLinks) {
  imgLinks.forEach(imgLink => addImg(imgLink))
}

function addImg(imgURL) {
  const imgContainer = document.getElementById("dog-image-container")
  const imgTag = document.createElement('img')
  imgTag.src = imgURL
  imgContainer.appendChild(imgTag)
}

function addBreeds(breeds) {
  breedList.innerHTML = ""
  breeds.forEach(breed => addBreed(breed))
}

function addBreed(breed) {
  const li = document.createElement("li")
  li.innerHTML = breed
  breedList.appendChild(li)
}
