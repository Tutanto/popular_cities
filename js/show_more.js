import { query } from "./utils.js"
import { renderProducts } from "./list.js"

/**
 *Activate button to show 10 more cities in page
 *
 * @param {array} products array of cities
 */
function show_more(products) {
    const showBtn = query("#show_button")
    const check = query(".checkbox")
    showBtn.classList.add("active")
    let popular = undefined;
    let index = 10;
    showBtn.addEventListener("click", ()=>{
        check.checked ? popular = false : popular = true;
        renderProducts(products, popular, index, index+10)
        index += 10;
    });

}

export { show_more }