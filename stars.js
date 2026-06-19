const starsContainer =
document.getElementById("stars");

for(let i = 0; i < 120; i++){

    const star =
    document.createElement("div");

    star.classList.add("star");

    star.style.top =
    Math.random() * 100 + "%";

    star.style.left =
    Math.random() * 100 + "%";

    starsContainer.appendChild(star);

}