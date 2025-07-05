// Get all navigation links
const navLinks = document.querySelectorAll('.nav-link');
const pageContents = document.querySelectorAll('.page-content');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Add click event listeners to navigation links
navLinks.forEach((link) => {
	link.addEventListener('click', function (e) {
		// e.preventDefault();

		// Remove active class from all nav links
		navLinks.forEach((navLink) => {
			navLink.classList.remove('active');
		});

		// Add active class to clicked nav link
		this.classList.add('active');

		// Close mobile menu if open
		navMenu.classList.remove('active');
		hamburger.classList.remove('active');
	});
});

// Mobile hamburger menu functionality
hamburger.addEventListener('click', function () {
	navMenu.classList.toggle('active');
	hamburger.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', function (e) {
	if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
		navMenu.classList.remove('active');
		hamburger.classList.remove('active');
	}
});
