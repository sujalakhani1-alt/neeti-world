
function openLetter() {
  document.getElementById("message").innerHTML =
    "Dear Neetiii, 💌<br><br>" +
    "I don't know how to explain it, but somehow you make even the simplest moments feel special. " +
    "No matter how many miles are between us, there's always a little part of my day that belongs to you. " +
    "Keep smiling, okay? ❤️<br><br>" +
    "Yours, from a little distance away. 🌙";
}

function discoverReason() {
  const reasons = [
    "Your smile has its own way of making my day. ❤️",
    "You make ordinary moments feel special. 🌷",
    "Talking to you is one of my favourite distractions. 🥹",
    "There's something about you that words can't explain. ✨",
    "You make distance feel a little less difficult. 💗",
    "Simply because you're you. And that's enough. 🌙"
  ];

  const random = Math.floor(Math.random() * reasons.length);

  document.getElementById("message").textContent =
    reasons[random];
}

function tapStar() {
  document.getElementById("message").textContent =
    "Close your eyes, make a little wish, and remember... " +
    "somewhere under this same sky, someone is wishing you happiness too. ✨❤️";
}

