export const storageService = {
    load: loadFromStorage,
    save: saveToStorage,
    makeId
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value) || null)
}
function loadFromStorage(key) {
    let data = localStorage.getItem(key)
    return data ? JSON.parse(data) : undefined
}

function makeId(length = 10) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}