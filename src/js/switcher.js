"use strict"

const html = document.querySelector("#html")
const switcher = document.querySelector("#switcher")
const thumb = document.querySelector("#thumb")

const move = () => {
  thumb.classList.toggle("active")
  if (thumb.classList.contains("active")){
    thumb.style.transform = "translateX(calc(-100% - 0.5625rem)"
  }else {
    thumb.style.transform = "translateX(0)"
  }
}

const change_mode = () => {
  html.classList.toggle("dark")
}

switcher.addEventListener("click", () => {
  move()
  change_mode()
})
