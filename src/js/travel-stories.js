function showFullStory(storyId) {
	const story = document.getElementById(storyId);
	story.classList.add('active');
	story.scrollIntoView({ behavior: 'smooth' });
}

function hideFullStory(storyId) {
	const story = document.getElementById(storyId);
	story.classList.remove('active');
	window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Close story when clicking outside
document.addEventListener('click', function (e) {
	const fullStories = document.querySelectorAll('.full-story');
	fullStories.forEach((story) => {
		if (
			story.classList.contains('active') &&
			!story.contains(e.target) &&
			!e.target.classList.contains('read-more-btn')
		) {
			story.classList.remove('active');
		}
	});
});
