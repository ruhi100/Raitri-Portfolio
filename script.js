const roles = [
    "Software Developer ",
    "Java Developer ",
    "Python Developer ",
    "Web Developer "
];

let roleIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {

    const role = roles[roleIndex];

    if (!isDeleting) {
        currentText = role.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === role.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        currentText = role.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    document.getElementById("changing-text").textContent = currentText;

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();