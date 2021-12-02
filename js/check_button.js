import { query } from "./utils.js";
import { clearView, renderProducts } from "./list.js";

/**
 *Add EventListener to switch button. Render only popular cities
 *
 * @param {*} listItems
 */
function check_button(listItems) {
    const checkBtn = query(".checkbox")
    checkBtn.addEventListener('click', () => {
        clearView(query(".wrapper__cities"));
        checkBtn.checked ? renderProducts(listItems, false) : renderProducts(listItems);
    });
}

export { check_button }