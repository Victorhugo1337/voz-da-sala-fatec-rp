document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger")
  const socialMenu = document.querySelector(".menu-icones")

  hamburger.addEventListener("click", () => {
    socialMenu.classList.toggle("open")
  })
})
