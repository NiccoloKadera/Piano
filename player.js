
const buttons = document.querySelectorAll("[data-letter]")
const arrKeys = ["a", "w", "s", "e", "d", "f", "t", "g", "y", "h", "u", "j", "k", "o", "l", "p", "ò", "à"]
const arrKeysUP = ["w", "e", "t", "y", "u", "o", "p"]


function sound(letter) {
    const Epath = "Suoni/" + letter.toUpperCase() + ".mp3"
    var audio = new Audio(Epath)
    audio.play()
    console.log("Audio")
}

function active(element) {
    if (arrKeysUP.includes(element.getAttribute("id").slice(-1).toLowerCase())) {
        element.classList.add("activeUP")
        setTimeout(() => {
            element.classList.remove("activeUP")
        }, 150);
    } else {
        element.classList.add("active")
        setTimeout(() => {
            element.classList.remove("active")
        }, 150);
    }

}

function findElement(letter) {
    var finalElement = null
    for (let index = 0; index < buttons.length; index++) {
        const element = buttons[index];
        if (letter.toUpperCase() == element.getAttribute("id").slice(-1)) {
            var finalElement = element
        }
    };
    return finalElement
}


buttons.forEach(element => {
    element.addEventListener("click", e => {
        const ELetter = element.getAttribute("id").slice(-1);
        sound(ELetter)
        active(element)
    });
});

document.addEventListener('keydown', (event) => {
    if (arrKeys.includes(event.key)) {
        sound(event.key)
        const element = findElement(event.key)
        active(element)
    }
});

