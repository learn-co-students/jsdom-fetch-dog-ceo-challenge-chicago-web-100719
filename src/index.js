

console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    addListener()
    fetchImage()
    fetchBreed()
    
})

//////////////////////////////////// 
function addListener(){
    const dropdown = document.getElementById('breed-dropdown')
    dropdown.addEventListener('change', (event) => filterBreed(event)) 
}

function fetchBreed(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(breeds => addBreeds(breeds))
}

function fetchImage(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => addImages(json))
}

////////////////////////////

function filterBreed(event){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(breeds => filterBreeds(breeds, event))
}

function filterBreeds(breed, event){
    let dogs = breed.message
    const dogBreeds = document.getElementById('dog-breeds')
    dogBreeds.innerHTML = ""
    const breedsArray = []
    for(const key in dogs){
        breedsArray.push(key)
        }
    breedsArray.forEach(breed => {
            let letterArray = breed.split('')
            let letter = event.target.value
            if (letterArray[0] === letter){
                renderBreed(breed)
            } else if (event.target.value === "all"){
                renderBreed(breed)
            }
        })
}

/////////////////////////////////////////////////////////////////////////
function addImages(json){
    let array = json.message
    // console.log(json.message)
    const dogImages = document.getElementById('dog-image-container')
    array.forEach(item => {
        const breedDiv = document.createElement('div')
        const breedImg = document.createElement('img')
        breedImg.src = item
        breedDiv.append(breedImg)
        dogImages.append(breedDiv)  
    })
}

function addBreeds(breeds){
    console.log(breeds.message)
    let dogs = breeds.message
    // console.log(dogs)
    const dogBreeds = document.getElementById('dog-breeds')

    for(const key in dogs){
        renderBreed(key)
    }
}

function renderBreed(breed){
    const dogBreeds = document.getElementById('dog-breeds')
    const breedLi = document.createElement('li')
    breedLi.addEventListener('click', (event) => changeColor(event))
    breedLi.innerHTML = breed
    dogBreeds.append(breedLi)
}

////////////////////////////////////////////////////////////////////////change color

function changeColor(event){
        event.target.style.color = color()
}

function color(){
    let array = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'pink']
    return array[Math.floor(Math.random() * array.length)]
}


    
