// Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Music Player Functionality
const musicCards = document.querySelectorAll('.music-card');
const musicPlayer = document.getElementById('music-player');
const closePlayer = document.getElementById('close-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progress = document.getElementById('progress');
const progressBar = document.querySelector('.progress-bar');
const currentTimeEl = document.getElementById('current-time');
const totalTimeEl = document.getElementById('total-time');
const playerSongTitle = document.getElementById('player-song-title');

let currentSongIndex = 0;
let isPlaying = false;
let audio = new Audio();
let currentTime = 0;
let totalTime = 0;

// Update this array with your actual MP3 file paths
// Place your MP3 files in a 'music' folder in your project directory
const songs = [
    { title: 'Exalted', file: 'music/exalted.mp3' },
    { title: 'No other God like you', file: 'music/no-other-god-like-you.mp3' }
];

// Load and play a song
function loadSong(index) {
    if (index < 0 || index >= songs.length) return;
    
    currentSongIndex = index;
    const song = songs[index];
    playerSongTitle.textContent = song.title;
    
    // Stop current audio if playing
    audio.pause();
    audio.currentTime = 0;
    
    // Load new song
    audio.src = song.file;
    audio.load();
    
    // Update UI
    currentTime = 0;
    progress.style.width = '0%';
    currentTimeEl.textContent = '0:00';
    
    // Wait for metadata to load to get duration
    audio.addEventListener('loadedmetadata', () => {
        totalTime = audio.duration;
        totalTimeEl.textContent = formatTime(totalTime);
    }, { once: true });
}

// Music cards now link directly to Spotify, so we don't need the modal player
// The cards are wrapped in anchor tags that open Spotify in a new tab
// Keeping the music player modal code for potential future use or other sections

// Close music player
closePlayer.addEventListener('click', () => {
    musicPlayer.classList.remove('active');
    audio.pause();
    isPlaying = false;
    playPauseBtn.textContent = '▶';
    currentTime = 0;
    progress.style.width = '0%';
    currentTimeEl.textContent = '0:00';
});

// Play/Pause functionality
playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        playPauseBtn.textContent = '▶';
    } else {
        audio.play().catch(error => {
            console.error('Error playing audio:', error);
            alert('Error playing audio. Please check if the file exists and is accessible.');
        });
        isPlaying = true;
        playPauseBtn.textContent = '⏸';
    }
});

// Previous song
prevBtn.addEventListener('click', () => {
    const wasPlaying = isPlaying;
    loadSong((currentSongIndex - 1 + songs.length) % songs.length);
    if (wasPlaying) {
        audio.play();
        isPlaying = true;
        playPauseBtn.textContent = '⏸';
    }
});

// Next song
nextBtn.addEventListener('click', () => {
    const wasPlaying = isPlaying;
    loadSong((currentSongIndex + 1) % songs.length);
    if (wasPlaying) {
        audio.play();
        isPlaying = true;
        playPauseBtn.textContent = '⏸';
    }
});

// Progress bar click
progressBar.addEventListener('click', (e) => {
    if (!audio.src) return;
    
    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = (clickX / rect.width) * 100;
    const newTime = (percentage / 100) * audio.duration;
    
    audio.currentTime = newTime;
    currentTime = newTime;
    progress.style.width = percentage + '%';
    currentTimeEl.textContent = formatTime(currentTime);
});

// Update progress bar and time display
audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
        currentTime = audio.currentTime;
        totalTime = audio.duration;
        const percentage = (currentTime / totalTime) * 100;
        progress.style.width = percentage + '%';
        currentTimeEl.textContent = formatTime(currentTime);
        totalTimeEl.textContent = formatTime(totalTime);
    }
});

// Auto play next song when current song ends
audio.addEventListener('ended', () => {
    const wasPlaying = isPlaying;
    loadSong((currentSongIndex + 1) % songs.length);
    if (wasPlaying) {
        audio.play();
        isPlaying = true;
        playPauseBtn.textContent = '⏸';
    }
});

// Contact Form Handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Simulate form submission
    alert(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email} soon.`);
    
    // Reset form
    contactForm.reset();
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.music-card, .video-card, .tour-item, .stat-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Video card click handler (simulated)
document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('click', () => {
        const videoTitle = card.querySelector('.video-info h3').textContent;
        alert(`Playing: ${videoTitle}\n\nIn a real implementation, this would open the video player.`);
    });
});

// Close music player when clicking outside
musicPlayer.addEventListener('click', (e) => {
    if (e.target === musicPlayer) {
        musicPlayer.classList.remove('active');
        audio.pause();
        isPlaying = false;
        playPauseBtn.textContent = '▶';
        currentTime = 0;
        progress.style.width = '0%';
        currentTimeEl.textContent = '0:00';
    }
});

// Keyboard shortcuts for music player
document.addEventListener('keydown', (e) => {
    if (musicPlayer.classList.contains('active')) {
        if (e.code === 'Space') {
            e.preventDefault();
            playPauseBtn.click();
        } else if (e.code === 'ArrowLeft') {
            prevBtn.click();
        } else if (e.code === 'ArrowRight') {
            nextBtn.click();
        } else if (e.code === 'Escape') {
            closePlayer.click();
        }
    }
});

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

