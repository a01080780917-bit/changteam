let baseValue = 0;
let currentValue = 0;

const threshold = 80;

const baseText = document.getElementById("baseValue");
const currentText = document.getElementById("currentValue");
const statusText = document.getElementById("status");
const setBaseBtn = document.getElementById("setBaseBtn");

setBaseBtn.addEventListener("click", () => {
  baseValue = currentValue;
  baseText.textContent = baseValue;
});

setInterval(() => {

  currentValue = Math.floor(Math.random() * 500);

  currentText.textContent = currentValue;

  const difference = Math.abs(currentValue - baseValue);

  if (difference > threshold) {

    statusText.textContent = "⚠ 압력 변화 감지!";
    statusText.classList.add("alert");

    showNotification();

  } else {

    statusText.textContent = "정상";
    statusText.classList.remove("alert");
  }

}, 2000);

function showNotification() {

  if (Notification.permission !== "granted") {
    Notification.requestPermission();
  }

  if (Notification.permission === "granted") {

    new Notification("압력 변화 감지!", {
      body: "압력센서 값이 초기값에서 벗어났습니다."
    });
  }
}
