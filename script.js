// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.background = 'white';
    }
});

// Form validation functions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateForm() {
    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();
    
    if (!name) {
        showFormMessage('error', 'Please enter your name');
        return false;
    }
    
    if (!email || !validateEmail(email)) {
        showFormMessage('error', 'Please enter a valid email address');
        return false;
    }
    
    if (!message) {
        showFormMessage('error', 'Please enter your message');
        return false;
    }
    
    return true;
}

// Test function for debugging
function testForm() {
    // Fill form with test data
    const testEmail = prompt('Enter your test email address (leave blank for default):') || 'jb938047@gmail.com';
    
    document.querySelector('input[name="name"]').value = 'John Banda';
    document.querySelector('input[name="email"]').value = testEmail;
    document.querySelector('input[name="subject"]').value = 'Portfolio Contact Form Test';
    document.querySelector('textarea[name="message"]').value = 'This is a test message from the portfolio contact form.\n\n' +
        'Test details:\n' +
        '- Email: ' + testEmail + '\n' +
        '- Date: ' + new Date().toLocaleString() + '\n\n' +
        'Please ignore this message if you did not submit this test.';
    
    // Submit form
    contactForm.dispatchEvent(new Event('submit'));
}

function showFormMessage(type, message) {
    const messageTypes = {
        success: { color: '#166534', background: '#dcfce7' },
        error: { color: '#991b1b', background: '#fee2e2' },
        info: { color: '#1e40af', background: '#dbeafe' }
    };
    
    formMessage.className = `form-message ${type}`;
    formMessage.style.color = messageTypes[type].color;
    formMessage.style.backgroundColor = messageTypes[type].background;
    formMessage.textContent = message;
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.className = 'form-message';
    }, 5000);
}

// Initialize smooth scrolling
window.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Add animation to service cards on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});
