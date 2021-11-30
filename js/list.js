import { cutPhrase, query } from "./utils.js"

function clearView(parent = query(".wrapper__cities")) {
    while (parent.firstChild) {
        parent.firstChild.remove()
    }
}

function productContainer(parent, imgUrl, productTitle, textDescription) {
    const colors = ["#d00000", "#ac2232", "#884463", "#646694", "#3f88c5", "#032b43", "#136f63"]
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

function createImg(parent, imgUrl, productTitle) {
    const image = document.createElement("img");
    image.src = imgUrl;
    image.alt = productTitle;

    parent.appendChild(image);
}

function createText(parent, productTitle, textDescription) {
    const title = document.createElement("h3");
    title.textContent = productTitle;

    const description = document.createElement("p");
    // console.log(typeof textDescription);
    if (textDescription.split(' ').length > 7) {
        textDescription = cutPhrase(textDescription) + " ...";
    }
    description.textContent = textDescription;

    parent.append(title, description);
}

function renderProducts(listItems, popular = null, container = query(".wrapper__cities")) {
    clearView(container);
    let setTimer = 0;
    if (!popular) {
        listItems.map((product) => {
            setTimeout(() => {
                productContainer(container, product.cover_image_url, product.name, product.content);
            }, setTimer);
            setTimer += 200;
        });
    } else {
        const top_cities = listItems.filter(item => item.show_in_popular);
        top_cities.map((product) => {
            setTimeout(() => {
                productContainer(container, product.cover_image_url, product.name, product.content);
            }, setTimer);
            setTimer += 200;
        });
    }
}

export { clearView, renderProducts }