import { query } from "./utils.js";
import { renderProducts, clearView } from "./list.js";

function button(listItems, container = query(".wrapper__cities")) {
    const checkBtn = query(".checkbox")
    checkBtn.addEventListener('click', () => {
        clearView(container);
        checkBtn.checked ? renderProducts(listItems, true) : renderProducts(listItems);
    });
}

export { button }