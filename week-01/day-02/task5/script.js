const resultsDiv = document.getElementById("results");

function getInputArray() {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    let value = prompt(`Enter value ${i + 1} of 5:`);
    while (isNaN(value) || value.trim() === "") {
      value = prompt(`Invalid input. Please enter a number for value ${i + 1}:`);
    }
    arr.push(Number(value));
  }
  return arr;
}

function displayResults(arr) {
  resultsDiv.innerHTML = `
    <p class="result">You've entered: ${arr.join(",")}</p>
  `;

  const descending = [...arr].sort((a, b) => b - a);
  resultsDiv.innerHTML += `
    <p class="result">Sorted descending:${descending.join(",")}</p>
  `;

  const ascending = [...arr].sort((a, b) => a - b);
  resultsDiv.innerHTML += `
    <p class="result">Sorted ascending:${ascending.join(",")}</p>
  `;
}

const userArray = getInputArray();
displayResults(userArray);
