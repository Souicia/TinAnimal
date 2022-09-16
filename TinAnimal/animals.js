class Dogs {
  constructor (data) {
    Object.assign(this, data)
  }

  pictureDisliked() {
    return `<img class="swap-result" src="img/nope.png" alt="" />`
  }

  pictureLiked() {
    return `<img class="swap-result" src="img/like.png" alt="" />`
  }

  getDogsHTML() {
    const {name, avatar, age, bio} = this
    return `
    <img class="profile-pic" src="${avatar}" alt="" />
    <div class="profile-info">
      <h1 class="profile-name">${name}, ${age}</h1>
      <p class="profile-descr">${bio}</p>
    </div>
    `
  }
}

class Cats {
  constructor (data) {
    Object.assign(this, data)
  }

  pictureDisliked() {
    return `<img class="swap-result" src="img/nope.png" alt="" />`
  }

  pictureLiked() {
    return `<img class="swap-result" src="img/like.png" alt="" />`
  }

  getCatsHTML() {
    const {name, avatar, age, bio} = this
    return `
    <img class="profile-pic" src="${avatar}" alt="" />
    <div class="profile-info">
      <h1 class="profile-name color">${name}, ${age}</h1>
      <p class="profile-descr color">${bio}</p>
    </div>
    `
  }
}

export {Dogs, Cats}