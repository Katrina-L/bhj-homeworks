const productQuantityControlDec = document.querySelectorAll(".product__quantity-control_dec");
const productQuantityControlInc = document.querySelectorAll(".product__quantity-control_inc");
const productAdd = document.querySelectorAll(".product__add");
const cartProducts = document.querySelector(".cart__products");

productQuantityControlInc.forEach( elem => {
    elem.addEventListener( "click", e => {
        e.preventDefault();
        elem.closest(".product__quantity-controls").querySelector(".product__quantity-value").textContent ++;
    })
} )

productQuantityControlDec.forEach( elem => {
    elem.addEventListener( "click", e => {
        e.preventDefault();
        if ( elem.closest(".product__quantity-controls").querySelector(".product__quantity-value").textContent > 1 ) {
            elem.closest(".product__quantity-controls").querySelector(".product__quantity-value").textContent --;
        // ----------------------------------------------- через переменную -------------------------------------------------
        // let elemValue = elem.closest(".product__quantity-controls").querySelector(".product__quantity-value").textContent;
        // if ( elemValue > 1 ) {
            // elemValue --;
            // elem.closest(".product__quantity-controls").querySelector(".product__quantity-value").textContent = elemValue;
        } 
    })
} )

productAdd.forEach( elem => {
    elem.addEventListener( "click", e => {
        e.preventDefault();

        if ( !document.querySelector(".cart").classList.contains("cart__active") ) {
            document.querySelector(".cart").classList.add("cart__active");
        }

        const id = elem.closest(".product").dataset.id;
        if ( !Array.from(cartProducts.querySelectorAll(".cart__product")).some( elemCard => elemCard.dataset.id === id) ) {

            cartProducts.innerHTML += `
                <div class="cart__product" data-id=${elem.closest(".product").dataset.id}>
                    <img class="cart__product-image" src=${elem.closest(".product").querySelector(".product__image").getAttribute("src")}>
                    <div class="cart__product-count">${elem.closest(".product__quantity").querySelector(".product__quantity-value").textContent}</div>
                    <a href="#" class="cart__product-remove">&times;</a>
                </div>
            `;

            cartProducts.querySelectorAll(".cart__product-remove").forEach( elem => {
                elem.addEventListener("click", e => {
                    e.preventDefault();
                    elem.closest(".cart__product").remove();
                
                    if ( cartProducts.querySelectorAll(".cart__product").length === 0 ) {
                        document.querySelector(".cart").classList.remove("cart__active");
                    }
                })
            })
        } else {                                //  увеличиваем количество
            const addedProduct = Array.from(cartProducts.querySelectorAll(".cart__product")).find( elemCard => elemCard.dataset.id === id);     //  элемент с повторно добавляемым id
            addedProduct.querySelector(".cart__product-count").textContent = Number(addedProduct.querySelector(".cart__product-count").textContent) + Number(elem.closest(".product__quantity").querySelector(".product__quantity-value").textContent);
        }
    } )
} )

// const img = elem.closest(".product").querySelector(".product__image").getAttribute("src");
// const img = elem.closest(".product").children[1].getAttribute("src");
// const quantity = elem.closest(".product__quantity").querySelector(".product__quantity-value").textContent;