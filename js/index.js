import {query, API } from "./utils.js";
import {clearView, renderProducts } from "./list.js";
import { check_button } from "./check_button.js";
import { modal } from "./modal.js";
import { show_more } from "./show_more.js";

const getCitiesList = async () => {
    const res = await fetch(API)
    const productsList = await res.json();
    clearView(query(".wrapper__cities"));
    renderProducts(productsList);
    check_button(productsList);
    modal(productsList);
    show_more(productsList);
};

document.addEventListener("DOMContentLoaded", getCitiesList);