let numbers = [];

for (let i = 0; i < 3; i++) {
  let num = prompt(`Enter number ${i + 1}:`);
  while (isNaN(num) || num.trim() === "") {
    num = prompt(`Invalid! Please enter a valid number ${i + 1}:`);
  }
  numbers.push(Number(num));
}

const sum = numbers[0] + numbers[1] + numbers[2];
const product = numbers[0] * numbers[1] * numbers[2];
const division = numbers[0] / numbers[1] / numbers[2];

const resultsDiv = document.getElementById("results");

resultsDiv.innerHTML = `
  <div class="result add">
    <strong>sum of the 3 values</strong> ${numbers[0]} + ${numbers[1]} + ${numbers[2]} = ${sum}
  </div>
  <div class="result mul">
    <strong>multiplication of the 3 values</strong> ${numbers[0]} * ${numbers[1]} * ${numbers[2]} = ${product}
  </div>
  <div class="result div">
    <strong>division of the 3 values</strong> ${numbers[0]} / ${numbers[1]} / ${numbers[2]} = ${division.toFixed(2)}
  </div>
`;
