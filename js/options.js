let page = document.getElementById('message');

function showThoughts() {
    chrome.storage.sync.get(null, function (items) {
        let allKeys = Object.keys(items);
        const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
        for (let index in allKeys) {
            let key = allKeys[index]
            let date = new Date(Number(key))
            chrome.storage.sync.get([key], function (result) {
                page.innerHTML += '<h5><strong><u>' + date.toLocaleDateString(undefined, options) + '</u></strong></h5>'
                page.innerHTML += '<p style="">' + result[key] + '</p>'
                page.innerHTML += '<br><br>'
            });
        }
    });
}

showThoughts();