const button = document.getElementById('button');
const counter = document.getElementById('counter');
let cont = 0

button.addEventListener('click', () => {
  cont += 1;
  counter.innerHTML = cont;
})
