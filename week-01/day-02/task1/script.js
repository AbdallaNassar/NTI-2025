
alert("Welcome to my site");

const userName = prompt("Please enter your name:");

let color = prompt("Choose a color: red, green, or blue").toLowerCase();

while (!["red", "green", "blue"].includes(color)) {
  color = prompt("Invalid choice. Please choose: red, green, or blue").toLowerCase();
}

const cardDiv = document.querySelector(".card");
const welcomeMessage = document.createElement("h2");
welcomeMessage.textContent = `Welcome ${userName}`;
welcomeMessage.style.color = color;

cardDiv.appendChild(welcomeMessage);