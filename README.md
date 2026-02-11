# TechHub - Professional E-Commerce Website

A modern, fully-featured e-commerce website for a tech shop with beautiful UI, interactive components, and responsive design.

## 📁 Project Structure

```
Webstorm/
├── index.html                 # Main redirect page to home
├── css/
│   ├── header.css            # Header and navigation styling
│   └── style.css             # Main stylesheet with all page styles
├── js/
│   ├── app.js                # Main application logic and parallax effects
│   ├── header.js             # Header component loader
│   └── pages.js              # Page-specific functionality (filters, forms)
├── pages/
│   ├── header.html           # Reusable header component
│   ├── home.html             # Home/landing page with hero and featured products
│   ├── products.html         # Full products catalog with filtering
│   ├── about.html            # About company page with team section
│   └── contact.html          # Contact page with form and FAQ
└── img/                      # Images directory
```

## 🚀 Features

### 1. **Home Page (pages/home.html)**
- Stunning hero section with gradient background and parallax effect
- Featured products showcase (6 products)
- Features highlights section
- Smooth animations and transitions
- Interactive "Shop Now" button

### 2. **Products Page (pages/products.html)**
- Complete product catalog (12 products)
- Advanced filtering by:
  - Search/keyword
  - Category (Laptops, Phones, Audio, Tablets, Wearables, Cameras)
  - Price range (Under $500, $500-$1000, Over $1000)
- Real-time product filtering
- Responsive grid layout

### 3. **About Page (pages/about.html)**
- Company information and mission
- Vision and values sections
- Statistics cards showing:
  - 50K+ Happy Customers
  - 500+ Products Available
  - 24/7 Customer Support
  - 100% Authentic Products
- Team member showcase
- Why Choose Us section with 6 key benefits

### 4. **Contact Page (pages/contact.html)**
- Professional contact form with validation:
  - Name, Email, Phone fields
  - Subject dropdown
  - Message textarea
- Contact information section:
  - Physical address
  - Multiple phone numbers
  - Email addresses for different departments
  - Business hours
  - Social media links
- FAQ section with 6 common questions
- Form submission handling with notifications

### 5. **Header (pages/header.html)**
- Brand name/logo on the left
- Navigation menu on the right:
  - Home, Products, About, Contact links
  - Shopping cart icon
- Sticky header that stays on scroll
- Responsive mobile-friendly design

## 🎨 Design Features

### Colors
- **Primary**: #007bff (Blue)
- **Secondary**: #28a745 (Green)
- **Dark**: #1a1a1a (Dark Gray)
- **Light**: #f8f9fa (Light Gray)

### Typography
- Font Family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Responsive text sizing
- Clear hierarchy with multiple heading sizes

### Effects
- **Parallax Scrolling**: Background moves slower than content
- **Hover Effects**: Cards lift and shadows expand
- **Floating Animations**: Subtle continuous movement
- **Fade-in Effects**: Elements animate on scroll
- **Smooth Transitions**: All interactions have smooth CSS transitions

## ✨ Interactive Features

### 1. Add to Cart
- Click "Add to Cart" button on any product
- Shows toast notification with product name and price
- Button temporarily shows success state (✓ Added to Cart)

### 2. Product Filtering
- Real-time search by product name
- Filter by category
- Filter by price range
- Multiple filters work together

### 3. Contact Form
- Client-side validation
- Email format validation
- Success/error notifications
- Form reset after submission

### 4. Smooth Scrolling
- All navigation links support smooth scroll
- Shop Now button scrolls to products section
- Parallax effect on scroll down

### 5. Responsive Design
- Mobile (480px and below)
- Tablet (768px)
- Desktop (1200px+)
- All layouts adapt gracefully

## 🔧 How to Use

### Running the Website

1. **Using Webpack Dev Server** (if configured):
   ```bash
   npm start
   ```

2. **Direct Opening**:
   - Open `index.html` in your web browser
   - It automatically redirects to `pages/home.html`

3. **Navigation**:
   - Use header menu to navigate between pages
   - Click product cards to perform actions
   - Use filters on products page
   - Fill and submit contact form

## 📱 Browser Compatibility

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Product Categories

1. **Laptops**: High-performance laptops and gaming laptops
2. **Smartphones**: Latest mobile devices
3. **Audio**: Headphones and speakers
4. **Tablets**: Various tablet options
5. **Wearables**: Smart watches and fitness bands
6. **Cameras**: Professional and compact cameras

## 💰 Sample Products

- High-Performance Laptop: $1,299
- Latest Smartphone: $899
- Wireless Headphones: $299
- Tablet Device: $599
- Smart Watch: $399
- Pro Camera: $1,499
- Bluetooth Speaker: $199
- Gaming Laptop: $1,799
- Premium Smartphone: $1,099
- Fitness Band: $249
- Premium Tablet: $799
- Compact Camera: $899

## 🔐 Features

✅ 100% Authentic Products
✅ Fast Shipping (Free over $100)
✅ Secure Payments
✅ Easy 30-day Returns
✅ 24/7 Customer Support
✅ Modern Responsive Design
✅ Interactive UI Elements
✅ Product Search & Filter
✅ Contact Form with Validation
✅ Parallax Scrolling Effects

## 📧 Contact Information

- **Email**: info@techhub.com
- **Phone**: +1 (555) 123-4567
- **Address**: 123 Tech Street, Silicon Valley, CA

## 📄 License

© 2026 TechHub. All rights reserved.

---

**Built with**: HTML5, CSS3, JavaScript (Vanilla)
**Design Pattern**: Responsive, Mobile-First
**Performance**: Optimized with CSS animations and smooth scrolling

