function getDayName(dateString) {
  const date = new Date(dateString);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[date.getDay()];
}

function showDay() {
  const input = document.getElementById('date-input').value;
  const result = document.getElementById('day-result');
  
  if (input) {
    result.textContent = 'Day: ' + getDayName(input);
  } else {
    result.textContent = 'Please enter a date.';
  }
}
