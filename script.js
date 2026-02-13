let cartCount = 0;
let totalPrice = 0;

let cartCountElement = document.getElementById("cart-count");
let buttons = document.querySelectorAll(".add-to-cart");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        cartCount++;

        let price = parseInt(button.getAttribute("data-price"));

        totalPrice += price;

        cartCountElement.textContent = cartCount;

        alert(
            "Item Added Successfully!\n\n" +
            "Total Items: " + cartCount +
            "\nTotal Price: ₹" + totalPrice
        );
    });

});
