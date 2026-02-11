// Products Page Filter
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const categoryFilter = document.getElementById('categoryFilter');
  const priceFilter = document.getElementById('priceFilter');
  const productCards = document.querySelectorAll('.product-card');

  function filterProducts() {
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const selectedCategory = categoryFilter ? categoryFilter.value : 'all';
    const selectedPrice = priceFilter ? priceFilter.value : 'all';

    productCards.forEach(card => {
      const productName = card.querySelector('h3').textContent.toLowerCase();
      const productCategory = card.getAttribute('data-category');
      const productPrice = parseInt(card.getAttribute('data-price'));

      let categoryMatch = selectedCategory === 'all' || productCategory === selectedCategory;
      let priceMatch = true;

      if (selectedPrice === 'under500') {
        priceMatch = productPrice < 500;
      } else if (selectedPrice === '500-1000') {
        priceMatch = productPrice >= 500 && productPrice <= 1000;
      } else if (selectedPrice === 'over1000') {
        priceMatch = productPrice > 1000;
      }

      let searchMatch = productName.includes(searchTerm);

      if (categoryMatch && priceMatch && searchMatch) {
        card.style.display = 'flex';
        setTimeout(() => {
          card.style.opacity = '1';
        }, 10);
      } else {
        card.style.opacity = '0.5';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  }

  // Event listeners for filters
  if (searchInput) {
    searchInput.addEventListener('input', filterProducts);
  }
  if (categoryFilter) {
    categoryFilter.addEventListener('change', filterProducts);
  }
  if (priceFilter) {
    priceFilter.addEventListener('change', filterProducts);
  }
});

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Get form data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
      };

      // Validate form
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        showNotification('Please fill in all required fields', 'error');
        return;
      }

      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
      }

      // Simulate form submission (in real app, send to backend)
      console.log('Form submitted:', formData);

      // Show success message
      showNotification('Thank you! We received your message and will get back to you soon.', 'success');

      // Reset form
      contactForm.reset();
    });
  }
});

// Enhanced notification function with type
function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.textContent = message;

  const bgColor = type === 'error' ? '#dc3545' : '#28a745';

  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: ${bgColor};
    color: white;
    padding: 15px 20px;
    border-radius: 5px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 1000;
    animation: slideIn 0.3s ease-in;
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 4000);
}

