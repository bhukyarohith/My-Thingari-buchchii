const img = document.getElementById("mediaImage");
const video = document.getElementById("mediaVideo");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const bgm = document.getElementById("bgm");
const bgmControls = document.getElementById("bgmControls");

let noCount = 0;
let yesStage = 0;

function playBgm() {
  bgm.play();
}

function stopBgm() {
  bgm.pause();
  bgm.currentTime = 0;
}

noBtn.onclick = () => {
  noCount++;

  if (noCount === 1) {
    bgmControls.style.display = "flex";
    playBgm();

    img.style.display = "none";
    video.style.display = "block";
    video.src = "images/cat-sad.mp4";
    video.play();

    title.textContent = "I'm asking you again my dear bakka papa 🥺";
    subtitle.textContent = "Will you be my Valentine? (NO tap cheyyaku papa 😕)";
  } else {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);
    noBtn.style.position = "fixed";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  }
};

yesBtn.onclick = () => {
  yesStage++;

  if (yesStage === 1) {
    stopBgm();
    bgmControls.style.display = "none";

    video.pause();
    video.style.display = "none";
    img.style.display = "block";
    img.src = "images/cat-flower.png";

    title.textContent = "Are you sure little princess? 😌";
    subtitle.textContent = "abba ante no tap chesi untey nenu oppukunta anukunnava 😏";
  } else {
    img.style.display = "none";
    video.style.display = "block";
    video.src = "images/cat-happy.mp4";
    video.play();

    title.textContent = "See you on the 14th, My Princess 💖";
    subtitle.textContent = "NO tap chesi untey nee pani aipoyedhi 😤👊🏻";

    yesBtn.style.display = "none";
    noBtn.style.display = "none";
  }
};
