const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const title = document.getElementById("title");
const message = document.getElementById("message");

const video = document.getElementById("video");
const image = document.getElementById("image");

let stage = 1;

// Helper functions
function showVideo(src) {
  image.style.display = "none";
  video.style.display = "block";
  video.src = src;
  video.play();
}

function showImage(src) {
  video.pause();
  video.style.display = "none";
  image.style.display = "block";
  image.src = src;
}

function moveNoButton() {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

// Initial state
showVideo("images/cat-happy.mp4");

// NO button logic
noBtn.onclick = () => {
  if (stage === 1) {
    stage = 2;
    title.textContent = "Are you sure?";
    showVideo("images/cat-sad.mp4");
  } else {
    moveNoButton();
  }
};

// YES button logic
yesBtn.onclick = () => {
  if (stage === 1) {
    stage = 3;
    title.textContent = "Are you for sure?";
    showImage("images/eyes.png");
  } else if (stage === 3) {
    finalStage();
  }
};

function finalStage() {
  yesBtn.remove();
  noBtn.remove();

  title.textContent = "See you on the 14th, My Princess 💖";
  message.textContent = "NO tap chesi untey nee pani aipoyedhi 😤👊🏻";
  message.style.display = "block";

  // Play song from 3:33
  const iframe = document.createElement("iframe");
  iframe.src =
    "https://www.youtube.com/embed/2nbj5UT-1Jc?start=213&autoplay=1";
  iframe.allow = "autoplay";
  iframe.style.marginTop = "20px";
  iframe.style.borderRadius = "12px";
  iframe.width = "300";
  iframe.height = "170";

  document.querySelector(".card").appendChild(iframe);

  launchHearts();
}

function launchHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.innerText = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = "22px";
    heart.style.animation = "float 3s linear";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }
}

// Heart animation
const style = document.createElement("style");
style.innerHTML = `
@keyframes float {
  to {
    transform: translateY(-120vh);
    opacity: 0;
  }
}`;
document.head.appendChild(style);
