document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger")
  const menuLinks = document.querySelector(".menu-links")

  hamburger.addEventListener("click", () => {
    menuLinks.classList.toggle("open")
  })

  document.addEventListener("click", (event) => {
    if (
      !hamburger.contains(event.target) &&
      !menuLinks.contains(event.target)
    ) {
      menuLinks.classList.remove("open")
    }
  })
})
