let textarea = document.getElementById('inputBox');
let submitButton = document.getElementById('submitBtn')

function constructTextarea() {
    textarea.placeholder = "Enter some thoughts. . ."
    textarea.onclick = selectAll(textarea.id)
}

function selectAll(id) {
    document.getElementById(id).focus();
    document.getElementById(id).select();
}

constructTextarea()
submitButton.onclick = function () {
    let d = new Date();
    let time = d.getTime();
    let thought = textarea.value;
    let thoughtDict = {[time]: thought}
    chrome.storage.sync.set(thoughtDict, function () {
         console.log('Recorded "' + thoughtDict[time].slice(0, 20) + '. . ."');
    });
    constructTextarea();
}
