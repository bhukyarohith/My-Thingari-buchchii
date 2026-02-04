const yes = document.getElementById("yes");
const no = document.getElementById("no");
const img = document.getElementById("image");
const title = document.getElementById("title");
const msg = document.getElementById("message");
const song = document.getElementById("song");

let stage = 1;

// NO button movement
function moveNo() {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);
  no.style.position = "absolute";
  no.style.left = x + "px";
  no.style.top = y + "px";
}

// NO click
no.onclick = () => {
  if (stage === 1) {
    stage = 2;
    img.src = "images/cat-sad.png";
    title.textContent = "Are you sure?";
  } else {
    moveNo();
  }
};

// YES click
yes.onclick = () => {
  if (stage === 1) {
    stage = 3;
    img.src = "images/eyes.png";
    title.textContent = "Are you for sure?";
  } else if (stage === 3) {
    finalStage();
  }
};

function finalStage() {
  yes.remove();
  no.remove();

  title.textContent = "See you on the 14th, My Princess 💖";
  msg.textContent = "NO tap chesi untey nee pani aipoyedhi 😤👊🏻";
  msg.classList.remove("hidden");

  song.src =
    "https://www.youtube.com/embed/2nbj5UT-1Jc?start=213&autoplay=1";
  song.classList.remove("hidden");

  launchHearts();
}

function launchHearts() {
  for (let i = 0; i < 20; i++) {
    const h = document.createElement("div");
    h.innerText = "💖";
    h.style.position = "fixed";
    h.style.left = Math.random() * 100 + "vw";
    h.style.top = "100vh";
    h.style.fontSize = "22px";
    h.style.animation = "float 3s linear";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 3000);
  }
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes float {
  to {
    transform: translateY(-120vh);
    opacity: 0;
  }
}`;
document.head.appendChild(style);
