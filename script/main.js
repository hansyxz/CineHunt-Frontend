import { createMediaCards, mediaNotFound } from "./mediaRenderer.js";

document.getElementById('search-button').addEventListener('click', async () => {
     const query = document.getElementById('search-input').value;
   try {
        const response = await fetch(`https://cinehunt.onrender.com/search?query=${encodeURIComponent(query)}`)
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
      
        const text = await response.json();

        if (text && text.length > 0) {
            setTimeout(() => createMediaCards(text), 2000);
        } else {
            setTimeout(mediaNotFound, 2000);
        }
    } catch (error) {
        console.error('Error:', error);
        setTimeout(mediaNotFound, 2000);
    };
});

document.getElementById('search-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('search-button').click();
    }
});

document.getElementById('search-button').click();
