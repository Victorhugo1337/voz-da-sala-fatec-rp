document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger")
  const menuIcones = document.querySelector(".menu-icones")

  hamburger.addEventListener("click", () => {
    menuIcones.classList.toggle("open")
  })
  document.addEventListener("click", (event) => {
    if (
      !hamburger.contains(event.target) &&
      !menuIcones.contains(event.target)
    ) {
      menuIcones.classList.remove("open")
    }
  })
})
