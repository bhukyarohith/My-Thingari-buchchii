const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const yes = document.getElementById("yes");
const no = document.getElementById("no");

const video = document.getElementById("video");
const image = document.getElementById("image");

const noBgm = document.getElementById("noBgm");
const song = document.getElementById("song");

const bgmControls = document.getElementById("bgm-controls");
const playBgm = document.getElementById("playBgm");
const stopBgm = document.getElementById("stopBgm");

let stage = 1;

/* helpers */
function showImage(src) {
  video.pause();
  video.style.display = "none";
  image.style.display = "block";
  image.src = src;
}

function showVideo(src) {
  image.style.display = "none";
  video.style.display = "block";
  video.src = src;
  video.play();
}

function moveNo() {
  no.style.position = "absolute";
  no.style.left = Math.random() * (window.innerWidth - 120) + "px";
  no.style.top = Math.random() * (window.innerHeight - 60) + "px";
}

/* INIT */
showImage("assets/eyes-bg.jpg");
title.textContent = "Hariluhh, will you be my Valentine?";
subtitle.textContent = "";

/* BGM CONTROLS */
playBgm.onclick = () => noBgm.play();
stopBgm.onclick = () => noBgm.pause();

/* NO CLICK */
no.onclick = () => {
  if (stage === 1) {
    stage = 2;
    showVideo("assets/cat-sad.mp4");
    noBgm.play();
    bgmControls.style.display = "block";

    title.textContent =
      "I'm asking you again my dear bakka papa, will you be my Valentine?";
    subtitle.textContent = "NO tap cheyyaku papa 😕";

  } else if (stage === 2) {
    stage = 3;
    subtitle.textContent =
      "baaney extralu 🙄 Yes tap cheyyakapothey maamulgundadhu neeku 😑";
    moveNo();

  } else {
    moveNo();
  }
};

/* YES CLICK */
yes.onclick = () => {
  if (stage < 4) {
    stage = 4;
    bgmControls.style.display = "none";
    noBgm.pause();

    showImage("assets/cat-flower.png");
    title.textContent = "Are you sure little princess?";
    subtitle.textContent =
      "abba ante no tap chesi untey nenu oppukunta anukunnava 😏😌";

  } else {
    stage = 5;
    yes.remove();
    no.remove();
    bgmControls.style.display = "none";
    noBgm.pause();

    showVideo("assets/cat-happy.mp4");
    song.play();

    title.textContent = "See you on the 14th, My Princess 💖";
    subtitle.textContent =
      "NO tap chesi untey nee pani aipoyedhi 😤👊🏻";
  }
};
