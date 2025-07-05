// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach((link) => {
	link.addEventListener('click', () => {
		hamburger.classList.remove('active');
		navMenu.classList.remove('active');
	});
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth',
		});
	});
});

// Add scroll effect to header
window.addEventListener('scroll', () => {
	const header = document.querySelector('.header');
	if (window.scrollY > 100) {
		header.style.background = 'rgba(255, 255, 255, 0.98)';
		header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
	} else {
		header.style.background = 'rgba(255, 255, 255, 0.95)';
		header.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
	}
});
