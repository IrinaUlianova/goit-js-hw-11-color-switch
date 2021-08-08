const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
// Ссылки на кнопки
const refs = {
  bodyColor: document.querySelector("body"),

  startBtn: document.querySelector('button[data-action = "start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};
// События на кнопку
refs.startBtn.addEventListener("click", start);
refs.stopBtn.addEventListener("click", stop);
// Найти рендомное число
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
// Заинлайнить стили
function changeBackground(color) {
  refs.bodyColor.style.backgroundColor = color;
}
// Интервал
let intervalColorChange = undefined;
function start() {
  intervalColorChange = setInterval((randomNumber) => {
    randomNumber = randomIntegerFromInterval(0, 5);
    changeBackground(colors[randomNumber]);
  }, 1000);
  refs.startBtn.setAttribute("disabled", true);
  refs.stopBtn.removeAttribute("disabled");
}
function stop() {
  clearInterval(intervalColorChange);
  refs.stopBtn.setAttribute("disabled", true);
  refs.startBtn.removeAttribute("disabled");
}
