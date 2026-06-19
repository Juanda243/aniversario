const flowers =
document.querySelectorAll(".flower");

const messageBox =
document.getElementById("messageBox");

flowers.forEach(flower=>{

    flower.addEventListener("click",()=>{

        const message =
        flower.dataset.message;

        messageBox.innerHTML = message;

        messageBox.classList.add("show");

    });

});