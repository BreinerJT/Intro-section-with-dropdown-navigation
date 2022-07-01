const navToggle = document.querySelector(".nav-toggle")
const closeBtn = document.querySelector(".close-btn")
const sidebar = document.querySelector(".sidebar")
const drops = document.querySelectorAll(".js-drop")

navToggle.addEventListener("click", () => {
    sidebar.classList.toggle("show-sidebar")
})
closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar")
})

drops.forEach(drop => {
    drop.addEventListener("click", (e) => {
        const element = e.currentTarget
        const droplist = element.querySelector(".js-uldrop")
        const arrow = element.querySelector(".js-arrow")
        droplist.classList.toggle("show-dropdown")
        arrow.classList.toggle("rotate")
    })
})
