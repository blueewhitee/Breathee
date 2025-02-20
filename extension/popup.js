document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('scrapeButton').addEventListener('click', async () => {
        const resultsDiv = document.getElementById('results');
        
        try {
            const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
            
            if (!tab.url.includes('youtube.com/watch')) {
                resultsDiv.innerHTML = '<p class="error">Please open a YouTube video first.</p>';
                return;
            }

            resultsDiv.innerHTML = 'Loading...';
            
            const response = await chrome.tabs.sendMessage(tab.id, { 
                action: "scrapeMetadata"
            });

            if (response.success) {
                resultsDiv.innerHTML = `
                    <h3>${response.title}</h3>
                    <p><strong>Channel:</strong> ${response.channelTitle}</p>
                    <p><strong>Category:</strong> ${response.category || 'N/A'}</p>
                    <p><strong>Tags:</strong> ${response.tags?.join(', ') || 'No tags available'}</p>
                    <p><strong>Description:</strong> ${response.description}</p>
                `;
            } else {
                resultsDiv.innerHTML = `<p class="error">Error: ${response.error}</p>`;
            }
        } catch (error) {
            resultsDiv.innerHTML = `<p class="error">Error: ${error.message}</p>`;
        }
    });
});