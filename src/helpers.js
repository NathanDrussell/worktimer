function convertDuration(dur) {
    const seconds = parseInt(dur / 1000);
    const minutes = parseInt(seconds / 60);
    const hours = parseInt(minutes / 60);

    const h = paddedMod(hours, 24);
    const m = paddedMod(minutes);
    const s = paddedMod(seconds);

    return `${h}:${m}:${s}`;
}

function paddedMod(val, mod = 60, count = 2) {
    const m = val % mod
    return m.toString().padStart(count, '0')
}

function getDate() {
    const now = new Date();
    return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
}

function getDuration() {
    return parseInt(localStorage.duration) || 0
}

function incrementDuration(increment) {
    localStorage.duration = getDuration() + increment;
    return Date.now()
}


module.exports = {
    convertDuration,
    paddedMod,
    getDate,
    getDuration,
    incrementDuration
}