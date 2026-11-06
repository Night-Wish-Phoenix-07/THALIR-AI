// Create floating twinkling stars in the background
const starsBox = document.getElementById("stars");
const STAR_COUNT = 40;

for (let i = 0; i < STAR_COUNT; i++) {
  const star = document.createElement("span");
  const size = 4 + Math.random() * 10;

  star.className = "star";
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.width = size + "px";
  star.style.height = size + "px";
  star.style.animationDelay = Math.random() * 5 + "s";
  star.style.animationDuration = 3 + Math.random() * 4 + "s";

  starsBox.appendChild(star);
}
