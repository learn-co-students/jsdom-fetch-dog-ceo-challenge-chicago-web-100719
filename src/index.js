console.log('%c HI', 'color: firebrick')

fetch("https://dog.ceo/api/breeds/image/random/4")
.then(resp => resp.json())
.then(json => addImages(json))

fetch('https://dog.ceo/api/breeds/list/all')
.then(resp => resp.json())
.then(json => addBreeds(json))

let ul = document.getElementById("dog-breeds")


ul.addEventListener('click', colorChange)

function addImages(json) {
    let div = document.querySelector("#dog-image-container")
    json.message.forEach(image => {
        let img = document.createElement('img')
        img.src = `${image}`
        div.append(img)
    });
}

function addBreeds(json) {
    Object.keys(json.message).forEach(breed => {
        let li = document.createElement('li');
        li.innerText = `${breed}`;
        li.className = 'breedList'
        ul.append(li);
    })
}

function colorChange(event) {
    if (event.target.className === 'breedList') {
        if (event.target.style.color === 'red') {
            event.target.style.color = 'black';
        } else {
            event.target.style.color = 'red';
        }
    }
}

