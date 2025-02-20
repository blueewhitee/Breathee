console.log("Service worker started.");

chrome.runtime.onStartup.addListener(() => {
    // 1. Initialize state or variables
    let extensionState = {
        active: true,
        lastUpdate: new Date()
    };

    // 2. Set up message listeners
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.action === 'getState') {
            sendResponse(extensionState);
        }
    });

    // 3. Initialize content script injection
    chrome.tabs.query({}, (tabs) => {
        tabs.forEach(tab => {
            if (tab.url?.startsWith('http')) {
                chrome.scripting.executeScript({
                    target: {tabId: tab.id},
                    files: ['content.js']
                });
            }
        });
    });

    // 4. Set up any periodic tasks
    chrome.alarms.create('refreshData', {
        periodInMinutes: 60
    });

    // 5. Initialize any storage or settings
    chrome.storage.local.get(['settings'], (result) => {
        if (!result.settings) {
            chrome.storage.local.set({ settings: defaultSettings });
        }
    });
});

chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed.");
    chrome.tabs.query({}, (tabs) => {
        tabs.forEach(tab => {
            if (tab.url?.startsWith('http')) {
                chrome.scripting.executeScript({
                    target: {tabId: tab.id},
                    files: ['content.js']
                });
            }
        });
    });
});

chrome.action.onClicked.addListener(async (tab) => {
    if (tab.url.includes('youtube.com/watch')) {
        chrome.tabs.sendMessage(tab.id, { action: "scrapeMetadata" });
    }
});