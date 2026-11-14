
function openLetter() {
  document.getElementById("message").innerHTML =
    "Dear Neetiii, 💌<br><br>" +
    "I don't know how to explain it, but somehow you make even the simplest moments feel special. " +
    "No matter how many miles are between us, there's always a little part of my day that belongs to you. " +
    "Keep smiling cutu okay? ❤️<br><br>" +
    "Yours, from a little distance away. 🌙";
}

function discoverReason() {
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

function tapStar() {
  document.getElementById("message").textContent =
    "Close your eyes, make a little wish and hu aai jais tya and remember... " +
    "somewhere under this same sky, someone is wishing you happiness too. ✨❤️";
}
let countdownTimer = null;

function showCountdown() {
    const box = document.getElementById("countdown");

    box.hidden = false;

    function updateCountdown() {
        const dates = [
            ["January 11, 2027", "2027-01-11T00:00:00"],
            ["January 12, 2027", "2027-01-12T00:00:00"],
            ["January 13, 2027", "2027-01-13T00:00:00"]
        ];

        let html = "<h2>Kyareeeeee Malissssss Goguuuuuu? 🥹❤️</h2>";
        html += "<p>Three possible dates, one beautiful moment 💗</p>";

        dates.forEach(([label, date]) => {
            const difference = new Date(date).getTime() - Date.now();

            if (difference <= 0) {
                html += `<div class="countdown-card">
                    <h3>${label}</h3>
                    <p>It's finally time! ❤️</p>
                </div>`;
                return;
            }

            const days = Math.floor(difference / 86400000);
            const hours = Math.floor((difference / 3600000) % 24);
            const minutes = Math.floor((difference / 60000) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            html += `
                <div class="countdown-card">
                    <h3>💕 ${label}</h3>
                    <div class="timer">
                        ${days}d : ${hours}h : ${minutes}m : ${seconds}s
                    </div>
                </div>
            `;
        });

        box.innerHTML = html;
    }

    updateCountdown();

    if (countdownTimer !== null) {
        clearInterval(countdownTimer);
    }

    countdownTimer = setInterval(updateCountdown, 1000);
}
