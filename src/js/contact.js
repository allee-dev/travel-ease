// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Form Validation
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

// Validation rules
const validators = {
    firstName: {
        required: true,
        minLength: 2,
        pattern: /^[a-zA-Z\s]+$/,
        message: 'First name must be at least 2 characters and contain only letters'
    },
    lastName: {
        required: true,
        minLength: 2,
        pattern: /^[a-zA-Z\s]+$/,
        message: 'Last name must be at least 2 characters and contain only letters'
    },
    email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Please enter a valid email address'
    },
    phone: {
        required: false,
        pattern: /^\+?[0-9\s\-\(\)]+$/,
        minLength: 10,
        message: 'Please enter a valid phone number'
    },
    subject: {
        required: true,
        message: 'Please select a subject'
    },
    message: {
        required: true,
        minLength: 10,
        maxLength: 500,
        message: 'Message must be between 10 and 500 characters'
    }
};

// Validate single field
function validateField(fieldName, value) {
    const rules = validators[fieldName];
    if (!rules) return { isValid: true, message: '' };

    // Check required
    if (rules.required && (!value || value.trim() === '')) {
        return { isValid: false, message: `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required` };
    }

    // If field is not required and empty, it's valid
    if (!rules.required && (!value || value.trim() === '')) {
        return { isValid: true, message: '' };
    }

    // Check minimum length
    if (rules.minLength && value.length < rules.minLength) {
        return { isValid: false, message: rules.message };
    }

    // Check maximum length
    if (rules.maxLength && value.length > rules.maxLength) {
        return { isValid: false, message: rules.message };
    }

    // Check pattern
    if (rules.pattern && !rules.pattern.test(value)) {
        return { isValid: false, message: rules.message };
    }

    return { isValid: true, message: '' };
}

// Show error message
function showError(fieldName, message) {
    const field = document.getElementById(fieldName);
    const errorElement = document.getElementById(fieldName + 'Error');
    
    field.classList.add('error');
    field.classList.remove('success');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

// Show success state
function showSuccess(fieldName) {
    const field = document.getElementById(fieldName);
    const errorElement = document.getElementById(fieldName + 'Error');
    
    field.classList.remove('error');
    field.classList.add('success');
    errorElement.style.display = 'none';
}

// Clear validation state
function clearValidation(fieldName) {
    const field = document.getElementById(fieldName);
    const errorElement = document.getElementById(fieldName + 'Error');
    
    field.classList.remove('error', 'success');
    errorElement.style.display = 'none';
}

// Real-time validation
Object.keys(validators).forEach(fieldName => {
    const field = document.getElementById(fieldName);
    if (field) {
        field.addEventListener('blur', () => {
            const validation = validateField(fieldName, field.value);
            if (!validation.isValid) {
                showError(fieldName, validation.message);
            } else {
                showSuccess(fieldName);
            }
        });

        field.addEventListener('input', () => {
            if (field.classList.contains('error')) {
                const validation = validateField(fieldName, field.value);
                if (validation.isValid) {
                    showSuccess(fieldName);
                }
            }
        });
    }
});

// Form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isFormValid = true;
    const formData = new FormData(contactForm);
    
    // Validate all fields
    Object.keys(validators).forEach(fieldName => {
        const field = document.getElementById(fieldName);
        if (field) {
            const value = field.value;
            const validation = validateField(fieldName, value);
            
            if (!validation.isValid) {
                showError(fieldName, validation.message);
                isFormValid = false;
            } else {
                showSuccess(fieldName);
            }
        }
    });

    if (isFormValid) {
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            // Show success message
            successMessage.style.display = 'block';
            contactForm.reset();
            
            // Clear all validation states
            Object.keys(validators).forEach(fieldName => {
                clearValidation(fieldName);
            });
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        }, 1500);
    } else {
        // Scroll to first error field
        const firstErrorField = document.querySelector('.form-input.error, .form-textarea.error, .form-select.error');
        if (firstErrorField) {
            firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
            firstErrorField.focus();
        }
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.contact-detail, .card, .contact-form, .map-container').forEach(el => {
    observer.observe(el);
});