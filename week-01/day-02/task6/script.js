let radius = prompt("Please enter the value of the circle's radius:");

while (radius !== null && (radius.trim() === '' || isNaN(radius) || Number(radius) <= 0)) {
  radius = prompt("Invalid input! Please enter a positive number for the radius.");
}

if (radius !== null) {
  radius = Number(radius);
  const area = Math.PI * Math.pow(radius, 2);

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <div class="result">
      <strong>Area of the circle</strong> with radius ${radius} is ${area.toFixed(2)}
    </div>
  `;
}