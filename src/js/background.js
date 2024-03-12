chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "open-reader",
        title: "Open Reader",
        type: "normal",
        contexts: ["action"]
    })
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "open-reader") {
        chrome.tabs.create({
            url: chrome.runtime.getURL("index.html")
        })
    }
})