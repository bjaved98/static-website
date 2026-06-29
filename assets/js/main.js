/* ================================================================
   MAIN JAVASCRIPT - Vanilla JS
   ================================================================ */

// ================================================================
// HEADER - Scroll Detection & Mobile Menu
// ================================================================

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header.header');
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const dropdownItems = document.querySelectorAll('.nav-menu li');
    const mobileDropdownItems = document.querySelectorAll('.mobile-menu-nav > ul > li > a');

    // Scroll Event Listener - Toggle scrolled class on header
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Hamburger Menu Toggle
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            // Prevent body scroll when mobile menu is open
            if (mobileMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Close mobile menu when a link is clicked
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-nav a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Don't close if it's an accordion toggle
            if (!this.classList.contains('has-dropdown')) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Desktop Dropdowns - Hover behavior
    if (window.innerWidth >= 992) {
        dropdownItems.forEach(item => {
            const link = item.querySelector('a');
            const dropdown = item.querySelector('.dropdown');

            if (dropdown) {
                item.addEventListener('mouseenter', function() {
                    dropdown.style.display = 'block';
                });

                item.addEventListener('mouseleave', function() {
                    dropdown.style.display = 'none';
                });
            }
        });
    }

    // Mobile Accordion Menu
    mobileDropdownItems.forEach(item => {
        if (item.nextElementSibling && item.nextElementSibling.classList.contains('dropdown')) {
            item.classList.add('has-dropdown');

            item.addEventListener('click', function(e) {
                e.preventDefault();

                const dropdown = this.nextElementSibling;
                const isActive = this.classList.contains('active');

                // Close all other dropdowns
                mobileDropdownItems.forEach(otherItem => {
                    if (otherItem !== this) {
                        otherItem.classList.remove('active');
                        const otherDropdown = otherItem.nextElementSibling;
                        if (otherDropdown && otherDropdown.classList.contains('dropdown')) {
                            otherDropdown.classList.remove('active');
                        }
                    }
                });

                // Toggle current dropdown
                this.classList.toggle('active');
                dropdown.classList.toggle('active');
            });
        }
    });

    // Close mobile menu on window resize (back to desktop)
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 992) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

// ================================================================
// CONTACT FORM - Form Submission Handler
// ================================================================

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // Basic validation
        if (name && email && subject && message) {
            // In a real application, you would send this to a server
            console.log('Form Data:', { name, email, subject, message });
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });
}

// ================================================================
// PROPERTY INQUIRY FORM - Form Submission Handler
// ================================================================

const propertyInquiry = document.getElementById('propertyInquiry');
if (propertyInquiry) {
    propertyInquiry.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');

        if (name && email) {
            console.log('Property Inquiry:', { name, email });
            alert('Thank you for your interest! We will contact you shortly to arrange a viewing.');
            propertyInquiry.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });
}

// ================================================================
// FILTER FORM - Property Filtering
// ================================================================

const filterForm = document.getElementById('filterForm');
if (filterForm) {
    filterForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const propertyType = document.getElementById('propertyType').value;
        const priceRange = document.getElementById('priceRange').value;
        const bedrooms = document.getElementById('bedrooms').value;

        console.log('Filters Applied:', { propertyType, priceRange, bedrooms });
        // In a real application, you would filter the properties here
    });
}

// ================================================================
// MORTGAGE CALCULATOR - Real-time Calculation
// ================================================================

const mortgageForm = document.getElementById('mortgageForm');
if (mortgageForm) {
    const homePrice = document.getElementById('homePrice');
    const downPayment = document.getElementById('downPayment');
    const interestRate = document.getElementById('interestRate');
    const loanTerm = document.getElementById('loanTerm');
    const monthlyPayment = document.getElementById('monthlyPayment');

    function calculateMortgage() {
        const principal = homePrice.value * (1 - downPayment.value / 100);
        const monthlyRate = interestRate.value / 100 / 12;
        const numberOfPayments = loanTerm.value * 12;

        if (monthlyRate === 0) {
            const payment = principal / numberOfPayments;
            monthlyPayment.textContent = `Monthly Payment: $${payment.toFixed(2)}`;
        } else {
            const payment = (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
                           (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
            monthlyPayment.textContent = `Monthly Payment: $${payment.toFixed(2)}`;
        }
    }

    homePrice.addEventListener('input', calculateMortgage);
    downPayment.addEventListener('input', calculateMortgage);
    interestRate.addEventListener('input', calculateMortgage);
    loanTerm.addEventListener('input', calculateMortgage);

    // Initial calculation
    calculateMortgage();
}

// ================================================================
// FAVORITE/BOOKMARK FUNCTIONALITY
// ================================================================

const favoriteButtons = document.querySelectorAll('#favoriteBtn');
favoriteButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        this.classList.toggle('active');
        if (this.classList.contains('active')) {
            this.textContent = '❤ Added to Favorites';
            // Store in localStorage
            localStorage.setItem('property-favorite', JSON.stringify({
                timestamp: new Date(),
                status: 'favorited'
            }));
        } else {
            this.textContent = '❤ Add to Favorites';
            localStorage.removeItem('property-favorite');
        }
    });
});

// ================================================================
// SHARE FUNCTIONALITY
// ================================================================

const shareButtons = document.querySelectorAll('#shareBtn');
shareButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const url = window.location.href;
        const title = document.title;

        if (navigator.share) {
            navigator.share({
                title: title,
                url: url
            }).catch(err => console.error('Error sharing:', err));
        } else {
            // Fallback: Copy to clipboard
            navigator.clipboard.writeText(url).then(() => {
                alert('Link copied to clipboard!');
            }).catch(() => {
                alert('Share URL: ' + url);
            });
        }
    });
});

// ================================================================
// NEWSLETTER SUBSCRIPTION
// ================================================================

const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = this.querySelector('input[type="email"]').value;

        if (email) {
            console.log('Newsletter Signup:', email);
            alert('Thank you for subscribing! Check your email for confirmation.');
            this.reset();
        } else {
            alert('Please enter a valid email address.');
        }
    });
}

// ================================================================
// BLOG SEARCH FUNCTIONALITY
// ================================================================

const blogSearch = document.getElementById('blogSearch');
if (blogSearch) {
    blogSearch.addEventListener('submit', function(e) {
        e.preventDefault();

        const searchTerm = this.querySelector('input[type="search"]').value;

        if (searchTerm) {
            console.log('Searching blog for:', searchTerm);
            // In a real application, you would filter blog posts here
            alert('Searching for: ' + searchTerm);
        }
    });
}

// ================================================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ================================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ================================================================
// ACTIVE NAVIGATION LINK
// ================================================================

function setActiveNav() {
    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a, .mobile-menu-nav a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.parentElement.classList.add('active');
        } else {
            link.parentElement.classList.remove('active');
        }
    });
}

// Call on page load
setActiveNav();

// ================================================================
// LAZY LOADING FOR IMAGES
// ================================================================

if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ================================================================
// KEYBOARD ACCESSIBILITY - Escape to close mobile menu
// ================================================================

document.addEventListener('keydown', function(e) {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ================================================================
// DETAILS/SUMMARY POLYFILL FALLBACK
// ================================================================

const detailsElements = document.querySelectorAll('details');
if (!('open' in document.createElement('details'))) {
    detailsElements.forEach(details => {
        const summary = details.querySelector('summary');
        const isOpen = details.hasAttribute('open');

        if (summary) {
            summary.addEventListener('click', function(e) {
                e.preventDefault();
                details.toggleAttribute('open');
            });
        }
    });
}
