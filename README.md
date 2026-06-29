# Static Website Project - PropertyHub

A modern, responsive static website for real estate and property management services.

## Project Structure

```
.
├── index.html                    # Homepage
├── about-us.html                 # About Us page
├── services.html                 # Services page
├── contact-us.html               # Contact Us page
├── faq.html                      # FAQ page
├── property-list.html            # Property listing page
├── property-single.html          # Single property detail page
├── apartment-single.html         # Apartment detail page
├── blog.html                     # Blog listing page
├── blog-single.html              # Single blog post page
├── assets/
│   ├── css/
│   │   ├── style.css             # Main stylesheet
│   │   └── responsive.css        # Responsive breakpoints
│   ├── js/
│   │   └── main.js               # Vanilla JavaScript
│   ├── images/                   # Property images (add your images here)
│   └── icons/                    # Icon files (add your icons here)
└── README.md                     # This file
```

## Features

- **Semantic HTML5**: Proper semantic markup for better accessibility and SEO
- **Responsive Design**: Mobile-first approach with breakpoints for tablets and desktops
- **CSS3 Styling**: Pure CSS3 with no frameworks
- **Vanilla JavaScript**: No dependencies, pure JavaScript functionality
- **Modern Navigation**: Sticky header with hover dropdowns (desktop) and mobile menu
- **CSS Custom Properties**: Easy theme customization via CSS variables
- **Form Handling**: Contact forms, property inquiries, and filtering
- **Mortgage Calculator**: Interactive calculator on property pages
- **Accessibility**: Keyboard navigation, ARIA labels, and semantic HTML

## Quick Start

1. Clone or download this repository
2. Add your property images to `assets/images/`
3. Add your icon files to `assets/icons/`
4. Customize colors in `assets/css/style.css` (look for CSS variables in `:root`)
5. Update content in HTML files
6. Open `index.html` in a browser or deploy to a web server

## CSS Customization

Edit the CSS custom properties in `assets/css/style.css` to change the theme:

```css
:root {
    --color-primary: #d4af37;        /* Accent color (gold) */
    --color-dark: #1a1a1a;           /* Dark text */
    --color-light: #f5f5f5;          /* Light background */
    --font-heading: 'Playfair Display', serif;  /* Heading font */
    --font-body: 'Lato', sans-serif;            /* Body font */
}
```

## JavaScript Functionality

- **Header Scroll Detection**: Toggle CSS class on scroll for sticky header effect
- **Mobile Menu**: Hamburger toggle with slide-in panel
- **Dropdown Navigation**: Hover behavior on desktop, click/tap on mobile
- **Form Validation**: Basic client-side validation
- **Mortgage Calculator**: Real-time calculation based on input
- **Favorites System**: LocalStorage-based bookmarking
- **Share Functionality**: Native share API with clipboard fallback

## Responsive Breakpoints

- **Desktop**: 992px and above
- **Tablet**: 768px - 991px
- **Mobile**: 576px - 767px
- **Small Mobile**: Below 576px

## Converting to PHP

This structure is designed to be easily converted to PHP includes:

1. Extract the header (same across all pages) to `includes/header.php`
2. Extract the footer to `includes/footer.php`
3. Rename `.html` files to `.php`
4. Replace header/footer with PHP includes:

```php
<?php include 'includes/header.php'; ?>
<!-- Page content -->
<?php include 'includes/footer.php'; ?>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- Convert to PHP with includes
- Add backend for contact form submission
- Implement property search/filtering
- Add image gallery with lightbox
- Integrate with real estate APIs
- Add CMS integration
- Implement user accounts

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please contact: info@propertyhub.com
