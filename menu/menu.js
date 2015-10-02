document.addEventListener("click", function(e) {
    var script = e.target.dataset.script;

    if (script) {
        chrome.tabs.executeScript({
            code: script,
            runAt: 'document_end'
        });
    }
});
