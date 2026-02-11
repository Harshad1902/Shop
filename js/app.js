// TechHub Application JavaScript

// Parallax Effect
window.addEventListener('scroll', function () {
  const hero = document.querySelector('.hero');
  if (hero) {
    const scrollPosition = window.pageYOffset;
    const parallaxOffset = scrollPosition * 0.5;
    hero.style.backgroundPosition = `center ${parallaxOffset}px`;
  }

  // Parallax effect for product cards
  const productCards = document.querySelectorAll('.product-card');
  productCards.forEach((card, index) => {
    const cardPosition = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const parallaxValue = (cardPosition - windowHeight) * 0.1;

    if (cardPosition < windowHeight) {
      card.style.transform = `translateY(${parallaxValue}px)`;
      card.style.opacity = Math.min(1, (windowHeight - cardPosition) / windowHeight + 0.3);
    }
  });

  // Parallax effect for feature items
  const featureItems = document.querySelectorAll('.feature-item');
  featureItems.forEach((item) => {
    const itemPosition = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const parallaxValue = (itemPosition - windowHeight) * 0.08;

    if (itemPosition < windowHeight) {
      item.style.transform = `translateY(${parallaxValue}px)`;
    }
  });
});

// Add to Cart functionality
document.addEventListener('DOMContentLoaded', function () {
  // ...existing code...
  const addToCartButtons = document.querySelectorAll('.add-to-cart');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      const productName = this.closest('.product-card').querySelector('h3').textContent;
      const productPrice = this.closest('.product-card').querySelector('.product-price').textContent;

      // Show notification
      showNotification(`${productName} added to cart! (${productPrice})`);

      // Change button text temporarily
      const originalText = this.textContent;
      this.textContent = '✓ Added to Cart';
      this.style.backgroundColor = '#28a745';

      setTimeout(() => {
        this.textContent = originalText;
        this.style.backgroundColor = '';
      }, 2000);
    });
  });

  // Shop Now button
  const shopNowBtn = document.querySelector('.cta-btn');
  if (shopNowBtn) {
    shopNowBtn.addEventListener('click', function () {
      document.querySelector('.featured-products').scrollIntoView({behavior: 'smooth'});
    });
  }

  // Smooth scrolling for navigation links
  // This will be handled by header.js after the header is loaded
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId) || document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({behavior: 'smooth'});
        }
      }
    });
  });
});

// ...existing code...
function showNotification(message) {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #28a745;
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
  }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

