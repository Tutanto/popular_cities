import { query } from "./utils.js";
import { renderProducts } from "./list.js";

/**
 *Add EventListener to switch button. Render only popular cities
 *
 * @param {*} listItems
 */
function check_button(listItems) {
    const checkBtn = query(".checkbox")
    checkBtn.addEventListener('click', () => {
        checkBtn.checked ? renderProducts(listItems, false) : renderProducts(listItems);
    });
}

export { check_button }