// document.getElementsByTagName("html").classList.add("light")

// document.getElementsByTagName("html").classList.remove("light")
const html = document.documentElement

document.getElementById("switch").addEventListener("click", function (params) {
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  const credit = document.querySelector("footer #credit")
  const creditPhoto = document.querySelector("footer #credit-photo")

  if (html.classList.contains("light")) {
    // img.setAttribute("src", "./assets/avatar-light.png")
    img.src = "./assets/avatar-light.png"
    img.alt = "Uma Imagem em Light"

    credit.href =
      "https://unsplash.com/@pedropiteiramonteiro?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    credit.innerHTML = "Pedro Monteiro"
    creditPhoto.href =
      "https://unsplash.com/photos/HfIex7qwTlI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.alt = "Uma Imagem em Dark"

    credit.href =
      "https://unsplash.com/@jplenio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    credit.innerHTML = "Johannes Plenio"
    creditPhoto.href =
      "https://unsplash.com/photos/hvrpOmuMrAI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
  }
})
