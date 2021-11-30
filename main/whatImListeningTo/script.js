const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");


const optionsList = document.querySelectorAll(".option");
const playlistSelected = document.querySelector(".spotifyFrame")

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
        playlistSelected.src = o.querySelector("input").getAttribute("src");
    });
});

function myPage() {
    window.location = ("../index.html");
}