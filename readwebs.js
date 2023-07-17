document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("readUrl").addEventListener("click", function() {
        chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
            const googleCache = 'http://webcache.googleusercontent.com/search?q=cache:';
            let url = tabs[0].url;
           chrome.tabs.create({ url: googleCache+url });
        }); 
    }, false);
});


