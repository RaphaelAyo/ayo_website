# Ayo Raphael - Gospel Artiste Website

A beautiful, interactive website for Ayo Raphael featuring modern design, smooth animations, and engaging user experience with a premium gold logo.

## Features

- **Premium Gold Logo**: Elegant intertwined "A" and "R" design with luxury gold gradient
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Music Player**: Click on any song card to open a full-featured music player with MP3 support
- **Smooth Navigation**: Smooth scrolling between sections with a fixed navigation bar
- **Modern UI/UX**: Beautiful gradient designs, hover effects, and animations
- **Contact Form**: Interactive contact form for inquiries and bookings
- **Tour Dates**: Display upcoming events and concerts
- **Video Gallery**: Showcase music videos and performances

## Sections

1. **Hero Section**: Eye-catching landing area with call-to-action buttons
2. **About**: Artist biography and statistics
3. **Music**: Latest releases ("Exalted" and "No other God like you") with interactive play buttons
4. **Videos**: Music video gallery
5. **Tours**: Upcoming events and concert dates
6. **Contact**: Contact form and social media links

## Contact Information

- **Email**: admin@ayoraphaelmusic.com
- **Phone**: +1 (343) 987-7792
- **Location**: Ottawa, Canada
- **Social Media**:
  - Facebook: https://www.facebook.com/ayoraphaelmusic/
  - Instagram: https://www.instagram.com/ayoraphaelmusic
  - YouTube: https://www.youtube.com/@ayoraphaelmusic
  - Spotify: https://open.spotify.com/user/31de4pb5hvrkczwlxcmctnfrfaiy

## Getting Started

### Option 1: Using Python HTTP Server (Recommended)

1. Open your terminal in the project directory
2. Run the following command:
   ```bash
   python3 -m http.server 8000
   ```
3. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

### Option 2: Using Node.js (if you have it installed)

1. Install a simple HTTP server:
   ```bash
   npx http-server
   ```
2. Open the URL shown in the terminal (usually `http://localhost:8080`)

### Option 3: Direct File Opening

Simply open `index.html` in your web browser (some features may be limited).

## Interactive Features

### Music Player
- Click any song card to open the music player
- Use play/pause, previous, and next buttons
- Click on the progress bar to seek
- Keyboard shortcuts:
  - `Space`: Play/Pause
  - `Left Arrow`: Previous song
  - `Right Arrow`: Next song
  - `Escape`: Close player

### Navigation
- Fixed navigation bar that changes on scroll
- Smooth scrolling to sections
- Mobile-responsive hamburger menu

### Animations
- Scroll-triggered animations for cards and sections
- Hover effects on interactive elements
- Smooth transitions throughout

## Adding Your MP3 Music Files

1. **Place your MP3 files in the `music` folder:**
   - Copy your MP3 files into the `music` folder
   - Required files:
     - `music/exalted.mp3`
     - `music/no-other-god-like-you.mp3`

2. **The songs array in `script.js` is already configured:**
   ```javascript
   const songs = [
       { title: 'Exalted', file: 'music/exalted.mp3' },
       { title: 'No other God like you', file: 'music/no-other-god-like-you.mp3' }
   ];
   ```

3. **Music cards in `index.html` are already set up** with the correct `data-song` attributes.

**Important:** 
- You must serve the website through a web server (not just opening the HTML file) for the audio files to work properly due to browser security restrictions
- The `data-song` attribute in HTML must match the `title` in the JavaScript array

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6B46C1;
    --secondary-color: #9333EA;
    --accent-color: #F59E0B;
    /* ... */
}
```

### Logo
The premium gold logo is in `logo.svg`. It features:
- Intertwined "A" and "R" letters
- Luxury gold gradient colors
- Modern, elegant design
- "Ayo Raphael" text in Playfair Display font

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## File Structure

```
.
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── script.js       # Interactive functionality
├── logo.svg        # Premium gold logo
├── music/          # Folder for your MP3 files
│   ├── README.txt  # Instructions for music files
│   └── *.mp3       # Your music files go here
└── README.md       # This file
```

## Notes

- **Music Player**: Supports actual MP3 files! Add your music files to the `music` folder
- Video cards show placeholders (replace with actual video embeds)
- Contact form shows an alert (connect to a backend for actual submission)
- All images are placeholder gradients (replace with actual images)

## License

This project is open source and available for personal and commercial use.

