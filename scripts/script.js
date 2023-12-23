// (23/dec/2023) Finished, but I cheated because I don't have the skill level yet. I need to keep learning, and when I do, I'll come back to create a new calculator with my own knowledge.

let display = document.getElementById('display');

function clearDisplay() {
  display.value = '';
}

function appendToDisplay(value) {
  display.value += value;
}

function calculateResult() {
  try {
    const result = Function('"use strict";return (' + display.value + ')')();
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}