import {dogs, cats} from "./data.js"
import {Dogs, Cats} from "./animals.js"


const infoContainer = document.getElementById('profileHTML')
let allDogs = new Dogs(dogs[0])
let allCats = new Cats(cats[0])
let dogActive = false
let catActive = false
let a = 0
let i = 0

window.addEventListener('DOMContentLoaded', () => document.getElementById('footer').style.display = "none")

const renderFirstDog = () => {
  document.getElementById('homepage').style.display = "none"
  infoContainer.style.display = "block"
  infoContainer.innerHTML = allDogs.getDogsHTML()
  document.getElementById('footer').style.display = "flex"
}
document.getElementById('tinDog').addEventListener('click', () => {
   renderFirstDog()
   dogActive = true
   catActive = false
})

const renderFirstCat = () => {
  document.getElementById('homepage').style.display = "none"
  infoContainer.style.display = "block"
  infoContainer.innerHTML = allCats.getCatsHTML()
  document.getElementById('footer').style.display = "flex"
}
document.getElementById('tinCat').addEventListener('click', () => {
  renderFirstCat()
  dogActive = false
  catActive = true
})

const endMessage = () => {
  infoContainer.innerHTML = `
  <h1 class="end-title">Thank you for swiping!</h1>
  <p class="descr">
    We will add more profiles in the future. In the meantime, please look
    at other species that you may be interested in. Remember to be
    open-minded, you never know who will be your soulmate 🥰.
  </p>
  <div class="div-btn">
    <button class="home-btn" id="homepage-btn">Return to homepage</button>
  </div>
  `
  document.getElementById('footer').style.display = "none"
  document.getElementById('homepage-btn').addEventListener('click', () => {
    document.getElementById('homepage').style.display = "flex"
    document.getElementById('footer').style.display = "none"
    infoContainer.style.display = "none"
  })
}

document.getElementById('like-btn').addEventListener('click', () => {
  infoContainer.innerHTML += allDogs.pictureLiked()
  setTimeout(() => infoContainer.style.animation = `swipedRight 1s ease-in-out`, 500)
  setTimeout(() => infoContainer.style.removeProperty('animation'), 1500) 

  if (dogActive === true) {
    setTimeout(() => {
      if (i < dogs.length - 1){
        i++
        allDogs = new Dogs(dogs[i])
        infoContainer.innerHTML = allDogs.getDogsHTML()
    }else {
      endMessage()
      allDogs = new Dogs(dogs[0])
      i = 0
    }
    }, 1500)
  }else {
    setTimeout(() => {
      if (a < cats.length - 1){
        a++
        allCats = new Cats(cats[a])
        infoContainer.innerHTML = allCats.getCatsHTML()
    }else {
      endMessage()
      allCats = new Cats(cats[0])
      a = 0
    }
    }, 1500)
  } 
})

document.getElementById('dislike-btn').addEventListener('click', () => {
  infoContainer.innerHTML += allDogs.pictureDisliked()
  setTimeout(() => infoContainer.style.animation = `swipedLeft 1s ease-in-out`, 500)
  setTimeout(() => infoContainer.style.removeProperty('animation'), 1500) 
  if (dogActive === true) {
    setTimeout(() => {
      if (i < dogs.length - 1){
        i++
        allDogs = new Dogs(dogs[i])
        infoContainer.innerHTML = allDogs.getDogsHTML()
    }else {
      endMessage()
      allDogs = new Dogs(dogs[0])
      i = 0
    }
    }, 1500) 
  }else {
    setTimeout(() => {
      if (a < cats.length - 1){
        a++
        allCats = new Cats(cats[a])
        infoContainer.innerHTML = allCats.getCatsHTML()
    }else {
      endMessage()
      allCats = new Cats(cats[0])
      a = 0
    }
    }, 1500)
  }
})