import '/style.css';

let bar = document.getElementById('bar');
let countScreen = document.getElementById('count');

let button = document.getElementById('run');

let loading = false;
let count = 0;
let width = 0;

function progress() {
  count++;
  countScreen.innerText = count;
  if (loading == false) {
    width = 0;
    tick();
  }
}

function tick() {
  loading = true;
  width++;
  if (width == 100) {
    width = 0;
    count--;
    countScreen.innerText = count;
    if (count < 1) {
      loading = false;
      return;
    }
  }

  bar.style.width = `${width}%`;
  setTimeout(tick, 30);
}

button.addEventListener('click', progress);

// Point to remember: The main logic is - increase the width using the setTimeout,
// make the flag loader to true when increasing the width
// and increase the count automatically when click, In this way the count will be increased and the previous tick function wont stop, resulting in the queue
