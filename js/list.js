import { cutPhrase, query } from "./utils.js"
/**
 * Remove all children from container
 *
 * @param {*} [parent=query(".wrapper__cities")] container (default wrapper__cities)
 */
function clearView(parent = query(".wrapper__cities")) {
    while (parent.firstChild) {
        parent.firstChild.remove()
    }
}

/**
 *Create card structure
 *
 * @param {*} parent
 * @param {*} imgUrl
 * @param {*} productTitle
 * @param {*} textDescription
 */
function productContainer(parent, imgUrl, productTitle, textDescription) {
    const colors = ["#bd0000", "#d00000", "#ac2232", "#884463", "#646694", "#3f88c5", "#215a84", "#032b43", "#0b4d53", "#136f63"]
    let i = parent.children.length % colors.length;
    const product = document.createElement("div");
    product.className = "city";
    product.classList.add('hidden');
    product.style.backgroundColor = colors[i]

    createImg(product, imgUrl, productTitle);
    createText(product, productTitle, textDescription);
    parent.appendChild(product);
    setTimeout(() => {
        product.classList.remove('hidden');
    }, 600)
}

/**
 *Add image to card
 *
 * @param {*} parent
 * @param {*} imgUrl
 * @param {*} productTitle
 */
function createImg(parent, imgUrl, productTitle) {
    const image = document.createElement("img");
    image.src = imgUrl;
    image.alt = productTitle;

    parent.appendChild(image);
}

/**
 *Add text (title & description) to card
 *
 * @param {*} parent
 * @param {*} productTitle
 * @param {*} textDescription
 */
function createText(parent, productTitle, textDescription) {
    const title = document.createElement("h3");
    title.textContent = productTitle;

    const description = document.createElement("p");
    let nWords = 7;
    if (textDescription.split(' ').length > nWords) {
        textDescription = cutPhrase(textDescription, nWords) + " ...";
    }
    description.textContent = textDescription;

    parent.append(title, description);
}

/**
 *Loops over array of objects and creates product cards
 *
 * @param {*} listItems array of objects
 * @param {*} [popular=null] boolean (default null). Set true to get popular cities
 * @param {number} [time=0] Timeout interval
 * @param {string} [container=query(".wrapper__cities")] Wrapper container where to insert cards (default wrapper__cities)
 */
function renderProducts(listItems, popular = null, time=0, container = query(".wrapper__cities")) {
    clearView(container);
    let setTimer = 0;
    if (!popular) {
        listItems.map((product) => {
            setTimeout(() => {
                productContainer(container, product.cover_image_url, product.name, product.content);
            }, setTimer);
            setTimer += time;
        });
    } else {
        const top_cities = listItems.filter(item => item.show_in_popular);
        top_cities.map((product) => {
            setTimeout(() => {
                productContainer(container, product.cover_image_url, product.name, product.content);
            }, setTimer);
            setTimer += time;
        });
    }
}

export { clearView, renderProducts }