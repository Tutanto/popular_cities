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
function productContainer(parent, imgUrl, productTitle, textDescription, productId) {
    const colors = ["#bd0000", "#d00000", "#ac2232", "#884463", "#646694", "#3f88c5", "#215a84", "#032b43", "#0b4d53", "#136f63"]
    let i = parent.children.length % colors.length;
    const product = document.createElement("div");
    product.className = "city";
    product.id = productId;
    product.style.backgroundColor = colors[i];
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
    let nWords = 15;
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
 * @param {*} [popular=null] boolean (default true). Set true to get popular cities
 * @param {int} [start] index of first element of listItems to render
 * @param {int} [end] index of last element of listItems to render
 * @param {string} [container=query(".wrapper__cities")] Wrapper container where to insert cards (default wrapper__cities)
 */
function renderProducts(listItems, popular = true, start = 0, end = 10, container = query(".wrapper__cities")) {
    let filter_list = [];
    if (!popular) {
        filter_list = listItems.filter((item, index) => index > start-1 && index < end);
        filter_list.map((product) => {
            productContainer(container, product.cover_image_url, product.name, product.content, product.id);
        });
    } else {
        let top_cities = listItems.filter(item => item.show_in_popular);
        filter_list = top_cities.filter((item, index) => index > start-1 && index < end);
        filter_list.map((product) => {
            productContainer(container, product.cover_image_url, product.name, product.content, product.id);
        });
    }
}

export { clearView, renderProducts, createImg }