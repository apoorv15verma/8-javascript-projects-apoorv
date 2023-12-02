const button = document.querySelectorAll('.button');

const body = document.querySelector('body');

button.forEach(function (button) {
  console.log(button.id);

  button.addEventListener('click', function (e) {
    console.log();

    body.style.backgroundColor = e.target.id;
  });
});
