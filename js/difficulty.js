const button = document.querySelectorAll("button");


const selectHanler = (event) => {
    const level = event.target.innerText.toLowerCase();
    localStorage.setItem("level", level);
    window.location.assign("/");
}

button.forEach(button => {
    button.addEventListener("click", selectHanler);
})