🌟 Kutty Link – Stylish URL Shortener ✨
Kutty Link is a sleek, minimalist, and visually striking URL shortener built using pure HTML, CSS, and JavaScript. Featuring a glassmorphism design, glowing UI elements, and a star-trail cursor effect, this app offers a smooth and engaging user experience.

🔗 "Kutty" means "small" in Tamil — perfectly capturing the essence of shortening long URLs with style.

📸 Preview
Include a screenshot or a GIF here to showcase the interface.

🚀 Live Demo
👉 Click here to try Kutty Link live
(Enable GitHub Pages under your repo’s settings and replace this link with the live site URL)

🎯 Features
✨ Glassmorphism UI – Beautiful frosted-glass effect on the main interface.

🌌 Star-Trail Cursor – Custom particle effect that follows the mouse pointer.

💡 Glowing UI Elements – Stylish glow on buttons and input fields.

⚡ Real-Time URL Shortening – Powered by TinyURL’s API.

📋 One-Click Copy – Instantly copy shortened URLs to clipboard.

📱 Fully Responsive – Seamless experience on both desktop and mobile.

🧩 100% Vanilla Stack – No frameworks. Just HTML, CSS, and JavaScript.

🛠️ Built With
HTML5 – Markup structure

CSS3 – Styling, animations, glassmorphism, star trails

JavaScript (ES6+) – Interactivity, API calls, clipboard, effects

🔍 How It Works
1. ✨ Glassmorphism Card
Semi-transparent background (rgba(255,255,255,0.1))

backdrop-filter: blur(15px) for blur effect

Subtle border & shadow to create depth

2. 💡 Glowing Buttons & Inputs
Uses box-shadow for vibrant glow effects

On :hover and :focus, shadows intensify for an interactive feel

3. 🌟 Star-Trail Cursor Effect
Default cursor hidden (cursor: none)

JavaScript generates a pool of .trail divs

Each follows the cursor with a fading animation

Smooth and non-blocking via requestAnimationFrame

4. 🔗 URL Shortening via TinyURL API
Public API endpoint: https://tinyurl.com/api-create.php

Usage: GET request with ?url=LONG_URL

Returns plain text shortened URL

Integrated using fetch() and displayed dynamically

🧪 Getting Started
🔧 Prerequisites
A modern browser (Chrome, Firefox, Edge)

Optionally: VS Code + Live Server for local preview

📥 Installation
bash
Copy
Edit
# Clone the repo
git clone https://github.com/your-username/kutty-link.git

# Navigate to the project directory
cd kutty-link

# Open the file in your browser
open index.html   # or right-click → Open with Live Server
📌 Usage
Paste a long URL in the input field.

Click Get Short Link.

A shortened URL appears below.

Click Copy to copy it to your clipboard.

📄 License
This project is licensed under the MIT License.
See the LICENSE file for more information.🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss your ideas.

💬 Acknowledgments
TinyURL API

Inspiration from modern UI/UX trends: glassmorphism, neuomorphism, animated cursors.
