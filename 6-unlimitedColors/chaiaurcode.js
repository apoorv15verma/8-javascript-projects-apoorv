const start = document.querySelector('#start');

const stop = document.querySelector('#stop');

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  return color;
};

let bool = false;

start.addEventListener('click', function () {
  bool = true;
  setInterval(startProcess, 2000);
});

const startProcess = function () {
  if (bool === true) {
    document.body.style.backgroundColor = randomColor();
  }
};

stop.addEventListener('click', function () {
  bool = false;
});
