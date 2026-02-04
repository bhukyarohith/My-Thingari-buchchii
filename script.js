const yes = document.getElementById("yes");
const no = document.getElementById("no");
const title = document.getElementById("title");
const video = document.getElementById("video");
const image = document.getElementById("image");
const finalText = document.getElementById("final-text");
const song = document.getElementById("song");

let stage = 1;

// helpers
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
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);
  no.style.position = "absolute";
  no.style.left = x + "px";
  no.style.top = y + "px";
}

// STAGE 1 – eyes
showImage("images/eyes.png");
title.textContent = "Hey beautiful, will you be my Valentine?";

// NO
no.onclick = () => {
  if (stage === 1) {
    stage = 2;
    showVideo("images/cat-sad.mp4");
    title.textContent =
      "I'm asking you again my dear bakka papa, will you be my Valentine?";
  } else if (stage === 2) {
    moveNo();
  }
};

// YES
yes.onclick = () => {
  if (stage === 1) {
    stage = 3;
    showImage("images/cat-flower.png");
    title.textContent = "Are you sure bangaram?";
  } else if (stage === 2) {
    stage = 3;
    showImage("images/cat-flower.png");
    title.textContent = "Are you sure little princess?";
  } else if (stage === 3) {
    finalStage();
  }
};

function finalStage() {
  yes.remove();
  no.remove();

  showVideo("images/cat-happy.mp4");

  title.textContent = "See you on the 14th, My Princess 💖";
  finalText.textContent =
    "NO tap chesi untey nee pani aipoyedhi 😤👊🏻";
  finalText.style.display = "block";

  // YouTube autoplay from 3:33, no controls
  song.src =
    "https://www.youtube.com/embed/2nbj5UT-1Jc?start=213&autoplay=1&controls=0&rel=0&showinfo=0";
  song.style.display = "block";
}
