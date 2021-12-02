import { query } from "./utils.js"
import { renderProducts } from "./list.js"

function show_more(products) {
    const showBtn = query("#show_button")
    const check = query(".checkbox")
    let popular = undefined;
    let index = 10;
    showBtn.addEventListener("click", ()=>{
        check.checked ? popular = false : popular = true;
        renderProducts(products, popular, index, index+10)
        index += 10;
    });

}

export { show_more }