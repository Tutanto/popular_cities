import { API } from "./utils.js";
import { renderProducts } from "./list.js";
import { button } from "./button.js";

const getCitiesList = async () => {
    const res = await fetch(API)
        // .then((response) => {
        //     if (response.status === 404) {
        //         console.error(
        //             "READ HERE: Could not load remote data, is the server on?"
        //         );
        //     } else {
        //         return response.json();
        //     }
        // });
    const data = await res.json();
    productsList = data;
    renderProducts(productsList);
    button(productsList)
};

let productsList = [];
document.addEventListener("DOMContentLoaded", getCitiesList);