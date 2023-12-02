const form = document.querySelector('form');

const results = document.querySelector('#results');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  console.log(height);

  const weight = parseInt(document.querySelector('#weight').value);
  console.log(weight);
  let ans = height - weight;
  results.innerHTML = `Your bmi is   ${ans}`;
});
