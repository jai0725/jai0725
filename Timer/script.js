let timeLeft = 0;
let timerId;

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function startTimer() {
  if (timeLeft > 0 && !timerId) {
    timerId = setInterval(() => {
      timeLeft--;
      document.getElementById('display').innerText = formatTime(timeLeft);
      if (timeLeft === 0) {
        clearInterval(timerId);
        timerId = null;
      }
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timerId);
  timerId = null;
}

function resetTimer() {
  clearInterval(timerId);
  timerId = null;
  timeLeft = 0;
  document.getElementById('display').innerText = formatTime(timeLeft);
}

function setTime() {
  const inputTime = parseInt(document.getElementById('inputTime').value);
  if (!isNaN(inputTime)) {
    timeLeft = inputTime;
    document.getElementById('display').innerText = formatTime(timeLeft);
  }
}
