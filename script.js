// Wildlife slideshow
const wildlifeImages = [
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
  "https://images.unsplash.com/photo-1500534623283-312aade485b7",
  "https://images.unsplash.com/photo-1500534623283-312aade485b7",
  "https://images.unsplash.com/photo-1500534623283-312aade485b7"
];

let bgIndex = 0;
const bgEl = document.querySelector(".bg-slideshow");

function cycleBackground() {
  bgEl.style.backgroundImage = `url('${wildlifeImages[bgIndex]}')`;
  bgIndex = (bgIndex + 1) % wildlifeImages.length;
}

cycleBackground();
setInterval(cycleBackground, 6000);

// Hover sound
const hoverSound = document.getElementById("hoverSound");
document.querySelectorAll(".animal-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });
});

// Scroll reveal
function revealOnScroll() {
  document.querySelectorAll(".reveal").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Animal sound effects
const animalSounds = {
  "Lion": document.getElementById("sound-lion"),
  "Elephant": document.getElementById("sound-elephant"),
  "Tiger": document.getElementById("sound-tiger"),
  "Giraffe": document.getElementById("sound-giraffe"),
  "Wolf": document.getElementById("sound-wolf")
};

document.querySelectorAll(".animal-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    const name = card.querySelector("h2").textContent.trim();
    const sound = animalSounds[name];

    if (sound) {
      sound.currentTime = 0;
      sound.play();
    }
  });
});

