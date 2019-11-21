console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function(){
    
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(json => json.message.forEach(element => {imageDisplay(element)}))

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(json => breedDisplay(json.message))

const breed = document.querySelector('ul')
const breedFilter = document.getElementById("breed-dropdown")
const listItem = document.querySelectorAll("dog-breed")
const filterOption = document.querySelector('li')

breed.addEventListener("click", (e) => {
    if (e.target.className === "dog-breed"){
        e.target.style.color = "magenta"
    }
    })

breedFilter.addEventListener("change", (e) => {
    if (listItem.innerText !== e.target.value) {
        listItem.style.visibility = "hidden"
    }
})    
    
})
function breedDisplay(object){
    for (const key in object){
        let newLi = document.createElement('li')
        newLi.innerText = key
        newLi.className = "dog-breed"
        document.getElementById("dog-breeds").appendChild(newLi)
    }
}

function imageDisplay(imageURL){
    let imageTag = document.createElement('img')
    imageTag.src = imageURL
    document.getElementById("dog-image-container").appendChild(imageTag)
}

