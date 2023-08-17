// document.getElementsByTagName("html").classList.add("light")

// document.getElementsByTagName("html").classList.remove("light")
const html = document.documentElement

document.getElementById("switch").addEventListener("click", function (params) {
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    // img.setAttribute("src", "./assets/avatar-light.png")
    img.src = "./assets/avatar-light.png"
    img.alt = "Uma Imagem em Light"
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.alt = "Uma Imagem em Dark"
  }
})
