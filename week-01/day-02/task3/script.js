function isNameValid(name) {
  return isNaN(name);
}

function isPhoneValid(phone) {
  return /^\d{8}$/.test(phone);
}

function isMobileValid(mobile) {
  return /^(010|011|012|015)\d{8}$/.test(mobile);
}

function isEmailValid(email) {
  return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email);
}

let name = prompt("Enter your name:");
while (!isNameValid(name)) {
  name = prompt("Invalid name. Please enter characters only (not numbers):");
}

let phone = prompt("Enter your phone number (8 digits):");
while (!isPhoneValid(phone)) {
  phone = prompt("Invalid phone number. It must be exactly 8 digits:");
}

let mobile = prompt("Enter your mobile number (starts with 010/011/012 and is 11 digits):");
while (!isMobileValid(mobile)) {
  mobile = prompt("Invalid mobile number. It must start with 010, 011, or 012 and be 11 digits:");
}

let email = prompt("Enter your email:");
while (!isEmailValid(email)) {
  email = prompt("Invalid email format. Please enter a valid email (e.g., abc@domain.com):");
}

const resultDiv = document.getElementById("result");
resultDiv.innerHTML = `
  <p>Welcome <strong>${name}</strong>! 🎉</p>
  <p>Your phone: ${phone}</p>
  <p>Your mobile: ${mobile}</p>
  <p>Your email: ${email}</p>
`;
