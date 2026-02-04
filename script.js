let stage = 0;
const bgm = document.getElementById("bgm");
const video = document.getElementById("video");
const image = document.getElementById("image");

function playBGM() {
  bgm.play();
}
function stopBGM() {
  bgm.pause();
  bgm.currentTime = 0;
}

function noClick() {
  navigator.vibrate?.(80);

  if (stage === 0) {
    stage = 1;
    bgm.play();
    video.src = "images/cat-sad.mp4";
    video.style.display = "block";
    image.style.display = "none";
    video.play();

    document.getElementById("subtitle").innerText =
      "I'm asking you again my dear bakka papa, will you be my Valentine?\nNO tap cheyyaku papa 😕";

    document.getElementById("bgmControls").style.display = "flex";
  } else {
    const btn = document.getElementById("noBtn");
    btn.style.position = "absolute";
    btn.style.left = Math.random() * 70 + "%";
    btn.style.top = Math.random() * 70 + "%";
  }
}

function yesClick() {
  stopBGM();

  if (stage <= 1) {
    stage = 2;
    video.style.display = "none";
    image.src = "images/cat-flower.png";
    image.style.display = "block";

    document.getElementById("subtitle").innerText =
      "Are you sure little princess?\nabba ante no tap chesi untey nenu oppukunta anukunnava 😏😌";
  } else {
    stage = 3;
    image.style.display = "none";
    video.src = "images/cat-happy.mp4";
    video.style.display = "block";
    video.play();

    document.getElementById("finalText").innerText =
      "See you on the 14th, My Princess 💖\nNO tap chesi untey nee pani aipoyedhi 😤👊🏻";

    confetti();
  }
}

/* Confetti */
function confetti() {
  for (let i = 0; i < 40; i++) {
    const c = document.createElement("div");
    c.innerText = "💖";
    c.style.position = "fixed";
    c.style.left = Math.random() * 100 + "vw";
    c.style.top = "-10px";
    c.style.fontSize = "24px";
    c.style.animation = "fall 3s linear";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3000);
  }
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  to { transform: translateY(110vh); opacity: 0; }
}`;
document.head.appendChild(style);
