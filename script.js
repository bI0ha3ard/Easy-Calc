let input = document.getElementById('result');

function addToInput(value) {
  input.value += value;
}

function clearInput() {
  input.value = '';
}

function calculate() {
  let expression = input.value;
  if (expression) {
    input.value = eval(expression);
  }
}
