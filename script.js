console.log("JS Connected");
const roles = [
  "Java Full Stack Developer",
  "Backend Developer",
  "Frontend Developer",
  "SQL Developer",
];

let roleIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function typeEffect() {
  if (charIndex < roles[roleIndex].length) {
    typingElement.innerHTML += roles[roleIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (typingElement.innerHTML.length > 0) {
    typingElement.innerHTML = typingElement.innerHTML.slice(0, -1);

    setTimeout(eraseEffect, 50);
  } else {
    roleIndex++;

    if (roleIndex >= roles.length) {
      roleIndex = 0;
    }

    charIndex = 0;

    setTimeout(typeEffect, 300);
  }
}

typeEffect();
