let videoCategories = { categories: {} };

// Load video categories
fetch(chrome.runtime.getURL('videoCategories.json'))
    .then(response => response.json())
    .then(data => videoCategories = data)
    .catch(error => console.error('Error loading categories:', error));

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "scrapeMetadata") {
        try {
            const videoId = new URLSearchParams(window.location.search).get('v');
            
            fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key={API_KEY}`)
                .then(response => response.json())
                .then(data => {
                    if (!data.items || data.items.length === 0) {
                        throw new Error('No video data available');
                    }

                    const snippet = data.items[0].snippet;
                    const stats = data.items[0].statistics;
                    const categoryId = snippet.categoryId;
                    
                    const metadata = {
                        success: true,
                        title: snippet.title,
                        channelTitle: snippet.channelTitle,
                        category: videoCategories.categories[categoryId] || 'Unknown',
                        tags: snippet.tags || [],
                        description: snippet.description
                    };
                    
                    sendResponse(metadata);
                })
                .catch(error => {
                    console.error('API Error:', error);
                    sendResponse({ 
                        success: false, 
                        error: 'Failed to fetch video data' 
                    });
                });

            return true; // Required for async response
        } catch (error) {
            console.error('Error:', error);
            sendResponse({ 
                success: false, 
                error: error.message 
            });
        }
    }
    return true;
});

let retries = 3;

function connect() {
  const port = chrome.runtime.connect();
  port.onDisconnect.addListener(() => {
    if (retries > 0) {
      setTimeout(connect, 1000);
      retries--;
    }
  });
}

connect();