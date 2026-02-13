let cartCountElement = document.getElementById("cart-count");
let addToCartButtons = document.querySelectorAll(".add-to-cart");

let cartCount = 0;
let totalPrice = 0;

addToCartButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        cartCount++;

        let price = parseInt(button.getAttribute("data-price"));
        totalPrice += price;

        cartCountElement.textContent = cartCount;

        alert(
            "Item Added!\n\nTotal Items: " + cartCount +
            "\nTotal Price: ₹" + totalPrice
        );

    });

});
