// Mobile menu toggle
document.querySelector('.mobile-menu').addEventListener('click', function () {
  document.getElementById('nav-menu').classList.toggle('show');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Reservation form submission: show confirmation WITH booking details
document.getElementById('booking-form').addEventListener('submit', function (e) {
  e.preventDefault();

  document.getElementById('reservation-spinner').style.display = 'block';

  // Collect form data
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    guests: document.getElementById('guests').value,
    date: document.getElementById('date').value,
    time: document.getElementById('time').value,
    specialRequests: document.getElementById('special-requests').value,
  };

  setTimeout(function () {
    document.getElementById('reservation-spinner').style.display = 'none';

    // Build and display booking details
    let detailsHTML = `
      <h4 style="text-align:center; margin: 20px 0 10px;">Your Booking Details:</h4>
      <ul style="text-align:left; margin: 0 auto; max-width:350px;">
        <li><strong>Name:</strong> ${formData.name}</li>
        <li><strong>Email:</strong> ${formData.email}</li>
        <li><strong>Phone:</strong> ${formData.phone}</li>
        <li><strong>Guests:</strong> ${formData.guests}</li>
        <li><strong>Date:</strong> ${formData.date}</li>
        <li><strong>Time:</strong> ${formData.time}</li>
        ${
          formData.specialRequests
            ? `<li><strong>Special Requests:</strong> ${formData.specialRequests}</li>`
            : ''
        }
      </ul>
    `;

    document.getElementById('reservation-details').innerHTML = detailsHTML;

    document.getElementById('confirmation-message').style.display = 'block';
    document.getElementById('booking-form').reset();

    document.getElementById('confirmation-message').scrollIntoView({
      behavior: 'smooth',
    });

    setTimeout(function () {
      document.getElementById('confirmation-message').style.display = 'none';
    }, 5000);
  }, 1500);
});

// Contact form message handler
document.getElementById('message-form').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('message-spinner').style.display = 'block';
  setTimeout(function () {
    document.getElementById('message-spinner').style.display = 'none';
    document.getElementById('message-confirmation').style.display = 'block';
    document.getElementById('message-form').reset();

    document.getElementById('message-confirmation').scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });

    setTimeout(function () {
      document.getElementById('message-confirmation').style.display = 'none';
    }, 5000);
  }, 1500);
});

// Set minimum date for reservation to today
const today = new Date().toISOString().split('T')[0];
document.getElementById('date').min = today;
