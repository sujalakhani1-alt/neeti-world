
/* =====================================
   NEETIII'S LITTLE WORLD ❤️
   ===================================== */

let countdownTimer = null;
let selectedDate = null;
let sparkleTimeout = null;

/* HIDE OTHER SURPRISES */

function hideCountdown() {
  const box = document.getElementById("countdown");
  const message = document.getElementById("message");

  box.hidden = true;
  message.style.display = "block";

  if (countdownTimer !== null) {
    clearInterval(countdownTimer);
    countdownTimer = null;
  }

  const sparkleLayer =
    document.querySelector(".sparkle-layer");

  if (sparkleLayer) sparkleLayer.remove();

  if (sparkleTimeout !== null) {
    clearTimeout(sparkleTimeout);
    sparkleTimeout = null;
  }
}

function hideSongPlayer() {
  document.getElementById("songPlayer").hidden = true;

  const song = document.getElementById("dedicatedSong");
  song.pause();

  document.getElementById("songStatus").textContent =
    "Tap Play to listen 💕";
}

/* LOVE LETTER */

function openLetter() {
  hideCountdown();
  hideSongPlayer();

  document.getElementById("message").innerHTML =
    "Dear Neetiii, 💌<br><br>" +
    "I don't know how to explain it, but somehow you make even the simplest moments feel special. " +
    "No matter how many miles are between us, there's always a little part of my day that belongs to you. " +
    "Keep smiling cutu okay? ❤️<br><br>" +
    "Yours, from a little distance away. 🌙";
}

/* DISCOVER A REASON */

function discoverReason() {
  hideCountdown();
  hideSongPlayer();

  const reasons = [
    "Tari little smile makes my day. ❤️",
    "You make ordinary moments feel special. 🌷",
    "Talking to you is one of my favourite distractions. 🥹",
    "There's something about you that words b ochha pade describe krva. ✨",
    "You make distance feel a little less difficult. 💗",
    "Simply because you're you. And that's enough. 🌙"
  ];

  const random = Math.floor(Math.random() * reasons.length);

  document.getElementById("message").textContent =
    reasons[random];
}

/* MAKE A WISH */

function tapStar() {
  hideCountdown();
  hideSongPlayer();

  document.getElementById("message").textContent =
    "Close your eyes, make a little wish and hu aai jais tya and remember... " +
    "somewhere under this same sky, someone is wishing you happiness too. ✨❤️";
}

/* COUNTDOWN DATES */

const meetingDates = [
  ["January 11, 2027", "2027-01-11T00:00:00"],
  ["January 12, 2027", "2027-01-12T00:00:00"],
  ["January 13, 2027", "2027-01-13T00:00:00"]
];

function showCountdown() {
  hideCountdown();
  hideSongPlayer();

  const box = document.getElementById("countdown");
  const message = document.getElementById("message");

  message.style.display = "none";
  box.hidden = false;

  updateCountdown();

  countdownTimer = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
  const box = document.getElementById("countdown");

  let html = `
    <h2>Kyareeeeee Malissssss Goguuuuuu? 🥹❤️</h2>
    <p>Three possible dates, one beautiful moment 💗</p>
    <div class="date-options">
  `;

  meetingDates.forEach(([label, date], index) => {
    const difference =
      new Date(date).getTime() - Date.now();

    const days = Math.max(
      0, Math.floor(difference / 86400000)
    );

    const hours = Math.max(
      0, Math.floor((difference / 3600000) % 24)
    );

    const minutes = Math.max(
      0, Math.floor((difference / 60000) % 60)
    );

    const seconds = Math.max(
      0, Math.floor((difference / 1000) % 60)
    );

    const isSelected = selectedDate === index;

    html += `
      <button
        class="date-choice ${isSelected ? "selected-date" : ""}"
        onclick="chooseDate(${index})"
      >
        💕 ${label}

        <span class="date-timer">
          ${
            difference <= 0
              ? "It's finally time! ❤️"
              : `${days}d : ${hours}h : ${minutes}m : ${seconds}s`
          }
        </span>

        ${isSelected ? "<span>✨ Selected! ✨</span>" : ""}
      </button>
    `;
  });

  html += "</div>";
  box.innerHTML = html;
}

function chooseDate(index) {
  selectedDate = index;

  launchSparkles();
  updateCountdown();
}

/* SPARKLES */

function launchSparkles() {
  const oldLayer =
    document.querySelector(".sparkle-layer");

  if (oldLayer) oldLayer.remove();

  if (sparkleTimeout !== null) {
    clearTimeout(sparkleTimeout);
  }

  const layer = document.createElement("div");
  layer.className = "sparkle-layer";

  document.body.appendChild(layer);

  const particles = ["✨", "💗", "⭐", "💖", "🌸"];

  for (let i = 0; i < 150; i++) {
    const sparkle = document.createElement("span");

    sparkle.className = "sparkle-particle";

    sparkle.textContent =
      particles[Math.floor(Math.random() * particles.length)];

    sparkle.style.left =
      Math.random() * 100 + "vw";

    sparkle.style.top =
      Math.random() * 100 + "vh";

    sparkle.style.fontSize =
      (12 + Math.random() * 22) + "px";

    sparkle.style.animationDelay =
      Math.random() * 0.8 + "s";

    sparkle.style.animationDuration =
      (2 + Math.random() * 2) + "s";

    layer.appendChild(sparkle);
  }

  sparkleTimeout = setTimeout(() => {
    layer.remove();
    sparkleTimeout = null;
  }, 5000);
}

/* SONG DEDICATED TO YOU */

function showSongPlayer() {
  hideCountdown();

  const message = document.getElementById("message");
  const player = document.getElementById("songPlayer");

  message.style.display = "none";
  player.hidden = false;
}

function playSong() {
  const song = document.getElementById("dedicatedSong");
  const status = document.getElementById("songStatus");

  song.play()
    .then(() => {
      status.textContent =
        "Playing just for you, Goguuuu 🎶❤️";
    })
    .catch(() => {
      status.textContent =
        "Couldn't play the song 🥺";
    });
}

function pauseSong() {
  const song = document.getElementById("dedicatedSong");

  song.pause();

  document.getElementById("songStatus").textContent =
    "Paused 💗 Tap Play to continue";
}

/* RESET STATUS WHEN SONG ENDS */

document.getElementById("dedicatedSong")
  .addEventListener("ended", () => {
    document.getElementById("songStatus").textContent =
      "Our little melody has finished 💕";
  });
