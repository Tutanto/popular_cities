const query = (selector) => document.querySelector(selector);

/**
 * Project REST API endpoint
 */
const API = "https://api.musement.com/api/v3/cities.json";


function cutPhrase(text) {
    const first10 = text.split(' ').slice(0, 10).join(' ');
    return first10;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export { query, API, cutPhrase, getRandomInt }