function addToCart(sectionItemName, sectionItemPrice, sectionItemBtn) {
  document
    .getElementById(sectionItemBtn)
    .addEventListener("click", function () {
      // Creating List Element //
      const li = document.createElement("li");
      li.innerText = document.getElementById(sectionItemName).innerText;

      // Calculating The Total Price
      const value = parseFloat(document.getElementById("totalPrice").innerText);
      const totalPrice =
        value + parseFloat(document.getElementById(sectionItemPrice).innerText);

      // Set The Total Price Value
      document.getElementById("totalPrice").innerText = totalPrice;

      // Get The Discount Value
      const discount = parseFloat(
        document.getElementById("discount").innerText
      );

      // Check The Total Price Is Greater Or Equal to 200 ?
      if (totalPrice >= 200) {
        document.getElementById("couponBtn").removeAttribute("disabled");
        document
          // If it's ">=" then check verify the Coupon Code
          .getElementById("couponBtn")
          .addEventListener("click", function () {
            if (
              document.getElementById("couponInput").value ==
              document.getElementById("couponCode").innerText
            ) {
              // If coupon code is verified then set the discount value
              document.getElementById("discount").innerText = (
                totalPrice * 0.2
              ).toFixed(3);
              // After the coupon is used, the coupon btn is disabled again
              document.getElementById("couponBtn").disabled = true;
            }
            // Also set the new value in Total, after discount
            document.getElementById("total").innerText = (
              totalPrice -
              totalPrice * 0.2
            ).toFixed(2);
          });
      }

      //   Normally Set The Total Value
      const total = totalPrice - discount;
      document.getElementById("total").innerText = total;

      // Add The Selected Item In Bill Section
      var lists = document.getElementById("cartSectionOl").children;
      for (var i = 0; i < lists.length; i++) {
        if (
          lists[i].innerText !=
          document.getElementById(sectionItemName).innerText
        ) {
          continue;
        } else {
          return;
        }
      }
      document.getElementById("cartSectionOl").appendChild(li);

      // Remove disabled attribute, when total price is greater then zero
      if (total > 0) {
        document.getElementById("purchaseBtn").removeAttribute("disabled");
      }

      // After A successful purchase, all things should be reset
      document.getElementById("homeBtn").addEventListener("click", function () {
        document.getElementById("couponInput").value = "";
        document.getElementById("totalPrice").innerText = "00.00";
        document.getElementById("total").innerText = "00.00";
        document.getElementById("discount").innerText = "00.00";
        document.getElementById("cartSectionOl").removeChild(li);
        document.getElementById("purchaseBtn").disabled = true;
      });
    });
}

// Kitchen Section Items
addToCart("kitchenItem1Name", "kitchenItem1Price", "kitchenItem1Btn");
addToCart("kitchenItem2Name", "kitchenItem2Price", "kitchenItem2Btn");
addToCart("kitchenItem3Name", "kitchenItem3Price", "kitchenItem3Btn");

// Sports Section Items
addToCart("sportsItem1Name", "sportsItem1Price", "sportsItem1Btn");
addToCart("sportsItem2Name", "sportsItem2Price", "sportsItem2Btn");
addToCart("sportsItem3Name", "sportsItem3Price", "sportsItem3Btn");

// Furniture Section Section
addToCart("furnitureItem1Name", "furnitureItem1Price", "furnitureItem1Btn");
addToCart("furnitureItem2Name", "furnitureItem2Price", "furnitureItem2Btn");
addToCart("furnitureItem3Name", "furnitureItem3Price", "furnitureItem3Btn");
