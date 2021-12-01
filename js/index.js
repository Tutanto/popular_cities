import { API } from "./utils.js";
import { renderProducts } from "./list.js";
import { check_button } from "./check_button.js";
import { modal } from "./modal.js";

const getCitiesList = async () => {
    const res = await fetch(API)
    const data = await res.json();
    productsList = data;
    renderProducts(productsList);
    check_button(productsList);
    modal(productsList);
};

let productsList = [];
document.addEventListener("DOMContentLoaded", getCitiesList);