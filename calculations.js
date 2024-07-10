document.getElementById('clear-btn').addEventListener('click', () => {
  document.getElementById('display-number').innerHTML = '0';
});

const sevenButton = document.getElementById('seven-btn');
sevenButton.addEventListener('click', () => {
  const number = sevenButton.innerHTML;
  document.getElementById('display-number').innerHTML = number;
});

const eightButton = document.getElementById('eight-btn');
console.log(eightButton.innerHTML);
