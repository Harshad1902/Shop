document.addEventListener('DOMContentLoaded', function() {
  // Determine the correct path based on current location
  let headerPath = 'pages/header.html';

  // If we're already in the pages directory, adjust the path
  if (window.location.pathname.includes('/pages/')) {
    headerPath = 'header.html';
  }

  fetch(headerPath)
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-container').innerHTML = data;

      // Re-attach event listeners after header is loaded
      attachNavListeners();
    })
    .catch(error => console.error('Error loading header:', error));
});

// Function to attach event listeners to nav links
function attachNavListeners() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Only prevent default for anchor links (starting with #)
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
      // Allow regular page navigation for href links
    });
  });
}

