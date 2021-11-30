import { query } from "./utils.js";
import { renderProducts } from "./list.js";

function button(listItems) {
    const checkBtn = query(".checkbox")
    checkBtn.addEventListener('click', () => {
        checkBtn.checked ? renderProducts(listItems, true) : renderProducts(listItems);
    });
}

export { button }