import { API } from "./utils.js";
import { renderProducts } from "./list.js";
import { button } from "./button.js";
import { modal } from "./modal.js";

const getCitiesList = async () => {
    const res = await fetch(API)
    const data = await res.json();
    productsList = data;
    renderProducts(productsList);
    button(productsList);
    modal(productsList);
};

let productsList = [];
document.addEventListener("DOMContentLoaded", getCitiesList);