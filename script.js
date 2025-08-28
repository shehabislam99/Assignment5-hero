// Love Count
let LoveCount = 0;
const LoveCountValue = document.getElementById("LoveCount");
document.querySelectorAll(".LoveCnt").forEach((btn) => {
  btn.addEventListener("click", () => {
    LoveCount++;
    LoveCountValue.textContent = LoveCount;
  });
});

// Copy number and count
let copyCount = 0;
const copyCounter = document.getElementById("copyCount");
const copyCountValue =
  document.querySelector("header .copy-count") ||
  document.querySelector("span#copyCount");
document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const number = btn.dataset.number;
    navigator.clipboard.writeText(number);
    alert("Number was copied: " + number);
    copyCount++;
    copyCountValue.textContent = copyCount;
  });
});

// calling
let coinCount = 100;
const coinCounter = document.getElementById("coinCount");
const coinCountevalue =
  document.querySelector("header .coin-count") ||
  document.querySelector("span#coinCount");

document.querySelectorAll(".call-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const serviceName = btn.dataset.service;
    const serviceNumber = btn.dataset.number;

    if (coinCount < 20) {
      alert("You don't have enough coin!! you need 20 coin make a call");
      return;
    }

    // reduce coin
    coinCount -= 20;
    coinCountevalue.textContent = coinCount;

    alert(`Calling ${serviceName} (${serviceNumber})`);

    //Instant Time
    const now = new Date();
    const timeString = now.toLocaleTimeString();

    const span = document.createElement("span");
    span.textContent = `${serviceName} - ${serviceNumber} (${timeString})`;
    callHistoryList.appendChild(span);
  });
});

// clear calling history
const clearHistoryBtn = document.getElementById("clearHistory");
const callHistoryList = document.getElementById("callHistoryList");
clearHistoryBtn.addEventListener("click", () => {
  callHistoryList.innerHTML = "";
});
