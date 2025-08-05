import { Rectangle } from './rectangle.js';
import { Square } from './square.js';
import { Circle } from './circle.js';

document.getElementById("calc-rect").addEventListener("click", () => {
  const width = parseFloat(document.getElementById("rect-width").value);
  const height = parseFloat(document.getElementById("rect-height").value);

  if (isNaN(width) || isNaN(height) || width < 0 || height < 0) {
    alert("Please enter valid width and height");
    return;
  }

  const rect = new Rectangle(width, height);
  document.getElementById("rect-output").innerHTML = `
    Area: ${rect.area().toFixed(2)}<br>
    Perimeter: ${rect.perimeter().toFixed(2)}
  `;
});

document.getElementById("calc-square").addEventListener("click", () => {
  const side = parseFloat(document.getElementById("square-side").value);

  if (isNaN(side) || side < 0) {
    alert("Please enter a valid side length");
    return;
  }

  const square = new Square(side);
  document.getElementById("square-output").innerHTML = `
    Area: ${square.area().toFixed(2)}<br>
    Perimeter: ${square.perimeter().toFixed(2)}
  `;
});

document.getElementById("calc-circle").addEventListener("click", () => {
  const radius = parseFloat(document.getElementById("circle-radius").value);

  if (isNaN(radius) || radius < 0) {
    alert("Please enter a valid radius");
    return;
  }

  const circle = new Circle(radius);
  document.getElementById("circle-output").innerHTML = `
    Area: ${circle.area().toFixed(2)}<br>
    Perimeter: ${circle.perimeter().toFixed(2)}
  `;
});
