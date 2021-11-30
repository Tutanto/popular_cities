import { API } from "./utils.js";
import { renderProducts } from "./list.js";
import { button } from "./button.js";

const getCitiesList = async () => {
    const res = await fetch(API)
    const data = await res.json();
    productsList = data;
    renderProducts(productsList);
    button(productsList)
};

let productsList = [];
document.addEventListener("DOMContentLoaded", getCitiesList);