const hamburger = document.querySelector(".hamburger");
const list = document.querySelector("#list");

hamburger.addEventListener("click", () => {
    list.classList.toggle("active");
})

document.querySelectorAll(".menulink").forEach(n => n.addEventListener("click", () => {
    list.classList.remove("active");
}))