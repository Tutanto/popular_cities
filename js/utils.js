/**
 *Short for querySelector
 *
 * @param {string} selector
 */
const query = (selector) => document.querySelector(selector);

/**
 * Project REST API endpoint
 */
const API = "https://api.musement.com/api/v3/cities.json";

/**
 *Selects first nWords words from string
 *
 * @param {string} text
 * @param {int} nWords
 * @return {*} 
 */
function cutPhrase(text,nWords) {
    const firstNwords = text.split(' ').slice(0, nWords).join(' ');
    return firstNwords;
}

export { query, API, cutPhrase }