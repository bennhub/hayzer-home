// Get DOM elements
const modal = document.getElementById('videoModal');
const watchVideoBtn = document.getElementById('watchVideoBtn');
const closeModal = document.getElementById('closeModal');
const youtubeFrame = document.getElementById('youtubeFrame');

// About modal elements
const aboutModal = document.getElementById('aboutModal');
const aboutCTABtn = document.getElementById('aboutCTABtn');
const closeAboutModal = document.getElementById('closeAboutModal');

// Replace this with your YouTube video ID
const youtubeVideoId = '9YBFB2Y1pCs'; // Replace with your actual YouTube video ID

// Open video modal and play video
watchVideoBtn.addEventListener('click', function() {
  youtubeFrame.src = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
});

// Close video modal and stop video
closeModal.addEventListener('click', function() {
  youtubeFrame.src = '';
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Re-enable scrolling
});

// Open about modal
aboutCTABtn.addEventListener('click', function() {
  aboutModal.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
});

// Close about modal
closeAboutModal.addEventListener('click', function() {
  aboutModal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Re-enable scrolling
});

// Close modals when clicking outside of the content
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    youtubeFrame.src = '';
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
  if (event.target === aboutModal) {
    aboutModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});