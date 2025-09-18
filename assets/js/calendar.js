const today = new Date();       // Always store real today
let currentDate = new Date();   // Tracks displayed month

function generateCalendar(dateObj) {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const month = dateObj.getMonth();
  const year = dateObj.getFullYear();

  // Day of week for first day, shift so Monday = 0
  let firstDay = new Date(year, month, 1).getDay(); // 0=Sun, 1=Mon...
  firstDay = firstDay === 0 ? 6 : firstDay - 1; // shift so Mon=0, Sun=6

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Update month-year header
  document.getElementById('calendar-month-year').textContent = `${monthNames[month]} ${year}`;

  const calendarBody = document.getElementById('calendar-body');
  calendarBody.innerHTML = '';

  let date = 1;
  for (let i = 0; i < 6; i++) { // max 6 weeks
    const row = document.createElement('tr');

    for (let j = 0; j < 7; j++) {
      const cell = document.createElement('td');

      if (i === 0 && j < firstDay) {
        cell.innerHTML = '';
      } else if (date > daysInMonth) {
        cell.innerHTML = '';
      } else {
        cell.innerHTML = date;

        // Highlight weekends (Saturday=5, Sunday=6)
        if (j >= 5) {
          cell.classList.add('weekend');
        }

        // Add tooltip for today or other days
        if (
          date === today.getDate() &&
          month === today.getMonth() &&
          year === today.getFullYear()
        ) {
          // Today
          cell.classList.add('bg-primary', 'text-white', 'rounded');
          cell.setAttribute('title', 'Today');
        } else {
          cell.setAttribute('title', `${date} ${monthNames[month]}`);
        }

        // Initialize Bootstrap tooltip
        new bootstrap.Tooltip(cell);

        date++;
      }
      row.appendChild(cell);
    }
    calendarBody.appendChild(row);
  }
}

// Previous / Next month buttons
document.getElementById('prev-month').addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  generateCalendar(currentDate);
});

document.getElementById('next-month').addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  generateCalendar(currentDate);
});

// Back to current month button
document.getElementById('current-month-btn').addEventListener('click', () => {
  currentDate = new Date();
  generateCalendar(currentDate);
});

// Initialize calendar on page load
document.addEventListener('DOMContentLoaded', () => generateCalendar(currentDate));
