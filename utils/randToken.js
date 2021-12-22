const rand = function() {
    return Math.random().toString(36).substr(2); // remove `0.`
}

const randToken = function() {
    return rand() + rand(); // to make it longer
}

module.exports = randToken
