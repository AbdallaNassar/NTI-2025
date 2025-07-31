const userInput = prompt("Enter a string to check if it's a palindrome:");

const caseSensitive = confirm("Do you want the check to be case-sensitive? (OK = Yes, Cancel = No)");

let original = userInput;
let reversed;

if (!caseSensitive) {
  original = original.toLowerCase();
}

reversed = original.split('').reverse().join('');

const isPalindrome = original === reversed;

const resultDiv = document.getElementById("result");

if (isPalindrome) {
  resultDiv.textContent = `"${userInput}" is a palindrome. ✅`;
} else {
  resultDiv.textContent = `"${userInput}" is NOT a palindrome. ❌`;
}

