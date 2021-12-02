import { query } from "./utils.js"
import { createImg } from "./list.js"

/**
 *Create modal structure
 *
 * @param {object} product Single card object
 * @param {*} color
 */
function createModal(product, color) {
    const modal = document.createElement('div');
    modal.classList.add("modal")
    modal.style.backgroundColor = color;
    createImg(modal, product.cover_image_url, product.name);
    addTitle(modal, product.name, product.country.name)
    initMap(modal, product.latitude, product.longitude)
    makeBtn(modal)
    document.body.appendChild(modal)

}

/**
 *Add text to modal
 *
 * @param {*} parent
 * @param {*} name
 * @param {*} country
 */
function addTitle(parent, name, country) {
    const title = document.createElement("h3");
    title.textContent = `${name} - ${country}`;
    parent.append(title);
}

/**
 *Add link to Google Map coordinates
 *
 * @param {*} parent
 * @param {*} latitude
 * @param {*} longitude
 */
function initMap(parent, latitude, longitude) {
    const map = document.createElement("a");
    const img = document.createElement("img");
    const mapOverlay = document.createElement('div');
    mapOverlay.className = "map-overlay";
    map.classList.add("map");
    map.href = `http://maps.google.com/maps?z=4&t=m&q=loc:${latitude}+${longitude}`
    map.target = `_blank`
    img.src = "https://cdn.pixabay.com/photo/2019/09/22/16/20/location-4496459_960_720.png"
    img.alt = "world map"
    mapOverlay.textContent = `Click to open map`
    
    map.append(img);
    map.appendChild(mapOverlay);
    parent.append(map);
}

/**
 *Create close button in modal
 *
 * @param {*} parent
 */
function makeBtn(parent){
    const btn = document.createElement("button");
    btn.classList.add("modal_button");
    btn.textContent = "Close";
    parent.append(btn);
    btn.addEventListener("click", ()=>{
        parent.remove();
    },{once:true})
}

/**
 *Add event listener to all cities cards. Allows to open modal on click
 *
 * @param {array} elements array of cities
 * @param {string} [container=query(".wrapper__cities")]
 */
function modal(elements, container = query(".wrapper__cities")) {
    container.addEventListener('click', (event) => {

        let selectedCard = undefined;

        if (event.target.id === undefined || event.target.id === '') {
            selectedCard = event.target.parentElement;
        } else {
            selectedCard = event.target;
        }

        let selected = selectedCard.id
        let color = selectedCard.style.backgroundColor;


        const result = elements.find(({ id }) => id === parseInt(selected));
        createModal(result, color);
    });
}

export { modal }