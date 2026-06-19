// =========================
// CORAZONES FLOTANTES
// =========================

const heartsContainer =
document.getElementById("hearts");

for(let i = 0; i < 30; i++){

    const heart =
    document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "💙";

    heart.style.left =
    Math.random() * 100 + "%";

    heart.style.fontSize =
    Math.random() * 20 + 15 + "px";

    heart.style.animationDuration =
    (Math.random() * 10 + 8) + "s";

    heart.style.opacity =
    Math.random();

    heartsContainer.appendChild(heart);

}

// =========================
// FLORES
// =========================

const flowers =
document.querySelectorAll(".flower");

const flowerMessage =
document.getElementById("flowerMessage");

flowers.forEach(flower=>{

    flower.addEventListener("click",()=>{

        flowerMessage.innerHTML =
        flower.dataset.text;

        flowerMessage.style.opacity = "0";

        setTimeout(()=>{

            flowerMessage.style.opacity = "1";

        },50);

    });

});

// =========================
// MUSICA
// =========================

const music =
document.getElementById("bgMusic");

const musicBtn =
document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click",()=>{

    if(!playing){

        music.play();

        musicBtn.innerHTML = "💙";

        playing = true;

    }

    else{

        music.pause();

        musicBtn.innerHTML = "🎵";

        playing = false;

    }

});

// =========================
// FRASES FLOTANTES
// =========================

const phrases = [

    "me gusta hablar contigo 💖",

    "eres tranquilidad 🌸",

    "me haces feliz ✨",

    "gracias por existir 🌷",

    "ojalá seguir contigo 🌙"

];

for(let i = 0; i < 15; i++){

    const phrase =
    document.createElement("div");

    phrase.classList.add("floating-phrase");

    phrase.innerHTML =
    phrases[
        Math.floor(
            Math.random() * phrases.length
        )
    ];

    phrase.style.left =
    Math.random() * 100 + "%";

    phrase.style.top =
    Math.random() * 100 + "%";

    phrase.style.animationDuration =
    (Math.random() * 10 + 8) + "s";

    document.body.appendChild(phrase);

}

const letters =
document.querySelectorAll(".letter-card");

const popup =
document.getElementById("popupLetter");

letters.forEach(card=>{

    card.addEventListener("click",()=>{

        popup.innerHTML =
        card.dataset.text;

        popup.style.opacity = "1";

    });

});

const themeBtn =
document.getElementById("themeBtn");

let dark = false;

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    dark = !dark;

    themeBtn.innerHTML =
    dark ? "☀️" : "🌙";

});
const observer =
new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, { threshold:0.2 });

document.querySelectorAll(
".polaroid, .letter-card"
).forEach(el=>{

    el.style.opacity = "0";

    el.style.transform = "translateY(40px)";

    el.style.transition = "0.8s";

    observer.observe(el);

});