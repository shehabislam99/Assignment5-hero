// Love Count
let LoveCount = 0;
const LoveCountValue = document.getElementById("LoveCount");

const loveBtn = document.getElementsByClassName("LoveCnt");
for (let i = 0; i < loveBtn.length; i++) {
  loveBtn[i].addEventListener("click", function () {
    LoveCount++;
    LoveCountValue.textContent = LoveCount;
  });
}

// Copy number and count
let copyCount = 0;
const copyCountValue = document.getElementById("copyCount");
const copyBtn = document.getElementsByClassName("copy-btn");

for (let i = 0; i < copyBtn.length; i++) {
  copyBtn[i].addEventListener("click", function () {
    const number = copyBtn[i].dataset.number;

    alert("Number was copied: " + number);
    copyCount++;
    copyCountValue.textContent = copyCount;

    navigator.clipboard.writeText(number);
  });
}

// calling
let coinCount = 100;
const coinCountValue = document.getElementById("coinCount");
const callBtn = document.getElementsByClassName("call-btn");

for (let i = 0; i < callBtn.length; i++) {
  callBtn[i].addEventListener("click", function () {
    const service_name = callBtn[i].dataset.service;
    const service_number = callBtn[i].dataset.number;

    if (coinCount < 20) {
      alert("You don't have enough coin!! you need 20 coin make a call");
      return;
    }

    // reduce coin
    coinCount -= 20;
    coinCountValue.textContent = coinCount;

    alert(`Calling ${service_name} (${service_number})`);

    //Instant Time
    const now = new Date();
    const timeString = now.toLocaleTimeString();

    const span = document.createElement("span");
    span.innerHTML = `
  <div class=" ml-4 mr-4 flex my-6 justify-between">
    <div>
      <h1 class="inter font-bold">${service_name}<h1>
      <p class="hind-madurai text-[#5C5C5C]">${service_number}</p>
    </div>
    <div class="hind-madurai font-semibold mt-4">${timeString}</div>
  </div>
`;
    callHistoryList.appendChild(span);
  });
}

// clear calling history
const clearCallHistoryBtn = document.getElementById("clearCallHistory");
const callHistoryList = document.getElementById("callHistoryList");
clearCallHistoryBtn.addEventListener("click", function () {
  callHistoryList.innerHTML = "";
});
