import { query } from "./utils.js"
import { renderProducts } from "./list.js"

/**
 *Activate button to show 10 more cities in page
 *
 * @param {array} products array of cities
 */
function show_more(products, container = query(".wrapper__cities")) {
    const showBtn = query("#show_button")
    const check = query(".checkbox")
    showBtn.classList.add("active")
    let popular = undefined;
    showBtn.addEventListener("click", ()=>{
        check.checked ? popular = false : popular = true;
        let index = container.children.length
        renderProducts(products, popular, index, index+10)
    });

}

export { show_more }