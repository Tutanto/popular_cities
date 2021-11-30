const query = (selector) => document.querySelector(selector);

/**
 * Project REST API endpoint
 */
const API = "https://api.musement.com/api/v3/cities.json";


function cutPhrase(text) {
    const first7 = text.split(' ').slice(0, 7).join(' ');
    return first7;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export { query, API, cutPhrase, getRandomInt }