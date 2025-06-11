// --- Element Selection ---
const shortenBtn = document.getElementById('shorten-btn');
const longUrlInput = document.getElementById('long-url-input');
const resultContainer = document.getElementById('result');
const shortUrlInput = document.getElementById('short-url-input');
const copyBtn = document.getElementById('copy-btn');

// --- Star Trail Cursor Effect ---
const trailCount = 20; // Number of trail elements
const trails = [];
let trailIndex = 0;

// Create trail elements and add them to the body
for (let i = 0; i < trailCount; i++) {
    const trail = document.createElement('div');
    trail.className = 'trail';
    document.body.appendChild(trail);
    trails.push(trail);
}

// Listen for mouse movement
window.addEventListener('mousemove', (e) => {
    // Get the current trail element
    const currentTrail = trails[trailIndex];
    
    // Position it at the cursor's location
    currentTrail.style.left = `${e.clientX}px`;
    currentTrail.style.top = `${e.clientY}px`;
    
    // Reset animation to make it visible and start fading
    currentTrail.style.animation = 'none';
    // A trick to restart the animation
    currentTrail.offsetHeight; 
    currentTrail.style.animation = 'fadeOut 0.7s linear forwards';
    
    // Move to the next trail element in the cycle
    trailIndex = (trailIndex + 1) % trailCount;
});


// --- URL Shortener Logic ---
shortenBtn.addEventListener('click', async () => {
    const longUrl = longUrlInput.value;

    // Basic validation
    if (!longUrl || !longUrl.startsWith('http')) {
        alert('Please enter a valid URL (starting with http:// or https://)');
        return;
    }

    // API Call
    try {
        shortenBtn.textContent = 'Shortening...';
        shortenBtn.disabled = true;

        // We use a free TinyURL API that requires no key.
        const apiUrl = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`;
        
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error('Failed to shorten URL. Please try again.');
        }

        const shortUrl = await response.text();
        
        // Display the result
        shortUrlInput.value = shortUrl;
        resultContainer.classList.add('show');

    } catch (error) {
        alert(error.message);
    } finally {
        // Reset the button
        shortenBtn.textContent = 'Get Short Link';
        shortenBtn.disabled = false;
    }
});

// --- Copy Button Logic ---
copyBtn.addEventListener('click', () => {
    // Select the text in the input
    shortUrlInput.select();
    shortUrlInput.setSelectionRange(0, 99999); // For mobile devices

    // Use the modern Clipboard API
    navigator.clipboard.writeText(shortUrlInput.value)
        .then(() => {
            // Provide user feedback
            copyBtn.textContent = 'Copied!';
            setTimeout(() => {
                copyBtn.textContent = 'Copy';
            }, 2000); // Reset text after 2 seconds
        })
        .catch(err => {
            alert('Failed to copy link. Please copy it manually.');
            console.error('Copy failed:', err);
        });
});