let color = 'Blue';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
});
