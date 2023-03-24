const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

let trackedDatetime = new Date();

const msInSecond = 1000;

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  UpdateTimer();
  return (seconds) => {
    var timerId = setInterval(UpdateTimer, msInSecond)
    setTimeout(() => clearTimeout(timerId), seconds * msInSecond);
  };
};

function UpdateTimer() {
  trackedDatetime = new Date(trackedDatetime.getTime() + msInSecond);
  timerEl.textContent = `${trackedDatetime.toLocaleTimeString("ru-ru")}`; // display tracked time
  // timerEl.textContent = `${new Date().toLocaleTimeString("ru-ru")}`; // always current time
}

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/[^0-9]/g, '');;
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
