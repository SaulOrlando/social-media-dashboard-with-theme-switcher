"use strict"

const html = document.querySelector("#html")
const switcher = document.querySelector("#switcher")
const thumb = document.querySelector("#thumb")

switcher.addEventListener("click", () => {
  thumb.classList.toggle("active")
  if (thumb.classList.contains("active")){
    thumb.style.transform = "translateX(calc(-100% - 0.5625rem)"
  }else {
    thumb.style.transform = "translateX(0)"
  }
})
