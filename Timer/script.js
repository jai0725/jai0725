let a = 0;
let b;

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function startTimer() {
  if (a > 0 && !b) {
    b = setInterval(() => {
      a--;
      document.getElementById('display').innerText = formatTime(a);
      if (a === 0) {
        clearInterval(b);
        b = null;
      }
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(b);
  b = null;
}

function resetTimer() {
  clearInterval(b);
  b = null;
  a = 0;
  document.getElementById('display').innerText = formatTime(a);
}

function setTime() {
  const input = parseInt(document.getElementById('inputTime').value);
  if (!isNaN(input)) {
    a = input;
    document.getElementById('display').innerText = formatTime(a);
  }
}
